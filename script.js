// Campos de letras y números
const letter = document.getElementById("letters");
const number = document.getElementById("numbers");

// Botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const f6 = document.getElementById("f6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const j0 = document.getElementById("j0");
const cn = document.getElementById("cn");
const cl = document.getElementById("cl");

// Funciones
const fnA1 = () => {
    if (letter.innerHTML == "ABCDEFGHIJ") {
        number.innerHTML = "1";
    } else {
        letter.innerHTML = "A";
    }
};

const fnB2 = () => {
    if (letter.innerHTML == "A") {
        letter.innerHTML += "B";
    } else if (letter.innerHTML == "ABCDEFGHIJ") {
        if (number.innerHTML == "1") {
            number.innerHTML += "2";
        } else {
            alert("Faltan numeros");
        }
    } else {
        alert("Faltan letras");
    }
};

const fnC3 = () => {
    if (letter.innerHTML == "AB") {
        letter.innerHTML += "C";
    } else if (letter.innerHTML == "ABCDEFGHIJ") {
        if (number.innerHTML == "12") {
            number.innerHTML += "3";
        } else {
            alert("Faltan numeros");
        }
    } else {
        alert("Faltan letras");
    }
};

const fnD4 = () => {
    if (letter.innerHTML == "ABC") {
        letter.innerHTML += "D";
    } else if (letter.innerHTML == "ABCDEFGHIJ") {
        if (number.innerHTML == "123") {
            number.innerHTML += "4";
        } else {
            alert("Faltan numeros");
        }
    } else {
        alert("Faltan letras");
    }
};

const fnE5 = () => {
    if (letter.innerHTML == "ABCD") {
        letter.innerHTML += "E";
    } else if (letter.innerHTML == "ABCDEFGHIJ") {
        if (number.innerHTML == "1234") {
            number.innerHTML += "5";
        } else {
            alert("Faltan numeros");
        }
    } else {
        alert("Faltan letras");
    }
};
const fnF6 = () => {
    if (letter.innerHTML == "ABCDE") {
        letter.innerHTML += "F";
    } else if (letter.innerHTML == "ABCDEFGHIJ") {
        if (number.innerHTML == "12345") {
            number.innerHTML += "6";
        } else {
            alert("Faltan numeros");
            return;
        }
    } else {
        alert("Faltan letras");
    }
};

const fnG7 = () => {
    if (letter.innerHTML == "ABCDEF") {
        letter.innerHTML += "G";
    } else if (letter.innerHTML == "ABCDEFGHIJ") {
        if (number.innerHTML == "123456") {
            number.innerHTML += "7";
        } else {
            alert("Faltan numeros");
        }
    } else {
        alert("Faltan letras");
    }
};

const fnH8 = () => {
    if (letter.innerHTML == "ABCDEFG") {
        letter.innerHTML += "H";
    } else if (letter.innerHTML == "ABCDEFGHIJ") {
        if (number.innerHTML == "1234567") {
            number.innerHTML += "8";
        } else {
            alert("Faltan numeros");
        }
    } else {
        alert("Faltan letras");
    }
};

const fnI9 = () => {
    if (letter.innerHTML == "ABCDEFGH") {
        letter.innerHTML += "I";
    } else if (letter.innerHTML == "ABCDEFGHIJ") {
        if (number.innerHTML == "12345678") {
            number.innerHTML += "9";
        } else {
            alert("Faltan numeros");
        }
    } else {
        alert("Faltan letras");
    }
};

const fnJ0 = () => {
    if (letter.innerHTML == "ABCDEFGHI") {
        letter.innerHTML += "J";
    } else if (letter.innerHTML == "ABCDEFGHIJ") {
        if (number.innerHTML == "123456789") {
            number.innerHTML += "0";
        } else {
            alert("Faltan numeros");
        }
    } else {
        alert("Faltan letras");
    }
};

const fnCn = () => {
    number.innerHTML = "";
};
const fnCl = () => {
    letter.innerHTML = "";
};

// Eventos
a1.onclick = () => {
    fnA1();
};

b2.onclick = () => {
    fnB2();
};

c3.onclick = () => {
    fnC3();
};

d4.onclick = () => {
    fnD4();
};

e5.onclick = () => {
    fnE5();
};

f6.onclick = () => {
    fnF6();
};

g7.onclick = () => {
    fnG7();
};

h8.onclick = () => {
    fnH8();
};

i9.onclick = () => {
    fnI9();
};

j0.onclick = () => {
    fnJ0();
};

cn.onclick = () => {
    fnCn();
};

cl.onclick = () => {
    fnCl();
};