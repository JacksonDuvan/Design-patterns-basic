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