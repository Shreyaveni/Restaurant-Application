import express from 'express';
import app from "./app.js";
import reservationRoutes from './routes/reservationRoute.js';

app.use(express.json()); 

app.use('/reservation', reservationRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
    console.log(`Server Running On Port ${process.env.PORT}`);
});

