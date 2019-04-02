var radios = document.getElementsByName('displayS');
if (radios.checked) {
    var radio = document.querySelector('#display');
    radio.innerHTML = radios.value;
}
