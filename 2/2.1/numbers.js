
function validate(arg) {
  if (arg == '') {
    alert('Please, type the number!');
    return false
  }

  if (isNaN(arg)) {

   alert('This is not a number, please type the number!');
   return false
  }
  return true
}
while (true) {
  var a = prompt('Tell me any number!');
  var isValid1 = validate (a);
  if (!isValid1) {
    continue
  }
  var b = prompt('Tell me another number!');
  var isValid2 = validate (b);
  if (!isValid2) {
    continue
  }
    if (a > b) {
        alert ('The first number is bigger than the second one!');
      }
    if (a < b) {
        alert('The second number is bigger than the first one!');
      }
    if (a == b) {
        alert('The numbers are equal!');
      }
    break

  }
