    document.getElementById("btnabrir").addEventListener("click",function(){
    document.getElementsByClassName("fondo-transparente")[0].style.display="block"
    return false
})
    document.getElementsByClassName("modal-cerrar")[0].addEventListener("click",function(){
    document.getElementsByClassName("fondo-transparente")[0].style.display="none"
})

    document.getElementById("btnabrir2").addEventListener("click",function(){
    document.getElementsByClassName("fondo-transparente-2")[0].style.display="block"
    return false
})
    document.getElementsByClassName("modal-cerrar-2")[0].addEventListener("click",function(){
   document.getElementsByClassName("fondo-transparente-2")[0].style.display="none"
})

document.getElementById("btnabrir3").addEventListener("click",function(){
    document.getElementsByClassName("fondo-transparente-3")[0].style.display="block"
    return false
})
    document.getElementsByClassName("modal-cerrar-3")[0].addEventListener("click",function(){
    document.getElementsByClassName("fondo-transparente-3")[0].style.display="none"
})

document.getElementById("btnabrir4").addEventListener("click",function(){
    document.getElementsByClassName("fondo-transparente-4")[0].style.display="block"
    return false
})
    document.getElementsByClassName("modal-cerrar-4")[0].addEventListener("click",function(){
    document.getElementsByClassName("fondo-transparente-4")[0].style.display="none"
})

document.getElementById("btnabrir5").addEventListener("click",function(){
    document.getElementsByClassName("fondo-transparente-5")[0].style.display="block"
    return false
})
    document.getElementsByClassName("modal-cerrar-5")[0].addEventListener("click",function(){
    document.getElementsByClassName("fondo-transparente-5")[0].style.display="none"
})

function operacionCuadrado(lado) {
    let area = lado * lado;
    let perimetro = 4 * lado;
    let text = `El área del cuadrado es ${area} y su perimetro es ${perimetro}`;
    return text;
}

let button = document.getElementById("calcular-1");

button.addEventListener("click", function (e) {
    let ladoCuadrado = document.getElementById("lado-cuadrado").value;
    let text = operacionCuadrado(ladoCuadrado);
    let resultadoCuadrado = document.getElementById("resultado-cuadrado");
    resultadoCuadrado.innerHTML = text;
});

function operacionParalelogramo(base,altura) {
    let area = base * altura;
    let perimetro = base * 2 + altura * 2;
    let text = `El área del paralelogramo es ${area} y su perimetro es ${perimetro}`;
    return text;
} 
let button2 = document.getElementById("calcular-2");

button2.addEventListener("click", function (e) {
let ladoParalelogramo1 = document.getElementById("lado-1").value;
let ladoParalelogramo2 = document.getElementById("lado-2").value;
let text = operacionParalelogramo(ladoParalelogramo1,ladoParalelogramo2);
let resultadoParalelogramo = document.getElementById("resultado-paralelogramo");
resultadoParalelogramo.innerHTML = text;
});

function operacionTriangulorectangulo(lado1,lado2,hipotenusa) {
    let area = lado1 * lado2 * 1/2;
    let perimetro = lado1 * 1 + lado2 * 1 + hipotenusa * 1;
    let text = `El área del paralelogramo es ${area} y su perimetro es ${perimetro}`;
    return text;
} 
let button3 = document.getElementById("calcular-3");

button3.addEventListener("click", function (e) {
let ladoTriangulorectangulo1 = document.getElementById("lado-3").value;
let ladoTriangulorectangulo2 = document.getElementById("lado-4").value;
let ladoTriangulorectangulo3= document.getElementById("lado-5").value;
let text = operacionTriangulorectangulo(ladoTriangulorectangulo1,ladoTriangulorectangulo2,ladoTriangulorectangulo3);
let resultadoParalelogramo = document.getElementById("resultado-triangulo-rectangulo");
resultadoParalelogramo.innerHTML = text;
});

function operacionPoligono(lado, nlado, apot) {
    let perimetro = lado * nlado;
    let area = (perimetro * apot) / 2;
    text = `El área del polígono de ${nlado} lados  es <strong> ${area} unds^2</strong>, y su perímetro es de <strong>${perimetro} unds</strong>`;
    return text;
}
let button4 = document.getElementById("calcular-poligono");

button4.addEventListener("click", function (e) {
    e.preventDefault();
    let resultadoPoligono = document.getElementById("resultado-poligono-regular");
    let input = e.path[1];

    if (input[0].value === "" || input[1].value === "" || input[2].value === "") {
    let resultado = "Por favor ingrese un dato numérico";
    resultadoPoligono.innerHTML = resultado;
    } else {
    let lado = parseFloat(input[0].value);
    let nlado = parseFloat(input[1].value);
    let apot = parseFloat(input[2].value);

    let resultado = operacionPoligono(lado, nlado, apot);
    resultadoPoligono.innerHTML = resultado;
    }
});

let edad = document.getElementById("edad");

edad.addEventListener("click", function (e) {
  e.preventDefault();
  let ilustracionEdad = document.getElementsByClassName("edad");
  let edad = document.getElementsByClassName("datos-edad");
});

function operacionEdad(edad) {
  if (edad >= 18) {
    text = `Puedes hacer cosas de adulto`;
  } else {
    text = `No puedes hacer cosas de adulto`;
  }
  return text;
}

let buttonEdad = document.getElementById("calcular-edad");

buttonEdad.addEventListener("click", function (e) {
  e.preventDefault();
  let resultadoEdad = document.getElementById("resultado-edad");
  let input = e.path[1];

  if (input[0].value === "") {
    let resultado = "Por favor ingrese un dato numÃ©rico";
    resultadoEdad.innerHTML = resultado;
  } else {
    let edad = parseFloat(input[0].value);

    let resultado = operacionEdad(edad);
    resultadoEdad.innerHTML = resultado;
  }
});