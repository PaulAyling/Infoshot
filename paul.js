
//get data from JSON //

$.getJSON(
  "paull.json",
  function(data) {

factData = data;
//Order Data Components //
var dataToRenderForFacts = [];
var filteredFacts = factData.filter(x => x.columnName == "Facts");
var filteredFors = factData.filter(x => x.columnName == "For");
var filteredAgainst = factData.filter(x => x.columnName == "Against");
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
  console.log(resultArray);
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
    html += `<a href="${element.linkUrl}" target="_blank" class ="item">${element.linkName} </a></br>`

  });
  return html;

  
}
orderData(filteredFacts, dataToRenderForFacts);
document.getElementById("facts").innerHTML = `
<div class="blue article-header">${dataToRenderForFacts[0].columnName}</div>

${dataToRenderForFacts.map(factTemplate).join("")}
<div class="blue article-header">footer</div>


`;
var dataToRenderForFors = [];
orderData(filteredFors, dataToRenderForFors);
document.getElementById("facts2").innerHTML = `
<div class="green article-header">${dataToRenderForFors[0].columnName}</div>

${dataToRenderForFors.map(factTemplate).join("")}
<div class="blue article-header">footer</div>


`;
var dataToRenderForAgainst = [];
orderData(filteredAgainst, dataToRenderForAgainst);
document.getElementById("facts3").innerHTML = `
<div class="green article-header">${dataToRenderForAgainst[0].columnName}</div>

${dataToRenderForAgainst.map(factTemplate).join("")}
<div class="blue article-header">footer</div>


`;

}
);