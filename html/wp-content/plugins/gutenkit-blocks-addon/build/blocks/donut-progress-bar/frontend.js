(()=>{"use strict";const e=e=>{const t=new IntersectionObserver((r=>{r.forEach((r=>{r.isIntersecting&&(new EasyPieChart(r.target,{scaleColor:!1,size:250,lineCap:e?.lineCap,lineWidth:e?.lineWidth||5,trackColor:e?.trackColor||"#f5f5f5",barColor:function(t){const r=this.renderer.getCtx(),n=this.renderer.getCanvas(),o=e?.barColor;return function(e,t,r){if(!e||"object"!=typeof e)return"#72e9cd";const n=e.gradient?.includes("linear-gradient"),o=e.gradient?.includes("radial-gradient");if(n||o){const a=e.gradient.match(/(\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3})/g),i=t[n?"createLinearGradient":"createRadialGradient"](...function(e,t){return e?[t/2,t/2,0,t/2,t/2,t/2]:[0,0,t,0]}(o,r));return a.forEach(((e,t)=>{i.addColorStop(t/(a.length-1),`rgb(${e})`)})),i}return e.backgroundColor?e.backgroundColor:"#72e9cd"}(o,r,n.width)}}),t.unobserve(r.target))}))}),{threshold:.5});return t};document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelectorAll(".gkit-piechart-element");if(t&&void 0!==window?.EasyPieChart)for(const r of t){const t=JSON.parse(r.dataset.settings);e(t).observe(r)}}))})();