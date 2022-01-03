import { Router } from "express";
import { createRequire } from "module";

// const require = createRequire(import.meta.url);
// const path = require('path');

const { pathname: shopView } = new URL('../views/shop.html', import.meta.url);

const router = Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(shopView);
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

export default router;