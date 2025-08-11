//your code here
const drag = document.querySelectorAll(".image")

for(let index = 0; index<drag.length; index++){
 drag[index].addEventListener("dragstart",()=>{
		let image_link = drag[index]
	})
 drag[index].addEventListener("dragover",(e)=>{
		e.preventDefault()
	})
 drag[index].addEventListener("drop",(e)=>{
		let dropOnImage = e.target.style.backgroundImage
		let dragedImage = image_link.style.backgroundImage
		e.target.style.backgroundImage =  dragedImage
		image_link.style.backgroundImage = dropOnImage
	})
}