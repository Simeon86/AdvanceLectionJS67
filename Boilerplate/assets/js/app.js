const form = document.querySelector('#currencyConverter');
const bgnInput = form.querySelector('input[name="BGN"]');
const eurInput = form.querySelector('input[name="EUR"]');
const usdInput = form.querySelector('input[name="USD"]');
const gbpInput = form.querySelector('input[name="GBP"]');
const jpyInput = form.querySelector('input[name="JPY"]');
const idrInput = form.querySelector('input[name="IDR"]');

const rates = {
    bgn: {
        EUR: 0.51129,
        USD: 0.56200,
        GBP: 0.42863,
        JPY: 65.262,
        BGN: 1,
        IDR: 8021.5,
    },
    eur: {
        USD: 1.0991,
        GBP: 0.83848,
        JPY: 127.63,
        BGN: 1.9558,
        EUR: 1,
        IDR: 15688,
    },
    usd: {
        EUR: 0.90983,
        GBP: 0.76275,
        JPY: 116.11,
        BGN: 1.7793,
        USD: 1,
        IDR: 14275,
    },
    gbp: {
        EUR: 1.1927,
        USD: 1.3108,
        JPY: 152.20,
        BGN: 2.3327,
        GBP: 1,
        IDR: 18718,
    },
    jpy: {
        EUR: 0.0078365,
        GBP: 0.0065704,
        USD: 0.0086127,
        BGN: 0.015327,
        JPY: 1,
        IDR: 122.96,
    },
    idr: {
        IDR: 1,
        EUR: 0.000063740,
        GBP: 0.000053427,
        USD: 0.000070056,
        BGN: 0.00012466,
        JPY: 0.0081330,
    }
}

for(let i = 0; i < form.length; i++){
    form[i].addEventListener('input', converter)
}

function converter(event) {
    const currency = event.target.name.toLowerCase();
    const sum = Number(event.target.value);

    eurInput.value = sum * rates[currency].EUR;
    gbpInput.value = sum * rates[currency].GBP;
    usdInput.value = sum * rates[currency].USD;
    bgnInput.value = sum * rates[currency].BGN;
    jpyInput.value = sum * rates[currency].JPY;
    idrInput.value = sum * rates[currency].IDR;
}

let str = '10, 12312, 12312, 42, 2414';
let arr = str.split(',').map(elem => Number(elem));
console.log(arr);
let a = 'someData\r\nOtherData';
let arrayFromA = a.split('\n').map(elem => elem.trim());
console.log(a);
console.log(arrayFromA);
