const User = require("../models/user");
const jwt = require("jsonwebtoken");
const secret = "JhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4i";
class Login {
  async logar(request, response) {
    const username = request.body;
    const testar = await User.findOne(username);
    if (!testar) {
      response.status(400).json({ message: "Usuário não encontrado" });
    }
    const token = jwt.sign({ _id: testar.id }, secret);
    response.status(200).json({ message: "Usuário logado com sucesso", token });
  }
}

module.exports = new Login();
