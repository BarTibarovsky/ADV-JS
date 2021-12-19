function BankAccount(owner, balance, lineOfCredit, loans, creditScore) {
    this.owner = owner;
    this.balance = balance;
    this.lineOfCredit = lineOfCredit;
    this.loans = loans;
    this.creditScore = creditScore;
    this.depositeMoney = function (sum) {
        this.balance = balance + sum;
    };
    this.withdrawMoney = function (sum) {
        this.balance = balance - sum;
    };
    this.increaseLineOfCredit = function (sum) {
        this.lineOfCredit = lineOfCredit + sum;
    };
    this.takeLoan = function (sum) {
        this.loans = loans + sum;
    };
    this.terminateLoan = function (sum) {
        this.loans = loans - sum;
    };
    this.updateCreditScore = function (num) {
        this.creditScore = creditScore + num;
    };


}

const barBankAccount = new BankAccount("BarTibarovsky", 100000, 500000, 0, 100);
barBankAccount.depositeMoney(250000);
barBankAccount.increaseLineOfCredit(700000);
barBankAccount.takeLoan(50000);
barBankAccount.updateCreditScore(150);