//your code here
const drag = document.querySelectorAll(".image")

for(let i = 0; i<drag.length; i++){
 drag[i].addEventListener("dragstart",()=>{
		let image_link = drag[i]
	})
 drag[i].addEventListener("dragover",(e)=>{
		e.preventDefault()
	})
 drag[i].addEventListener("drop",(e)=>{
		let dropOnImage = e.target.style.backgroundImage
		let dragedImage = image_link.style.backgroundImage
		e.target.style.backgroundImage =  dragedImage
		image_link.style.backgroundImage = dropOnImage
	})
}