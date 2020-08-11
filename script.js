   window.addEventListener("load", function() {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         let mission = Math.floor(Math.random() * json.length);
         div.innerHTML = 
            `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[mission].name}</li>
                  <li>Diameter: ${json[mission].diameter}</li>
                  <li>Star: ${json[mission].star}</li>
                  <li>Distance from Earth: ${json[mission].distance}</li>
                  <li>Number of Moons: ${json[mission].moons}</li>
               </ol>
            <img src="${json[mission].image}">`;
         });
      });   
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         event.preventDefault();
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");

         //faulty items
         let faultyItemsElement = document.getElementById("faultyItems");
         faultyItemsElement.style.visibility = "hidden";

         //launch status
         let launchStatusElement = document.getElementById("launchStatus");


         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            // stop the form submission
         }
   
         if (isNaN(pilotName.value) === false){
            alert("Please enter a name for the Pilot, not a number.");
         } else {
            const pilotStatusDiv = document.getElementById("pilotStatus");
            pilotStatusDiv.innerHTML = `Pilot ${pilotName.value} Ready`
         }

         if (isNaN(copilotName.value) === false){
            alert("Please enter a name for the Co-pilot, not a number.");
         } else {
            const copilotStatusDiv = document.getElementById("copilotStatus");
            copilotStatusDiv.innerHTML = `Co-pilot ${copilotName.value} Ready`
         }

         if (isNaN(fuelLevel.value) === true){
            alert("Please enter a number for the Fuel Level (L).");
         }

         if (isNaN(cargoMass.value) === true){
            alert("Please enter a number for the Cargo Mass (kg).");
         }
   
          //Launch Logic
         if (fuelLevel.value < 10000){
         document.getElementById("fuelStatus").innerText = "Fuel level NOT high enough for launch."
         launchStatusElement.innerText = "Shuttle not ready for launch";
         launchStatusElement.style.color = "red";
         faultyItemsElement.style.visibility = "visible";
         }else{
            launchStatusElement.innerText = "Shuttle is ready for launch";
            launchStatusElement.style.color = "green";
            faultyItemsElement.style.visibility = "visible";
         };

         if (cargoMass.value > 10000){
            document.getElementById("cargoStatus").innerText = "Cargo mass NOT low enough for launch."
            launchStatusElement.innerText = "Shuttle not ready for launch";
            launchStatusElement.style.color = "red";
         }
   
      });
   });

  





