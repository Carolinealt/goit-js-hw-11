import{i as l,S as u}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const i={key:"21174821-fd3fd6848262c16aee96184b8",q:"",image_type:"photo",orientations:"horizontal",safesearch:!0},{key:f,q:D,image_type:d,orientations:m,safesearch:g}=i;function h(t){return i.q=t,`https://pixabay.com/api/?key=${f}&q=${i.q}&image_type=${d}&orientation=${m}&safesearch=${g}`}function p(t){return fetch(`${h(t)}`).then(e=>e.json()).catch(e=>console.log(e))}const y={gallery:document.querySelector(".gallery"),descrLoading:document.querySelector(".main-p"),iconLoading:document.querySelector(".loader")},{gallery:L,descrLoading:q,iconLoading:$}=y;function S({webformatURL:t,largeImageURL:e,tags:o,likes:a,views:s,comments:r,downloads:n}){return`<li class="gallery-item">
 <a class="gallery-link" href="${e}">  

    <img src="${t}" alt="${o}" class="image">
    </img>
  </a>
        <ul class="stats-list">
            <li class="stats-item">
                <h3 class="stats-header">Likes</h3>
                <p class="stats-p">${a}</p>
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
</li>`}function b(t){return t.join("")}function c(){q.classList.toggle("dis-active"),$.classList.toggle("dis-active")}function v(t){L.insertAdjacentHTML("beforeend",t)}function w(){const t=new u(".gallery-link");document.querySelectorAll(".gallery-link").forEach(o=>{o.SimpleLightbox}),t.refresh()}function E(t){return t.then(({hits:e})=>{if(e.length===0)throw new Error;return c(),e}).then(e=>e.map(S)).then(b).then(v).then(w).catch(()=>{const e={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"white",messageSize:"16",position:"topRight",messageLineHeight:"88",class:"ipa"};l.error(e)})}function O(t){c(),E(t)}const M={form:document.querySelector(".main-form"),gallery:document.querySelector(".gallery")},{form:P,gallery:x}=M;P.addEventListener("submit",A);function A(t){t.preventDefault();const e=t.target.elements.request.value.trim();e&&j(e)}function j(t){x.innerHTML="";let e=p(t);console.log(e),O(e)}
//# sourceMappingURL=commonHelpers.js.map
