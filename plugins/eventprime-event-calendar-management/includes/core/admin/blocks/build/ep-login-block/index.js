(()=>{"use strict";var e,t={739:()=>{const e=window.wp.element,t=window.wp.blocks,l=window.wp.i18n,o=window.wp.blockEditor;wp.domReady((function(){const{assign:e,merge:t}=lodash;wp.hooks.addFilter("blocks.registerBlockType","custom-plugin/remove-align-options",(function(l,o){return"core/buttons"===o?e({},l,{supports:t(l.supports,{align:!1})}):l}))})),(0,t.registerBlockType)("create-block/ep-login-block",{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 -960 960 960",width:"48"},(0,e.createElement)("path",{d:"M481-120v-60h299v-600H481v-60h299q24 0 42 18t18 42v600q0 24-18 42t-42 18H481Zm-55-185-43-43 102-102H120v-60h363L381-612l43-43 176 176-174 174Z"})),edit:function(t){const a=document.querySelector(".astra-meta-box-style"),{attributes:{block_login_title:n,block_login_user_detail_label:r,block_login_password_label:c,block_login_remember_me_label:s,block_login_forget_password_label:i,block_login_click_here_label:p,block_login_register_link_label:m,block_login_dont_have_account_label:g,backgroundColor:d,textColor:u,align:_},setAttributes:b}=t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{...(0,o.useBlockProps)({style:{backgroundColor:d,color:u,align:_}})},(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(o.PanelColorSettings,{title:(0,l.__)("Color Settings","Event-prime-blocks"),icon:"admin-appearance",initialOpen:!0,disableCustomColors:!1,colorSettings:[{value:d,onChange:e=>{b({backgroundColor:e})},label:(0,l.__)("Background Color","Event-prime-blocks")},{value:u,onChange:e=>{b({textColor:e})},label:(0,l.__)("Text Color","Event-prime-blocks")}]},(0,e.createElement)(o.ContrastChecker,{textColor:u,backgroundColor:d}))),"NOTE: This form is a sample view of your login form. Logged in users will not see it.",(0,e.createElement)("div",{className:"ep-gutenberg-login",id:"ep_attendee_login_form_wrapper"},(0,e.createElement)("div",{className:"ep-login-form ep-shadow-sm ep-border ep-rounded ep-p-5"},(0,e.createElement)("div",{class:"ep-event-avatar ep-rounded-circle"},(0,e.createElement)("svg",{class:"block-material-icon",xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 -960 960 960",width:"48"},(0,e.createElement)("path",{d:"M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"}))),(0,e.createElement)(o.RichText,{className:"ep-custom-login-heading ep-modal-title ep-text-center ep-my-3",tagName:"p",placeholder:(0,l.__)("LOGIN TO YOUR ACCOUNT"),value:null==n?"Login To Your Account":n,onChange:e=>{b({block_login_title:e})}}),(0,e.createElement)("div",{class:"ep-modal-sub-heading ep-text-center ep-my-3 ep-fs-6 ep-text-muted"}),(0,e.createElement)("form",{class:"ep-attendee-login-form",id:"ep_attendee_login_form",method:"post"},(0,e.createElement)("div",{class:"ep-login-response ep-mb-3"}),(0,e.createElement)("div",{class:"ep-form-row ep-form-group ep-mb-3"},(0,e.createElement)(o.RichText,{className:"ep-custom-user-details ep-form-label",tagName:"span",placeholder:(0,l.__)("User Name"),value:null==r?"User Name ":r,onChange:e=>{b({block_login_user_detail_label:e})}}),(0,e.createElement)("input",{type:"hidden",name:"login_id_field",class:"ep-form-control",value:"username"}),(0,e.createElement)("span",{class:"required ep-text-danger"},"*"),(0,e.createElement)("input",{type:"text",name:"user_name",required:"",id:"ep_login_user_name",class:"ep-form-input ep-input-text ep-form-control",value:""})),(0,e.createElement)("div",{class:"ep-form-row ep-form-group ep-mb-3"},(0,e.createElement)(o.RichText,{className:"ep-custom-user-password ep-form-label",tagName:"span",placeholder:(0,l.__)("Password"),value:null==c?"Password ":c,onChange:e=>{b({block_login_password_label:e})}}),(0,e.createElement)("span",{class:"required ep-text-danger"},"*"),(0,e.createElement)("input",{type:"password",name:"password",required:"",id:"ep_login_password",class:"ep-form-control ep-form-input ep-input-text"})),(0,e.createElement)("div",{class:"ep-form-row ep-form-group ep-text-small ep-d-flex ep-justify-content-between ep-mb-3"},(0,e.createElement)("label",{for:"ep_login_rememberme",class:"ep-form-label ep-checkbox-inline ep-text-small"},(0,e.createElement)("input",{type:"checkbox",name:"rememberme",class:"ep-form-input ep-input-checkbox"}),(0,e.createElement)(o.RichText,{tagName:"span",placeholder:(0,l.__)("Remember me"),value:null==s?"Remember me":s,onChange:e=>{b({block_login_remember_me_label:e})}})," "),(0,e.createElement)("div",{class:"ep-login-forgotpass ep-text-small"},(0,e.createElement)(o.RichText,{tagName:"span",placeholder:(0,l.__)("Forgot password?"),value:null==i?"Forgot password? ":i,onChange:e=>{b({block_login_forget_password_label:e})}}),(0,e.createElement)(o.RichText,{tagName:"a",placeholder:(0,l.__)("Click here"),value:null==p?"Click Here":p,onChange:e=>{b({block_login_click_here_label:e})}}))),a?(0,e.createElement)("div",{class:"ep-form-row ep-login-btn-section ep-mb-3 is-content-justification-center"},(0,e.createElement)(o.InnerBlocks,{allowedBlocks:["core/buttons"],template:[["core/buttons",{},[["core/button",{text:"Login",textColor:"white",backgroundColor:"black",className:"login_block_alignment_fix",style:{border:{radius:"6px"},spacing:{padding:{left:"0px",right:"0px",top:"14px",bottom:"14px"}}},width:"100"}]]]],templateLock:"all"}," ")):(0,e.createElement)("div",{class:"ep-form-row ep-login-btn-section ep-mb-3 is-content-justification-center"},(0,e.createElement)(o.InnerBlocks,{allowedBlocks:["core/buttons"],template:[["core/buttons",{},[["core/button",{text:"Login",textColor:"white",backgroundColor:"black",className:"login_block_alignment_fix",style:{border:{radius:"6px"},spacing:{padding:{left:"0px",right:"0px",top:"8px",bottom:"8px"}}},width:"100"}]]]],templateLock:"all"}," ")),(0,e.createElement)("div",{class:"ep-form-row"},(0,e.createElement)("div",{class:"ep-login-register ep-d-flex"},(0,e.createElement)(o.RichText,{className:"ep-form-label",tagName:"label",placeholder:(0,l.__)("Don't have an account. "),value:null==g?"Don't have an account. ":g,onChange:e=>{b({block_login_dont_have_account_label:e})}}),(0,e.createElement)("a",{href:"#"},(0,e.createElement)(o.RichText,{className:"ep-form-label",tagName:"a",placeholder:(0,l.__)("Register"),value:null==m?"Register":m,onChange:e=>{b({block_login_register_link_label:e})}})))))))))},save:t=>(0,e.createElement)(o.InnerBlocks.Content,null)})}},l={};function o(e){var a=l[e];if(void 0!==a)return a.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,l,a,n)=>{if(!l){var r=1/0;for(p=0;p<e.length;p++){l=e[p][0],a=e[p][1],n=e[p][2];for(var c=!0,s=0;s<l.length;s++)(!1&n||r>=n)&&Object.keys(o.O).every((e=>o.O[e](l[s])))?l.splice(s--,1):(c=!1,n<r&&(r=n));if(c){e.splice(p--,1);var i=a();void 0!==i&&(t=i)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[l,a,n]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={69:0,613:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var a,n,r=l[0],c=l[1],s=l[2],i=0;if(r.some((t=>0!==e[t]))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(s)var p=s(o)}for(t&&t(l);i<r.length;i++)n=r[i],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(p)},l=self.webpackChunkep_blocks=self.webpackChunkep_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var a=o.O(void 0,[613],(()=>o(739)));a=o.O(a)})();