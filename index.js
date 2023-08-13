var Index=document.getElementById("Index");
var WebSite=document.getElementById("WebSite");
var body=document.getElementById("body")
var arr1=[];
var store=[];

if(localStorage.getItem("arr1")!=null){
  arr1=JSON.parse(localStorage.getItem("arr1"))
  display();  
}
function Submit(){
    var play={
      Index:Index.value,
      WebSite:WebSite.value,
    }
   arr1.push(play);
   localStorage.setItem("arr1",JSON.stringify(arr1))
   display();
   
}
function display(){
    var box=``;
    for( var i=0 ; i<arr1.length; i++){
      box+=`<tr>
      <td>${[i+1]}</td>
      <td>${arr1[i].WebSite}</td>
      <td><a href="${arr1[i].WebSite}" target="_blank" id="visit"  class="border border-none text-white" data-index="0" ><i class="fa-solid fa-eye mx-2"></i> Visit</a></td>
      <td><button id="delete" btn class="bg-danger border border-none text-white"  onclick="deleteItem()"><i class="fa-solid fa-trash-can mx-2"></i>Delete</button></td>
      </tr>`
   }
    body.innerHTML=box;
} 
function deleteItem(index){
  arr1.splice(index,1)
  localStorage.setItem("arr1",JSON.stringify(arr1))
  display();
}

