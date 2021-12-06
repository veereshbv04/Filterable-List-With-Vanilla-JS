const userSearch = document.getElementById("searchContacts");

const ul = document.getElementById("contacts");
const li = ul.querySelectorAll(".names");


userSearch.addEventListener("keyup", ()=>{
    const searchValue = userSearch.value.toUpperCase();
    console.log("s")
    for(let i=0; i<li.length; i++){
        let a = li[i].getElementsByTagName("a")[0];
        let name = a.innerText.toUpperCase();
        if(name.includes(searchValue)){
            li[i].style.display="block"; 
        }else{
            li[i].style.display="none"; 
        }
    }
})