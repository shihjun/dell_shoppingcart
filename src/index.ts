const radios = document.getElementsByName('displayS');

if (radios.checked) {
  const radio = document.querySelector('#display')
  radio.innerHTML = radios.value
}




