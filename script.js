//your JS code here. If required.
const value=document.getElementById("count");
const Increment=document.getElementById("incrementBtn");
Increment.addEventListener('click',(e)=>{
	let count=parseInt(value.innerText);
	count=count+1;
	alert(count);
	value.innerHTML=count;
})
