"use strict";(self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[]).push([[6524],{6524:(e,n,o)=>{o.r(n),o.d(n,{default:()=>g});var i=o(7723),l=o(6087),a=o(6427);const t=[{color:"#72aee6",name:"Blue 20"},{color:"#3582c4",name:"Blue 40"},{color:"#e65054",name:"Red 40"},{color:"#8a2424",name:"Red 70"}];var d=o(5573),s=o(790);const r=(0,s.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(d.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})}),c=(0,s.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(d.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})}),k=(0,s.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)(d.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})}),g=(0,l.memo)((({attributes:e,setAttributes:n,device:o,advancedControl:l})=>{const{GkitBoxShadow:d,GkitColor:g,GkitIconPicker:u,GkitPanelBody:h,GkitBoxControl:v,GkitResponsive:b,GkitSwitcher:_,GkitTabs:x,GkitAdvancedUrl:m,GkitChoose:j,GkitSlider:C,GkitRangeUnit:B,GkitBorderControl:w}=window.gutenkit.components,{gkitResponsiveValue:p,responsiveHelper:H}=window.gutenkit.helpers;return(0,s.jsx)(x,{type:"top-level",tabs:[{name:"content",title:(0,i.__)("Content","gutenkit-blocks-addon")},{name:"style",title:(0,i.__)("Style","gutenkit-blocks-addon")},{name:"advanced",title:(0,i.__)("Advanced","gutenkit-blocks-addon")}],children:G=>{switch(G.name){case"content":return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(h,{title:(0,i.__)("Icon","gutenkit-blocks-addon"),initialOpen:!0,children:[(0,s.jsx)(u,{label:(0,i.__)("Icon","gutenkit-blocks-addon"),value:e?.icon,onChange:e=>n({icon:e})}),(0,s.jsx)(_,{label:(0,i.__)("Enable Link?","gutenkit-blocks-addon"),value:e?.iconEnableLink,onChange:e=>n({iconEnableLink:e})}),e?.iconEnableLink&&(0,s.jsx)(m,{value:e?.iconWebsiteLink,onChange:e=>n({iconWebsiteLink:e})}),(0,s.jsx)(b,{children:(0,s.jsx)(j,{label:(0,i.__)("Alignment","gutenkit-blocks-addon"),options:[{label:(0,i.__)("Left","gutenkit-blocks-addon"),value:"left",icon:r},{label:(0,i.__)("Center","gutenkit-blocks-addon"),value:"center",icon:c},{label:(0,i.__)("Right","gutenkit-blocks-addon"),value:"right",icon:k}],value:p(e,"iconAlign",o),onChange:e=>H("iconAlign",e,o,n)})})]})});case"style":return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(h,{title:(0,i.__)("Icon","gutenkit-blocks-addon"),children:[(0,s.jsx)(b,{children:(0,s.jsx)(B,{label:(0,i.__)("Size","gutenkit-blocks-addon"),value:p(e,"iconSize",o),onChange:e=>H("iconSize",e,o,n),units:{px:{min:0,max:200,step:1},rem:{min:0,max:10,step:.1}}})}),(0,s.jsx)(C,{label:(0,i.__)("Roate","gutenkit-blocks-addon"),value:e?.iconRoate,onChange:e=>n({iconRoate:e}),sizeUnits:["deg"],range:{min:0,max:360,step:1}}),(0,s.jsx)(x,{type:"normal",tabs:[{name:"normal",title:(0,i.__)("Normal","gutenkit-blocks-addon")},{name:"hover",title:(0,i.__)("Hover","gutenkit-blocks-addon")}],children:l=>"normal"===l.name?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{label:(0,i.__)("Color","gutenkit-blocks-addon"),value:e?.iconColor,onChange:e=>n({iconColor:e})}),(0,s.jsx)(g,{label:(0,i.__)("Background Color","gutenkit-blocks-addon"),value:e?.iconBgColor,onChange:e=>n({iconBgColor:e})}),(0,s.jsx)(w,{label:(0,i.__)("Border"),colors:t,onChange:e=>n({iconBorder:e}),value:e?.iconBorder}),(0,s.jsx)(b,{children:(0,s.jsx)(v,{label:(0,i.__)("Border Radius","gutenkit-blocks-addon"),values:p(e,"iconBorderRadius",o),onChange:e=>H("iconBorderRadius",e,o,n),isMinPositiveOnly:!0})}),(0,s.jsx)(d,{label:(0,i.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.iconBoxShadow,onChange:e=>n({iconBoxShadow:e})})]}):"hover"===l.name?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g,{label:(0,i.__)("Color","gutenkit-blocks-addon"),value:e?.iconHoverColor,onChange:e=>n({iconHoverColor:e})}),(0,s.jsx)(g,{label:(0,i.__)("Background Color","gutenkit-blocks-addon"),value:e?.iconHoverBgColor,onChange:e=>n({iconHoverBgColor:e})}),(0,s.jsx)(w,{label:(0,i.__)("Border"),colors:t,onChange:e=>n({iconHoverBorder:e}),value:e?.iconHoverBorder}),(0,s.jsx)(b,{children:(0,s.jsx)(v,{label:(0,i.__)("Border Radius","gutenkit-blocks-addon"),values:p(e,"iconHoverBorderRadius",o),onChange:e=>H("iconHoverBorderRadius",e,o,n),isMinPositiveOnly:!1})}),(0,s.jsx)(d,{label:(0,i.__)("Box Shadow","gutenkit-blocks-addon"),value:e?.iconHoverBoxShadow,onChange:e=>n({iconHoverBoxShadow:e})})]}):void 0}),(0,s.jsx)(a.__experimentalDivider,{}),(0,s.jsx)(b,{children:(0,s.jsx)(v,{label:(0,i.__)("Padding","gutenkit-blocks-addon"),values:p(e,"iconPadding",o),onChange:e=>H("iconPadding",e,o,n)})}),(0,s.jsx)(b,{children:(0,s.jsx)(v,{label:(0,i.__)("Margin","gutenkit-blocks-addon"),values:p(e,"iconMargin",o),onChange:e=>H("iconMargin",e,o,n)})})]})});case"advanced":return(0,s.jsx)(s.Fragment,{children:l})}}})}))}}]);