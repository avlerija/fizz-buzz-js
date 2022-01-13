console.log ('Lets write the script'); 

// var minVal = document.getElementById('Minimumvalue').value;
// var maxVal = document.getElementById('Maximumvalue').value;   
// var fizzVal = document.getElementById('Fizzvalue').value;
// var buzzVal = document.getElementById('Buzzvalue').value;
// var fizzClr = document.getElementById('fizzCol').value;
// var buzzClr = document.getElementById('buzzCol').value;
// var fibuClr = document.getElementById('fibuCol').value;
// var defaultClr = document.getElementById('default').value;

// minVal.value = 1;
// maxVal.value = 100;

function fizzbuzz () {
    listenIt();

    document.getElementById ("results"); 
    
    var fibuButton = document.getElementById ("btnFib");
    fibuButton.addEventListener ("click", pressColor1);

    var fizzButton = document.getElementById ("btnFizz");
    fizzButton.addEventListener ("click", pressColor2);

    var buzzButton = document.getElementById ("btnBuzz");
    buzzButton.addEventListener ("click", pressColor4);

    var clearButton = document.getElementById ("btnCl");
    clearButton.addEventListener ("click", makeIt);
    
}

function makeIt () {
    while (results.firstChild)
    results.removeChild (results.firstChild);
}

function pressGenerate () {
    makeIt();
        for (let i =1; i<101; i++) {
            const newDiv = document.createElement ('div');
            newDiv.className = "item" + i;
            results.appendChild(newDiv); 
                
                if (i% 5 === 0 && i % 3 !== 0) {
                    newDiv.setAttribute ("id", "item" + i);
                    newDiv.setAttribute ("class", "Buzz"); 
                    newDiv.innerText = "Buzz"; 
                }
                else if (i % 3 === 0 && i % 5 !==0) {
                    newDiv.setAttribute ("id", "item" + i);
                    newDiv.setAttribute ("class", "Fizz"); 
                    newDiv.innerText = "Fizz";
                }
                else if (i % 3 === 0 && i % 5 === 0) {
                    newDiv.setAttribute ("id", "item" + i);
                    newDiv.setAttribute("class", "FizzBuzz");
                    newDiv.innerText = "FizzBuzz";
                }
                else if (i % 3 !== 0 && i % 5 !==0) {
                    newDiv.setAttribute ("id", "element" + i);
                    newDiv.setAttribute ("class", "None"); 
                    newDiv.innerText = i;
                }
        }
}

function pressColor1 () {
    makeIt();
    let minVal = document.getElementById('Minimumvalue').value;
    let maxVal = document.getElementById('Maximumvalue').value;
    let fizzVal = document.getElementById('Fizzvalue').value;
    let buzzVal = document.getElementById('Buzzvalue').value; 
    let fibuClr = document.getElementById('fibuCol').value;

    for (minVal; minVal<=maxVal; minVal++) {
    const newEl = document.createElement ('div');
    newEl.id= "item" + minVal;
    results.appendChild(newEl);

        if (minVal % fizzVal === 0 && minVal % buzzVal === 0) {
        newEl.setAttribute ("id", "item" + minVal);
        newEl.setAttribute ("class", "FizzBuzz");
        newEl.innerText = "FizzBuzz";
        newEl.style.background = fibuClr;
        }
    }
}

function pressColor2 () {
    makeIt();
    let minVal = document.getElementById('Minimumvalue').value;
    let maxVal = document.getElementById('Maximumvalue').value; 
    let fizzVal = document.getElementById('Fizzvalue').value;
    let buzzVal = document.getElementById('Buzzvalue').value; 
    let fizzClr = document.getElementById('fizzCol').value;

    for (minVal; minVal<=maxVal; minVal++) {
    const newEl2 = document.createElement ('div');
    newEl2.id= "item" + minVal;
    results.appendChild(newEl2); 

        if (minVal % fizzVal === 0 && minVal % buzzVal !==0) {
        newEl2.setAttribute ("id", "item" + minVal);
        newEl2.setAttribute ("class", "Fizz");
        newEl2.innerText = "Fizz";
        newEl2.style.background = fizzClr;
        }
    }
}

function pressColor3 () {
    makeIt();
    let minVal = document.getElementById('Minimumvalue').value;
    let maxVal = document.getElementById('Maximumvalue').value;
    let fizzVal = document.getElementById('Fizzvalue').value;
    let buzzVal = document.getElementById('Buzzvalue').value;  
    let defaultClr = document.getElementById('default').value;

    for (minVal; minVal<=maxVal; minVal++) {
    const newEl3 = document.createElement ('div');
    newEl3.id= "item" + minVal;
    results.appendChild(newEl3);

        if (minVal % fizzVal !==0 && minVal & buzzVal !== 0) {
        newEl3.setAttribute ("id", "item" + minVal);
        newEl3.setAttribute ("class", "None");
        newEl3.innerText = minVal; 
        newEl3.style.background = defaultClr; 
        }
    }
}

function pressColor4 () {
    makeIt();
    let minVal = document.getElementById('Minimumvalue').value;
    let maxVal = document.getElementById('Maximumvalue').value;
    let fizzVal = document.getElementById('Fizzvalue').value;
    let buzzVal = document.getElementById('Buzzvalue').value;  
    let buzzClr = document.getElementById('buzzCol').value;

    for (minVal; minVal<=maxVal; minVal++) {
    const newEl4 = document.createElement ('div');
    newEl4.id= "item" + minVal;
    results.appendChild(newEl4);

        if (minVal % buzzVal === 0 && minVal % fizzVal !==0) {
        newEl4.setAttribute ("id", "item" + minVal);
        newEl4.setAttribute ("class", "Buzz"); 
        newEl4.innerText = "Buzz";
        newEl4.style.background = buzzClr;
        }
    }
}

function listenIt () {
    const generateButton = document.getElementById("btnGen");
    generateButton.onclick = pressGenerate; 
}


fizzbuzz ();
