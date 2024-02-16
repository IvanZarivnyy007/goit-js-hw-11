import{S as c,i as u}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com",m="/api",y="/?key=42279202-5e6657fc85e4b10c09189e202&image_type=photo&orientation=horizontal&safesearch=true",f=d+m+y;function p(s){const o=s.trim();return o?fetch(f+`&q=${o}`):Promise.reject()}let a=document.querySelector("#search-input"),g=document.querySelector("#search-button"),h=document.querySelector("#gallery"),n=document.querySelector(".loader"),v=new c("#gallery .gallery-item .gallery-link ",{dowload:!1,close:!0,closeText:"×",captions:!0,captionsData:"alt",captionType:"attr",captionDelay:250,captionSelector:"img"});g.addEventListener("click",()=>{n.style.display="inline-block",p(a.value).then(s=>s.json()).then(s=>{const o=s.hits.map(r=>`<div class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
            <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="image-info">
            <div>Likes: ${r.likes}</div>
            <div>Views: ${r.views}</div>
            <div>Comments: ${r.comments}</div>
            <div>Downloads: ${r.downloads}</div>
        </div>
        </div>`).join("");n.style.display="none",h.innerHTML=o,v.refresh()}).catch(s=>{u.show({message:'"Sorry, there are no images matching your search query. Please try again!"',position:"topRight",title:"",color:"red"})}),a.value=""});
//# sourceMappingURL=commonHelpers.js.map
