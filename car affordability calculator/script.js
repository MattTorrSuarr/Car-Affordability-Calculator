function calculate() {
    var annualIncome = parseFloat(document.getElementById('annualIncome').value);
    var monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
    var loanTerm = parseInt(document.getElementById('loanTerm').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);

    var monthlyIncome = annualIncome / 12;
    var totalMonthlyExpenses = monthlyExpenses;
    var monthlyLoanPayment = calculateMonthlyLoanPayment(annualIncome, loanTerm, interestRate);

    var remainingMonthlyIncome = monthlyIncome - totalMonthlyExpenses;
    
    var canAfford = remainingMonthlyIncome >= monthlyLoanPayment;

    var resultElement = document.getElementById('result');
    if (canAfford) {
        resultElement.textContent = 'You can afford the car!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'You cannot afford the car!';
        resultElement.style.color = 'red';
    }
}

function calculateMonthlyLoanPayment(annualIncome, loanTerm, interestRate) {
    var monthlyInterestRate = interestRate / 100 / 12;
    var totalMonths = loanTerm * 12;
    var loanAmount = annualIncome * 0.5; // Assume 50% of annual income as loan amount
    var monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -totalMonths));
    return monthlyPayment;
}
