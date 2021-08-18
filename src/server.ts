import express from 'express';
import { product } from './routes/product';

const app = express();
app.use(express.json());
app.use(product);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
