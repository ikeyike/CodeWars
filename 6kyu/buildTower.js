// DESCRIPTION:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
    const tower = []
    let star = "*"
    let spaces = " ".repeat(nFloors - 1)
    
    for(i = 1; i <= nFloors; i++){
      const floor = spaces + star + spaces
      tower.push(floor)
      
      star += '**'
      spaces = spaces.slice(1)
    }
    return tower
}