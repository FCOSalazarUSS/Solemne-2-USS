# Solemne-2-USS
Entrega Taller solemne 2

#Ejecuccion
#Backend
uvicorn main:app --reload

#Frontend
npm install
ng serve

#Docker
docker build -t infratech .
docker run -p 8000:8000 infratech
