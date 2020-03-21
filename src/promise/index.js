const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if(true){
      resolve('Hey!')
    } else {
      reject('Wooops!')
    }
  })
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err))

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(()=>{
        resolve('True')
      },2000)
    } else {
      const error = new Error('Wooops!')
      reject(error)
    }
  })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .then(()=>{console.log('Hello')})
  .catch(error => console.error(error))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => console.log('Array of results', response))
  .catch(error => console.log(error))
