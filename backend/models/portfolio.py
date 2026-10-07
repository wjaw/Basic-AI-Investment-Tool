from pydantic import BaseModel, Field, field_validator

class Holding(BaseModel):
    ticker: str
    shares: float

    @field_validator("ticker")
    @classmethod
    def normalizeTicker(cls, value: str) -> str:
        return value.strip().upper()
    
class Portfolio(BaseModel):
    name: str
    holdings: list[Holding]