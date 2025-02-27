from fastapi import FastAPI
import pandas as pd

app = FastAPI()

# 讀取 CSV
df = pd.read_csv("weather_clothing_recommendation.csv")

@app.get("/recommend")
def recommend_clothing(location: str):
    # 查找地區
    result = df[df["city"] == location]

    if result.empty:
        return {"error": "找不到該地區的推薦服裝"}
    
    # 回傳推薦服裝
    clothing = result.iloc[0]["image_name"]
    temperature = result.iloc[0]["temperature_range"]

    return {
        "location": location,
        "temperature": temperature,
        "recommendation": clothing
    }
