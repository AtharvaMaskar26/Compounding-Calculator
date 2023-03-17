const submitButton = document.getElementById('submit-button');
const tableSection = document.getElementById('table-section');



const getPrinciple = () => {
    const principle = document.getElementById('trading-amount').value;
    return principle;
}

const getTradesPerDay = () => {
    const tradesPerDay = document.getElementById('trades-per-day').value;
    return tradesPerDay;
}

const compounding = (principle, noOfDays, tradesPerDay) => {
    const amount = principle * (1.1 ** (noOfDays * tradesPerDay));
    console.log(1000 * (1.1 ** (3 * 3)));

    return Math.round(amount);
}

submitButton.addEventListener('click', () => {
    const principle = getPrinciple();
    const tradesPerDay = getTradesPerDay();
    const compoundingCycle = compounding(principle, 25, tradesPerDay);
    console.log(compoundingCycle)
    
const tableContent = `
<table class="table">
    <thead>
        <tr>
            <th scope="col">Time Frame</th>
            <th scope="col">Total Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1 Day</th>
            <td>${compounding(principle, 1, tradesPerDay)}</td>
        </tr>
        <tr>
            <th scope="row">1 Month</th>
            <td>${compoundingCycle}</td>
        </tr>
        <tr>
            <th scope="row">1 Year</th>
            <td>${compoundingCycle * 12}</td>
        </tr>
    </tbody>
</table>
`;

    tableSection.innerHTML = tableContent;
});


/* 
<table class="table">
                <thead>
                    <tr>
                        <th scope="col">Time Frame</th>
                        <th scope="col">Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1 Day</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1 Month</th>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">1 Year</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
*/