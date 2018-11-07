const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let destination = document.getElementById("d1");
let textContent = "";
var linebreak = document.createElement("br")
// destination.appendChild(linebreak); <- Use this for line breaks further into the document
 

function createNewElement(content){
    // Create a div, with class "bar", and set the width to 100px.
    var newElement = document.createElement('div');
    newElement.className="indent";
    // Place a text label inside the new div.
    var newText = document.createTextNode(content);
    newElement.appendChild(newText);
    destination.appendChild(newElement);

}

function createNewBlueHeadElement(content){
  // Create a div, with class "bar", and set the width to 100px.
  var newElement = document.createElement('div');
  newElement.className="bluebar";
  // Place a text label inside the new div.
  var newText = document.createTextNode(content);
  newElement.appendChild(newText);
  destination.appendChild(newElement);
}

function createNewGreenHeadElement(content){
  // Create a div, with class "bar", and set the width to 100px.
  var newElement = document.createElement('div');
  newElement.className="greenbar";
  // Place a text label inside the new div.
  var newText = document.createTextNode(content);
  newElement.appendChild(newText);
  destination.appendChild(newElement);
}

// Kata - 1 Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)
createNewBlueHeadElement("Kata - 1 Display the numbers from 1 to 20. (1, 2, 3, …,19, 20)");
textContent = "";

for(let i=1; i<=20; i++){
  textContent = textContent + i + " ";
}
createNewElement(textContent);;

// Kata - 2 Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)
// destination.appendChild(linebreak);

createNewGreenHeadElement("Kata - 2 Display the even numbers from 1 to 20. (2, 4, 6, …, 18, 20)");
textContent = "";

for(let i=1; i<=20; i++){
  if ((i % 2) == 0) textContent = textContent + i + " ";
}
createNewElement(textContent);

//Kata - 3 Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)
createNewBlueHeadElement("Kata - 3 Display the odd numbers from 1 to 20. (1, 3, 5, …, 17, 19)");
textContent = "";

//Kata - 4 Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)
createNewGreenHeadElement("Kata - 4 Display the multiples of 5 up to 100. (5, 10, 15, …, 95, 100)");
textContent = "";

//Kata - 5 Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)
createNewBlueHeadElement("Kata - 5 Display the square numbers from 1 up to 100. (1, 4, 9, …, 81, 100)");
textContent = "";

//Kata - 6 the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)
createNewGreenHeadElement("Kata - 6 the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1)");
textContent = "";

//Kata - 7 the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)
createNewBlueHeadElement("Kata - 7 the even numbers counting backwards from 20 to 1. (20, 18, 16, …, 4, 2)");
textContent = "";

//Kata - 8 the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
createNewGreenHeadElement("Kata - 8 the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)");
textContent = "";

//Kata - 9 the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)
createNewBlueHeadElement("Kata - 9 the multiples of 5, counting down from 100 to 1. (100, 95, 90, …, 10, 5)");
textContent = "";

//Kata - 10 the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)
createNewGreenHeadElement("Kata - 10 the square numbers, counting down from 100. (100, 81, 64, …, 4, 1)");
textContent = "";

//Kata - 11 Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
createNewBlueHeadElement("Kata - 11 Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)");
textContent = "";

//Kata - 12 Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
createNewGreenHeadElement("Kata - 12 Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)");
textContent = "";

//Kata - 13 Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
createNewBlueHeadElement("Kata - 13 Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)");
textContent = "";

//Kata - 14 Display the square of each element in sampleArray. (219961, 570025, …, 222784)
createNewGreenHeadElement("Kata - 114 Display the square of each element in sampleArray. (219961, 570025, …, 222784)");

textContent = "";

for (var i=0; i< sampleArray.length; i++){
  textContent = textContent + sampleArray[i]*sampleArray[i] + " ";
}
createNewElement(textContent);

//Kata - 15 Display the sum of all the numbers from 1 to 20.
createNewBlueHeadElement("Kata - 15 Display the sum of all the numbers from 1 to 20.");
textContent = ""
let total = 0
let numberArray = [];

for(var i = 1; i <= 20; i++){
numberArray.push(i);
}
//createNewElement(numberArray);
  // console.log(numberArray);

for (var i = 0; i < numberArray.length; i++){
  total += numberArray[i]
  // textContent += numberArray[i]
}
textContent = total
createNewElement(textContent);
  // createNewElement(total);
    
//Kata - 16 Display the sum of all the elements in sampleArray.
createNewGreenHeadElement("Kata - 16 Display the sum of all the elements in sampleArray.");

textContent = "";
total=0
// let total = 0; THIS CAUSES AN ERROR WHY??

for (let i = 0; i < sampleArray.length;i++){
  total += sampleArray[i]
  textContent = total;
}
createNewElement(textContent); // can also do createNewElement(total)

//Kata - 17 Display the smallest element in sampleArray.
createNewBlueHeadElement("Kata - 17 Display the smallest element in sampleArray.");

Array.min = function( sampleArray ){
  return Math.min.apply( Math, sampleArray );
};

let minimum = Array.min(sampleArray);
createNewElement(minimum);

//Kata - 18 Display the largest element in sampleArray.
createNewGreenHeadElement("Kata - 18 Display the largest element in sampleArray.");

Array.max = function( sampleArray ){
  return Math.max.apply( Math, sampleArray );
}
let maximum = Array.max(sampleArray);
createNewElement(maximum);  

//Kata - 19 Display 20 solid gray rectangles, each 20px high and 100px wide.
createNewBlueHeadElement("Kata - 19 Display 20 solid gray rectangles, each 20px high and 100px wide.");

function createNewBarElement(width){
  // Create a div, with class "bar", and set the width to 100px.
  var newElement = document.createElement('div');
  newElement.className="graybar";
  // Place a text label inside the new div.
  var newText = document.createTextNode(width);
  newElement.appendChild(newText);
  destination.appendChild(newElement);
  
  newElement.style.width = "100px";
  newElement.style.height = "20px";
}
for(let i=0; i<=20; i++){
  createNewBarElement("");
}

//Kata - 20 Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
createNewGreenHeadElement("Kata - 20 Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).");

function createNew5Element(width){
  // Create a div, with class "bar", and set the width to 100px.
  let newElement = document.createElement('div');
  newElement.className="graybar";
  // Place a text label inside the new div.
  destination.appendChild(newElement);
  
  newElement.style.height = "20px";
  newElement.style.width = width + "px";
}
let width = 100

for(let i=0; i<20; i++){
  width+=5
  createNew5Element(width)
}

//Kata - 21 Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
createNewBlueHeadElement("Kata - 21 Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.");

function createNewDynamicElement(width){
  // Create a div, with class "bar", and set the width to 100px.
  let newElement = document.createElement('div');
  newElement.className="graybar";
  // Place a text label inside the new div.
  destination.appendChild(newElement);
  
  newElement.style.height = "20px";
  newElement.style.width = width + "px";
  }

width = 100

for (let i=0; i < sampleArray.length; i++){
  width=(sampleArray[i])
  createNewDynamicElement(width)
}

//Kata - 22 As in #21, but alternate colors so that every other rectangle is red.
createNewGreenHeadElement("Kata - 22 As in #21, but alternate colors so that every other rectangle is red.");

function createNewDynamicGrayElement(width){
  // Create a div, with class "bar", and set the width to 100px.
  let newElement = document.createElement('div');
  newElement.className="graybar";
  // Place a text label inside the new div.
  destination.appendChild(newElement);
  
  newElement.style.height = "20px";
  newElement.style.width = width + "px";
  }

  function createNewDynamicRedElement(width){
    // Create a div, with class "bar", and set the width to 100px.
    let newElement = document.createElement('div');
    newElement.className="redbar";
    // Place a text label inside the new div.
    destination.appendChild(newElement);
    
    newElement.style.height = "20px";
    newElement.style.width = width + "px";
    }

width = 100

for (let i=0; i < sampleArray.length; i++){
  if (i % 2 == 0){
    width=(sampleArray[i])
    createNewDynamicGrayElement(width);
  }
  else{
    width=(sampleArray[i])
    createNewDynamicRedElement(width);
  }
}
//Kata - 23 As in #21, but color the rectangles with even widths red.
createNewBlueHeadElement("Kata - 23 As in #21, but color the rectangles with even widths red.");

for (let i=0; i < sampleArray.length; i++){
  width=(sampleArray[i]);
  if (sampleArray[i] % 2 == 0){
    createNewDynamicRedElement(width);
  }
  else{
    createNewDynamicGrayElement(width);
  }
}