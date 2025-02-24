//your JS code here. If required.
const value=document.getElementById("counter");
const Increment=document.getElementById("incrementBtn");
Increment.addEventListener('click',(e)=>{
	let count=parseInt(value.innerHTML);
	alert(count);
	count=count+1;
	value.innerHTML=count;
})
