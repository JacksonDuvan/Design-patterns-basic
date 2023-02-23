// async - await

const ajax = () => new Promise((resolve, reject) => resolve)

const fn = () => {

  // callback hell
  ajax(() => {
    ajax(() => {
      ajax(() => {})
    })
  })
}

const fn1 = () => {
  ajax()
    .then(() => ajax())
    .then(() => ajax())
    .then(() => ajax())
}

const fn3 = async () => {
  const result = await ajax()
  const result2 = await ajax()
  const result3 = await ajax()
}