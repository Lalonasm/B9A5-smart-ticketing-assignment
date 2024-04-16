function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}
function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalCost);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText(id, sum);


}

function grandTotalCost() {
    console.log();
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);
    const coupon = document.getElementById('coupon-code').innerText;

    const discountName = document.getElementById('discount-name');
    const totalDiscount = document.getElementById('total-discount');

    if (coupon === 'NEW15') {


        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = 'Total Discount:';
        const li1 = document.createElement('li');
        const p2 = document.createElement('p');
        p2.innerText = convertedTotalCost * 0.15;

        li.appendChild(p1);
        li1.appendChild(p2);

        discountName.appendChild(li);
        totalDiscount.appendChild(li1);


        setInnerText('grand-total', convertedTotalCost + totalDiscount)

    }
    else if (coupon === 'Couple20' && totalCost >= 1100) {
        const discountName = document.getElementById('discount-name');
        const totalDiscount = document.getElementById('total-discount');



        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = 'Total Discount:';
        const li1 = document.createElement('li');
        const p2 = document.createElement('p');
        p2.innerText = convertedTotalCost * 0.20;

        li.appendChild(p1);
        li1.appendChild(p2);

        discountName.appendChild(li);
        totalDiscount.appendChild(li1);


        setInnerText('grand-total', convertedTotalCost + totalDiscount)


    }

    else {
        setInnerText('grand-total', convertedTotalCost)

    }

}
function hideElementById(elementId) {
    const hidden = document.getElementById(elementId);
    hidden.classList.add('hidden');


}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
