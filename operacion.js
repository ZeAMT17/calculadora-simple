let input = document.querySelector("input");
let enter = document.getElementById("enter");
let div = document.querySelector("div");
enter.addEventListener("click", operacion);

input.addEventListener("keypress", (e) => {
  const alfabeto = /[a-z]/i;
  if (alfabeto.test(e.key)) {
    e.preventDefault();
  }
});

function operacion() {
  let elementos = input.value.split(/(\d+)([*\+\-/])(\d+)/).filter(Boolean);
  if (elementos[1] == "+") {
    input.value = `${Number(elementos[0]) + Number(elementos[2])}`;
  } else if (elementos[1] == "-") {
    input.value = `${Number(elementos[0]) - Number(elementos[2])}`;
  } else if (elementos[1] == "*") {
    input.value = `${Number(elementos[0]) * Number(elementos[2])}`;
  } else if (elementos[1] == "/") {
    input.value = `${Number(elementos[0]) / Number(elementos[2])}`;
  }
}

div.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "1":
      input.value += "1";
      break;

    case "2":
      input.value += "2";
      break;

    case "3":
      input.value += "3";
      break;

    case "4":
      input.value += "4";
      break;

    case "5":
      input.value += "5";
      break;

    case "6":
      input.value += "6";
      break;

    case "7":
      input.value += "7";
      break;

    case "8":
      input.value += "8";
      break;

    case "9":
      input.value += "9";
      break;

    case "0":
      input.value += "0";
      break;

    case "+":
      input.value += "+";
      break;

    case "-":
      input.value += "-";
      break;

    case "x":
      input.value += "*";
      break;

    case "÷":
      input.value += "/";
      break;

    case "AC":
      input.value = "";
      break;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.target != input) {
    switch (e.key) {
      case "1":
        input.value += "1";
        break;

      case "2":
        input.value += "2";
        break;

      case "3":
        input.value += "3";
        break;

      case "4":
        input.value += "4";
        break;

      case "5":
        input.value += "5";
        break;

      case "6":
        input.value += "6";
        break;

      case "7":
        input.value += "7";
        break;

      case "8":
        input.value += "8";
        break;

      case "9":
        input.value += "9";
        break;

      case "0":
        input.value += "0";
        break;

      case "+":
        input.value += "+";
        break;

      case "-":
        input.value += "-";
        break;

      case "x":
        input.value += "*";
        break;

      case "/":
        input.value += "/";
        break;

      case "Backspace":
        input.value = "";
        break;

      case "Enter":
        operacion();
        break;
    }
  }
});
