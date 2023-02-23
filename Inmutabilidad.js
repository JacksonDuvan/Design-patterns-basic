// Inmutabilidad

const obj = {
  a: 1
}

obj.b = 2

const obj2 = {
  ...obj,
  c: 3
}

console.log('obj, obj2 >>',obj, obj2);