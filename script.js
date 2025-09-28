const text = document.getElementById("text");
const list = document.getElementById("list");
const amount = document.getElementById("amount");
function addTransaction(){
    if (text.value === "" ){
        alert("Please enter a transaction");
        return;
    }
    if (amount.value === ""){
        alert("Please enter an amount");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = text.value + "   " +amount.value;


    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // delete button
    li.appendChild(span);

    list.appendChild(li);

    text.value = "";
    amount.value = "";


    


}