from fastapi import FastAPI
from models.portfolio import Portfolio

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Portfolio Analyzer API is running"}

@app.post("/portfolio")
def create_portfolio(portfolio: Portfolio):
    return portfolio