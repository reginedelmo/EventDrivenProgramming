function minusFunc(){
    var value = document.getElementById("number").innerHTML;

    --value;

    if(value < 0 && value > -10){
        var sign = String(value).charAt(0);
        var num = String(value).charAt(1);
        value = sign + "0" + num;
    }
    if (value >= 0 && value < 10){
        value = "0" + value;
    }
    document.getElementById("number").innerHTML = value;
}

function addFunc(){
    var value = document.getElementById("number").innerHTML;

    ++value;

    if(value < 0 && value > -10){
        var sign = String(value).charAt(0);
        var num = String(value).charAt(1);
        value = sign + "0" + num;
    }
    if (value >= 0 && value < 10){
        value = "0" + value;
    }
    document.getElementById("number").innerHTML = value;
}

function copyFunc(){
    document.getElementById("itext").value = document.getElementById("number").innerHTML;
}