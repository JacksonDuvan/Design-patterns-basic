// Mixin - permite añadirle características específicas a una instancia de clase

let mixin = {
  saludar(){
    console.log(`Hola ${this.nombre}`);
  },

  despedir() {
    console.log(`Chao ${this.nombre}`)
  }
}

class User{
  constructor(nombre){
    this.nombre = nombre
  }
}

// aumentamos el prototipo
Object.assign(User.prototype, mixin)

const user = new User('Jackson')

user.saludar()


// Decorator - responde a la necesidad de añadir dinámicamente funcionalidad a un Objeto.

class Macbook {
  constructor(){
    this.price = 1000
    this.screen = 11.6
  }
}

const macbook = new Macbook()

macbook.addMemory = function() {
  this.price += 100 
}

macbook.addMemory()

console.log('macbook.price >>',macbook.price);

class Macbook2 {
  price() {
    return 1000
  }
}

const memory = macbook => {
  const value = macbook.price()
  macbook.price = function () {
    return value + 200
  }
}

const macbook2 = new Macbook2() 

memory(macbook2)


// Facade - Fachada es un tipo de patrón de diseño estructural. Viene motivado 
// por la necesidad de estructurar un entorno de programación 
// y reducir su complejidad con la división en subsistemas, minimizando las comunicaciones 
// y dependencias entre estos.

const https = require('https')

const get = url => new Promise((resolve, reject) => {
  const comp = url.split('/')
  const host = comp.shift()

  const options = {
    hostname: host,
    path: `/${comp.join('/')}`,
    method: 'GET'
  }

  const req = https.request(options, res => {
    res.setEncoding('utf-8')
    let body = ''
    res.on('data', d => {
      body += d
    })

    res.on('end', d => {
      const parsed = JSON.parse(body)
      resolve(parsed)
    })
  })

  req.on('error', e => {
    reject(e)
  })

  req.end()
})

get('jsonplaceholder.typicode.com/users').then(result => {
  console.log('result >>',result);
})


// Adapter - El patrón adaptador se utiliza para transformar una interfaz 
// en otra, de tal modo que una clase que no pueda utilizar la primera 
// haga uso de ella a través de la segunda.

class Api {
  constructor(){
    this.operations = function(url, opts, verb){
      switch(verb){
        case 'get':
          return // fetch
        case 'post':
          return // fetch
        default: 
          return
      }
    }
  }
}


class Api2 {
  constructor(){
    this.get = function(url, opts){

    }
    this.post = function(url, opts){

    }
  }
}

class ApiAdapter {
  constructor(){
    const api2 = new Api2()

    this.operations = function(url, opts, verb){
      switch(verb){
        case 'get':
          return api2.get(url, opts)
        case 'post':
          return api2.post(url, opts)
        default: 
          return
      }
    }
  }
}

const api = new Api()
api.operations('wwww.google.cl', { q: 1 }, 'get')

const api2 = new Api2()
api.get('wwww.google.cl', { q: 1 })

const adapter = new ApiAdapter()
adapter.operations('wwww.google.cl', { q: 1 }, 'get')

