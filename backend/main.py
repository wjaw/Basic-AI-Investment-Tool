from fastapi import FastAPI
from models.portfolio import Portfolio
from database import Base, engine
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