(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const i={key:"21174821-fd3fd6848262c16aee96184b8",q:"",image_type:"photo",orientations:"horizontal",safesearch:!0},{key:l,q:O,image_type:u,orientations:f,safesearch:m}=i;function d(s){return i.q=s,`https://pixabay.com/api/?key=${l}&q=${i.q}&image_type=${u}&orientation=${f}&safesearch=${m}`}function c(s){return fetch(`${d(s)}`).then(e=>e.json()).catch(e=>console.log(e))}const p=document.querySelector(".gallery");function h({webformatURL:s,tags:e,likes:o,views:n,comments:t,downloads:r}){return`<li class="gallery-item">
  <img src="${s}" alt="${e}" class="image">
  </img>

        <ul class="stats-list">
            <li class="stats-item">
                <h3 class="stats-header">Likes</h3>
                <p class="stats-p">${o}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Views</h3>
                <p class="stats-p">${n}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Comments</h3>
                <p class="stats-p">${t}</p>
            </li>
            <li class="stats-item">
                <h3 class="stats-header">Downloads</h3>
                <p class="stats-p">${r}</p>
            </li>
        </ul>
</li>`}function y(s){s.then(({hits:e})=>e).then(e=>e.map(h)).then(e=>e.join("")).then(e=>p.insertAdjacentHTML("beforeend",e))}const g={form:document.querySelector(".main-form"),gallery:document.querySelector(".gallery")},{form:$,gallery:q}=g;$.addEventListener("submit",L);function L(s){s.preventDefault();const e=s.target.elements.request.value.trim();e&&b(e)}function b(s){q.innerHTML="";let e;c(s)&&(e=c(s),console.log("из меина",e),y(e))}
//# sourceMappingURL=commonHelpers.js.map
