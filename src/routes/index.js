const {Router} = require('express');

const UserController = require('../controller/UserController');
const SessionsController = require('../controller/LoginController');
const ProductController = require('../controller/ProductController');
const CartController = require('../controller/CartController');
const {authenticate}= require('../middlewares')

const routes = Router();

routes.get('/',(req, res)=>{
    res.send("Olá mundo ! :)")

});
routes.post('/users', UserController.createUser);
routes.get('/users',UserController.getUsers);
routes.get('/users/:user_id',UserController.getUserById);

routes.post('/sessions',SessionsController.createSession);

routes.post('/products/:user_id',authenticate,ProductController.createProduct);
routes.get('/:user_id/products',ProductController.getUserProducts);
routes.patch('/products/:user_id/:product_id',authenticate,ProductController.updateProduct);
routes.delete('/products/:user_id/:product_id',authenticate,ProductController.deleteProduct);

routes.get('/products',ProductController.getProduct);
routes.get('/products/:product_id',ProductController.getProductById);

routes.post('/cart/:user_id',authenticate,CartController.createCart);
routes.get('/cart/:user_id',authenticate,CartController.getUserCarts);
routes.get('/:user_id/cart/:cart_id',authenticate,CartController.getCarts);


module.exports = routes;