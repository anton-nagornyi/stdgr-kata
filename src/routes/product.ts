import express from 'express';
import { Controllers } from '../controllers/index';

export const product = express.Router();

product.get('/products', Controllers.products.getProducts);
