
// Replace this placeholder with Kartavya Engineering's WhatsApp number.
// Use international format with digits only (country code included; no +, spaces, or punctuation).
const WHATSAPP_PHONE_NUMBER = "917350503652";
const whatsappMessage = "Hello Kartavya Engineering, I found your website and would like to know more about your process equipment.";

const whatsappButton = document.createElement("a");
whatsappButton.className = "whatsapp-float";
whatsappButton.href = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
whatsappButton.target = "_blank";
whatsappButton.rel = "noopener noreferrer";
whatsappButton.setAttribute("aria-label", "Chat with us on WhatsApp");
whatsappButton.setAttribute("data-tooltip", "Chat with us on WhatsApp");
whatsappButton.innerHTML = `<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M16.02 3.2A12.7 12.7 0 0 0 5.13 22.45L3.4 28.8l6.5-1.7A12.7 12.7 0 1 0 16.02 3.2Zm0 23.1c-1.94 0-3.84-.52-5.5-1.52l-.4-.24-3.86 1.01 1.03-3.76-.26-.4a10.35 10.35 0 1 1 9 4.91Zm5.68-7.75c-.31-.16-1.83-.9-2.12-1-.29-.1-.5-.16-.72.16-.21.32-.82 1.01-1 1.22-.19.21-.37.24-.69.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.85-1.74-2.17-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.35-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.06-1.1 2.61s1.13 3.03 1.29 3.24c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.83-.75 2.09-1.48.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.61-.37Z"/>
</svg>`;
document.body.appendChild(whatsappButton);

const callButton = document.createElement("a");
callButton.className = "call-float";
callButton.href = "tel:+918830537585";
callButton.setAttribute("aria-label", "Call Kartavya Engineering");
callButton.setAttribute("data-tooltip", "Call Kartavya Engineering");
callButton.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.56 3.57a1 1 0 0 1-.25 1.02l-2.19 2.2Z"/>
</svg>`;
document.body.appendChild(callButton);

const backToTopButton = document.createElement("button");
backToTopButton.className = "back-to-top-float";
backToTopButton.type = "button";
backToTopButton.setAttribute("aria-label", "Back to top");
backToTopButton.setAttribute("data-tooltip", "Back to top");
backToTopButton.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path fill="currentColor" d="M12 4 4 12l1.41 1.41L11 7.83V20h2V7.83l5.59 5.58L20 12l-8-8Z"/>
</svg>`;
backToTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.body.appendChild(backToTopButton);

const updateBackToTopVisibility = () => {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 300);
};
window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
updateBackToTopVisibility();

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
