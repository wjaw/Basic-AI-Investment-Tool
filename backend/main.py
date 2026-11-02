from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from models.portfolio import Portfolio, PortfolioResponse
from database import Base, engine, get_db
from models import db_models

app = FastAPI()

# Creates database tables if they do not already exist
Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "Portfolio Analyzer API is running"}

@app.post("/portfolio")
def create_portfolio(portfolio: Portfolio):
    return portfolio

@app.get("/portfolios", response_model=list[PortfolioResponse])
def get_portfolios(db: Session = Depends(get_db)):
    '''
    Retrive all portfolios stored in the databse

    Returns:
        A list of portfolios, including their IDs, names, and holdings
    '''
    # Queries database for all saved portfolios
    portfolios = db.query(db_models.PortfolioDB).all()

    # Converts SQLAlchemy database objects into dictionaries
    return [
        {
            "id": portfolio.id,
            "name": portfolio.name,
            "holdings": [
                {"ticker": holding.ticker, "shares": holding.shares}
                for holding in portfolio.holdings
            ]
        }
        for portfolio in portfolios
    ]