
function TriangleCalculation(){

    const input1 = document.getElementById("tri-input1");
    const input2 = document.getElementById("tri-input2");
    let p1 = document.getElementById("p1");
    let result = (input1.value * input2.value)/2;

     p1.innerText = result.toFixed(1);

     input1.value = "";
     input2.value = "";

};

function RectangleCalculation(){

    const input1 = document.getElementById("rec-input1");
    const input2 = document.getElementById("rec-input2");
    let p1 = document.getElementById("p1");
    let result = (input1.value * input2.value);

     p1.innerText = result.toFixed(1);

     input1.value = "";
     input2.value = "";

};

function ParallelogramCalculation(){
   
    const input1 = document.getElementById("pal-input1");
    const input2 = document.getElementById("pal-input2");
    let p1 = document.getElementById("p1");
    let result = (input1.value * input2.value);

     p1.innerText = result.toFixed(1);

     input1.value = "";
     input2.value = "";
 
};

function RhombusCalculation(){
    const input1 = document.getElementById("rho-input1");
    const input2 = document.getElementById("rho-input2");
    let p1 = document.getElementById("p1");
    let result = (input1.value * input2.value)/2;

     p1.innerText = result.toFixed(1);

     input1.value = "";
     input2.value = ""; 
};

function PentagonCalculator(){
    const input1 = document.getElementById("pen-input1");
    let p1 = document.getElementById("p1");
    let result = (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(input1.value, 2);

     p1.innerText = result.toFixed(1);

     input1.value = "";
};

function EllipseCalculator(){
    const input1 = document.getElementById("ell-input1");
    const input2 = document.getElementById("ell-input2");
    let p1 = document.getElementById("p1");
    let result = Math.PI * input1.value * input2.value;

     p1.innerText = result.toFixed(1);

     input1.value = "";
     input2.value = ""; 
};