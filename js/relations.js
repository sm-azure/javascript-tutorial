function getRelationship(x, y) {
  if (isNaN(x) && isNaN(y)) {
    return "Can't compare relationships because " + x + " and "+
      y +" are not numbers.";
  }else if(isNaN(x)){
    return("Can't compare relationships because " + x + " is not a number.");
  }else if(isNaN(y)){
    return ("Can't compare relationships because " + y + " is not a number.");
  }

  //Both are numbers
  if(x == y){
    return "=";
  }else if (x > y){
    return ">";
  }else{
    return "<";
  }
}

console.log('Starting js');

console.log(getRelationship('a', 'b'));
console.log(getRelationship('a', 5));
console.log(getRelationship(5, 'b'));
console.log(getRelationship(5));
console.log(getRelationship("this", 2));
console.log(getRelationship("that"));
console.log(getRelationship(5, 2));
console.log(getRelationship(2, 5));
console.log(getRelationship(5, 5));
