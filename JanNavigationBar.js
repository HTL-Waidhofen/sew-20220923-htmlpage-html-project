function JanRead(name){
reader=new FileReader();
reader.onload = function(e) {}
let error=reader.error;
return reader.readAsText(name);
}
function displayGallery(){
document.getElementById("p1").innerHTML=JanRead("gallery.html");
console.log("p1Debug");}
function displayDesc(){
document.getElementById("p2").innerHTML=fr.readAsText("desc.html");}