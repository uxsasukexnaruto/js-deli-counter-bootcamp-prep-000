let count = 0;
const takeANumber = (currentInLine) => {
  
  //[1,2,3,4]
  count = count + 1;
  currentInLine.push(count);
  //check last element of array 
  
  
  return `Welcome. You are number ${currentInLine[currentInLine.length-1]} in line.`
}


const nowServing = currentInLine => {
  if(currentInLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${currentInLine.shift()}.`;
}


const currentLine = currentInLine => {
  if(currentInLine.length === 0) {
    return "The line is currently empty."
  }
  let message = "";
  for(let i = 0; i < currentInLine.length - 1; i++) {
    message += i+1 + ". "+ currentInLine[i] + ", "
  }
  return `The line is currently: ${message}${currentInLine.length}. ${currentInLine[currentInLine.length-1]}`
}