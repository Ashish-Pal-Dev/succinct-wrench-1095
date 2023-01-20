// DROPDOWNS
let shoes = document.getElementById("shoes");
let shoedrop = document.getElementById("drop");

let bags = document.getElementById("handbag");
let bagdrop = document.getElementById("bagdrop");

let jwell = document.getElementById("jwell");
let jwelldrop = document.getElementById("jwelldrop");

shoes.addEventListener("mouseover", myFunction);
shoedrop.addEventListener("mouseout", myFunction);
function myFunction() {
  bagdrop.style.display = "none";
  jwelldrop.style.display = "none";
  if (shoedrop.style.display === "none") {
    shoedrop.style.display = "flex";
  } else if (drop.style.display === "flex") {
    shoedrop.style.display = "none";
  } else {
    shoedrop.style.display = "flex";
  }
}

bags.addEventListener("mouseover", myFunction2);
bagdrop.addEventListener("mouseout", myFunction2);
function myFunction2() {
  shoedrop.style.display = "none";
  jwelldrop.style.display = "none";
  if (bagdrop.style.display === "none") {
    bagdrop.style.display = "flex";
  } else if (bagdrop.style.display === "flex") {
    bagdrop.style.display = "none";
  } else {
    bagdrop.style.display = "flex";
  }
}

jwell.addEventListener("mouseover", myFunction3);
jwelldrop.addEventListener("mouseout", myFunction3);
function myFunction3() {
  shoedrop.style.display = "none";
  bagdrop.style.display = "none";
  if (jwelldrop.style.display === "none") {
    jwelldrop.style.display = "flex";
  } else if (jwelldrop.style.display === "flex") {
    jwelldrop.style.display = "none";
  } else {
    jwelldrop.style.display = "flex";
  }
}

// SLIDER
function first() {
  document.getElementById("sliderImage").src =
    "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_c_RTW_Coats.jpg?scl=1&fmt=webp&wid=1440";
}
function second() {
  document.getElementById("sliderImage").src =
    "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_e_MEN_Denim.jpg?scl=1&fmt=webp&wid=1440";
}
function third() {
  document.getElementById("sliderImage").src =
    "https://images.bloomingdalesassets.com/is/image/BcomMedia/media/0117_0118_D_02_CAR_a_MULTI_LNY_WaterRabbit.jpg?scl=1&fmt=webp&wid=1440";
}
setInterval(first, 3000);
setInterval(second, 6000);
setInterval(third, 9000);
// TRENDING COLLECTIONS
getdata();
async function getdata() {
  try {
    let req = await fetch("http://localhost:5050/jwellery");
    let data = await req.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}
//TRENDING DISPLAY FUNCTION
function displayData(data) {
  let trendingDiv = document.getElementById("trending");
  data.forEach((item) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", item.product);
    let title = document.createElement("h4");
    title.innerText = item.description;
    let price = document.createElement("p");
    price.innerText = `INR ${item.price}`;
    div.append(img, title, price);
    trendingDiv.append(div);
  });
}
