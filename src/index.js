import "./styles.css";

const votantiUrban = 31234,
  votantiRural = 24987;

let width1 = (votantiUrban / (votantiUrban + votantiRural)) * 100; //  procente
let width2 = (votantiRural / (votantiUrban + votantiRural)) * 100; //  procente

const div1 = `<div style="width: ${width1}%; height: 30px; line-height: 30px; 
                 text-align: center; display: inline-block; float: left; 
                 color: white; background-color: #0288D1">Urban</div>`;
const div2 = `<div style="width: ${width2}%; height: 30px; line-height: 30px; 
                 text-align: center; display: inline-block; float: left; 
                 color: white; background-color: #BF360C">Rural</div>`;

document.getElementById(
  "app"
).innerHTML = `<div style="width: 1000px; margin: 0 auto;">${div1}${div2}</div>`;

// const luni = ["februarie", 28, "martie", 31, "iunie", 30];
let luni = ["februarie", 28, "martie", 31, "iunie", 30];
console.log(`Sirul are ${luni.length} elemente.`);
console.log(`Luna #2 este ${luni[2]} si are ${luni[3]} zile.`);

luni = [...luni, "iulie", 31];
console.log(`Lunile sunt acum: [${luni}].`);

luni = ["ianuarie", 31, ...luni];
console.log(`Iar acum: [${luni}].`);

const paul = {
  nume: "Avram",
  prenume: "Paul",
  datan: "12.10.1984",
  telefon: "0744234547",
  email: "paul.avram@infoap.ro"
};
console.log(`Nume: ${paul.nume} ${paul.prenume}, e-mail: ${paul.email}`);

// sir de obiecte, cu set de date de test:
let lista = [
  {
    activitate: "Cumpar flori",
    realizata: false
  },
  {
    activitate: "Spal masina",
    realizata: true
  },
  {
    activitate: "Cumpar bilete la film",
    realizata: false
  },
  {
    activitate: "Telefonez la service",
    realizata: false
  }
];
console.log(lista);

let lista1 = [
  {
    cursant: "Ionescu Laura",
    taxa: 480
  },
  {
    cursant: "Adamescu Mircea",
    taxa: 240
  },
  {
    cursant: "Istvan Mezei",
    taxa: 480
  },
  {
    cursant: "Paula Trandafir",
    taxa: 480
  }
];
// let taxe = [];
// lista1.forEach(function (element) {
// element.taxa *= 1.15;
// taxe = [...taxe, element.taxa];
// });
// console.log(`Lista taxelor = ${taxe}.`);

// let taxe = lista1.map(function (item) {
// return item.taxa * 1.15;
// });
let taxe = lista1.map((item) => item.taxa * 1.15);
console.log(`Lista taxelor = ${taxe}.`);

const cursanti = [
  {
    nume: "Ionescu Laura",
    examene: 9
  },
  {
    nume: "Adamescu Mircea",
    examene: 11
  },
  {
    nume: "Istvan Mezei",
    examene: 8
  },
  {
    nume: "Paula Trandafir",
    examene: 11
  }
];

// let listaIntegralisti = cursanti.filter(function(cursant) {
// return cursant.examene >= 11;
// });

let listaIntegralisti = cursanti.filter((cursant) => cursant.examene >= 11);

console.log(`Lista integralistilor = ${JSON.stringify(listaIntegralisti)}.`);
// stringify transformă argumentul primit în șir de obiecte în notație JSON

class Lista {
  constructor(elemente, tip) {
    this.elemente = elemente;
    this.tip = tip;
  }

  elLi(inf) {
    let text = inf.charAt(0).toUpperCase() + inf.slice(1);
    return `<li>${text}</li>`;
  }

  lista3() {
    let el = this.elemente.map((element) => this.elLi(element));
    let rez = `<${this.tip}>` + el.join(" ") + `</${this.tip}>`;
    return rez;
  }
}

const e = ["mere", "pere", "mure"];
const oLista = new Lista(e, "ul");
document.getElementById("app").innerHTML = oLista.lista3();