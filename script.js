function subtotalFunc(val){
    document.getElementById("subtotal").innerHTML = val;

    let value = val;
    if(value < 100 || value > 10000){
        console.log("Input invalid. Value = " + value);
    }
    else {
        const tax = 0.12;
        let valueTax = val*tax;
        let total = (valueTax + parseInt(val));

        document.getElementById("tax").value = valueTax.toFixed(2);
        document.getElementById("total").value = total.toFixed(2);
        document.getElementById("payment").value = total.toFixed(2);
        document.getElementById("payment").disabled = false;

        const amount = document.getElementById('payment').value;
        payment.addEventListener('change', (e) => { 
            let newAmount = (e.target.value);
            let amountChange = (newAmount - total);

            document.getElementById("change").value = amountChange.toFixed(2);

            if(amountChange < 0){
                document.getElementById("btnpay").style.background='#631111';
                document.getElementById("btnpay").onclick = false;
            }
            else{
                document.getElementById("btnpay").style.background='#0A460C';
                document.getElementById("btnpay").onclick = function() { payFunction(); }
            }
          });

        let change = (amount - total);
        
        document.getElementById("change").value = change.toFixed(2);
        document.getElementById("btnpay").style.background='#0A460C';
        document.getElementById("btnpay").onclick = function() { payFunction(); }
    }
}

function payFunction() {
    alert("Pay");
}