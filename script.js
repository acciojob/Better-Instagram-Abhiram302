//your code here
const images = document.querySelectorAll(".image")

for(let i = 0; i<images.length; i++){
	images[i].addEventListener("dragstart",()=>{
		let image_link = images[i]
	})
	images[i].addEventListener("dragover",(e)=>{
		e.preventDefault()
	})
	images[i].addEventListener("drop",(e)=>{
		let dropOnImage = e.target.style.backgroundImage
		let dragedImage = image_link.style.backgroundImage
		e.target.style.backgroundImage =  dragedImage
		image_link.style.backgroundImage = dropOnImage
	})
}