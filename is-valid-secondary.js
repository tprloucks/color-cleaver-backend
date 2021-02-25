/******************
 * YOUR CODE HERE *
 ******************/


function isValidSecondary(str){
  return str === 'green' || str === 'purple' || str === 'orange'
}

// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
