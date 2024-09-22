let count = 0;

document.getElementById("decreaseButton").onclick = function() {
    count-=1;
    document.getElementById("counterLabel").innerHTML = count;
}

document.getElementById("addButton").onclick = function() {
    count+=1;
    document.getElementById("counterLabel").innerHTML = count;
}

document.getElementById("resetButton").onclick = function() {
    count=0;
    document.getElementById("counterLabel").innerHTML = count;
}