
const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
if(menu){
  menu.addEventListener("click",()=>header.classList.toggle("open"));
}
document.querySelectorAll(".nav a").forEach(a=>{
  a.addEventListener("click",()=>header.classList.remove("open"));
});
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());

document.querySelectorAll(".enquiry-form").forEach(form=>{
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const msg=form.querySelector(".form-message");
    if(msg){
      msg.style.display="block";
      msg.textContent="Thank you. Your enquiry has been prepared. Please use the email or phone details on this page to contact Kartavya Engineering.";
    }
    form.reset();
  });
});
