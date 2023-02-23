// Observer - publish/subscribe - Observador es un patrón de diseño de 
// software que define una dependencia del tipo uno a muchos entre objetos, 
// de manera que cuando uno de los objetos cambia su estado, 
// notifica este cambio a todos los dependientes

const user = new User()

const init = () => {
  user.on('login', userLoggerdIn)
  user.on('login', retrieveInitData)
}

const userLoggerdIn = () => {
  // usuario inició sesión
}

const retrieveInitData = () => {

}

app.init()

// en algun luhar de nuestra app
const login = () => {
  // logic of login

  //after
  user.trigger('login')
}

login()

// Patron mediador - El patrón mediador define un objeto que encapsula cómo un 
// conjunto de objetos interactúan. Este patrón de diseño está considerado como un 
// patrón de comportamiento debido al hecho de que puede alterar el comportamiento 
// del programa en ejecución.

const Emitter = (() => {
  const topics = {}
  const HOP = topics.hasOwnProperty

  return {
    on: (topic, listener) => {
      if(!HOP.call(topics, topic)) topics[topic] = []
      topics[topic].push(listener)
    },
    emit: (topic, info) => {
      if(!HOP.call(topics, topic)) return 
      topics[topic].forEach(item => 
        item(info != undefined ? info : {}))
    }
  }
})()

Emitter.on('lala', x => console.log(x))

Emitter.emit('lala', { lala: 'lolo' })


// Commander

const Commander = (() => {
  const o = {
    comprar: x => {
      console.log(`Comprando ${x}`);
    },
    vender: x => {
      console.log(`Vendiendo ${x}`);
    }
  }

  return {
    run: (comando, argumentos) => {
      if(!o[comando]){
        console.log('comando no existe');
        return 
      }
      o[comando](argumentos)
    }
  }
})()

Commander.run('comprar', 'Mazda')
Commander.run('comprarr', 'Mazda')

// Cadena de responsabilidad

class Suma {
  constructor(v = 0){
    this.val = v
  }

  suma(v){
    this.val += v
    return this
  }
}

const valor = new Suma(1)
valor
  .suma(1)
  .suma(2)
  .suma(3)
console.log('valor.v >>',valor.val);

// Iterador

function* iterador(col){ // funcione generadora
  let nextIndex = 0

  while(nextIndex < col.length){
    yield col[nextIndex++]
  }
}

const x = [1, 2, 3, 4, 5, 6, 7]
const gen = iterador(x)
console.log('gen.next() >>',gen.next());
console.log('gen.next() >>',gen.next());
