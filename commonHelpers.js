import{a as m,S as h,i as n}from"./assets/vendor-244a061d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const g="44920148-106a3962957378fd34fa469a9",b="https://pixabay.com/api/";async function f(t,r=1){return(await m.get(`${b}`,{params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}let d;function p(t){const r=document.querySelector(".gallery"),c=t.map(s=>`
      <div class="photo-card">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b> ${s.likes}
          </p>
          <p class="info-item">
            <b>Views</b> ${s.views}
          </p>
          <p class="info-item">
            <b>Comments</b> ${s.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b> ${s.downloads}
          </p>
        </div>
      </div>
    `).join("");r.insertAdjacentHTML("beforeend",c),d&&d.destroy(),d=new h(".gallery a",{captionsData:"alt",captionDelay:250}),d.refresh()}const w=document.querySelector("#search-form"),L=document.querySelector(".gallery"),i=document.querySelector(".load-more"),a=document.querySelector(".loader");let y="",l=1;w.addEventListener("submit",async t=>{if(t.preventDefault(),y=t.target.elements.searchQuery.value.trim(),!!y){l=1,L.innerHTML="",i.style.display="none",a.style.display="block";try{const r=await f(y,l);if(a.style.display="none",r.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again."});return}p(r.hits),i.style.display="block",r.totalHits<=15&&(i.style.display="none",n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{a.style.display="none",n.error({title:"Error",message:"Something went wrong. Please try again later."})}}});i.addEventListener("click",async()=>{l+=1,a.style.display="block";try{const t=await f(y,l);a.style.display="none",p(t.hits),(t.hits.length<15||l*15>=t.totalHits)&&(i.style.display="none",n.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})),window.scrollBy({top:document.querySelector(".photo-card").getBoundingClientRect().height*2,behavior:"smooth"})}catch{a.style.display="none",n.error({title:"Error",message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=commonHelpers.js.map
