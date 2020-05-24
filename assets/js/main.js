const mid=document.getElementById("mid");
const group=document.getElementById("group");
const noTextPlace=document.getElementById("noFall");
const fontYesNo=document.getElementById("rocker");
function yes(){
mid.style.top="-20rem"
group.style.display="none"

}
function no(){
mid.style.top="0"
group.style.display="block"
mid.style.opacity="100%"
noTextPlace.style.display="block"

}