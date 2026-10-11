from sqlalchemy import ForeignKey, String, Float
from sqlalchemy.orm import Mapped, mapped_column, relationship
from database import Base

class PortfolioDB(Base):
    __tablename__ = "portfolios"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)

    holding: Mapped[list["HoldingsDB"]] = relationship(
        back_populates="portfolio",
        cascade=("all", "delete-orphan")
    )

class HoldingsDB(Base):
    __tablename__ = "holdings"

    id: Mapped[int] = mapped_column(primary_key=True)
    portfolio_id: Mapped[int] = mapped_column(
        ForeignKey("portfolios.id"),
        nullable=False
    )
    ticker: Mapped[str] = mapped_column(String(100), nullable=False)
    shares: Mapped[float] = mapped_column(Float, nullable=False)

    portfolio: Mapped[list["PortfolioDB"]] = relationship(
        back_populates="holdings"
    )