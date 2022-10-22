let btnAdd=document.querySelector('#add');
let btnCal=document.querySelector('#calculate');
let table=document.querySelector('table');
let itemnameIn=document.querySelector('#itemname');
let quantityIn=document.querySelector('#quantity');
let itemcodeIn=document.querySelector('#itemcode');
let itempriceIn=document.querySelector('#itemprice');

btnAdd.addEventListener('click',()=>{
    let itemname=itemnameIn.value;
    let quantity=quantityIn.value;
    let itemcode=itemcodeIn.value;
    let itemprice=itempriceIn.value;

    let temp= `<tr>
        <td>${itemname}</td>
        <td>${quantity}</td>
        <td>${itemcode}</td>
        <td>${itemprice}</td>

    </tr>`;
    table.innerHTML+=temp
});
btnCal.addEventListener('click',()=>
{
    var tab=document.getElementById('tab'),sumVal=0;
    for (var i=1;i<tab.rows.length;i++)
    {   
        sumVal=sumVal+parseInt(tab.rows[i].cells[2].innerHTML);
    }
    document.getElementById("val").innerHTML= "Total=" + sumVal;
    console.log(sumVal); 
});
