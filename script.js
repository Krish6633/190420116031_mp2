var val = 0;
var set = document.getElementById("show");

function increment() {
    val++;
    set.innerHTML = val;
    color();
}

function decrement() {
    val--;
    set.innerHTML = val;
    color();
}

function color() {
    if (val == 0)
        set.style.color = "white"
    else if (val < 0)
        set.style.color = "rgba(252, 92, 101,1.0)"
    else
        set.style.color = "rgba(38, 222, 129,1.0)"
}