
 console.log(process.argv)
 const cohort1 = process.argv[2]
 const user = process.env.USER

if(cohort1 === 'web-49'){
  console.log(`${cohort1}  is the best forevert!`)
}else{
  console.log(`boooh ${cohort1}`)
}

console.log(`the user is ${user}`)