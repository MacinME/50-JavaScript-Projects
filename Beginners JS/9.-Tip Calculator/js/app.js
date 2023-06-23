const increaseTip = document.querySelector('.i-tip');
const decreaseTip = document.querySelector('.d-tip');
const increaseBill = document.querySelector('.i-bill');
const decreaseBill = document.querySelector('.d-bill');
const tipElement = document.querySelector('#tip');
const billElement = document.querySelector('#bill');
const billAmount = document.querySelector('#billAmount');
const calculate = document.querySelector('#calculate');
const clear = document.querySelector('#clear');
const results = document.querySelector('#results');

let tip = 0;
let bill = 0;

const onIncrease = (reference, value) => {
    if(value !== 'tip' ) {
        bill++ 
        reference.value = bill;
    } else { 
        tip++;
        reference.value = tip
    }
}

const onDecrease = (reference, value) => {
    if(value !== 'tip' ) {
        bill--;
        reference.value = bill;
    } else { 
        tip--;
        reference.value = tip
    }
}

increaseTip.addEventListener('click', () => {
    onIncrease( tipElement, 'tip');    
});

decreaseTip.addEventListener('click', () => {
    onDecrease( tipElement, 'tip');    
});

tipElement.addEventListener('input', (e) => {
    tip = e.target.value;
})

increaseBill.addEventListener('click', () => {
    onIncrease( billElement, 'bill' );    
});

decreaseBill.addEventListener('click', () => {
    onDecrease( billElement, 'bill');
});

billElement.addEventListener('input', (e) => {
    bill = e.target.value;
})

const onDisplayHTML = ({ totalTip, totalBill, tipEachPerson, totalEachPerson}) => {
    results.classList.add('display');

    while(results.firstChild){
        results.removeChild(results.firstChild)
    }
    
    const tipSplit = document.createElement('p');
    const billSplit = document.createElement('p');
    const tip = document.createElement('p');
    const bill = document.createElement('p');

    tipEachPerson && (tipSplit.textContent = `Tip Each Person: $${ tipEachPerson }`);
    totalEachPerson && (billSplit.textContent = `Total Each Person: $${ totalEachPerson }`);
    tip.textContent = `Tip total: $${ totalTip }`;
    bill.textContent = `Total (Bill + Tip): $${ totalBill }`;

    results.appendChild(tipSplit);
    results.appendChild(billSplit);
    results.appendChild(tip);
    results.appendChild(bill);

}

const calculating = ({ billAmount, tip, bill }) => {

    // Formula Tipping
    // decimal = percentage / 100
    // tip = decimal * billAmount

    // Formula Total
    // result = ((tip / 100 )+ 1) * billAmount

    const totalTip = ((tip / 100) * billAmount).toFixed(2);
    const totalBill = (((tip / 100) + 1) * billAmount).toFixed(2);
    const tipEachPerson = bill > 1 && ( totalTip / bill).toFixed(2);  
    const totalEachPerson = bill > 1 && (totalBill / bill).toFixed(2);

    onDisplayHTML({ totalTip, totalBill, tipEachPerson, totalEachPerson});
}

calculate.addEventListener('click', (e) => {
    e.preventDefault();

    if(billAmount.value.trim().length < 1 || isNaN(billAmount.value)) return;

    const data = {
        billAmount: Number(billAmount.value),
        tip: Number(tip),
        bill: Number(bill)
    };

    calculating(data);
    
});

clear.addEventListener('click', () => {
    billAmount.value = 0;
    tipElement.value = 0;
    billElement.value = 0;
    results.classList.remove('display');
});