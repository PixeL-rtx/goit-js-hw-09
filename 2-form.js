import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),l=document.querySelector('input[name="email"]'),n=document.querySelector('textarea[name="message"]');let e={email:"",message:""};const o=localStorage.getItem("feedback-form-state"),s=()=>{localStorage.setItem(o,JSON.stringify(e))},m=t=>{e[t.target.name]=t.target.value,s()},r=()=>{const t=localStorage.getItem(o);t&&(e=JSON.parse(t),l.value=e.email,n.value=e.message)},c=t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(o),e={email:"",message:""},a.reset()};a.addEventListener("input",m);a.addEventListener("submit",c);window.addEventListener("DOMContentLoaded",r);
//# sourceMappingURL=2-form.js.map
