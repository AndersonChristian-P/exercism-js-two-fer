
1) First attempt 

  export const twoFer = (name) => {
    if (name === undefined) {
      return `One for you, one for me.`
    } else {
      return `One for ${name}, one for me.`
    }
  }

  This doesn't follow the DRY principle because you have 2 return statements

2) Exploration - based on mentor notes

  export const twoFer = (name) => {
    return (name ? `One for ${name}, one for me` : 'One for you, one for me.')
  }

  This can be simplified to the following 

  export const twoFer = (name) => {
    return (`One for ${name || "you"}, one for me.`)
  }

3) Solution

  Since wrote an arrow I was able to simplify the code by using an implicit return