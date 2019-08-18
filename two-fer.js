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


export const twoFer = (name = 'you') => `One for ${name}, one for me.`
// In the case that your arrow function has a single expression as the function body, that expression will be executed, and the resulting value will be implicitly returned when the function is called.