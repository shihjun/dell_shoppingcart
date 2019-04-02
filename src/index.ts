var radios = document.getElementsByName('displayS').value;

for (var i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
    // do whatever you want with the checked radio
    document.getElementsByName('.display').innerHTML = radios[i].value

    // only one radio can be logically checked, don't check the rest
    break;
  }
}



