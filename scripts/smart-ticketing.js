
const allSeats = document.getElementsByClassName('screen');
let count = 40;
for (const seat of allSeats) {
    seat.addEventListener('click', function (event) {
        count = count - 1;

        const seatNumber = event.target.innerText;
        console.log(seatNumber);
        const selectedClass = document.getElementById('selected-class');
        const selectedcSeat = document.getElementById('selected-seat');
        const selectedPrice = document.getElementById('selected-price');

        const li = document.createElement('li');
        const p1 = document.createElement('p');
        p1.innerText = seatNumber;
        const li1 = document.createElement('li');
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const li2 = document.createElement('li');
        const p3 = document.createElement('p');
        p3.innerText= 550;

        event.target.style.backgroundColor = '[#1DD100]';

        li.appendChild(p1);
        li1.appendChild(p2);
        li2.appendChild(p3);
        selectedcSeat.appendChild(li);
        selectedClass.appendChild(li1);
        selectedPrice.appendChild(li2);


        const budget = document.getElementById('total-cost').innerText;
        const convertedBudget = parseInt(budget);
        if (convertedBudget >2199) {
            alert('Limit Cross ! Please buy another time.');
            return;
        }
        const phoneNumber = document.getElementById('phone-number').innerText;
        if(seatNumber !== true && phoneNumber !== 0){
            const toast = document.getElementById('toast');
            showElementById(toast);
        }
        
        totalCost('total-cost', parseInt(550));
        grandTotalCost('grand-total', parseInt(550))
        
        setInnerText('seat-count', count)
    })





}