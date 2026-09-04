//your JS code here. If required.
let button=document.querySelector('input[type="button"]');
button.addEventListener('click',e=>{
	e.preventDefault();
	let element=document.getElementById('colorSelect');
	element.value="Red";
})