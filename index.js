function theBeatlesPlay(musicians, instruments) {
  var role = []
  for (let i = 0; i < musicians.length; i++) {
  role.push(`${musicians[i]} plays ${instruments[i]}`)
}
  return role
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(number){
  var array = []
  var iLoveTheBeatles = "I love the Beatles!"
  do { 
    array.push(iLoveTheBeatles)
    number++
  } 
  while (number < 15)
  return array
}


