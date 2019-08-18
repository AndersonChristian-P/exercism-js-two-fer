/* export const twoFer = (name) => {
  if (name === undefined) {
    return `One for you, one for me.`
  } else {
    return `One for ${name}, one for me.`
  }
}

this doesn't follow the DRY principle because you have 2 return statements

*/

/* export const twoFer = (name) => {
  return (name ? `One for ${name}, one for me` : 'One for you, one for me.')
}

this can be simplified to the following 

export const twoFer = (name) => {
  return (`One for ${name || "you"}, one for me.`)
}*/


export const twoFer = (name = 'you') => {
  return `One for ${name}, one for me.`
}