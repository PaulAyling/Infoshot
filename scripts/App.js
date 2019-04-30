//get data from JSON //
$.getJSON(
  "./data/infoshots.json",
  function(data) {

factData = data;
console.log(factData);
//query data from factdata //
var dataToRenderForFacts = [];
var filteredFacts = factData.filter(x => x.columnId == "1");
var filteredFors = factData.filter(x => x.columnId == "2");
var filteredAgainst = factData.filter(x => x.columnId == "3");
var orderData = factData.filter(x => x.columnId == "100");
console.log("Array: filteredFacts ")
console.log(filteredFacts)
console.log("Array: filteredFors ")
console.log(filteredFors)
console.log("Array: filteredAgainst")
console.log(filteredAgainst)

//OUTPUT INFOSHOT TITE TO HTML //
$('#question').html(question[0].linkName);
$(console.log("Array: linkName"));
//CREATE THE REST OF THE HTML //
function orderData(data, resultArray){
  for(var index = 0; index < data.length; index ++){
    data[index].children = [];
    data[index].children.push(data[index]);

    for(var index2 = index + 1; index2 < data.length; index2++)
    {
      if(data[index].subjectId == data[index2].subjectId)
      {
        data[index2].isprocessed = "true";
        data[index].children.push(data[index2]);
      }
    }
    if(!data[index].isprocessed)
    resultArray.push(data[index]);
  }

}

function displayFacts(facts) {
  
}

//Declare variables //
function columnName(pet){
    
  return `<div class="blue article-header">${pet.columnName}</div>`

}


function factTemplate(pet){
    
  var html = `<div class="subject-header">${pet.subjectName}</div>`;
  pet.children.forEach(element => {
    html += `
      <a href="${element.linkUrl}" target="_blank">
        <Div class="siteContainer">
          <div class="siteIcon"><img src="${element.linkIcon}" alt="1">
          </div>      
          <div class="siteTitle">${element.linkName} </div>
        </div>
      </a>`

  });
  return html;

}

orderData(filteredFacts, dataToRenderForFacts);
document.getElementById("col1").innerHTML = `
<div class="blue article-header">${dataToRenderForFacts[0].columnName}</div>

${dataToRenderForFacts.map(factTemplate).join("")}



`;
var dataToRenderForFors = [];
orderData(filteredFors, dataToRenderForFors);
document.getElementById("col2").innerHTML = `
<div class="green article-header">${dataToRenderForFors[0].columnName}</div>

${dataToRenderForFors.map(factTemplate).join("")}



`;
var dataToRenderForAgainst = [];
orderData(filteredAgainst, dataToRenderForAgainst);
document.getElementById("col3").innerHTML = `
<div class="red article-header">${dataToRenderForAgainst[0].columnName}</div>

${dataToRenderForAgainst.map(factTemplate).join("")}



`;

}
);

