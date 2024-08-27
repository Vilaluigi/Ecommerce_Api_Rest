const Product = require("../models/product");

class ProductController {
  async CreatePro(request, response) {
    const {
      productName,
      productDescrption,
      productPrice,
      productQuant,
      productImage,
    } = request.body;
    const { user_id } = request.params;
    const NovoProdu = await Product.create({
      username: user_id,
      productName,
      productDescrption,
      productPrice,
      productQuant,
      productImage,
    });
    if (!NovoProdu) {
      response
        .status(400)
        .json({ message: "erro na criação de um novo produto" });
    }
    response
      .status(200)
      .json({ message: "Produto criado com sucesso", NovoProdu });
  }
  async ListarProduto(request, response) {
    const { user_id } = request.params;
    const listar = await Product.find({ username: user_id });
    if (!listar) {
      response.status(400).json({ message: "Produto não encontrado" });
    }
    response.status(200).json({ message: "Lista dos produtos abaixo", listar });
  }
  async Atualizar(request, response) {
    const {
      productName,
      productDescrption,
      productPrice,
      productQuant,
      productImage,
    } = request.body;
    const { user_id, product_id } = request.params;
    const updat = await Product.findByIdAndUpdate(
      product_id,
      {
        $set: {
          productName,
          productDescrption,
          productPrice,
          productQuant,
          productImage,
        },
      },
      {
        new: true,
      }
    );
    if (!updat) {
      response
        .status(400)
        .json({ message: "erro na criação de um novo produto" });
    }
    response.status(200).json({ message: "Produto atualizado", updat });
  }
  async Deletar(request, response) {
    const { product_id } = request.params;
    const DeletarProdu = await Product.findByIdAndDelete(product_id);
    if (!DeletarProdu) {
      response.status(400).json({ message: "produto não encontrado" });
    }
    response.status(200).json({ message: "Produto deletado com sucesso" });
  }
  async listarProdutos(request, response) {
    const lista = await Product.find();
    try {
      response
        .status(200)
        .json({ message: "Lista de produtos disponíveis", lista });
    } catch (error) {
      response.status(400).json({ error });
    }
  }
  async produtoUnic(request, response) {
    const { product_id } = request.params;
    const Unico = await Product.find({ _id: product_id });
    try {
      response
        .status(200)
        .json({ message: "Lista de produtos disponíveis", Unico });
    } catch (error) {
      response.status(400).json({ error });
    }
  }
}

module.exports = new ProductController();
