var parent = document.querySelector(".modal-parent1"),
    btn = document.getElementById("contact-us-btn"),
    X = document.querySelector(".X"),
    section = document.querySelector("section"),
    submit = document.getElementById("btn-contact-submit");

btn.addEventListener("click", appear);

function appear() {
  parent.style.display = "flex";
  section.style.filter = "blur(10px)"
}
X.addEventListener("click", disappearX);
function disappearX() {
  parent.style.display = "none";
  section.style.filter = "blur(0px)"
}
parent.addEventListener("click", disappearParent)
function disappearParent(e) {
  if (e.target.className == "modal-parent1") {
    parent.style.display = "none";
    section.style.filter = "blur(0px)"
  }
}

var st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    st3 = document.getElementById("st3"),
    st4 = document.getElementById("st4"),
    st5 = document.getElementById("st5");
    st6 = document.getElementById("st6");


st1.addEventListener("mouseenter", ()=>{
  st1.style.color = '#d52b1e';
  st1.style.background = 'white';
  st1.innerHTML = '<div class="h1 py-2">City Tour & Exploration</div><div class="h4 text-justify mb-4"><ul style="font-family: amaranth"><li>Guided City Tours</li><li>Settlement Workshops</li><li>Networking Events</li><li>Local Services</li><li style="color:transparent"></li></ul></div><p class="mt-auto pt-3"><a href="culturalintegration.html" style="color: #d52b1e;font-family: amaranth">Know More..</a></p>';
})

st2.addEventListener("mouseenter", ()=>{
  st2.style.color = '#d52b1e';
  st2.style.background = 'white';
  st2.innerHTML = '<div class="h1 py-2">Pickup and Drop</div><div class="h4 text-justify mb-4"><ul style="font-family: amaranth"><li>Airport Pickup</li><li>Airport Drop</li><li style="color:transparent"></li><li style="color:transparent"></li><li style="color:transparent"></li></ul></div><p class="mt-auto pt-3"><a href="pickupanddrop.html" style="color: #d52b1e;font-family: amaranth">Know More..</a></p>';
})

st3.addEventListener("mouseenter", ()=>{
  st3.style.color = '#d52b1e';
  st3.style.background = 'white';
  st3.innerHTML = '<div class="h1 py-2">Post Landing</div><div class="h4 text-justify mb-4"><ul style="font-family: amaranth"><li>Temporary Accomodation</li><li>Bank Account Setup</li><li>Healthcare Registeration</li><li>SIN Application</li><li>Utilities and Phone Plan</li></ul></div><p class="mt-auto pt-3"><a href="postlanding.html" style="color: #d52b1e;font-family: amaranth">Know More..</a></p>';
})

st4.addEventListener("mouseenter", ()=>{
  st4.style.color = '#d52b1e';
  st4.style.background = 'white';
  st4.innerHTML = '<div class="h1 py-2">Immigration</div><div class="h4 text-justify mb-4"><ul style="font-family: amaranth"><li>Work Permit</li><li>Study Permit</li><li>Permanent Residency</li><li>Visa Documentation</li><li>Immigration Consultation</li></ul></div><p class="mt-auto pt-3"><a href="immigrationassistance.html" style="color: #d52b1e;font-family: amaranth">Know More..</a></p>';
})

st5.addEventListener("mouseenter", ()=>{
  st5.style.color = '#d52b1e';
  st5.style.background = 'white';
  st5.innerHTML = '<div class="h1 py-2">Affordable Flight & Hotels</div><div class="h4 text-justify mb-4"><ul style="font-family: amaranth"><li>Exclusive Discounts</li><li>Booking Assistance</li><li style="color:transparent"></li><li style="color:transparent"></li><li style="color:transparent"></li></ul></div><p class="mt-auto pt-3"><a href="affordableflights.html" style="color: #d52b1e;font-family: amaranth">Know More..</a></p>';
})

st6.addEventListener("mouseenter", ()=>{
  st6.style.color = '#d52b1e';
  st6.style.background = 'white';
  st6.innerHTML = '<div class="h1 py-2">Scholarship Assistance</div><div class="h4 text-justify mb-4"><ul style="font-family: amaranth"><li>Scholarship Opportunities</li><li>Financial Aid</li><li style="color:transparent"></li><li style="color:transparent"></li><li style="color:transparent"></li></ul></div><p class="mt-auto pt-3"><a href="scholarship.html" style="color: #d52b1e;font-family: amaranth">Know More..</a></p>';
})


st4.addEventListener("mouseleave", ()=>{
  st4.style.transition = 'all 1s';
  st4.style.color = 'white';
  st4.style.background = '#d52b1e';
  st4.innerHTML = '<div class="display-1 py-5"><i class="fa-brands fa-cc-visa"></i></div><div class="h1">Immigration</div><p class="mt-auto pt-3"><a href="immigrationassistance.html" style="color: white;">Know More..</a></p>';
})

st3.addEventListener("mouseleave", ()=>{
  st3.style.transition = 'all 1s';
  st3.style.color = 'white';
  st3.style.background = '#d52b1e';
  st3.innerHTML = '<div class="display-1 py-5"><i class="fa-solid fa-plane-arrival"></i></div><div class="h1">Post Landing</div><p class="mt-auto pt-3"><a href="postlanding.html" style="color: white;">Know More..</a></p>';
})

st2.addEventListener("mouseleave", ()=>{
  st2.style.transition = 'all 1s';
  st2.style.color = 'white';
  st2.style.background = '#d52b1e';
  st2.innerHTML = '<div class="display-1 py-5"><i class="fa-solid fa-car"></i></div><div class="h1">Pickup and Drop</div><p class="mt-auto pt-3"><a href="pickupanddrop.html" style="color: white;">Know More..</a></p>';
})

st1.addEventListener("mouseleave", ()=>{
  st1.style.transition = 'all 1s';
  st1.style.color = 'white';
  st1.style.background = '#d52b1e';
  st1.innerHTML = '<div class="display-1 py-5"><i class="fa-solid fa-people-roof"></i></div><div class="h1">City Tour & Exploration</div><p class="mt-auto pt-3"><a href="culturalintegration.html" style="color: white;">Know More..</a></p>';
})

st5.addEventListener("mouseleave", ()=>{
  st5.style.transition = 'all 1s';
  st5.style.color = 'white';
  st5.style.background = '#d52b1e';
  st5.innerHTML = '<div class="display-1 py-5"><i class="fa-solid fa-plane-departure"></i></div><div class="h1">Affordable Flight & Hotels</div><p class="mt-auto pt-3"><a href="affordableflights.html" style="color: white;">Know More..</a></p>';
})

st6.addEventListener("mouseleave", ()=>{
  st6.style.transition = 'all 1s';
  st6.style.color = 'white';
  st6.style.background = '#d52b1e';
  st6.innerHTML = '<div class="display-1 py-5"><i class="fa-solid fa-graduation-cap"></i></div><div class="h1">Scholarship Assistance</div><p class="mt-auto pt-3"><a href="scholarship.html" style="color: white;">Know More..</a></p>';
})

let value = document.querySelectorAll(".num");
let interval = 5000;

let chk = true;


window.addEventListener('scroll', ()=>{ 
  if(window.scrollY >= 2500 && chk==true){
    value.forEach((value)=> {
      chk = false;
      let start = 0;
      let end = parseInt(value.getAttribute("data-val"));
      let duration = Math.floor(interval/end);
      let counter = setInterval(function(){
        start += 1;
        value.textContent = start;
        if(start==end){
          clearInterval(counter);
        }
      }, duration)
    })
  }
})