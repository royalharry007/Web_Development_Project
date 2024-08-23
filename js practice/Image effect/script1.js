let rect= document.querySelector("#center")

function throttle(func,delay){ // throttlin function consisit of twor agument 
   let timerId= null;   
   return (...args) =>{
      if(timerId) return
        timerId= setTimeout(() => {
         timerId=null
            func(...args)
         }, delay);
   }
}

rect.addEventListener("mousemove", throttle((dets)=>{
let divElem= document.createElement('div');

divElem.classList.add('imagediv')

let img= document.createElement("img")
divElem.appendChild(img)


const images=[
   'https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
   'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
   'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
]
 let imgLocation = Math.floor(Math.random()*images.length)
 img.setAttribute("src",images[imgLocation])

divElem.style.left=dets.clientX + 'px'
divElem.style.top= dets.clientY + 'px'
document.body.appendChild(divElem)

setTimeout(()=>{
   divElem.remove()
},2000)


gsap.to(img,{
   y:0,
   ease: Power3
})

},300))