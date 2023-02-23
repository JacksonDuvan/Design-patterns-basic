// Closures

const y = 'lele'
const f = () => {
  const x = 'lala'
  return () => {
    const z = 'lolo'
    console.log('x, y, z >>',x, y, z);
  }
}

f()

const fn = (x) => {
  return () => console.log(`Rayos ${x}`)
}

fn('Jackson')()

// practice - closures

const auditProps = {
  createdAt: { default: new Date },
  updatedAt: { default: new Date },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  updatedBY: { type: Schema.Types.ObjectId, ref: 'User' }
}

const Model = defaultProps => {
  return (name, props) => {
    const schema = moongose.schema({
      ...defaultProps,
      ...props
    })

    return moongose.model(name, schema)
  }
}

export const withAudit = Model(auditProps)

// ... en otro archivo ...

withAudit('Product', {
  name: String,
  description: String
})


// Programación tácita o point free

const fnPointFree = (rute, cb) => {
  // Many lines of code after
  const result = heavyComputing()
  cb(result)
}

const handlesResult = (result) => {
  console.log('result >>',result);
}

fnPointFree('/users', handlesResult)

// Currying

const suma = a => b => a + b

const suma1 = suma(1)

suma1(5)


const users = [
  { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
  { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
  { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
  { edad: 1, nombre: 'Sofia', apellido: 'Zapata' }
]

// de abajo hacia arriba
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

// de arriba hacia abajo
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x)

const trace = x => y => console.log(x, y)

const filter = f => xs => xs.filter(f)

const head = xs => xs[0]

const formateo = x => ({
  nombreCompleto: `${x.nombre} ${x.apellido}`,
  edad: x.edad
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`

const traePrimerInfante = compose(
  formato,
  formateo,
  head,
  filter(x => x.edad < 2)
)


const result = traePrimerInfante(users)

console.log('result >>',result);
