//radio buttton selections
const displayRadios = document.getElementsByName('displayS');
const processorRadios = document.getElementsByName('processorS');
const hddRadios = document.getElementsByName('hddS');
const ramRadios = document.getElementsByName('ramS');


for (var i = 0, length = displayRadios.length; i < length; i++) {
  const radio = displayRadios[i]
  const defaultRadio = displayRadios[0]
  const selectedRadio = document.querySelector('#display')
  const selectedRadio1 = document.querySelector('#d1')
  selectedRadio.innerHTML = defaultRadio.value

  const clickFunc = () => {
    if (radio.checked) {
      selectedRadio.innerHTML = radio.value
    }
  }
  radio.addEventListener('click', clickFunc)


  // const hoverFunc = () => {
  //   if (radio.checked) {
  //     radio.style.backgroundColor = 'green'
  //   } else {
  //     radio.style.backgroundColor = 'red'
  //   }
  // }
  // radio.addEventListener('mouseover', hoverFunc)


  // const leaveFunc = () => {
  //   selectedRadio1.style.backgroundColor = '#007db8'
  // }
  // radio.addEventListener('mouseout', leaveFunc)
}

for (var i = 0, length = processorRadios.length; i < length; i++) {
  const radio = processorRadios[i]
  const defaultRadio = processorRadios[0]
  const selectedRadio = document.querySelector('#processor')
  selectedRadio.innerHTML = defaultRadio.value
  const clickFunc = () => {
    if (radio.checked) {
      selectedRadio.innerHTML = radio.value
    }
  }
  radio.addEventListener('click', clickFunc)
}

for (var i = 0, length = hddRadios.length; i < length; i++) {
  const radio = hddRadios[i]
  const defaultRadio = hddRadios[0]
  const selectedRadio = document.querySelector('#hdd')
  selectedRadio.innerHTML = defaultRadio.value
  const clickFunc = () => {
    if (radio.checked) {
      selectedRadio.innerHTML = radio.value
    }
  }
  radio.addEventListener('click', clickFunc)
}

for (var i = 0, length = ramRadios.length; i < length; i++) {
  const radio = ramRadios[i]
  const defaultRadio = ramRadios[0]
  const selectedRadio = document.querySelector('#ram')
  selectedRadio.innerHTML = defaultRadio.value
  const clickFunc = () => {
    if (radio.checked) {
      selectedRadio.innerHTML = radio.value
    }
  }
  radio.addEventListener('click', clickFunc)
}



//toggle between first and second page
const toggle = document.querySelector('#button');


function toggleFunction() {
  var firstPage = document.querySelector('.firstPage');
  var secondPage = document.querySelector('.secondPage');
  var customize = document.querySelector('#customize');
  var checkout = document.querySelector('#checkout');
  if (firstPage.style.display === "none") {
    firstPage.style.display = "block";
    customize.style.display = "block";
    secondPage.style.display = "none";
    checkout.style.display = "none";
  } else {
    firstPage.style.display = "none";
    customize.style.display = "none";
    secondPage.style.display = "block";
    checkout.style.display = "block";
  }
}
toggle.addEventListener('click', toggleFunction)



// scroll to make div in .selections hide / show
//   *** NOT WORKING ***
const scrollableDiv = document.querySelector('.selections');

scrollableDiv.addEventListener("scroll", e => {
  // e.target represents the element being scrolled
  const container = e.target;

  // scrollTop is the amount the element has been scrolled by
  //const scrolledValue = container.scrollTop;
  const scrolledValue = 0;

  // left container max height is 500px, so we change colors at the 1/3 and 2/3 points

  const displaySelect: HTMLBodyElement = document.querySelector('.displaySelect');
  const processorSelect: HTMLBodyElement = document.querySelector('.processorSelect');
  const hddSelect: HTMLBodyElement = document.querySelector('.hddSelect');
  const ramSelect: HTMLBodyElement = document.querySelector('.ramSelect');

  const firstPoint = 10
  const secondPoint = 500;

  if (scrolledValue > secondPoint) {
    displaySelect.style.display = "none";
    processorSelect.style.display = "none";
    hddSelect.style.display = "none";
    ramSelect.style.display = "block";
  } else if (scrolledValue > firstPoint) {
    displaySelect.style.display = "none";
    processorSelect.style.display = "block";
    hddSelect.style.display = "block";
    ramSelect.style.display = "none";
  } else {
    displaySelect.style.display = "none";
    processorSelect.style.display = "none";
    hddSelect.style.display = "none";
    ramSelect.style.display = "none";
  }
});

