import{S as c}from"./assets/vendor-10cb7c31.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const i={key:"21174821-fd3fd6848262c16aee96184b8",q:"",image_type:"photo",orientations:"horizontal",safesearch:!0},{key:u,q:E,image_type:f,orientations:m,safesearch:d}=i;function p(t){return i.q=t,`https://pixabay.com/api/?key=${u}&q=${i.q}&image_type=${f}&orientation=${m}&safesearch=${d}`}function l(t){return fetch(`${p(t)}`).then(e=>e.json()).catch(e=>console.log(e))}const h=document.querySelector(".gallery");function y({webformatURL:t,largeImageURL:e,tags:a,likes:o,views:s,comments:r,downloads:n}){return`<li class="gallery-item">
 <a class="gallery-link" href="${e}">  

    <img src="${t}" alt="${a}" class="image">
    </img>
  </a>
        <ul class="stats-list">
            <li class="stats-item">
                <h3 class="stats-header">Likes</h3>
                <p class="stats-p">${o}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Views</h3>
                <p class="stats-p">${s}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Comments</h3>
                <p class="stats-p">${r}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Downloads</h3>
                <p class="stats-p">${n}</p>
            </li>
        </ul>
</li>`}function g(t){return t.join("")}function $(t){h.insertAdjacentHTML("beforeend",t)}function L(){new c(".gallery-link"),document.querySelectorAll(".gallery-link").forEach(e=>{e.SimpleLightbox})}function q(t){t.then(({hits:e})=>e).then(e=>e.map(y)).then(g).then($).then(L)}const b={form:document.querySelector(".main-form"),gallery:document.querySelector(".gallery")},{form:S,gallery:O}=b;S.addEventListener("submit",M);function M(t){t.preventDefault();const e=t.target.elements.request.value.trim();e&&v(e)}function v(t){O.innerHTML="";let e;l(t)&&(e=l(t),console.log("из меина",e),q(e))}
//# sourceMappingURL=commonHelpers.js.map
