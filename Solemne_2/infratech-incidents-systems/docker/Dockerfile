# Frontend
FROM node:18 AS build
WORKDIR /app
COPY frontend/ .
RUN npm install && npm run build

# Backend
FROM python:3.11-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install -r requirements.txt
COPY backend/ .

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
