
import express from 'express'
const app = express();
const port = 3000;

app.get("/api/products", ( req , res) =>{

     const products =[
  {
    "id": 1,
    "name": "Kathmandu",
    "image": "https://imgs.search.brave.com/VQJt6eVU4XMZaiVoj6dCquwQ3JfGc2srT-no8wgMce8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92Lmdy/ZWF0dGliZXR0b3Vy/LmNvbS9waG90b3Mv/MjAyMS8wMS9kdXJi/YXItc3F1YXJlLTI4/LTgxMjczLmpwZw"
  },
  {
    "id": 2,
    "name": "Pokhara",
    "image": "https://imgs.search.brave.com/-HUJccIqSEpX5PDf6koEpUdZy0NPM0rFC1-7oRUc-yE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzcxL1Bva2hhcmFf/QW5uYXB1cm5hX1Jh/bmdlLmpwZw"
  },
  {
    "id": 3,
    "name": "Lumbini",
    "image": "https://imgs.search.brave.com/FjEyfIJM9XHP3EniCfmydHCLVbzRmer8PiLvfNJUEZk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9s/dW1iaW5pLW5lcGFs/LWJpcnRocGxhY2Ut/YnVkZGhhLXNpZGRo/YXJ0aGEtZ2F1dGFt/YV81NTQ4MzctNDc2/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"
  },
  {
    "id": 4,
    "name": "Bhaktapur",
    "image": "https://imgs.search.brave.com/k1p6aozI2QS7IzK6GgX0_JOBmRRo6r2OKyKQ200adXs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YWltLmV4cGVkaWEu/Y29tL2Rlc3RpbmF0/aW9uLzEvODM5MTYw/Njc3YjEzYjAyM2Nm/ZDk3MGNiYzlhZWQy/YTkuanBnP2ltcG9s/aWN5PWZjcm9wJnc9/MTA0MCZoPTU4MCZx/PW1lZGl1bUhpZ2g"
  },
  {
    "id": 5,
    "name": "Patan",
    "image": "https://imgs.search.brave.com/UxzIuW7jHp2II7kJefhYuW99I-bAmj5rZCpCCvlFlzU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9scC1j/bXMtcHJvZHVjdGlv/bi5pbWdpeC5uZXQv/MjAxOS0wNi9kMWYz/OGU2YTQzZTg5ODAy/NWI4MjM3N2MxMzZm/NTZkZC1kdXJiYXIt/c3F1YXJlLmpwZz9h/dXRvPWZvcm1hdCxj/b21wcmVzcyZxPTcy/JmZpdD1jcm9wJmFy/PTE6MQ"
  },
  {
    "id": 6,
    "name": "Janakpur",
    "image": "https://imgs.search.brave.com/feI-8TJNZ-eOv926aNgadnfl1Xca3pC5yNLlqtyf5_w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWR2ZW50dXJlaGlt/YWxheWFudHJhdmVs/cy5jb20vdXBsb2Fk/cy9pbWcvamFuYWtw/dXItYW5kLXBva2hh/cmEtdG91ci0xNTk3/MjQyOTc4LndlYnA"
  },
  {
    "id": 7,
    "name": "Nagarkot",
    "image": "https://imgs.search.brave.com/3fmnrRxmTeb5bZmxqeWa7CZNGH5-1ak2oOKpjKxmm-o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9zdW5yaXNl/LW5hZ2Fya290LW5l/cGFsLWhpbWFsYXlh/LW1vdW50YWlucy0y/NjBudy0xMTQ5NDg2/ODI0LmpwZw"
  },
  {
    "id": 8,
    "name": "Chitwan National Park",
    "image": "https://imgs.search.brave.com/wDhCTQEP1hXuKawVjtCynnju4ru6xynR4P3um1_LYGk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzczL0NoaXR3YW5f/bmF0aW9uYWxfcGFy/a19SaGlub3MuanBn"
  },
  {
    "id": 9,
    "name": "Everest Base Camp",
    "image": "https://imgs.search.brave.com/XZYvSo3Rp0QzDj4zH1PRxMn48Jpqwr-dYa1rcH-xGDY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZW5jaGFudGlu/Zy9xXzgwLGZfYXV0/byxjX2xmaWxsLHhf/d19tdWxfMC40Nyx5/X2hfbXVsXzAuNixn/X3h5X2NlbnRlcix3/XzM2MCxoXzI3MC9l/eG9kdXMtd2ViLzIw/MTcvMTAvVE5UX0V2/ZXJlc3QtQmFzZS1D/YW1wX0NvbnRlbnQt/Q3JlYXRvci1FdWFu/LVdoaXRib3VybmVf/RXh0ZW5kZWQxNC5q/cGc"
  },
  {
    "id": 10,
    "name": "Annapurna",
    "image": "https://imgs.search.brave.com/-Z4hM1Ly4uShkRQWqGrdClNNo5JNtmP6dsVl_69GKKk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA1/NDI2NjQwOC9waG90/by9hbm5hcHVybmEt/bWFzc2lmLW5lcGFs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1CcGJVZC1rRXFP/MlNtQ3dyb01IRXRw/M1R4ZDc2Q3c5T2Z5/cEZ3QU9BLVRjPQ"
  }
]

  if(req.query.search){
     
    const searchProducts = req.query.search.toLocaleLowerCase();
    const filterProducts = products.filter((product)=> product.name.toLowerCase().includes(searchProducts))
    res.send(filterProducts)
    console.log(filterProducts)
    return;
  }
    setTimeout(() => {
      res.send(products)
    
      
    }, 2000);

  

})

app.listen(port, (req, res) =>{
    console.log("port is listening the request")
})