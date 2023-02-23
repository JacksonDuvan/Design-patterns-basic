// Composición sore la herencia

class Persona {
  constructor(){
    this.nombre = 'Lala'
  }

  saludar() {
    console.log(`Hola! soy ${this.name}`);
  }
}

class Dog extends Persona {

}

const saludar = name => console.log(`Hola! soy ${name}`)

const persona = {
  nombre: 'lala',
  saludar: function() { saludar(this.nombre) }
}

class _Persona {
  constructor(){
    this.nombre = 'Lala'
  }

  saludar(){
    saludar(this.nombre)
  }
}
