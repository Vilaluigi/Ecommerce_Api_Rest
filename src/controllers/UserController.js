const User = require("../models/user");

class Usuario {
  async Create(request, response) {
    const user = request.body;
    if (!user) {
      response.status(400).json("Erro na criação de usuário");
    }
    const novoUsu = await User.create(user);
    response
      .status(200)
      .json({ message: "usuário criado com sucesso", novoUsu });
  }
  async listar(request, response) {
    const lista = await User.find();
    if (!lista) {
      response.status(400).json({ message: "Nenhum usuário encontrado" });
    }
    response.status(200).json({ lista });
  }
  async Unico(request, response) {
    const { user_id } = request.params;
    const usu = await User.findById(user_id);
    if (!usu) {
      response.status(500).json("Usuário não encontrado");
    }
    response.status(200).json({ usu });
  }
}

module.exports = new Usuario();
