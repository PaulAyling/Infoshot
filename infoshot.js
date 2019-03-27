//THIS IS ALL 1 MASTER FUNCTION WITH  - SUB FUNCTIONS //
$.getJSON(
    "data/chang.json",
    function(data) {
        factData = data;
        //Order Data Components //
        var dataToRenderForFacts = [];
        var filteredFacts = factData.filter(x => x.columnName == "Facts");
        var filteredFors = factData.filter(x => x.columnName == "For");
        var filteredAgainst = factData.filter(x => x.columnName == "Against");
//Func1 //
        function orderData(data, resultArray) {
            for (var index = 0; index < data.length; index++) {
                data[index].children = [];
                data[index].children.push(data[index]);

                for (var index2 = index + 1; index2 < data.length; index2++) {
                    if (data[index].subjectId == data[index2].subjectId) {
                        data[index2].isprocessed = "true";
                        data[index].children.push(data[index2]);
                    }
                }
                if (!data[index].isprocessed)
                    resultArray.push(data[index]);
            }
            console.log(resultArray);
        }
//Func2 //
        function displayFacts(facts) {
        }

//Func3 //
        function columnName(pet) {
            return `<div class="blue article-header">${pet.columnName}</div>`

        }




//Output Func Column 1 //
        function factTemplate(pet) {
            var html = `<div class="subject-header">${pet.subjectName}</div>`;
            pet.children.forEach(element => {
                html += `<a href="${element.linkUrl}" target="_blank" class ="item"><div class="item-container">${element.linkName} </div></a>`

            });
            return html;
        }
        orderData(filteredFacts, dataToRenderForFacts);
        document.getElementById("facts").innerHTML = `
<div class="blue article-header">${dataToRenderForFacts[0].columnName}</div>
${dataToRenderForFacts.map(factTemplate).join("")}
`;
//Output Func Column 2 //
        var dataToRenderForFors = [];
        orderData(filteredFors, dataToRenderForFors);
        document.getElementById("facts2").innerHTML = `
<div class="green article-header">${dataToRenderForFors[0].columnName}</div>

${dataToRenderForFors.map(factTemplate).join("")}
`;
//Output Func Column 2 //
        var dataToRenderForAgainst = [];
        orderData(filteredAgainst, dataToRenderForAgainst);
        document.getElementById("facts3").innerHTML = `
<div class="red article-header">${dataToRenderForAgainst[0].columnName}</div>

${dataToRenderForAgainst.map(factTemplate).join("")}



`;

    }
);