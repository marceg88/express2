import express from 'express';

import adminRoutes from './routes/admin.routes.js'
import shopRoutes from './routes/shop.routes.js'

const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000, () => console.log('Server is running in port 3000'))



