import{a as f,S as m,i as a}from"./assets/vendor-244a061d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const y of o.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&d(y)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const h="44920148-106a3962957378fd34fa469a9",g="https://pixabay.com/api/";async function u(t,r=1){return(await f.get(`${g}`,{params:{key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}function p(t){const r=document.querySelector(".gallery"),l=t.map(e=>`
      <div class="photo-card">
        <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b> ${e.likes}
          </p>
          <p class="info-item">
            <b>Views</b> ${e.views}
          </p>
          <p class="info-item">
            <b>Comments</b> ${e.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b> ${e.downloads}
          </p>
        </div>
      </div>
    `).join("");r.insertAdjacentHTML("beforeend",l),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const b=document.querySelector("#search-form"),w=document.querySelector(".gallery"),n=document.querySelector(".load-more"),s=document.querySelector(".loader");let c="",i=1;b.addEventListener("submit",async t=>{if(t.preventDefault(),c=t.target.elements.searchQuery.value.trim(),!!c){i=1,w.innerHTML="",n.style.display="none",s.style.display="block";try{const r=await u(c,i);if(s.style.display="none",r.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again."});return}p(r.hits),n.style.display="block",r.totalHits<=15&&(n.style.display="none",a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}))}catch{s.style.display="none",a.error({title:"Error",message:"Something went wrong. Please try again later."})}}});n.addEventListener("click",async()=>{i+=1,s.style.display="block";try{const t=await u(c,i);s.style.display="none",p(t.hits),(t.hits.length<15||i*15>=t.totalHits)&&(n.style.display="none",a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})),window.scrollBy({top:document.querySelector(".photo-card").getBoundingClientRect().height*2,behavior:"smooth"})}catch{s.style.display="none",a.error({title:"Error",message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=commonHelpers.js.map
