const text = document.getElementById("text");
const list = document.getElementById("list");
const amount = document.getElementById("amount");
let balance = document.getElementById("balance");
let money_plus = document.getElementById("money-plus");
let money_minus = document.getElementById("money-minus");
function addTransaction(){
    if (text.value === "" ){
        alert("Please enter a transaction");
        return;
    }
    if (amount.value === ""){
        alert("Please enter an amount");
        return;
    }
    const amt = Number(amount.value);

    let li = document.createElement("li");
    li.innerHTML = text.value + "   " + amt;

    // store the amount in a custom attribute
    li.setAttribute("data-amount", amt);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // delete button
    li.appendChild(span);

    list.appendChild(li);

    updateValues(amt);

    text.value = "";
    amount.value = "";
}

function removeTransaction(e){
    if(e.target.tagName === "SPAN"){
        const li = e.target.parentElement;
        const amt = Number(li.getAttribute("data-amount")); // read stored amount

        // reverse the effect
        updateValues(-amt);

        li.remove();
    }
}

function updateValues(amt){
    let currentBalance = Number(balance.innerText) || 0;
    let currentIncome = Number(money_plus.innerText) || 0;
    let currentExpense = Number(money_minus.innerText) || 0;

    if (amt > 0) {
        currentIncome += amt;
        currentBalance += amt;
    } else {
        currentExpense += Math.abs(amt);
        currentBalance += amt; // subtracts since amt is negative
    }

    money_plus.innerText = currentIncome;
    money_minus.innerText = currentExpense;
    balance.innerText = currentBalance;
}
list.addEventListener("click", removeTransaction);
updateValues();