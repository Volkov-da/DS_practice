(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/upK":function(e,t,n){"use strict";n.r(t);var i=n("rQ3t"),o=n("ISpe"),r=n("4ax2"),a=n("L+vz"),l=n("xXVb"),c=n("uObz"),s=n("6nsS"),u=n("99e6"),d=n("7eW0"),v=n("bNz0"),m=n.n(v),p=n("uo7O"),f=n("LNbX"),h=n("r0ML"),E=n("/MMI");const g=m.a.div`
  position: relative;
`,b=m()(u.a)`
  margin: 8px 0;
`,x=m.a.div`
  position: absolute;
  display: ${e=>0===e.numEvents&&"none"};
  top: 0;
  right: 0;

  background-color: ${e=>e.color};
  padding: 1px 3px;
  border-radius: 6px;
  font-size: 9px;
`;function k({numEvents:e,icon:t}){return h.createElement(g,null,h.createElement(b,{emphasis:"high",icon:"event_finished"===t?"check_circle":"event_running"===t?"update":"auto_awesome_motion"}),h.createElement(x,{numEvents:e,color:a.m},e))}var w=n("BCBr"),S=n("X9tK"),y=n("UNrv"),_=n("BQu3"),C=n("j8v5"),O=n("CmAq"),A=n("pT5d"),I=n("6YMH");const T=m()(C.a)`
  z-index: ${e=>e.theme.zindex[1001]};
`;const $=m.a.div`
  height: 48px;
  width: 48px;
`,j=({open:e,setOpen:t,options:n})=>h.createElement(c.a,null,h.createElement(I.a,{icon:"more_horiz",onClick:e=>{t(!0),e.stopPropagation()}}),h.createElement(T,{open:e,onClose:()=>t(!1),hoistToBody:!0,focusOnOpen:!1},n.map((e,t)=>(function({icon:e,text:t,onClick:n,href:i},o){return i?h.createElement(O.a,{key:o,icon:e,href:i,target:"_blank",onClick:n},t):h.createElement(A.a,{key:o,icon:e,onClick:n},t)})(e,t))));var z=n("xIxo");const M=({event:e,open:t,setOpen:n})=>{if(!e.datasetUploadActiveEvent)return null;const i=e.datasetUploadActiveEvent,o=i.title,r="creation"===i.type?"New Dataset":i.versionNotes,a="finished"===i.status?"Successful":"failed"===i.status?i.errorMessage?`Failed - ${i.errorMessage}`:"Failed":i.percentDone>0&&i.percentDone<1?`${function(e){return`${(100*e).toFixed(0)}%`}(i.percentDone)} completed`:"Running",c="creating"===i.status,s={icon:"open_in_new",text:"Go to dataset",href:i.url,onClick:()=>Object(y.__awaiter)(void 0,void 0,void 0,(function*(){d.logger.reportImmediate("navigation","active-events-dataset-upload-view-clicked")}))},u=[s];"failed"!==i.status&&"finished"!==i.status||u.push({icon:"clear",text:"Dismiss",onClick:()=>Object(y.__awaiter)(void 0,void 0,void 0,(function*(){if(d.logger.report("navigation","active-events-dataset-upload-remove-clicked"),d.activeEventsClient.activeEventService.deleteActiveEvent({eventId:e.id}),e.groupedEventIds)for(const t of e.groupedEventIds)d.activeEventsClient.activeEventService.deleteActiveEvent({eventId:t})}))});return h.createElement(z.a,{graphic:i.thumbnailImage,primaryText:o,secondaryText:r,squareBorder:!0,tertiaryText:a,meta:h.createElement(z.b,null,h.createElement(l.c,null,h.createElement(_.a,{interval:6e4,date:e.eventStart,withoutSuffix:!0})),c?h.createElement($,null):h.createElement(j,{open:t,setOpen:n,options:u})),onClick:e=>{var t;null===(t=s.onClick)||void 0===t||t.call(s),window.open(s.href,"_blank"),e.stopPropagation()}})};var N=n("hdyq"),D=n("ojU7"),U=n.n(D),L=n("n9/s");const F=m.a.div`
  position: relative;
`,B=m.a.div`
  position: absolute;
  top: 6px;
  left: 6px;
`,P=({onClick:e})=>{const t=h.useContext(v.ThemeContext);return h.createElement(F,{role:"button",onClick:t=>{e(),t.stopPropagation()}},h.createElement(N.a,{style:{width:36,height:36,color:v.defaultTheme.material.color.brand.blue[500]}}),h.createElement(B,null,h.createElement(U.a,{style:{fontSize:"24px"},htmlColor:t.material.color.mode[t.name].text.high})))};const R=({event:e,open:t,setOpen:n,userAvatarUrl:i})=>{const[o,r]=h.useState(0),a=re(e);h.useEffect(()=>{a&&setTimeout(()=>r(o+1),5e3)},[a]);const c=e.kernelSessionActiveEvent;if(!c)return null;const s=`${"interactive"===c.type?"Interactive Session":`Version #${c.versionNumber}`}${function(e){switch(e){case"tpu_v3_8":case"tpu_v2_32":case"tpu_v2_256":return" with TPU";case"gpu":return" with GPU";default:return""}}(c.acceleratorType)}`;let v="",m=!1,p=!1,f=!1;switch(c.workerStatus){case"queued":v="Queued",m=!0;break;case"running":v=h.createElement(h.Fragment,null,"Running",e.stepStart&&h.createElement(h.Fragment,null,": ",h.createElement(_.a,{interval:6e4,date:e.stepStart,withoutSuffix:!0}))),m=!0,"interactive"!==c.type&&(f=!0);break;case"complete":v="Successful",f=!0,p=!0;break;case"error":v="Failed",f=!0,p=!0;break;case"cancelRequested":v="Cancelling...";break;case"cancelAcknowledged":v="Cancelled",p=!0}const E=()=>Object(y.__awaiter)(void 0,void 0,void 0,(function*(){var e;d.logger.report("navigation","active-events-kernel-session-stop-clicked");try{d.kernelsClient.cancelKernelSession({kernelSessionId:c.sessionId})}catch(t){null===(e=Object(L.a)())||void 0===e||e.report(new Error(`Failed to stop kernel session: ${t}`))}})),g={icon:"edit",text:"Edit",href:`/s/${c.kernelId}/edit`,onClick:()=>Object(y.__awaiter)(void 0,void 0,void 0,(function*(){d.logger.reportImmediate("navigation","active-events-kernel-session-edit-clicked")}))},b=[g];m&&b.push({icon:"stop",text:"Stop Session",onClick:E});const x={icon:"open_in_new",text:"Open in Viewer",href:`/sv/${c.sessionId}`,onClick:()=>Object(y.__awaiter)(void 0,void 0,void 0,(function*(){d.logger.reportImmediate("navigation","active-events-kernel-session-view-clicked")}))};f&&b.push(x),p&&b.push({icon:"clear",text:"Dismiss",onClick:()=>Object(y.__awaiter)(void 0,void 0,void 0,(function*(){d.logger.report("navigation","active-events-kernel-session-remove-clicked"),d.activeEventsClient.activeEventService.deleteActiveEvent({eventId:e.id})}))});let k=i;return"batch"===c.type&&m?k=h.createElement(P,{onClick:E}):"batch"===c.type&&p&&a?k=h.createElement(u.a,{icon:"check_circle",style:{fontSize:24}}):"batch"===c.type&&p&&(k=h.createElement(u.a,{icon:"open_in_new",style:{fontSize:24}})),h.createElement(z.a,{graphic:k,primaryText:c.title,secondaryText:s,tertiaryText:v,meta:h.createElement(z.b,null,h.createElement(l.c,null,h.createElement(_.a,{interval:6e4,date:e.eventStart,withoutSuffix:!0})),h.createElement(j,{open:t,setOpen:n,options:b})),onClick:e=>{var t;const n=f?x:g;null===(t=n.onClick)||void 0===t||t.call(n),window.open(n.href,"_blank"),e.stopPropagation()}})},q=({event:e,open:t,setOpen:n})=>{const i=e.scheduledKernelSessionActiveEvent;if(!i)return null;let o="No next run";i.nextSessionDate&&(o=`Scheduled to re-run on ${i.nextSessionDate.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}`);const r=`${i.iteration} of ${i.iterations}`,a=[{icon:"edit",text:"Edit",href:`/s/${i.kernelId}/edit`,onClick:()=>Object(y.__awaiter)(void 0,void 0,void 0,(function*(){d.logger.reportImmediate("navigation","active-events-scheduled-kernel-edit-clicked")}))}],c=h.createElement(u.a,{icon:"access_time",style:{fontSize:24}});return h.createElement(z.a,{graphic:c,primaryText:i.title,secondaryText:o,tertiaryText:r,meta:h.createElement(z.b,null,h.createElement(l.c,null,h.createElement(_.a,{interval:6e4,date:e.eventStart,withoutSuffix:!0})),h.createElement(j,{open:t,setOpen:n,options:a}))})},K=({event:e,open:t,setOpen:n})=>{const i=e.competitionSubmissionActiveEvent;if(!i)return null;let o="View Submissions",r="",a=!0;switch(i.status){case"pending":r=h.createElement(h.Fragment,null,"Executing",e.stepStart&&h.createElement(h.Fragment,null," ",h.createElement(_.a,{interval:6e4,date:e.stepStart,prefix:"for ",withoutSuffix:!0}),": Scoring..."));break;case"complete":r="Complete";break;case"error":switch(i.errorType){case"submissionErrorTypeUnspecified":r="Failed";break;case"submissionFileNotFound":r=`Submission file not found: ${i.errorDetails}`,a=!1;break;case"submissionLimitExceeded":o="View Submission Limit",r="Submission limit reached"}}const c={icon:"list",text:o,href:i.url,onClick:()=>Object(y.__awaiter)(void 0,void 0,void 0,(function*(){d.logger.reportImmediate("navigation","active-events-competition-submission-view-submissions-clicked")}))},s={icon:"clear",text:"Dismiss",onClick:()=>Object(y.__awaiter)(void 0,void 0,void 0,(function*(){d.logger.report("navigation","active-events-competition-submission-remove-clicked"),d.activeEventsClient.activeEventService.deleteActiveEvent({eventId:e.id})}))},u=[];a&&u.push(c),u.push(s);return h.createElement(z.a,{graphic:i.competitionThumbnailImageUrl,primaryText:i.competitionTitle,secondaryText:"Competition submission",squareBorder:!0,tertiaryText:r,meta:h.createElement(z.b,null,h.createElement(l.c,null,h.createElement(_.a,{interval:6e4,date:e.eventStart,withoutSuffix:!0})),h.createElement(j,{open:t,setOpen:n,options:u})),onClick:e=>{var t;null===(t=c.onClick)||void 0===t||t.call(c),window.open(c.href,"_blank"),e.stopPropagation()}})},V=({event:e,userAvatarUrl:t})=>{const[n,i]=h.useState(!1);return e.kernelSessionActiveEvent?h.createElement(R,{event:e,open:n,setOpen:i,userAvatarUrl:t}):e.datasetUploadActiveEvent?h.createElement(M,{event:e,open:n,setOpen:i,userAvatarUrl:t}):e.competitionSubmissionActiveEvent?h.createElement(K,{event:e,open:n,setOpen:i}):e.scheduledKernelSessionActiveEvent?h.createElement(q,{event:e,open:n,setOpen:i}):null},X=m.a.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 60px;

  &:focus {
    outline: none;
  }
`,Q=m.a.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`,J=m()(s.a)`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 0;
`,G=({userAvatarUrl:e,events:t})=>0===t.length?h.createElement(X,{tabIndex:0},h.createElement(l.m,null,"No Active Events"),h.createElement("br",null),h.createElement(l.b,null,"Create notebooks ",e&&" or datasets"," and keep track of their status here."),h.createElement("br",null),h.createElement(Q,null,h.createElement(w.a,{leadingIcon:"add",href:Object(S.b)(),target:"_blank",onClick:()=>d.logger.report("navigation","active-events-new-notebook-clicked")},"New Notebook"),e&&h.createElement(w.a,{leadingIcon:"add",href:"/datasets/new",target:"_blank",onClick:()=>d.logger.report("navigation","active-events-new-dataset-clicked")},"New Dataset"))):h.createElement(J,{variant:"three-line",type:"icon"},t.map(t=>h.createElement(V,{key:t.id,event:t,userAvatarUrl:e})));n.d(t,"NavigationActiveEvents",(function(){return ne})),n.d(t,"hasJustStopped",(function(){return re}));const H=m()(o.a)`
  margin-left: 8px;
  border-radius: 8px;
  z-index: ${e=>e.theme.zindex[1e3]};

  border: 1px solid ${e=>E.a[e.theme.name].border};

  ${i.k} {
    /* Fill the full screen on mobile. */
    border-radius: 0px;
    border: 0;
    left: 0;
    bottom: 0 !important;
    top: 0;
    right: 0;

    margin-left: 0;

    max-height: 100% !important;
    max-width: 100%;
  }
`,Y=m.a.div`
  display: flex;
  flex-flow: column nowrap;

  width: 500px;
  max-height: 350px;

  ${i.k} {
    width: 100%;
    max-height: 100%;
  }
`,W=m()(r.a)`
  flex: 0 0 auto;
  display: flex;
  border-bottom: 1px solid ${e=>E.a[e.theme.name].separator};
`,Z=m()(r.a)`
  flex: 0 0 auto;
  color: ${e=>e.theme.material.color.mode[e.theme.name].text.low};
  cursor: pointer;
  border-top: 1px solid ${e=>E.a[e.theme.name].separator};
`,ee=m.a.button`
  border: none;
  display: flex;
  flex-direction: row;
  height: 56px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${e=>E.a[e.theme.name].listItem.default.background};
  cursor: ${e=>e.onClick&&"pointer"};

  ${e=>e.theme.font.main.family};
  align-items: center;
  margin-bottom: 8px;

  && {
    height: ${e=>e.theme.material.spacing(10)};
    padding: ${e=>{const t=e.theme.material.spacing;return`${t(2)} 0 ${t(2)} ${t(6)}`}};
  }
  @media (hover: hover) {
    &:hover {
      background-color: ${e=>E.a[e.theme.name].listItem.hover.background};
    }
  }

  /* stylelint-disable selector-type-no-unknown */
  &:focus:not(focus-visible) {
    outline: 0;
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 3px ${a.p};
  }
`,te=m()(l.a)`
  padding-left: ${e=>e.theme.material.spacing(5)};
  white-space: nowrap;
`;function ne({userAvatarUrl:e,userId:t,settings:n}){var o;const[r,a]=h.useState(null!==(o=null==n?void 0:n.defaultMenuIsOpen)&&void 0!==o&&o),[v,m]=h.useState(new Array),[E,g]=h.useState(0),b=()=>{d.logger.report("navigation","active-events-opened"),a(!0),null==n||n.onMenuOpen(!0)},x=()=>{a(!1),null==n||n.onMenuOpen(!1)},w=Object(p.a)(i.k),S=ie(v),y=oe(v);return h.useEffect(()=>(Object(d.setActiveEventsListener)(e=>{e=Object(z.e)(e),e=Object(z.d)(e),m(e)}),()=>{Object(d.clearActiveEventsListeners)()}),[t]),h.useEffect(()=>{(null==n?void 0:n.onMenuOpen)&&!0===(null==n?void 0:n.defaultMenuIsOpen)&&!1===r&&b()},[n]),h.useEffect(()=>{"event_finished"===y&&setTimeout(()=>g(E+1),5e3)},[y]),h.createElement(c.a,null,h.createElement(H,{open:r,hoistToBody:!0,focusOnOpen:!0,anchorCorner:"topLeft",onClose:x},h.createElement(Y,null,w&&h.createElement(s.a,null,h.createElement(W,{graphic:h.createElement(k,{numEvents:S,icon:y}),primaryText:h.createElement(l.b,{emphasis:"low"},S," Active"," ",f("Event",S)),meta:h.createElement(u.a,{icon:"clear",emphasis:"high",onClick:x}),onClick:x})),h.createElement(G,{userAvatarUrl:e,events:v}),!w&&h.createElement(s.a,null,h.createElement(Z,{graphic:h.createElement(k,{numEvents:S,icon:y}),primaryText:h.createElement(l.b,{emphasis:"low"},S," Active"," ",f("Event",S)),meta:h.createElement(u.a,{icon:"expand_more",emphasis:"high",onClick:x}),onClick:x})))),h.createElement(ee,{onClick:b},h.createElement(k,{numEvents:S,icon:y}),h.createElement(te,{emphasis:"low"},"View Active Events")))}const ie=e=>e.filter(e=>!e.eventEnd).length,oe=e=>e.some(e=>re(e))?"event_finished":e.some(e=>ae(e))?"event_running":"default",re=e=>{var t,n,i,o;return void 0!==e.eventEnd&&(new Date).getTime()-e.eventEnd.getTime()<5e3&&("batch"===(null===(t=e.kernelSessionActiveEvent)||void 0===t?void 0:t.type)&&"complete"===(null===(n=e.kernelSessionActiveEvent)||void 0===n?void 0:n.workerStatus)||"finished"===(null===(i=e.datasetUploadActiveEvent)||void 0===i?void 0:i.status)||"complete"===(null===(o=e.competitionSubmissionActiveEvent)||void 0===o?void 0:o.status))},ae=e=>{var t,n,i;return"batch"===(null===(t=e.kernelSessionActiveEvent)||void 0===t?void 0:t.type)&&("running"===(null===(n=e.kernelSessionActiveEvent)||void 0===n?void 0:n.workerStatus)||"queued"===(null===(i=e.kernelSessionActiveEvent)||void 0===i?void 0:i.workerStatus))}},"1ffO":function(e,t,n){"use strict";var i=n("u0ku");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=r.default.memo(r.default.forwardRef((function(t,n){return r.default.createElement(a.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=a.default.muiName,n};var o=i(n("daqd")),r=i(n("r0ML")),a=i(n("1k4y"))},"1k4y":function(e,t,n){"use strict";n.r(t);var i=n("8XK4");n.d(t,"default",(function(){return i.a}))},"8XK4":function(e,t,n){"use strict";var i=n("IKa1"),o=n("Yh9w"),r=n("r0ML"),a=n.n(r),l=(n("cNRa"),n("MPav")),c=n("3j8v"),s=n("d8iF"),u=a.a.forwardRef((function(e,t){var n=e.children,r=e.classes,c=e.className,u=e.color,d=void 0===u?"inherit":u,v=e.component,m=void 0===v?"svg":v,p=e.fontSize,f=void 0===p?"default":p,h=e.htmlColor,E=e.titleAccess,g=e.viewBox,b=void 0===g?"0 0 24 24":g,x=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return a.a.createElement(m,Object(i.a)({className:Object(l.a)(r.root,c,"inherit"!==d&&r["color".concat(Object(s.a)(d))],"default"!==f&&r["fontSize".concat(Object(s.a)(f))]),focusable:"false",viewBox:b,color:h,"aria-hidden":E?"false":"true",role:E?"img":"presentation",ref:t},x),n,E?a.a.createElement("title",null,E):null)}));u.muiName="SvgIcon",t.a=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(u)},BQu3:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("ID3L"),o=n("r0ML");const r=e=>{const{date:t,interval:n=1e3,prefix:r,withoutSuffix:a}=e,l=o.useRef(0),c=o.useRef(0),[,s]=o.useState(0);o.useEffect(()=>(l.current&&clearInterval(l.current),l.current=window.setInterval(()=>s(c.current++),n),s(c.current++),()=>clearInterval(l.current)),[n]);const u="boolean"==typeof t?t?Date.now():0:t instanceof Date?t.getTime():new Date(t||0).getTime(),d=Math.floor(u/n)*n,v=Math.floor(Date.now()/n)*n-d;let m=i(d).fromNow(a);return m=0===u?"":v<5e3?"just now":v<6e4?(r||"")+Math.floor(v/1e3)+" seconds"+(a?"":" ago"):(r||"")+m,o.createElement("span",null,m)}},ojU7:function(e,t,n){"use strict";var i=n("u0ku");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("r0ML")),r=(0,i(n("1ffO")).default)(o.default.createElement("path",{d:"M6 6h12v12H6z"}),"Stop");t.default=r},xIxo:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v}));var i=n("4ax2"),o=n("L+vz"),r=n("bNz0"),a=n.n(r);const l=36e5;function c(e){return e.filter(e=>!e.eventEnd||function(e){return Date.now()-e.getTime()<=l}(e.eventEnd))}function s(e){const t=e.sort((e,t)=>e.eventStart&&t.eventStart?t.eventStart.getTime()-e.eventStart.getTime():0),n=new Map;return t.filter(e=>{var t,i;if("interactive"!==(null===(t=e.kernelSessionActiveEvent)||void 0===t?void 0:t.type))return!0;const o=null===(i=e.kernelSessionActiveEvent)||void 0===i?void 0:i.kernelId,r=n.get(o);if(r){const t=r.groupedEventIds||[];return t.push(e.id),r.groupedEventIds=t,!1}return n.set(o,e),!0})}function u(e){return e.filter(e=>e.competitionSubmissionActiveEvent)}const d=a()(i.a)`
  ${e=>!e.squareBorder&&"&& img {\n      border-radius: 50%;\n    }"}
`,v=a.a.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  color: ${o.j};
`}}]);
//# sourceMappingURL=chunk-12-f38a4a90f6f50170b37a.js.map