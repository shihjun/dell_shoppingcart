//radio buttton selections
var displayRadios = document.getElementsByName('displayS');
var processorRadios = document.getElementsByName('processorS');
var hddRadios = document.getElementsByName('hddS');
var ramRadios = document.getElementsByName('ramS');
var _loop_1 = function () {
    var radio = displayRadios[i];
    var defaultRadio = displayRadios[0];
    var selectedRadio = document.querySelector('#display');
    var selectedRadio1 = document.querySelector('#d1');
    selectedRadio.innerHTML = defaultRadio.value;
    var clickFunc = function () {
        if (radio.checked) {
            selectedRadio.innerHTML = radio.value;
        }
    };
    radio.addEventListener('click', clickFunc);
};
for (var i = 0, length = displayRadios.length; i < length; i++) {
    _loop_1();
}
var _loop_2 = function () {
    var radio = processorRadios[i];
    var defaultRadio = processorRadios[0];
    var selectedRadio = document.querySelector('#processor');
    selectedRadio.innerHTML = defaultRadio.value;
    var clickFunc = function () {
        if (radio.checked) {
            selectedRadio.innerHTML = radio.value;
        }
    };
    radio.addEventListener('click', clickFunc);
};
for (var i = 0, length = processorRadios.length; i < length; i++) {
    _loop_2();
}
var _loop_3 = function () {
    var radio = hddRadios[i];
    var defaultRadio = hddRadios[0];
    var selectedRadio = document.querySelector('#hdd');
    selectedRadio.innerHTML = defaultRadio.value;
    var clickFunc = function () {
        if (radio.checked) {
            selectedRadio.innerHTML = radio.value;
        }
    };
    radio.addEventListener('click', clickFunc);
};
for (var i = 0, length = hddRadios.length; i < length; i++) {
    _loop_3();
}
var _loop_4 = function () {
    var radio = ramRadios[i];
    var defaultRadio = ramRadios[0];
    var selectedRadio = document.querySelector('#ram');
    selectedRadio.innerHTML = defaultRadio.value;
    var clickFunc = function () {
        if (radio.checked) {
            selectedRadio.innerHTML = radio.value;
        }
    };
    radio.addEventListener('click', clickFunc);
};
for (var i = 0, length = ramRadios.length; i < length; i++) {
    _loop_4();
}
//toggle between first and second page
var toggle = document.querySelector('#button');
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
    }
    else {
        firstPage.style.display = "none";
        customize.style.display = "none";
        secondPage.style.display = "block";
        checkout.style.display = "block";
    }
}
toggle.addEventListener('click', toggleFunction);
// scroll to make div in .selections hide / show
//   *** NOT WORKING ***
var scrollableDiv = document.querySelector('.selections');
scrollableDiv.addEventListener("scroll", function (e) {
    // e.target represents the element being scrolled
    var container = e.target;
    // scrollTop is the amount the element has been scrolled by
    //const scrolledValue = container.scrollTop;
    var scrolledValue = 0;
    // left container max height is 500px, so we change colors at the 1/3 and 2/3 points
    var displaySelect = document.querySelector('.displaySelect');
    var processorSelect = document.querySelector('.processorSelect');
    var hddSelect = document.querySelector('.hddSelect');
    var ramSelect = document.querySelector('.ramSelect');
    var firstPoint = 10;
    var secondPoint = 500;
    if (scrolledValue > secondPoint) {
        displaySelect.style.display = "none";
        processorSelect.style.display = "none";
        hddSelect.style.display = "none";
        ramSelect.style.display = "block";
    }
    else if (scrolledValue > firstPoint) {
        displaySelect.style.display = "none";
        processorSelect.style.display = "block";
        hddSelect.style.display = "block";
        ramSelect.style.display = "none";
    }
    else {
        displaySelect.style.display = "none";
        processorSelect.style.display = "none";
        hddSelect.style.display = "none";
        ramSelect.style.display = "none";
    }
});
