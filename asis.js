////////////////////////////////////////
/// Account System Integration Script //
///         by Y.Yokoha               //
//       Display User images          //
////////////////////////////////////////

const imgholder=document.getElementById("accountview");
const username=document.getElementById("username");
const dda=document.getElementById("dropdownarea");
const accountdiv=document.getElementById("accountdetails");
const closebtn=document.getElementById("asis1");

let usrname=localStorage.getItem("username");
let usrimg=localStorage.getItem("userimage");
//Show user name
if (usrname=="")
{
    username.innerText="User"; 
}
else
{
 username.innerText=usrname;   
}
closebtn.addEventListener("click",()=>{accountdiv.style.display="none";});
if(usrimg)
{
    imgholder.src=usrimg;
}


