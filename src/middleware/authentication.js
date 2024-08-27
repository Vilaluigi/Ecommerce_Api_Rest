const jwt = require("jsonwebtoken");
const secret = "JhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4i";
const Verificacao = (request, response, next) => {
  const token = request.headers["authorization"];
  if (!token) {
    return response.status(401).json({ message: "Token não fornecido" });
  }
  const teste = token.split(" ")[1];
  const verificar = jwt.verify(teste, secret);

  if (!verificar) {
    response.status(400).json({ message: "Acesso negado" });
  }
  next();
};

module.exports = Verificacao;
