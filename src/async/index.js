const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(()=>resolve('Do something Async'), 300)
      : reject(new Error('Test Error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something)
}



const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log(something);
  } catch (error) {
    console.log(error);
  }
}

console.log('Before')
doSomething()
console.log('After')
