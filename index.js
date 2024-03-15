let nome_do_Carro = "Fusca";

document.getElementById("carro").innerHTML = nome_do_Carro;

function nome() {
  let pessoa = prompt("Olá, digite o seu nome: ");
  if (pessoa != null) {
    document.getElementById("nome_user").innerHTML = "Olá " + pessoa;
  }
}

function idade() {
  let pessoa1 = prompt("Olá, digite o seu nome: ");
  let idade = prompt("Legal, agora digite a sua idade: ");

  if (pessoa1 != null) {
    document.getElementById("idade").innerHTML =
      "Olá " + pessoa1 + " a sua idade é : " + idade;
  }
}

function contas() {
  let base = parseFloat(prompt("Digite o valor da base: "));
  let lado = parseFloat(prompt("Agora digite o valor do lado"));
  let diagonalmenor = parseFloat(prompt("Digite o valor da diagonal menor"));
  let diagonalmairo = parseFloat(prompt("Digite o valor da diagonal maior"));
  let altura = parseFloat(prompt("Digite o valor da altura"));
  let raio = parseFloat(prompt("Digite o valor do Raio: "));
  let basemenor = parseFloat(prompt("Digite o valor da base menor"));
  let basemaior = parseFloat(prompt("Digite o valor da base maior"));
  let pi = 3.14;

  let retanguloresult = (base*altura);
  let quadradoresult = Math.pow(lado, 2);
  let losangoresult = (diagonalmairo * diagonalmenor) / 2;
  let trapezioresult = ((basemaior + diagonalmenor) * altura) / 2;
  let parelelogramo = (base*altura) * 2;
  let trianguloresult = (base*altura) / 2;
  let circulo = pi * (raio * raio);

  if (lado != null) {
    document.getElementById("resultado1").innerHTML =
      "Retangulo Area: " + retanguloresult;

    document.getElementById("resultado2").innerHTML =
      "Quadrado Area: " + quadradoresult;

    document.getElementById("resultado3").innerHTML =
      "Losango Area: " + losangoresult;

    document.getElementById("resultado4").innerHTML =
      "Trapezio Area: " + trapezioresult;

    document.getElementById("resultado5").innerHTML =
      "Paralelogramo: " + parelelogramo;

    document.getElementById("resultado6").innerHTML =
      "Circulo Area: " + circulo;

    document.getElementById("resultado6").innerHTML =
      "Retangulo area: " + trianguloresult;
  }
}

