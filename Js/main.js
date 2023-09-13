let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>100){
        nav.classList.add("header-scrolled");

    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// ================ Navigation Hide =====================
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
      navCollapse.classList.remove("show");

    })
})


// document.getElementById("myForm").addEventListener("submit", function(event) {
//     // Prevent form submission (to keep the alert visible)
//     event.preventDefault();
//     // Display the alert when the form is submitted
//     alert("Form submitted successfully!");
//     // Uncomment the following line to submit the form after the alert
//     // event.currentTarget.submit();
// });