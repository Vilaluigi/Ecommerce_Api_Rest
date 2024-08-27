const Router = require("express");

const router = Router();
const UserController = require("../controllers/UserController");
const LoginController = require("../controllers/LoginController");
const Verificacao = require("../middleware/authentication");
const ProductController = require("../controllers/ProductController");
const CartController = require("../controllers/CartController");

router.get("/users", UserController.listar);
router.post("/users", UserController.Create);
router.get("/users/:user_id", UserController.Unico);

router.post("/login", LoginController.logar);

router.post("/products/:user_id", Verificacao, ProductController.CreatePro);
router.get("/:user_id/products", ProductController.ListarProduto);
router.put("/products/:user_id/:product_id", ProductController.Atualizar);
router.delete("/products/:user_id/:product_id", ProductController.Deletar);

router.get("/products", ProductController.listarProdutos);
router.get("/products/:product_id", ProductController.produtoUnic);

router.post("/cart/:user_id", CartController.Criar);
router.get("/:user_id/cart", CartController.Listar);

module.exports = router;
