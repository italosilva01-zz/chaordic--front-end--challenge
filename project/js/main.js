let tableHeros = document.getElementById('table');
console.log(tableHeros);

//link with the API that we will consume 
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request = new XMLHttpRequest();

request.open('GET',requestURL);
request.responseType = 'json';
request.send();

request.onload = ()=>{
    //when the requisition is loaded
    let topHits = request.response;
    //Guard the requisition
    let size = topHits.members.length;
    //takes the amount of vector elements
    getHeros(topHits['members'],size);

}

function getHeros(result, size = 0){
    
    for(let i = 0; i< size; i++){
        //moving on in the array
        let name = result[i].name;
        //catch the name of heros
        let tableTr = document.createElement('tr');
        let tableTd = document.createElement('td');
        let tableTdnumbres = document.createElement('td');
        //creating row and table cells

        tableTd.classList.add('link-table');
        tableTdnumbres.classList.add('number-table');
        //adding class in the table cell

        tableTd.appendChild(document.createTextNode(name));
        tableTdnumbres.appendChild(document.createTextNode('1000'));   
        //putting name as a child element of the cell
        tableTr.appendChild(tableTd);
        tableTr.appendChild(tableTdnumbres);

        //putting cell as a child element of the row 
        tableHeros.appendChild(tableTr);
        //putting row as a child element of the table

    }
    
}