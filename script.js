// script.js

function checkPumpingLemma() {
   const s = document.getElementById("inputString").value;
   const p = parseInt(document.getElementById("pumpingLength").value);
 
   // Validate input length
   if (!s || isNaN(p) || p < 1) {
     alert("Please provide valid inputs.");
     return;
   }
   if (s.length < p) {
     alert("The string length must be greater than or equal to pumping length.");
     return;
   }
 
   // Split string according to Pumping Lemma rules
   let x = s.substring(0, p - 1);
   let y = s.substring(p - 1, p);
   let z = s.substring(p);
 
   // Display the split result
   visualizePumpingLemma(x, y, z);
 }
 
 function visualizePumpingLemma(x, y, z) {
   document.getElementById("result").innerHTML = `
     <p>String split as: <strong>x</strong> = ${x}, <strong>y</strong> = ${y}, <strong>z</strong> = ${z}</p>
     <p>Pumping Lemma: Generate pumped strings using <strong>y</strong> repeats.</p>
     <button onclick="pumpString('${x}', '${y}', '${z}', 2)">Pump y (i=2)</button>
     <button onclick="pumpString('${x}', '${y}', '${z}', 3)">Pump y (i=3)</button>
     <button onclick="pumpString('${x}', '${y}', '${z}', 4)">Pump y (i=4)</button>
   `;
 }
 
 function pumpString(x, y, z, i) {
   // Generate pumped string
   const pumped = x + y.repeat(i) + z;
   
   // Display pumped string result
   document.getElementById("pumpedString").innerHTML = `
     <p>Pumped string with <strong>i=${i}</strong>: <span class="highlight">${pumped}</span></p>
   `;
 }
 