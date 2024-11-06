function visualizePumping() {
   const inputString = document.getElementById("inputString").value;
   const pumpingLength = document.getElementById("pumpingLength").value;
   
   // Clear previous results
   document.getElementById("result").innerHTML = "";
   document.getElementById("pumpedString").innerHTML = "";

   if (!inputString || !pumpingLength) {
       document.getElementById("result").innerHTML = "Please provide both string and pumping length.";
       return;
   }
   
   const n = inputString.length;

   // Check if string length is less than pumping length
   if (n < pumpingLength) {
       document.getElementById("result").innerHTML = "String length is smaller than the pumping length. Cannot apply Pumping Lemma.";
       return;
   }

   // Split the string into three parts: x, y, z
   let x = inputString.substring(0, pumpingLength);
   let y = inputString.substring(pumpingLength, pumpingLength + 1); // y is just a single character
   let z = inputString.substring(pumpingLength + 1);

   // Display original string and split parts
   document.getElementById("result").innerHTML = `<p>Original String: <span class="highlight">${inputString}</span></p>`;
   document.getElementById("result").innerHTML += `<p>Split into: x = <span class="highlight">${x}</span>, y = <span class="highlight">${y}</span>, z = <span class="highlight">${z}</span></p>`;
   
   // Apply the pumping process and show results
   let pumpedString = x + y.repeat(2) + z; // Example: pump 'y' twice

   document.getElementById("pumpedString").innerHTML = `<p>Pumped String: <span class="highlight">${pumpedString}</span></p>`;
}
