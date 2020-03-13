let tableHeros = document.getElementById('table');

let btnLink = document.querySelector('#button');//button of short link

//link with the API that we will consume
//https://api.github.com/repos/italosilva01/chaordic--front-end--challenge/git/blobs/169214b4abe0ff3ad647288091b95991aee83e89 
//https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json
let requestURL = 'https://api.github.com/repos/italosilva01/chaordic--front-end--challenge/git/blobs/169214b4abe0ff3ad647288091b95991aee83e89';

let request = new XMLHttpRequest();

request.open('GET',requestURL,true);
request.setRequestHeader('Accept','application/vnd.github.v3.raw');
=======
console.log(tableHeros);

//link with the API that we will consume 
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request = new XMLHttpRequest();

request.open('GET',requestURL);
request.responseType = 'json';
request.send();

request.onload = ()=>{

    console.log("helo");
    console.log(request.response);
    //when the requisition is loaded
    let topHits = request.response;
    //Guard the requisition
    let size = 5;
    //takes the amount of vector elements
    getHeros(topHits,size);
=======
    //when the requisition is loaded
    let topHits = request.response;
    //Guard the requisition
    let size = topHits.members.length;
    //takes the amount of vector elements
    getHeros(topHits['members'],size);


}

function getHeros(result, size = 0){

    console.log(result[0].url);
    for(let i = 0; i< size; i++){
        //moving on in the array
        let name = result[i].url;
=======
    
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

        tableTdnumbres.appendChild(document.createTextNode(result[i].hits));   
=======
        tableTdnumbres.appendChild(document.createTextNode('1000'));   

        //putting name as a child element of the cell
        tableTr.appendChild(tableTd);
        tableTr.appendChild(tableTdnumbres);

        //putting cell as a child element of the row 
        tableHeros.appendChild(tableTr);
        //putting row as a child element of the table

    }
    

}
btnLink.onclick = ()=>{
//function 
=======

}