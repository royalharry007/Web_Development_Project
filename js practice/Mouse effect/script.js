const rectangle= document.querySelector("#center")


rectangle.addEventListener("mousemove",function(dets){

const rectLocation=rectangle.getBoundingClientRect()

const finalLocation= dets.clientX-rectLocation.left;

if(finalLocation<(rectLocation.width/2))
{
   const redColor=gsap.utils.mapRange(0,rectLocation.width/2,255,0,finalLocation); 
   gsap.to(rectangle,{
      backgroundColor:`rgb(0,${redColor},0)`,
      ease: Power4
   })
}
else{
  
   const blueColor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,finalLocation); 
   gsap.to(rectangle,{
      backgroundColor:`rgb(0,0,${blueColor})`,
      ease: Power4
   })
}
   
})

rectangle.addEventListener("mouseleave",()=>{
   gsap.to(rectangle,{  
      backgroundColor:"white"
   })
})


let rect = document.querySelector("#center")
rect.addEventListener("mousemove",(dets)=>{
   console.log("chala")
   // console.log(dets.clientX, dets.clientY)

   const throttle = (fun,delay)


})

