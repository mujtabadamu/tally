
// declaring the variables for counter and the element
let count = 0;
let element = document.getElementById('count');


// Add fun to increament the value by one
function add(){
    count++;
    element.innerHTML = count;
}


// Subtract fun to decreament the value by one
function sub(){
    count--;
    if(count < 0){
        count = 0;
    }
    element.innerHTML = count;
}

// Reset fun to zero

function reset(){
    count = 0;
    element.innerHTML = 0;
}