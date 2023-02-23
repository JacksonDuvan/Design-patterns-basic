/* PATRONES CREACIONALES: Definen cómo puede crearse un objeto. */

// ----- Patron constructor 
class MyClass {
  constructor(p1){
    this.propiedad = p1
    this. method = () => {
      // soy un metodo
    }
  }
}

const myClass = new MyClass(4)
console.log('myClass >>',myClass);

// ----- Patron constructor con prototipos
class MyClassWithPrototype {
  constructor(p1, p2){
    this.propiedad = p1
    this.propiedad2 = p2
  }

  method() {
    // soy un metodo con prototipo
  }
}

const myClassWithPrototype = new MyClassWithPrototype(4, 2)
console.log('MyClassWithPrototype >>',myClassWithPrototype);

// ejemplo
Object.prototype.log = function () {
  console.log('this >>',this);
}

const x = { a: 1 }

x.log()

if(!String.prototype.trim){
  String.prototype.trim = function () {
    try {
      return this.replace(/^\s+|\s+$/g, "")
    } catch (error) {
      return this
    }
  }
} 

const y = "   lalalalala".trim()
y.log()

// ----- Patron modulo - object literal
// api publica
const modulo = {
  prop: 'mi prop',
  config: {
    lenguaje: 'es',
    cache: true
  },
  setConfig: conf => {
    modulo.config = conf
  },
  isCacheEnabled: () => {
    console.log(modulo.config.cache ? 'sí' : 'no');
  }
} 

// ----- Patron modulo revelador - object literal
// api publica y privada
const result = (() => {
  const x = {}

  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  }
})()

result.a()
result.b('quesoo', 'cabra')
result.a()

//ejemplo
const Users = (() => {
  const resurso = 'https://jsonplaceholder.typicode.com/users'

  return {
    listar: () => {
      return fetch(resurso).then(x => x.json())
    },
    create: (data) => {
      return fetch(resurso, { type: 'POST', body: JSON.stringify(data) })
              .then(x => x.json())
    }
  }
})()

// ----- Patron prototipo
const dog = {
  race: 'Kilterrier',
  bark: function(){
    console.log(`Guau!, soy un ${this.race}`);
  }
}

const kiltro = Object.create(dog)
kiltro.bark()

kiltro.race = 'Super perro'
kiltro.bark()

console.log('kiltro.__proto__ >>',kiltro.__proto__);

function Persona(first, last, edad, genero, intereses) {

  // definiendo de propiedades y métodos
  this.first = first;
  this.last = last;
//...
}

const person1 = new Persona('Bob', 'Smith', 32, 'hombre', ['music', 'skiing']);
console.log('person1 >>',person1.valueOf());

console.log('Object.getPrototypeOf(person1) >>',Object.getPrototypeOf(person1));
console.log('person1 >>', Persona.prototype);