(()=>{"use strict";const e=window.wp.plugins,t=window.wp.editor,n=window.wp.i18n,s=window.wp.components,i=window.wp.data,o=window.wp.coreData,a=window.wp.element,d=function(e){return(e=(e=(e=e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"")).replace(/ {2,}|[\r\n\t]/g," ")).replace(/;+/g,";")).replace(/\s*([{};,])\s*/g,"$1")},l=window.ReactJSXRuntime;(0,e.registerPlugin)("gkit-page-settings",{render:()=>{const{gutenkitLogo:e}=window.gutenkit.editorIcon,{GkitTabs:r,GkitPanelBody:g,GkitResponsive:p,GkitBoxControl:c,GkitBackgrounGroup:u,GkitProUpgradeNotice:y}=window.gutenkit.components,{useDeviceType:w,useHasProActive:k,useDeviceList:B}=window.gutenkit.helpers,b=(0,i.select)("core/editor").getCurrentPostType(),[x,h]=(0,o.useEntityProp)("postType",b,"meta"),_=w(),m=B(),{getEditorSettings:S}=(0,i.select)("core/editor"),{updateEditorSettings:v}=(0,i.dispatch)("core/editor"),j=k(),P=S(),f=((e,t)=>{const{parseCSS:n,fillBackgroundGenerator:s,getBoxValue:i}=window.gutenkit.helpers;return n([[],t=>[{selector:"body.editor-styles-wrapper",...i(e?.postBodyMargin?.[t],"margin"),...i(e?.postBodyPadding?.[t],"padding"),...s(e?.postBodyBackground,t)}]],t)})(x,m);return(0,a.useEffect)((()=>{let e=[];if(m.forEach((t=>{let n=t?.value,s=t?.slug||"Desktop",i=t?.direction||"max",o=s?.toLowerCase();if("base"==n&&f?.[o])e.push(f?.[o]);else if(f?.[o]&&n&&i){let t=`\n\t\t\t\t\t@media (${i}-width: ${n}px) {\n\t\t\t\t\t\t${f?.[o]}\n\t\t\t\t\t}\n\t\t\t\t`;e.push(t)}})),e){let t=e.length>0?e.join(""):"";const n={css:d(t),__unstableType:"gutenkit-page-settings-styles",isGlobalStyles:!0},s=P?.styles?.findIndex((e=>e.__unstableType===n.__unstableType&&e.isGlobalStyles===n.isGlobalStyles));if(-1!==s){const e=[...P.styles];e[s]=n,v({...P,styles:e})}else v({...P,styles:[...P.styles,n]})}}),[JSON.stringify(f),_,JSON.stringify(P?.styles),v,m]),"gutenkit-popup"!==b&&(0,l.jsx)(t.PluginSidebar,{name:"gkit-page-settings",title:(0,n.__)("GutenKit Page Settings","gutenkit-blocks-addon"),icon:e,children:(0,l.jsx)(r,{type:"top-level",tabs:[{name:"page-settings-style",title:"Style"},{name:"page-settings-advanced",title:"Advanced"}],children:e=>"page-settings-style"===e.name?(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(g,{title:(0,n.__)("Body Style","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,l.jsx)(p,{children:(0,l.jsx)(c,{label:(0,n.__)("Margin","gutenkit-blocks-addon"),values:x.postBodyMargin[_]||{},onChange:e=>h({postBodyMargin:{...x.postBodyMargin,[_]:e}})})}),(0,l.jsx)(p,{children:(0,l.jsx)(c,{label:(0,n.__)("Padding","gutenkit-blocks-addon"),values:x.postBodyPadding[_]||{},onChange:e=>h({postBodyPadding:{...x.postBodyPadding,[_]:e}})})}),(0,l.jsx)(s.__experimentalDivider,{}),(0,l.jsx)(u,{label:(0,n.__)("Background","gutenkit-blocks-addon"),onChange:e=>{const t={...e,gradient:e?.gradient||""};return h({postBodyBackground:t})},value:x.postBodyBackground,exclude:{video:!0},isSupportDynamicContent:!1})]})}):"page-settings-advanced"===e.name?(0,l.jsx)(l.Fragment,{children:!j&&(0,l.jsx)(y,{})}):void 0})})}})})();