require('dotenv').config()
const path = require('path')

//  console.log(process.argv)
//  const cohort1 = process.argv[2]
//  const user = process.env.USER
//  const shell = process.env.SHELL

// if(cohort1 === 'web-49'){
//   console.log(`${cohort1}  is the best forevert!`)
// }else{
//   console.log(`boooh ${cohort1}`)
// }

// console.log(`the user is ${user}`)
// console.log(`the shell is ${shell}`)

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'cloent/build')))

app.get('/hello', (req, res)=>{
  res.json({message: 'hey there'})
})
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'cloent/build', 'index.html'))
})
const port = process.env.PORT || 9000
console.log(port)
app.listen(port, ()=>{
  console.log(`listening on port ${port}`)
})