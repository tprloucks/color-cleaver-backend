

function isValidPrimary (str){
  return (str === 'red' || str === 'blue' || str === 'yellow')
  

}



// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
