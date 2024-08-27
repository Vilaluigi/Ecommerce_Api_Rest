const Cart = require("../models/cart");

class CartController {
  async Criar(request, response) {
    const { Products, address, payment } = request.body;
    const { user_id } = request.params;
    const criar = await Cart.create({
      Products,
      address,
      payment,
      userName: user_id,
    });
    await criar.populate("Products");
    if (!criar) {
      response.status(400).json({ message: "erro na criação de carrinho" });
    }
    response
      .status(200)
      .json({ message: "carrinho criado com sucesso", criar });
  }
  async Listar(request, response) {
    const { user_id } = request.params;
    const lista = await Cart.find({ userName: user_id });
    if (!lista) {
      response.status(400).json({ message: "Falha ao Carregar" });
    }
    response.status(200).json({ message: "Lista", lista });
  }
}

module.exports = new CartController();
