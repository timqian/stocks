
/**
 * 结论：async 函数中 await 后面的 promise 是并行执行的，但是
 */

const pro1 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('hi from promise 1')
    resolve('1')
  }, 2000)
});


const pro2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('hi from promise 2')
    resolve('2')
  }, 1000)
});

(async () => {
  const a = await pro1
  console.log(a)
  const b = await pro2
  console.log(b)

})()

pro2.then( res => {
  console.log('from then: ', res)
})

// (async () => {
//   await new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       console.log('hi from promise 1')
//     }, 1000)
//   })
//
//   await new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       console.log('hi from promise 2')
//     }, 1000)
//   })
// })
