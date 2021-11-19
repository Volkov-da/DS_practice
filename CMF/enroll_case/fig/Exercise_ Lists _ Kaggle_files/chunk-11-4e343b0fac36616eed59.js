(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+p4k":function(e,t,r){"use strict";var i=r("B9N9"),n=r("G8r7");class a{constructor(e){this.tokens=this.parse(e||"")}parse(e){const t=[];let r=[],i=!1,n=!1;const a=()=>{t.push(r.join("").trim()),r=[]};for(const t of e)" "!==t||n?(":"===t?i=!0:i&&'"'===t&&(n=!n),r.push(t)):(a(),i=!1,n=!1);return a(),t}toString(){return this.tokens.join(" ")}getTokens(){return this.tokens.slice()}addToken(e){-1===this.tokens.indexOf(e)&&(this.tokens.push(e),this.tokens=this.tokens.filter(e=>""!==e))}removeToken(e){this.tokens=this.tokens.filter(t=>t!==e&&""!==t)}forEach(e){this.tokens.forEach(t=>{""!==t&&e(t)})}}r.d(t,"a",(function(){return s}));class s{constructor(e){this.filters=[],this.tokenizedString=new a(e)}getCacheKey(){return this.toRequestString().split(" ").sort().join(" ")}addFilter(e){this.filters.push(e)}removeFilter(e){this.filters=this.filters.filter(t=>!t.equals(e)),this.tokenizedString.removeToken(e.toQueryString())}convertFiltersToUiFilters(){for(const e of this.getFilters())this.tokenizedString.removeToken(e.toQueryString()),this.addFilter(e)}toInputString(){return this.tokenizedString.toString()}toRequestString(){const e=new a(this.tokenizedString.toString());return this.filters.forEach(t=>e.addToken(t.toQueryString())),e.toString()}hasFilter(e){for(const t of this.getFilters())if(t.equals(e))return!0;return!1}getFilterSet(){return new n.a(this.getFilters())}getFilters(){const e=[];return this.tokenizedString.forEach(t=>{const r=i.a.fromQueryString(t);r.isValid()&&e.push(r)}),e.concat(this.filters)}getUiFilters(){return this.filters}}},"02WM":function(e,t,r){"use strict";var i=r("bNz0"),n=r.n(i),a=r("r0ML"),s=r("L+vz"),o=r("xXVb");const l={light:{disabled:s.e,unchecked:s.h,checked:s.n},dark:{disabled:s.h,unchecked:s.e,checked:s.t}};r.d(t,"a",(function(){return m}));const c=n.a.label`
  display: flex;
  position: relative;
  height: fit-content;
  cursor: ${e=>e.disabled?"initial":"pointer"};
`,u=n.a.input`
  opacity: 0;
  height: 24px;
  width: 24px;
  position: absolute;
  z-index: 2;
  cursor: pointer;

  & + span {
    .path {
      fill: ${e=>e.checkboxTheme.unchecked};
    }

    .checked .path {
      fill: ${e=>e.checkboxTheme.checked};
    }
    .unchecked {
      display: block;
    }

    .checked {
      display: none;
    }

    .indeterminate {
      display: none;
    }
  }

  &:checked + span {
    .unchecked {
      display: none;
    }

    .checked {
      display: block;
    }

    .indeterminate {
      display: none;
    }
  }

  &:indeterminate + span {
    .unchecked {
      display: none;
    }

    .checked {
      display: none;
    }

    .indeterminate {
      display: block;
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    .path {
      fill: ${e=>e.checkboxTheme.disabled};
    }
  }
`,h=n()(o.q)`
  ${e=>e.disabled&&`color: ${s.e};`}
  margin-left: 8px;
`,m=e=>{const{onChange:t,onClick:r,checked:n,children:s,className:o,disabled:m,indeterminate:d,label:g,title:p,value:f,name:b}=e,S=a.useContext(i.ThemeContext),y=l[S.name],w=a.useRef(null);return a.useEffect(()=>{const e=w.current;e&&(e.indeterminate=d||!1)},[d]),a.createElement(c,{disabled:!!m},a.createElement(u,{id:"kaggleCheckbox",type:"checkbox",checked:n,className:o,disabled:m,onChange:t,onClick:r,value:f||"true",title:p,name:b,checkboxTheme:y,tabIndex:0,ref:w}),a.createElement("span",{style:{height:"fit-content"}},a.createElement("svg",{className:"checked",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM13.6 4.6L15 6L7 14L3 10L4.4 8.6L7 11.2L13.6 4.6Z",fill:"#202124"})),a.createElement("svg",{className:"unchecked",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M2 0H16C17.1 0 18 0.9 18 2V16C18 17.1 17.1 18 16 18H2C0.9 18 0 17.1 0 16V2C0 0.9 0.9 0 2 0ZM16 16V2H2V16H16Z",fill:"#80868B"})),a.createElement("svg",{className:"indeterminate",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{className:"path",fillRule:"evenodd",clipRule:"evenodd",d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 2V16H2V2H16ZM4 10H14V8H4V10Z",fill:"#80868B"}))),(g||s)&&a.createElement(h,{disabled:m},g||s))}},B9N9:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var i=r("zaIJ"),n=r("Rnpp"),a=r("deIe");const s=new Set(["date","in","by","tag","authorUserName","sortBy","competitionEvaluationAlgorithm","datasetLicense","datasetSize","datasetSizeGroup","datasetFileTypes","kernelLanguageGroup","viewedByYou"]),o=new Set(["blogs","competitions","datasets","notebooks","comments","organizations","topics","users","courses","tutorials"]),l=new Set(["1","7","90"]),c=new Set(["relevancy","date"]);class u{constructor(e,t,r,i){this.type=e,this.name=t,this.group=r,this.count=i}static fromCategory(e,t){switch(e){case n.a.BLOG:return new u("tag","blogs","in",t);case n.a.COMMENT:return new u("tag","comments","in",t);case n.a.COMPETITION:return new u("tag","competitions","in",t);case n.a.DATASET:return new u("tag","datasets","in",t);case n.a.KERNEL:return new u("tag","notebooks","in",t);case n.a.ORGANIZATION:return new u("tag","organizations","in",t);case n.a.TOPIC:return new u("tag","topics","in",t);case n.a.USER:return new u("tag","users","in",t);case n.a.TUTORIAL:return new u("tag","tutorials","in",t);case n.a.COURSE:return new u("tag","courses","in",t);default:throw new Error(`Unrecognized fromCategory: ${e}`)}}static fromQueryString(e){const t=e.split(":"),r=(t[0]||"").trim();let i=(t[1]||"").trim();return i.startsWith('"')&&i.endsWith('"')&&(i=i.slice(1,-1)),new u("user",i,r)}toQueryString(){let e=this.name;return e.match(" ")&&(e=`"${e}"`),`${this.group}:${e}`}getType(){return this.type}getName(){return this.name}getUserVisibleName(){return"date"===this.group?this.getDateUserVisibleName():"in"===this.group||"sortBy"===this.group?this.getNameAsTitleCase():this.name}isValid(){return this.isGroupValid()&&this.isNameValid()}isNameValid(){return"in"===this.group?o.has(this.name):"sortBy"===this.group?c.has(this.name):"date"===this.group?l.has(this.name):this.name.length>0}isGroupValid(){return s.has(this.group)}getDateUserVisibleName(){switch(this.name){case"1":return"Today";case"7":return"Last week";case"90":return"Last 90 days";default:return this.name}}getNameAsTitleCase(){return this.name.split(" ").map(e=>e[0].toUpperCase()+e.slice(1)).join(" ")}getGroup(){return this.group}getUserVisibleGroup(){return Object(i.a)(this.group)}getCount(){return this.count}getFormattedCount(){return void 0===this.count?"":Object(a.a)(this.count)}isCategoryFilter(){return"in"===this.group&&this.isValid()}getCategory(){if(this.isCategoryFilter())switch(this.name){case"blogs":return n.a.BLOG;case"competitions":return n.a.COMPETITION;case"datasets":return n.a.DATASET;case"notebooks":return n.a.KERNEL;case"comments":return n.a.COMMENT;case"organizations":return n.a.ORGANIZATION;case"topics":return n.a.TOPIC;case"users":return n.a.USER;case"courses":return n.a.COURSE;case"tutorials":return n.a.TUTORIAL}return null}isSortFilter(){return"sortBy"===this.group&&this.isValid()}isDateFilter(){return"date"===this.group&&this.isValid()}equals(e){return this.toQueryString()===e.toQueryString()}}const h=Array.from(c).map(e=>new u("radio",e,"sortBy"))},Ellv:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("zaIJ");class n{constructor(e,t,r){this.type=e,this.name=t,this.filters=r}toFormattedString(){return Object(i.a)(this.name)}hasOption(){return this.filters.length>0}getFilters(){return this.filters}getType(){return this.type}}},FdQv:function(e,t,r){"use strict";r.r(t);var i=r("7eW0"),n=r("r0ML"),a=r("uLBD"),s=r("hdyq"),o=r("bNz0"),l=r.n(o),c=r("s1uJ"),u=r("ACZ/"),h=r("UNrv"),m=r("jN5E"),d=r("jnZR");const g=Date.now();class p{constructor(e,t){this.reportEvent=e,this.reportEventDuringUnload=t,this.searchStartTime=Date.now(),this.isTimeSpentOnPageLogged=!1}startSearchTimer(){this.searchStartTime=Date.now()}getPageLoadTime(){return g}logTimeSpentOnPage(e){return Object(h.__awaiter)(this,void 0,void 0,(function*(){const t=Object(d.a)();if(!t||this.isTimeSpentOnPageLogged)return;this.isTimeSpentOnPageLogged=!0;const r={clickedLink:!0,secondsOnPage:Math.floor((Date.now()-this.getPageLoadTime())/1e3),token:t};e?this.reportEventDuringUnload("search","successLog",r):this.reportEvent("search","successLog",r),i.searchClient.searchWebService.timeSpentOnClickedResult({seconds:r.secondsOnPage,resultToken:t})}))}logSearchExited(e,t){return Object(h.__awaiter)(this,void 0,void 0,(function*(){if(!this.isValidLogEvent(e))return;const r=this.getSearchData(e);return this.logSearchBoxUsed(r,t),this.logSuccessLog({clickedLink:!1,secondsOnPage:-1,token:void 0}),this.logSearchLog(r)}))}logSearchResultClicked(e,t,r){return Object(h.__awaiter)(this,void 0,void 0,(function*(){if(!this.isValidLogEvent(e))return;const i=this.getSearchData(e,t);return Object(d.b)(i.token),this.logSearchBoxUsed(i,r),this.logSearchLog(i)}))}getSearchData(e,t){return{index:"global",isQuick:!0,query:e.toRequestString(),secondsSpentSearching:Math.floor((Date.now()-this.searchStartTime)/1e3),rank:t&&t.getRank(),isPrivate:t&&t.isPrivate(),url:t&&t.getUrl(),id:t&&t.getId(),token:t&&Object(m.v4)()}}isValidLogEvent(e){return Boolean(e.toRequestString().trim())}logSearchBoxUsed(e,t){const r=Object.assign(Object.assign({},e),{source:"Mercat",isSuggested:t});this.reportEvent("search","searchBoxUsed",r)}logSuccessLog(e){this.reportEvent("search","successLog",e)}logSearchLog(e){return i.searchClient.searchWebService.logSearch(Object.assign({},e))}}var f=r("AvoL"),b=r.n(f);class S{constructor(){this.cache=new b.a({max:50,maxAge:6e5})}set(e){this.cache.set(this.generateCacheKey(e.getSearchQuery(),e.getCurrentPage()),e)}get(e,t=1){return this.cache.get(this.generateCacheKey(e,t))}generateCacheKey(e,t){return`${e.getCacheKey()} page=${t}`}}var y=r("G8r7"),w=r("LeQ6"),x=r("B9N9"),E=r("Ellv"),C=r("zaIJ");class v{constructor(e,t,r,i,n,a,s){this.searchResultItems=e,this.count=t,this.filters=r,this.categoryFilters=i,this.searchQuery=n,this.page=a,this.totalPages=s}getCurrentPage(){return this.page}getTotalPages(){return this.totalPages}getSearchResultItems(){return this.searchResultItems}getCount(){return this.count}getFilters(){return this.filters}getSearchQuery(){return this.searchQuery}getCategoryFilterGroup(){return this.categoryFilters}}class I{constructor(e,t,r,i){this.recentSearches=e,this.trendingSearches=t,this.recentlyViewed=r,this.popularTags=i}getRecentSearches(){return this.recentSearches}getTrendingSearches(){return this.trendingSearches}getRecentlyViewed(){return this.recentlyViewed}getPopularTags(){return this.popularTags}}class T{constructor(e,t){this.groups=e,this.autocompleteSuggestions=t}getAutocompleteSuggestions(){return this.autocompleteSuggestions}getSearchResultGroups(){return this.groups}}class ${constructor(){this.initialDataChannel=new w.a,this.suggestedResultsChannel=new w.a,this.fullResultsChannel=new w.a}subscribeInitialData(e){return this.initialDataChannel.subscribe(e)}subscribeSuggestedResults(e){return this.suggestedResultsChannel.subscribe(e)}subscribeFullResults(e){return this.fullResultsChannel.subscribe(e)}fetchInitialData(){const e=Promise.all([this.fetchRecentSearches(),this.fetchTrendingSearches(),this.fetchRecentlyViewedItems(),this.fetchPopularTags()]).then(([e,t,r,i])=>new I(e,t,r.map(C.e),Object(C.f)(i)));this.initialDataChannel.enqueue(e)}fetchSuggestedResults(e){const t=e.toRequestString(),r=Promise.all([i.searchClient.suggestedSearchWeb({query:t}),this.fetchAutocompleteSuggestions(t)]).then(([e,t])=>new T(e.groups.filter(e=>e.documents.length).map(C.d),t));this.suggestedResultsChannel.enqueue(r)}fetchFullResults(e,t,r){t=t||1,r=r||20;const n=i.searchClient.fullSearchWeb({query:e.toRequestString(),page:t,resultsPerPage:r,showPrivate:!0}).then(({documents:i,count:n,filters:a,categories:s})=>new v(i.map(C.e),n,Object(C.c)(a),new E.a("tag","in",s.map(e=>x.a.fromCategory(e.name,e.count))),e,t,Math.ceil(n/r)));this.fullResultsChannel.enqueue(n)}recordTimeSpentOnClickedResult(e,t){return Object(h.__awaiter)(this,void 0,void 0,(function*(){return i.searchClient.searchWebService.timeSpentOnClickedResult({seconds:e,resultToken:t})}))}fetchAutocompleteSuggestions(e){return Object(h.__awaiter)(this,void 0,void 0,(function*(){return(yield i.searchClient.searchWebService.getAutoCompleteSuggestions({prefix:e})).autoCompleteSuggestions||[]}))}fetchPopularTags(){return Object(h.__awaiter)(this,void 0,void 0,(function*(){return(yield i.searchClient.searchWebService.getPopularTags({})).popularTags||[]}))}fetchTrendingSearches(){return Object(h.__awaiter)(this,void 0,void 0,(function*(){return(yield i.searchClient.searchWebService.getTrendingSearches({})).trendingSearches.filter(e=>e.trim())||[]}))}fetchRecentlyViewedItems(){return Object(h.__awaiter)(this,void 0,void 0,(function*(){return Promise.resolve([])}))}fetchRecentSearches(){return Object(h.__awaiter)(this,void 0,void 0,(function*(){return(yield i.searchClient.searchWebService.getRecentSearches({userId:null,specificSearchIndices:[]})).recentSearches||[]}))}}var k=r("+p4k"),F=r("Vq1p");const R="/search",O="q",N="Search | Kaggle";const P=new class{constructor(){this.channel=new F.a,this.nextSearchIndex=1,this.searchIndexOnInitialize=1,this.onPopstate=e=>{this.conditionallyCaptureWindowState(),this.isCurrentlyOnSearchRoute()&&(e.preventNavigation(),this.channel.trigger(this.getQueryStringFromLocation()))},this.isInitiallyOnSearchRoute=this.isCurrentlyOnSearchRoute(),this.cachedWindowState=this.cacheWindowState(),Object(a.c)(this.onPopstate)}cacheWindowState(){return this.cachedWindowState=this.getWindowState()}restoreWindowState(){document.title===N&&(document.title=this.cachedWindowState.documentTitle),window.location.pathname===R&&Object(a.d)(this.cachedWindowState.historyState,document.title,this.cachedWindowState.locationHref)}isOnSearchStandalonePage(){return this.isInitiallyOnSearchRoute}isCurrentlyOnSearchRoute(){return window.location.pathname===R}setQueryStringInLocation(e){this.syncWindowState(),e=e.trim();let t=R;e&&(e=encodeURIComponent(e).replace(/%20/g,"+"),t+=`?${O}=${e}`),Object(a.d)({searchIndex:this.nextSearchIndex++},document.title,t),document.title=N}getQueryStringFromLocation(){return this.isCurrentlyOnSearchRoute()&&new URL(window.location.href).searchParams.get(O)||""}isOnInitialState(){const e=window.history.state||{};return this.searchIndexOnInitialize===e.searchIndex}initializeSearchPage(e=""){this.isCurrentlyOnSearchRoute()||(this.searchIndexOnInitialize=this.nextSearchIndex,this.cacheWindowState(),this.setQueryStringInLocation(e))}subscribeToSearchBrowserNavigation(e){return this.channel.subscribe(e)}syncWindowState(){document.title!==N&&(this.cachedWindowState.documentTitle=document.title),window.location.pathname!==R&&(this.cachedWindowState.historyState=window.history.state,this.cachedWindowState.locationHref=window.location.href)}getWindowState(){return{locationHref:window.location.href,historyState:window.history.state,documentTitle:document.title}}conditionallyCaptureWindowState(){this.isCurrentlyOnSearchRoute()||this.cacheWindowState()}},U=600,L=`@media (max-width: ${U}px)`;function D(){try{return window.matchMedia(`(max-width: ${U}px)`).matches}catch(e){return console.warn("Error occurred calling window.matchMedia.",e.message),!1}}var V=r("zEmK"),z=r("xXVb"),q=r("02WM");const A=l()(q.a)`
  overflow: hidden;
  width: 100%;

  & label {
    overflow: hidden;
  }
`,M=l()(z.b)`
  cursor: pointer;

  && {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
  }
`,G=n.memo(({searchFilter:e})=>{const t=n.useContext(Zr),r=e.getUserVisibleName();return n.createElement(A,{value:r,checked:t.appliedFilters.hasFilter(e),onChange:r=>{r.target.checked?t.addFilter(e):t.removeFilter(e)}},n.createElement(M,{title:r},r))});var j=r("deIe");const B=222,Q=80,H=l()(z.e)`
  && {
    cursor: pointer;
    color: ${e=>e.theme.material.color.brand.blue[500]};
    margin-left: ${e=>e.theme.material.spacing(11)};
    margin-top: ${e=>e.theme.material.spacing(2)};
  }
`,W=14,K=l.a.div`
  position: relative;
`,_=l.a.div`
  flex-shrink: 0;
  height: ${W}px;
  width: ${e=>e.width}px;
  border-radius: ${W}px 0 0 ${W}px;
  background-color: ${e=>e.theme.material.color.brand.blue[200]};
`,Z=l()(z.e)`
  position: absolute;
  right: 2px;
  top: -1px;

  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`;function X(e,t){t=Math.max(t,50);const r=Math.log(e)/Math.log(t)*Q,i=r<W?W:r;return{filterWidth:i,labelWidth:B-i}}function J({width:e,count:t}){return n.createElement(K,null,n.createElement(_,{width:e}),n.createElement(Z,null,Object(j.a)(t)))}var Y=r("99e6");const ee=l.a.div`
  display: flex;
  justify-content: space-between;
`,te=l()(z.n)`
  && {
    margin-left: 10px;
    line-height: 22px;
    font-size: 14px;
  }
`,re=l.a.div`
  display: flex;
  align-items: center;
`,ie=l()(Y.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[400]};
  }

  cursor: pointer;
`;function ne({searchFilterGroup:e,className:t}){const r=n.useContext(Zr),i=r.appliedFilters.hasFilterInGroup(e);return n.createElement(ee,{className:t},n.createElement(te,null,e.toFormattedString()),i&&n.createElement(re,{onClick:()=>{r.modifyFilters([],e.getFilters())}},n.createElement(ie,{icon:"close",size:"xsmall"})))}const ae=l.a.div`
  display: flex;
  flex-direction: column;
  width: ${B}px;
`,se=l.a.div`
  display: flex;
  flex-direction: column;
`,oe=l.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  height: ${e=>e.theme.material.spacing(7)};
`,le=l.a.div`
  width: ${e=>e.width}px;
`,ce=n.memo(({searchFilterGroup:e,maxCount:t})=>{const r=e.getFilters(),[i,a]=n.useState(!1);return e.hasOption()?n.createElement(ae,null,n.createElement(ne,{searchFilterGroup:e}),n.createElement(se,null,r.slice(0,i?r.length:3).map(e=>{const r=e.getCount()||0,i=X(r,t);return n.createElement(oe,{key:e.getName()},n.createElement(le,{width:i.labelWidth},n.createElement(G,{searchFilter:e})),n.createElement(J,{width:i.filterWidth,count:r}))}),r.length>3&&n.createElement(H,{onClick:()=>a(!i)},i?"Less":"More"))):null});var ue=r("+6tg");const he=l.a.div`
  display: flex;
  flex-direction: column;
  width: ${B}px;
`,me=l.a.div`
  display: flex;
  flex-direction: column;
`,de=l.a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  height: ${e=>e.theme.material.spacing(7)};
`,ge=l.a.div`
  width: ${e=>e.width}px;
`,pe=l()(ue.a)`
  overflow: hidden;
  width: 100%;

  & label {
    overflow: hidden;
    cursor: pointer;
    text-overflow: ellipsis;
    font-size: 12px;
  }
`,fe=n.memo(({searchFilterGroup:e,maxCount:t})=>{const r=e.getFilters(),[i,a]=n.useState(!1);if(!e.hasOption())return null;const s=n.useContext(Zr);return n.createElement(he,null,n.createElement(ne,{searchFilterGroup:e}),n.createElement(me,null,r.slice(0,i?r.length:3).map(r=>{const i=r.getUserVisibleName(),a=r.getCount()||0,o=X(a,t);return n.createElement(de,{key:r.getName()},n.createElement(ge,{width:o.labelWidth},n.createElement(pe,{value:i,checked:s.appliedFilters.hasFilter(r),onChange:()=>{const t=e.getFilters().filter(e=>e!==r);s.modifyFilters([r],t)}},i)),n.createElement(J,{width:o.filterWidth,count:a}))}),r.length>3&&n.createElement(H,{onClick:()=>a(!i)},i?"Less":"More")))});var be=r("0vXt");const Se=l()(be.a)`
  && {
    background-color: ${e=>e.isSelected?e.theme.material.color.brand.blue[200]:e.theme.material.color.white};
    border: 1px solid
      ${e=>e.isSelected?e.theme.material.color.brand.blue[200]:e.theme.material.color.brand.grey[200]};
  }
`,ye=l.a.div`
  display: flex;
  align-items: center;
`,we=l.a.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`,xe=l.a.div`
  display: flex;
  align-items: center;
  margin-left: ${e=>e.theme.material.spacing(1)};
  font-size: 12px;
`,Ee=n.memo(({searchFilter:e})=>{const t=n.useContext(Zr),r=e.getFormattedCount(),i=t.appliedFilters.hasFilter(e);return n.createElement(Se,{size:"small",isSelected:i,onClick:()=>{i?t.removeFilter(e):t.addFilter(e)}},n.createElement(ye,null,n.createElement(we,null,e.getUserVisibleName()),r&&n.createElement(xe,null,r)))}),Ce=l.a.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`,ve=l.a.div`
  display: flex;
  flex-wrap: wrap;
`,Ie=l.a.div`
  margin: ${e=>e.theme.material.spacing(2)}
    ${e=>e.theme.material.spacing(1)} 0 0;
`,Te=l()(ne)`
  && {
    margin-left: 0;
  }
`,$e=n.memo(({searchFilterGroup:e})=>e.hasOption()?n.createElement(Ce,null,n.createElement(Te,{searchFilterGroup:e}),n.createElement(ve,null,e.getFilters().map(e=>n.createElement(Ie,{key:e.getName()},n.createElement(Ee,{searchFilter:e}))))):null),ke=l.a.div`
  width: ${B}px;
`,Fe=l.a.div`
  padding: ${e=>e.theme.material.spacing(3)} 0;
`,Re=l()(z.b)`
  && {
    font-size: 12px;
    color: ${e=>e.theme.material.color.brand.grey[400]};
  }

  margin-left: 10px;
  margin-top: ${e=>e.theme.material.spacing(3)};
`,Oe=n.memo(({searchFilterGroupList:e})=>{const t=(e=>{let t=0;for(const r of e)if("tag"!==r.getType())for(const e of r.getFilters())t=Math.max(t,e.getCount()||0);return t})(e);return n.createElement(ke,null,!e.length&&n.createElement(Re,null,"No filters available for these results"),e.map(e=>{switch(e.getType()){case"checkbox":return n.createElement(Fe,{key:e.toFormattedString()},n.createElement(ce,{maxCount:t,searchFilterGroup:e}));case"radio":return n.createElement(Fe,{key:e.toFormattedString()},n.createElement(fe,{searchFilterGroup:e,maxCount:t}));case"tag":return n.createElement(Fe,{key:e.toFormattedString()},n.createElement($e,{searchFilterGroup:e}));case"user":return""}}))});var Ne=r("8P0Q");r("OTm6"),r("/LBV"),r("YebJ");const Pe=({handle:e,onSelect:t,anchorCorner:r,children:i})=>n.createElement(Ne.c,{handle:e,onSelect:t,anchorCorner:r,children:i});var Ue=r("pT5d");const Le=l.a.div`
  display: flex;
  align-items: center;

  & .mdc-menu {
    width: ${e=>e.theme.material.spacing(50)};

    /* MDC achieves offset using inline style, need !important to override
       via class. */
    left: -${e=>e.theme.material.spacing(15)} !important;
    border-radius: ${e=>e.theme.material.borderRadius.normal};
  }

  & .mdc-list-item {
    font-size: 14px;
    height: ${e=>e.theme.material.spacing(9)};
  }

  & .mdc-list {
    padding: ${e=>e.theme.material.spacing(2)} 0 0 0;
  }
`,De=l()(z.b)`
  margin-right: ${e=>e.theme.material.spacing(2)};

  && {
    font-size: 14px;
  }
`,Ve=l()(Y.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[700]};
  }
  margin-left: ${e=>e.theme.material.spacing(6)};
`,ze=l.a.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;function qe(){const e=n.useContext(Zr),[t,r]=n.useState(x.b[0].getUserVisibleName());return n.useEffect(()=>{for(const t of x.b)if(e.appliedFilters.hasFilter(t))return void r(t.getUserVisibleName());r(x.b[0].getUserVisibleName())}),n.createElement(Le,null,n.createElement(De,null,"Sort by: "),n.createElement(Pe,{anchorCorner:"bottomLeft",onSelect:t=>{const i=x.b[t.detail.index];r(i.getUserVisibleName()),e.modifyFilters(i===x.b[0]?[]:[i],x.b)},handle:n.createElement(ze,null,n.createElement(z.b,{"data-testid":"searchSortDropdownHandle"},t),n.createElement(Ve,{icon:"arrow_drop_down",size:"medium"}))},x.b.map((e,t)=>n.createElement(Ue.a,{key:e.toQueryString()},n.createElement("span",{"data-testid":`searchSortDropdownMenuItem${t}`},e.getUserVisibleName())))))}const Ae=l.a.div`
  padding: ${e=>e.theme.material.spacing(3)} 0;
  margin: 0 ${e=>e.theme.material.spacing(3)};
  border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
`,Me=l.a.div`
  & .mdc-drawer-scrim {
    /* Match z-index of top level Search component. Z-index potentially needs
       to be added to injected theme, see b/137297765. */
    z-index: 1001;
  }
`,Ge=l()(V.a)`
  && {
    overflow-y: auto;
    top: 0;
    left: 0;
    /* z-index of top level Search component + 1. Z-index potentially needs
       to be added to injected theme, see b/137297765. */
    z-index: 1002;
  }
`;function je({isOpen:e,onClose:t,filterGroups:r}){return n.createElement(Me,null,n.createElement(Ge,{open:e,onClose:t},n.createElement(Ae,null,n.createElement(qe,null)),n.createElement(Ae,null,n.createElement(z.b,null,"Filter by")),n.createElement(Oe,{searchFilterGroupList:r})))}const Be=l.a.div`
  min-height: ${e=>e.theme.material.spacing(7)};

  ${L} {
    min-height: 0;
    white-space: nowrap;
  }
`,Qe=l.a.div`
  display: inline-flex;
  align-items: center;
  background-color: ${e=>e.theme.material.color.brand.blue[200]};
  border-radius: 500px;
  font-size: 12px;
  height: ${e=>e.theme.material.spacing(6)};
  padding: 0 ${e=>e.theme.material.spacing(2)} 0
    ${e=>e.theme.material.spacing(3)};
  color: ${e=>e.theme.material.color.brand.grey[900]};
  margin: 0 ${e=>e.theme.material.spacing(1)}
    ${e=>e.theme.material.spacing(1)} 0;
`,He=l.a.div`
  margin-left: ${e=>e.theme.material.spacing(1)};
  display: flex;
  align-items: center;
`,We=l()(Y.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[700]};
    font-size: 14px;
    cursor: pointer;
  }
`,Ke=l()(be.a)`
  display: inline-flex;
`;function _e(){const e=n.useContext(Zr),t=e.appliedFilters.getFilters().filter(e=>!e.isCategoryFilter());return n.createElement(Be,null,t.map(t=>n.createElement(Qe,{key:t.toQueryString(),title:t.getUserVisibleGroup()+": "+t.getUserVisibleName()},t.getUserVisibleName(),n.createElement(He,{onClick:()=>e.removeFilter(t)},n.createElement(We,{icon:"close"})))),t.length>1&&n.createElement(Ke,{onClick:()=>e.modifyFilters([],t)},"Clear Filters"))}const Ze=l()(be.a)`
  &&& {
    border-color: ${e=>e.isSelected&&e.theme.material.color.brand.blue[500]};
    background-color: ${e=>e.isSelected?e.theme.material.color.brand.blue[500]:e.theme.colors.pure.white};
  }
`,Xe=l.a.div`
  display: flex;
  align-items: center;
`,Je=l()(Y.a)`
  &&& {
    color: ${e=>e.isSelected?e.theme.colors.pure.white:e.theme.material.color.text[50]};
    width: ${e=>e.theme.material.spacing(5)};
    margin-left: -2px;
  }
`,Ye=l()(z.b)`
  margin-left: ${e=>e.theme.material.spacing(2)};
  color: ${e=>e.isSelected&&e.theme.colors.pure.white};
  position: relative;
  top: 1px;
`,et=l()(z.e)`
  && {
    color: ${e=>e.isSelected?e.theme.colors.pure.white:e.theme.material.color.brand.grey[500]};
  }

  margin-left: ${e=>e.theme.material.spacing(2)};
  position: relative;
  top: 1px;
`;const tt=l.a.div`
  display: flex;
  flex-wrap: wrap;

  ${L} {
    flex-wrap: nowrap;
  }
`,rt=l()((function({searchCategoryFilter:e,className:t}){const r=n.useContext(Zr),i=e.getFormattedCount(),a=r.appliedFilters.hasFilter(e);return n.createElement(Ze,{isSelected:a,onClick:()=>{a?r.removeFilter(e):r.addFilter(e)},className:t},n.createElement(Xe,null,n.createElement(Je,{icon:a?"check":Object(j.b)(e.getCategory()),size:"small",isSelected:a}),n.createElement(Ye,{isSelected:a},e.getUserVisibleName()),i&&n.createElement(et,{isSelected:a},i)))}))`
  margin: ${e=>e.theme.material.spacing(1)+" "+e.theme.material.spacing(2)};
  top: -${e=>e.theme.material.spacing(1)};
  position: relative;
  flex-shrink: 0;

  ${L} {
    margin-right: 0;
  }
`;function it({searchFilterGroup:e}){const t=e.getFilters();return n.createElement(tt,null,t.map(e=>n.createElement(rt,{searchCategoryFilter:e,key:e.toQueryString()})))}const nt=l.a.div`
  display: flex;
  align-items: center;
`,at=l.a.span`
  margin: 0 ${e=>e.theme.material.spacing(3)};
`,st=l.a.span`
  font-weight: ${e=>e.isCurrentPage?500:400};
  color: ${e=>e.isCurrentPage?e.theme.material.color.text[70]:e.theme.material.color.text[40]};
  font-size: ${e=>e.theme.material.typography.body2.fontSize};
  padding: 0 6px;
  cursor: ${e=>e.isEllipsis?"default":"pointer"};
`,ot=l()(Y.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[700]};
  }
`,lt=l.a.button`
  background: ${e=>e.theme.material.color.white};
  color: ${e=>e.disabled?e.theme.material.color.brand.grey[100]:e.theme.material.color.brand.grey[500]};
  cursor: pointer;
  outline: 0;
  border: 1px solid
    ${e=>e.disabled?e.theme.material.color.white:e.theme.material.color.brand.grey[200]};
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>e.theme.material.spacing(10)};
  height: ${e=>e.theme.material.spacing(10)};
  transition: background 100ms linear, color 100ms linear, border 100ms linear;

  ${e=>!e.disabled&&`&:focus {\n      background: ${e.theme.material.color.brand.grey[50]};\n    }\n\n    &:hover {\n      background: ${e.theme.material.color.brand.grey[100]};\n    }`}
`;function ct({currentPage:e,numPages:t,onSelectPage:r}){return n.createElement(nt,null,n.createElement(lt,{disabled:1===e,onClick:()=>{e>1&&r(e-1)}},n.createElement(ot,{icon:"chevron_left",size:"small"})),n.createElement(at,null,function(e,t){const r=[];if(t<=6||e<6){for(let e=1;e<=t;e++)r.push(e.toString());return r.slice(0,6)}if(e>=t-3)return["1","…",(t-4).toString(),(t-3).toString(),(t-2).toString(),(t-1).toString(),t.toString()];return["1","…",(e-1).toString(),e.toString(),(e+1).toString(),(e+2).toString(),(e+3).toString()]}(e,t).map((t,i)=>{const a=Number(t),s=!isNaN(a);return n.createElement(st,{key:t+i,isCurrentPage:t===e.toString(),isEllipsis:!s,onClick:()=>{s&&r(a)}},t)})),n.createElement(lt,{disabled:e===t,onClick:()=>{e<t&&r(e+1)}},n.createElement(ot,{icon:"chevron_right",size:"small"})))}var ut=r("MxOh"),ht=r("KQM+"),mt=r("htQU");const dt=l.a.div`
  display: flex;
  flex-wrap: wrap;
`,gt=l()(z.e)`
  padding-right: ${e=>e.theme.material.spacing(3)};
  display: flex;
  align-items: center;
  white-space: nowrap;
  line-height: 20px;

  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`,pt=l()(z.e)`
  padding-right: ${e=>e.theme.material.spacing(3)};

  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`,ft=l()(Y.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[500]};
    margin-right: ${e=>e.theme.material.spacing(1)};
  }
`,bt=l.a.div`
  display: flex;
  align-items: center;
`;function St({items:e}){return n.createElement(dt,null,e.map((e,t)=>n.createElement(bt,{key:e.text},t>0&&n.createElement(pt,null,"•"),n.createElement(gt,{isFirst:0===t},e.icon&&n.createElement(ft,{icon:e.icon,size:"xsmall"}),e.text))))}var yt=r("mP7e");const wt=l.a.a`
  text-decoration: none;
  color: inherit;
`,xt=l.a.div`
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  display: inline-flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  padding: ${e=>e.theme.material.spacing(4)};

  &:hover {
    background: ${e=>e.theme.material.color.brand.grey[50]};
  }
`,Et=l()(z.e)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: ${e=>e.theme.material.spacing(1)};
`;function Ct({searchResultItem:e,hideName:t}){return n.createElement(wt,{href:e.getUrl()},n.createElement(xt,{"data-testid":"search-avatar"},n.createElement(yt.Avatar,{displayName:e.getAuthorDisplayName(),hideTooltip:!0,thumbnailUrl:e.getImageUrl(),userUrl:e.getUrl(),tier:e.getTier(),width:48}),!t&&n.createElement(Et,null,e.getAuthorDisplayName())))}const vt=l.a.a`
  display: block;
  text-decoration: inherit;
  color: inherit;
`,It=l()(ht.a)`
  && {
    display: flex;
    height: auto;
    padding: 0;
    align-items: flex-start;
  }
`,Tt=l.a.div`
  display: flex;
  padding-top: ${e=>e.theme.material.spacing(4)};
  width: ${e=>e.theme.material.spacing(19)};
  flex-shrink: 0;
`,$t=l.a.img`
  width: 48px;
  height: 48px;
  border-radius: ${e=>e.theme.material.borderRadius.normal};
  margin-right: ${e=>e.theme.material.spacing(7)};
`,kt=l.a.div`
  padding: ${e=>e.theme.material.spacing(4)} 0;
  display: flex;
  flex-direction: column;
  ${e=>!e.hideBottomBorder&&`border-bottom: 1px solid ${e.theme.material.color.brand.grey[200]}`};
  flex-grow: 1;
  min-height: ${e=>e.theme.material.spacing(15)};
`,Ft=l()(z.e)`
  && {
    display: flex;
    align-items: center;
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`,Rt=l()(Y.a)`
  &&& {
    color: ${e=>e.theme.material.color.brand.grey[500]};
    margin-right: ${e=>e.theme.material.spacing(2)};
  }
`,Ot=l()(z.e)`
  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }

  && .search-matching-text {
    color: ${e=>e.theme.material.color.brand.blue[900]};
    font-weight: 500;
  }
`,Nt=l.a.div`
  margin: ${e=>e.theme.material.spacing(1)} 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`,Pt=l()(z.n)`
  && {
    color: ${e=>e.theme.material.color.brand.grey[900]};
  }
`;function Ut({searchResultItem:e,hideBottomBorder:t=!1}){const r=n.useContext(Zr),i=e.getTitle(),a=e.getSubtitle(),s=e.getFullSubheaderItems(),o=e.getMatchingTextHtml();return n.createElement(vt,{"data-search-enable-back":"true",href:e.getUrl(),onClick:()=>{r.logSearchResultClicked(e)}},n.createElement(It,{className:_r},n.createElement(Tt,null,e instanceof mt.a?n.createElement(Ct,{searchResultItem:e,hideName:!0}):n.createElement($t,{src:e.getImageUrl()})),n.createElement(kt,{hideBottomBorder:t},n.createElement(Nt,null,n.createElement(Ft,null,n.createElement(Rt,{icon:e.getIconName(),size:"xsmall"}),e.getUserVisibleCategory())),i&&n.createElement(Nt,null,n.createElement(Pt,null,i)),a&&n.createElement(Nt,null,n.createElement(Ot,null,a)),s.length>0&&n.createElement(Nt,null,n.createElement(St,{items:s})),o&&n.createElement(Nt,null,Object(ut.s)(n.createElement(Ot,null),o)))))}const Lt=l.a.div`
  padding: 0 ${e=>e.theme.material.spacing(6)};

  ${L} {
    padding: 0;
  }
`,Dt=l.a.div`
  margin-top: ${e=>e.theme.material.spacing(10)};

  ${L} {
    margin: 0;
  }
`,Vt=l.a.div`
  display: flex;
  margin-top: ${e=>e.theme.material.spacing(9)};

  ${L} {
    margin-top: ${e=>e.theme.material.spacing(4)};
  }
`,zt=l.a.div`
  width: ${B};
  flex-shrink: 0;
  margin-right: ${e=>e.theme.material.spacing(35)};

  /**
   * One-off media query to collapse the space between the left and right
   * columns. Existing breakpoints didn't look correct.
   */
  @media (max-width: 950px) {
    margin-right: ${e=>e.theme.material.spacing(4)};
  }

  ${L} {
    display: none;
  }
`,qt=l.a.div`
  margin-top: ${e=>e.theme.material.spacing(4)};

  ${L} {
    overflow-x: auto;
    margin-top: ${e=>e.theme.material.spacing(2)};
    border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  }
`,At=l.a.div`
  margin-left: -6px;
`,Mt=l.a.div`
  margin-left: 2px;
`,Gt=l()(z.a)`
  ${L} {
    display: none;
  }
`,jt=l()(z.b)`
  ${L} {
    margin-left: ${e=>e.theme.material.spacing(4)};
  }
`,Bt=l.a.div`
  margin-left: ${e=>e.theme.material.spacing(14)};

  ${L} {
    display: none;
  }
`,Qt=l.a.div`
  margin-top: ${e=>e.theme.material.spacing(4)};
  padding-top: ${e=>e.theme.material.spacing(1)};
  margin-left: -10px;
  border-top: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
`,Ht=l.a.div`
  margin-top: ${e=>e.theme.material.spacing(3)};
  border-top: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
`,Wt=l.a.div`
  flex-grow: 1;
  max-width: ${e=>e.theme.material.spacing(200)};
`,Kt=l.a.div`
  display: flex;
  align-items: center;
  width: 100%;

  ${L} {
    justify-content: space-between;
  }
`,_t=l.a.div`
  display: none;

  ${L} {
    display: inline-flex;
  }
`,Zt=l()(be.a)`
  margin-right: ${e=>e.theme.material.spacing(2)};

  &&&& {
    border-radius: ${e=>e.theme.material.borderRadius.normal};
  }
`,Xt=l.a.div`
  margin: ${e=>e.theme.material.spacing(4)} 0;
`,Jt=l.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${e=>e.theme.material.spacing(150)};
  margin: auto;
  margin-top: ${e=>e.theme.material.spacing(18)};
`,Yt=l()(z.a)`
  margin-bottom: ${e=>e.theme.material.spacing(10)};
  text-align: center;
`,er=l()(z.b)`
  max-width: ${e=>e.theme.material.spacing(100)};
  text-align: center;

  && {
    line-height: 22px;
  }
`,tr=l.a.img`
  width: 220px;
  height: 196px;
  margin-bottom: ${e=>e.theme.material.spacing(10)};
`,rr=l.a.a`
  color: ${e=>e.theme.material.color.brand.blue[500]};
`,ir=l()(z.b)`
  margin-top: ${e=>e.theme.material.spacing(7)};
  margin-bottom: ${e=>e.theme.material.spacing(4)};
`,nr=n.memo(({searchFullResult:e})=>{const t=n.useContext(Zr),r=e.getSearchResultItems(),i=r.length>0,a=e.getSearchQuery().toInputString(),s=e.getCount(),o=1===s?"Result":"Results";return n.createElement(Lt,{"data-testid":"searchFullResultsPage"},n.createElement(Dt,null,n.createElement(Gt,null,a?`Searching for ${a} within`:"Searching on everything within"),n.createElement(qt,null,n.createElement(At,null,n.createElement(it,{searchFilterGroup:e.getCategoryFilterGroup()})),n.createElement(Mt,null,n.createElement(_e,null)))),i&&n.createElement(Vt,null,n.createElement(zt,null,n.createElement(z.b,null,"Filter by"),n.createElement(Qt,null,n.createElement(Oe,{searchFilterGroupList:e.getFilters()}))),r.length>0&&n.createElement(Wt,null,n.createElement(Kt,null,n.createElement(jt,null,`${Object(j.a)(s)} ${o}`),n.createElement(Bt,null,n.createElement(qe,null)),n.createElement(_t,null,n.createElement(Zt,{leadingIcon:"filter_list",onClick:()=>{t.showFilterDrawer()}},"Filters"))),n.createElement(Ht,null,r.map((e,t)=>n.createElement(Ut,{searchResultItem:e,key:e.getId(),hideBottomBorder:t===r.length-1}))),n.createElement(ir,null,"How was your search?"," ",n.createElement(rr,{href:"https://google.qualtrics.com/jfe/form/SV_3f4EtcDXkeLG11z",target:"_blank"},"Let us know.")),e.getTotalPages()>1&&n.createElement(Xt,null,n.createElement(ct,{currentPage:e.getCurrentPage(),numPages:e.getTotalPages(),onSelectPage:r=>{t.queryFullResult(e.getSearchQuery(),r),t.scrollToTop()}})))),!r.length&&n.createElement(Jt,null,n.createElement(Yt,null,'We came up empty searching for "',e.getSearchQuery().toInputString(),'".'),n.createElement(tr,{src:"/static/images/community/no-search-results.jpg"}),n.createElement(er,null,"Perhaps try a broader search term, or a different keyword. Have feedback?"," ",n.createElement(rr,{href:"https://google.qualtrics.com/jfe/form/SV_3f4EtcDXkeLG11z",target:"_blank"},"Let us know."))))}),ar=l.a.div`
  cursor: ${e=>e.onClick?"pointer":"auto"};
`,sr=l()(ht.a)`
  && {
    min-height: 56px;
    padding: 0;
    height: auto;
    box-sizing: border-box;
  }
`,or=l.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  flex-shrink: 0;
`,lr=l()(Y.a)`
  &&& {
    color: ${e=>e.theme.material.color.text[50]};
  }
`,cr=l.a.img`
  width: 24px;
  height: 24px;
  border-radius: ${e=>e.theme.material.borderRadius.normal};
`,ur=l()(z.n)`
  && {
    line-height: 24px;
    color: ${e=>e.theme.material.color.brand.grey[900]};
  }

  margin-right: ${e=>e.theme.material.spacing(4)};
`,hr=l.a.div`
  align-items: center;
  border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  height: 100%;
  min-height: 56px;
  flex-wrap: wrap;
  padding: ${e=>e.theme.material.spacing(3)} 0;

  ${L} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`,mr=l.a.div`
  /* Prevent second row from displaying on mobile if items wrap. */
  ${L} {
    height: ${e=>e.theme.material.spacing(5)};
    overflow-y: hidden;
  }
`;function dr({header:e,icon:t,imageUrl:r,subheaderItems:i=[],children:a,query:s}){const o=n.useContext(Zr);return n.createElement(ar,{onClick:()=>{s&&o.queryFullResult(s)}},n.createElement(sr,{className:_r},n.createElement(or,null,t&&n.createElement(lr,{icon:t}),r&&n.createElement(cr,{src:r})),n.createElement(hr,null,e&&n.createElement(ur,null,e),!!i.length&&n.createElement(mr,null,n.createElement(St,{items:i})),a)))}const gr=l.a.a`
  display: block;
  text-decoration: inherit;
  color: inherit;
`;function pr({searchResultItem:e,hideItemCategory:t}){const r=n.useContext(Zr);return n.createElement(gr,{href:e.getUrl(),onClick:()=>{r.logSearchResultClicked(e)}},n.createElement(dr,{imageUrl:e.getImageUrl(),header:e.getTitle(),subheaderItems:t?e.getFullSubheaderItems():e.getCondensedSubheaderItems()}))}var fr=r("0O6r");const br=l.a.div`
  align-items: center;
  display: flex;
`,Sr=l()(z.b)`
  color: ${e=>e.theme.material.color.text[100]};
`,yr=l()(z.e)`
  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }

  margin-left: ${e=>e.theme.material.spacing(2)};
`,wr=l()(be.a)`
  &&&.mdc-chip {
    box-sizing: border-box;
  }
`;function xr({tagFilterGroup:e}){const t=n.useContext(Zr);return n.createElement(fr.a,null,e.getFilters().map(e=>{const r=e.getCount();return n.createElement(wr,{key:e.toQueryString(),onClick:r=>{t.addFilter(e),r.stopPropagation()}},n.createElement(br,null,n.createElement(Sr,null,e.getName()),r&&n.createElement(yr,null,r)))}))}const Er=l.a.div`
  display: flex;
  flex-direction: column;
`,Cr=l()(z.b)`
  height: auto;
  padding: ${e=>`${e.theme.material.spacing(1)} ${e.theme.material.spacing(5)}`};
  margin: ${e=>e.theme.material.spacing(7)} 0
    ${e=>e.theme.material.spacing(4)};
`,vr=l.a.div`
  display: flex;
  flex-wrap: wrap;
`,Ir=l.a.div`
  display: inline-block;
  margin: ${e=>e.theme.material.spacing(1)}
    ${e=>e.theme.material.spacing(1)} ${e=>e.theme.material.spacing(1)} 0;
  border-radius: 500px;
  padding: 1px ${e=>e.theme.material.spacing(2)};
  background: ${e=>e.theme.material.color.brand.blue[200]};
`,Tr=l.a.div``,$r=l.a.div`
  padding-left: ${e=>e.theme.material.spacing(3)};
`,kr=n.memo(({searchInitialData:e})=>{const t=e.getTrendingSearches(),r=e.getPopularTags(),i=r.getFilters();return n.createElement(Er,{"data-testid":"searchInitialPage"},e.getRecentSearches().map(e=>{const t=new k.a(e);t.convertFiltersToUiFilters();const r=t.getFilters();return n.createElement(dr,{key:t.toRequestString(),header:t.toInputString(),query:t,icon:"history"},n.createElement(vr,null,r.map(e=>{const t=`${e.getUserVisibleGroup()}: ${e.getUserVisibleName()}`;return n.createElement(Ir,{key:t,title:t},n.createElement(z.e,null,e.getUserVisibleName()))})))}),e.getRecentlyViewed().map(e=>n.createElement(pr,{key:e.getId(),searchResultItem:e})),!!t.length&&n.createElement(Tr,null,n.createElement(Cr,null,"Trending Searches"),t.map(e=>n.createElement(dr,{key:e,header:e,query:new k.a(e),icon:"trending_up"}))),!!i.length&&n.createElement(Tr,null,n.createElement(Cr,null,"Popular Tags"),n.createElement($r,null,n.createElement(xr,{tagFilterGroup:r}))))});var Fr=r("6YMH");const Rr=l.a.div`
  background: ${e=>e.theme.material.color.white};
  border-bottom: 1px solid ${e=>e.theme.material.color.brand.grey[200]};
  display: flex;
  height: ${56}px;
  justify-content: space-between;
  padding: 0 ${e=>e.theme.material.spacing(1)};
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
`,Or=l()(Fr.a)`
  position: relative;
  left: ${e=>e.theme.material.spacing(3)};
`,Nr=l.a.form`
  display: flex;
  flex-grow: 1;
`,Pr=l.a.input`
  && {
    ${e=>e.theme.font.main.family};
  }

  border: 0;
  flex-grow: 1;
  font-size: ${e=>e.theme.material.typography.h6.fontSize};
  font-weight: ${e=>e.theme.material.typography.h6.fontWeight};
  color: ${e=>e.theme.material.color.text[70]};
  height: 100%;
  margin: 0 0 0 ${e=>e.theme.material.spacing(2)};
  outline: 0;
  padding: 0;
`,Ur=l.a.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  height: 100%;
`,Lr=l.a.div`
  align-items: center;
  display: flex;
`;function Dr({value:e,onChange:t,onBack:r,onSearch:i,onClose:a}){return n.createElement(Rr,null,n.createElement(Ur,null,n.createElement(Fr.a,{icon:"arrow_back",onClick:()=>r()}),n.createElement(Nr,{"data-testid":"searchInputBarFormElement",onSubmit:e=>{e.preventDefault(),i()}},n.createElement(Pr,{"data-testid":"searchInputBarInputElement",className:_r,value:e,onChange:e=>t(e.target.value),type:"text",size:1,"aria-label":"Search"}))),n.createElement(Lr,null,n.createElement(Or,{icon:"search",onClick:()=>i()}),n.createElement(Fr.a,{icon:"close",onClick:()=>a()})))}var Vr=r("Rnpp");const zr=l()(Y.a)``,qr=l()(ht.a)`
  && {
    align-items: center;
    height: 52px;
    justify-content: space-between;
    padding: 0 20px;
  }

  && ${zr} {
    display: none;
  }

  &&:hover ${zr} {
    display: block;
  }
`,Ar=l()(z.e)`
  display: inline-block;
  margin-left: 12px;

  && {
    color: ${e=>e.theme.material.color.brand.grey[500]};
  }
`,Mr=l()(z.b)``,Gr=l.a.div`
  &:hover ${Mr} {
    color: ${e=>e.theme.material.color.brand.blue[500]};
  }

  &&:hover ${zr} {
    color: ${e=>e.theme.material.color.brand.blue[500]};
  }

  &:hover .mdc-list-item__meta {
    color: ${e=>e.theme.material.color.brand.blue[500]};
  }

  &:hover ${Ar} {
    color: ${e=>e.theme.material.color.brand.blue[500]};
  }

  cursor: ${e=>e.onClick&&"pointer"};
`;function jr({text:e,count:t,onClick:r}){return n.createElement(Gr,{onClick:r},n.createElement(qr,{className:_r},n.createElement(Mr,null,e,t&&n.createElement(Ar,null,"View all ",Object(j.a)(t))),n.createElement(zr,{icon:"arrow_forward",size:"small"})))}const Br=l.a.div`
  display: ${e=>e.isUserRow&&"flex"};
  margin-left: ${e=>e.isUserRow&&e.theme.material.spacing(12)};
`;function Qr({searchResultGroup:e}){const t=e.getCategory(),r=n.useContext(Zr);return n.createElement("div",null,n.createElement(jr,{text:Object(C.b)(t),count:e.getCount(),onClick:()=>{r.addFilter(x.a.fromCategory(t))}}),n.createElement(Br,{isUserRow:e.getCategory()===Vr.a.USER},e.getItems().map(e=>e instanceof mt.a?n.createElement(Ct,{searchResultItem:e}):n.createElement(pr,{key:e.getId(),searchResultItem:e,hideItemCategory:!0}))))}const Hr=l.a.div`
  display: flex;
  flex-direction: column;
`,Wr=l.a.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`,Kr=n.memo(({searchSuggestedResult:e,query:t})=>n.createElement(Hr,{"data-testid":"searchSuggestionsPage"},n.createElement(dr,{icon:"search",header:`View all results for "${t.toInputString()}"`,query:t}),e.getAutocompleteSuggestions().filter(e=>e!==t.toInputString()).map(e=>n.createElement(dr,{header:e,query:new k.a(e),icon:"search",key:e})),e.getSearchResultGroups().map(e=>n.createElement(Wr,{key:e.getCategory()},n.createElement(Qr,{searchResultGroup:e}))))),_r="searchTarget",Zr=n.createContext({appliedFilters:new y.a([]),queryFullResult(e,t,r){},addFilter(e){},removeFilter(e){},modifyFilters(e,t){},showFilterDrawer(){},scrollToTop(){},logSearchResultClicked(e){}}),Xr=165,Jr=l.a.div`
  transform: ${e=>!e.isPermanentlyOpen&&"scaleX(0.8)"};
  width: 100%;
  margin: auto;
  transition: transform ${Xr}ms cubic-bezier(0, 0, 0.2, 1);
  will-change: transform;

  &.show-enter {
    transform: scaleX(0.8);
  }

  &.show-enter-active,
  &.show-enter-done,
  &.show-exit {
    transform: scaleX(1);
  }
`,Yr=l.a.div`
  display: ${e=>e.isPermanentlyOpen?"flex":"none"};
  opacity: ${e=>!e.isPermanentlyOpen&&"0"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  /**
   * Site header in mobile view is z-index 1000, Mercat needs to appear on top
   * of it. Manually adding 1001 z-index for now, but need to see whether it
   * should be added to the styled-components theme.ts file.
   * TODO(b/137297765): Investigate
   */
  z-index: 1001; /* Keep in sync with Loading component z-index */
  transition: opacity ${Xr}ms linear;
  flex-direction: column;
  align-items: center;
  will-change: opacity;
  flex-grow: 1;

  &.show-enter {
    display: flex;
  }

  &.show-enter-active,
  &.show-enter-done,
  &.show-exit {
    display: flex;
    opacity: 1;
  }

  &.show-exit-active {
    display: flex;
    opacity: 0;
  }
`,ei=l.a.div`
  background: ${e=>e.theme.material.color.white};
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
  display: flex;
`,ti=l.a.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: ${56}px;
  height: calc(100vh - ${56}px);
  z-index: 1001; /* Keep in sync with Wrapper component z-index */
`,ri=l.a.div`
  width: 100%;
  height: 100%;
  background-color: ${e=>e.theme.colors.pure.white};
  opacity: 0.6;
  position: absolute;
  z-index: 1;
`,ii=l()(s.a)`
  && {
    z-index: 2;
    position: relative;
  }
`,ni=l.a.div`
  opacity: ${e=>!e.isPermanentlyOpen&&"0"};
  transform: ${e=>!e.isPermanentlyOpen&&"translateY(-45px)"};

  transition: transform ${Xr}ms cubic-bezier(0, 0, 0.2, 1),
    opacity ${Xr}ms linear;
  transition-delay: ${Xr}ms;
  will-change: transform, opacity;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: relative;
  width: 100%;

  &.show-enter {
    opacity: 0;
    transform: translateY(-45px);
  }

  &.show-enter-active,
  &.show-enter-done,
  &.show-exit,
  &.show-exit-active {
    opacity: 1;
    transform: translateY(0);
  }
`;var ai;!function(e){e[e.INITIAL=0]="INITIAL",e[e.SUGGESTED=1]="SUGGESTED",e[e.FULL=2]="FULL"}(ai||(ai={}));class si extends n.Component{constructor(e){super(e),this.unsubscribeCallbacks=[],this.containerRef=n.createRef(),this.contentRef=n.createRef(),this.fullResultCache=new S,this.isLastSearchSuggested=!1,this.queryFullResult=(e,t,r)=>{if(!e.toRequestString())return void(this.state.page!==ai.INITIAL&&this.goToInitialPage());this.isLastSearchSuggested=!1;const i=this.fullResultCache.get(e,t);this.setState({page:ai.FULL,query:e,fullResult:i||this.state.fullResult,isFullSearchRequested:!i,suggestedResult:void 0}),i||this.state.searchManager.fetchFullResults(e,t),r||P.setQueryStringInLocation(e.toRequestString()),this.setLastQuery(e)},this.addFilter=e=>{const t=this.state.query;t.addFilter(e),this.queryFullResult(t)},this.removeFilter=e=>{const t=this.state.query;t.removeFilter(e),this.queryFullResult(t)},this.modifyFilters=(e,t)=>{const r=this.state.query;t.forEach(e=>r.removeFilter(e)),e.forEach(e=>r.addFilter(e)),this.queryFullResult(r)},this.showFilterDrawer=()=>{this.setState({isFilterDrawerOpen:!0})},this.popstateListener=e=>{this.getIsVisible()&&!P.isCurrentlyOnSearchRoute()&&(e.preventNavigation(),this.exitSearchModal())},this.scrollToTop=()=>{const e=this.contentRef.current;e&&(e.scrollTop=0)},this.windowKeydownListener=e=>{if(this.getIsVisible())switch(e.keyCode){case 27:return void this.props.onHide();case 40:return void(this.isActiveElementSearchTarget()&&(e.preventDefault(),this.setFocusOnNextTarget()));case 38:return void(this.isActiveElementSearchTarget()&&(e.preventDefault(),this.setFocusOnPreviousTarget()));case 13:this.isActiveElementSearchTarget()&&(document.activeElement.click(),this.focusInputElement())}},this.logSearchResultClicked=e=>{this.analytics.logSearchResultClicked(this.state.query,e,this.state.page===ai.SUGGESTED)},this.logTimeSpentOnPage=()=>{this.analytics.logTimeSpentOnPage(!1)},this.logTimeSpentOnPageBeforeUnload=()=>{this.analytics.logTimeSpentOnPage(!0)},this.onSearchBrowserNavigation=e=>{if(e){const t=new k.a(e);t.convertFiltersToUiFilters(),this.queryFullResult(t,void 0,!0)}else this.goToInitialPage();this.props.isVisible||this.props.onShow()};const t=e.query||P.getQueryStringFromLocation(),r=new k.a(t);this.state={page:t?ai.FULL:ai.INITIAL,searchManager:e.searchManager||new $,initialData:void 0,suggestedResult:void 0,fullResult:void 0,isFilterDrawerOpen:!1,isMobileBreakpoint:D(),isQueryTimerStarted:!1,isFullSearchRequested:!1,query:r,context:{appliedFilters:r.getFilterSet(),queryFullResult:this.queryFullResult,addFilter:this.addFilter,removeFilter:this.removeFilter,modifyFilters:this.modifyFilters,showFilterDrawer:this.showFilterDrawer,scrollToTop:this.scrollToTop,logSearchResultClicked:this.logSearchResultClicked}},this.windowResizeHandler=Object(u.b)(200,this.windowResizeHandler).bind(this),this.fetchSuggestedResults=Object(u.a)(250,this.fetchSuggestedResults).bind(this);const{analyticsClient:i}=this.props.clientsContext.legacyClients;this.analytics=new p(i.logger.report,i.logger.reportImmediate)}componentDidMount(){this.unsubscribeCallbacks.push(this.state.searchManager.subscribeInitialData(e=>{this.setState({initialData:e})})),this.unsubscribeCallbacks.push(this.state.searchManager.subscribeSuggestedResults(e=>{this.setState({suggestedResult:e})})),this.unsubscribeCallbacks.push(this.state.searchManager.subscribeFullResults(e=>{this.fullResultCache.set(e),this.setState({fullResult:e,isFullSearchRequested:!1})})),this.unsubscribeCallbacks.push(P.subscribeToSearchBrowserNavigation(this.onSearchBrowserNavigation)),window.addEventListener("resize",this.windowResizeHandler),window.addEventListener("keydown",this.windowKeydownListener),Object(a.c)(this.popstateListener),this.registerTimeSpentOnPageListeners(),this.state.searchManager.fetchInitialData(),this.state.query.toRequestString()&&this.queryFullResult(this.state.query,void 0,!0),this.props.isPermanentlyOpen&&this.togglePageScroll(!1)}setLastQuery(e){e.toRequestString()&&(this.lastNonEmptyQuery=e)}componentDidUpdate(e){if(!e.isVisible&&this.getIsVisible()&&(this.focusInputElement(),this.togglePageScroll(!1),P.initializeSearchPage(this.state.query.toRequestString()),this.analytics.startSearchTimer(),this.setLastQuery(this.state.query)),e.query!==this.props.query&&this.props.query){const e=new k.a(this.props.query);this.setState({query:e}),this.queryFullResult(e)}e.isVisible&&!this.getIsVisible()&&this.togglePageScroll(!0),!this.state.isMobileBreakpoint&&this.state.isFilterDrawerOpen&&this.setState({isFilterDrawerOpen:!1});const t=this.state.query.getFilterSet();this.state.context.appliedFilters.equals(t)||this.setState({context:Object.assign(Object.assign({},this.state.context),{appliedFilters:t})})}getIsVisible(){return this.props.isVisible||this.getIsPermanentlyOpen()}togglePageScroll(e){document.documentElement.style.overflow=e?"":"hidden"}componentWillUnmount(){window.removeEventListener("resize",this.windowResizeHandler),window.removeEventListener("keydown",this.windowKeydownListener),Object(a.e)(this.popstateListener),this.unregisterTimeSpentOnPageListeners(),this.unsubscribeCallbacks.forEach(e=>e()),this.togglePageScroll(!0)}focusInputElement(){const e=this.containerRef.current;if(e){const t=e.querySelector("input");t&&(t.focus(),t.select())}}getIsPermanentlyOpen(){return this.props.isPermanentlyOpen||!1}render(){return n.createElement(Zr.Provider,{value:this.state.context},n.createElement(c.CSSTransition,{in:this.getIsVisible(),timeout:Xr,classNames:"show"},n.createElement(Yr,{"data-testid":"searchContainer",ref:this.containerRef,isPermanentlyOpen:this.getIsPermanentlyOpen()},n.createElement(c.CSSTransition,{in:this.getIsVisible(),timeout:Xr,classNames:"show"},this.getIsVisible()?n.createElement(Jr,{isPermanentlyOpen:this.getIsPermanentlyOpen()},n.createElement(Dr,{value:this.state.query.toInputString(),onChange:e=>{this.startQueryTimer(),e.trim()?(this.isLastSearchSuggested=!0,this.goToSuggestedResultsPage(e)):this.goToInitialPage()},onBack:()=>{P.isOnInitialState()?this.exitSearchModal():window.history.back()},onSearch:()=>{this.isLastSearchSuggested=!1,this.queryFullResult(this.state.query)},onClose:()=>{this.exitSearchModal()}})):n.createElement("div",null)),n.createElement(ei,{ref:this.contentRef},n.createElement(c.CSSTransition,{in:this.getIsVisible(),timeout:2*Xr,classNames:"show"},this.getIsVisible()?n.createElement(ni,{isPermanentlyOpen:this.getIsPermanentlyOpen()},(()=>this.state.page===ai.INITIAL&&this.state.initialData?n.createElement(kr,{searchInitialData:this.state.initialData}):this.state.page===ai.SUGGESTED&&this.state.suggestedResult?n.createElement(Kr,{query:this.state.query,searchSuggestedResult:this.state.suggestedResult}):this.state.page===ai.FULL&&this.state.fullResult?n.createElement(nr,{searchFullResult:this.state.fullResult}):"")()):n.createElement("div",null))))),this.getIsVisible()&&n.createElement(je,{isOpen:this.state.isFilterDrawerOpen,onClose:()=>this.setState({isFilterDrawerOpen:!1}),filterGroups:this.state.fullResult&&this.state.fullResult.getFilters()||[]}),this.state.isFullSearchRequested&&this.state.page===ai.FULL&&!this.state.isFilterDrawerOpen&&this.getIsVisible()&&n.createElement(ti,null,n.createElement(ii,{size:"xlarge"}),n.createElement(ri,null)))}startQueryTimer(){this.state.isQueryTimerStarted||(this.setState({isQueryTimerStarted:!0}),this.analytics.startSearchTimer(),this.logTimeSpentOnPage())}windowResizeHandler(){const e=D();this.state.isMobileBreakpoint!==e&&this.setState({isMobileBreakpoint:e})}fetchSuggestedResults(e){this.state.searchManager.fetchSuggestedResults(e)}goToSuggestedResultsPage(e){const t=new k.a(e);this.setState({page:ai.SUGGESTED,fullResult:void 0,query:t}),this.fetchSuggestedResults(t),this.setLastQuery(t)}goToInitialPage(){this.state.searchManager.fetchInitialData(),this.setState({page:ai.INITIAL,query:new k.a(""),suggestedResult:void 0,fullResult:void 0})}isActiveElementSearchTarget(){return document.activeElement&&document.activeElement.classList.contains(_r)||!1}getFocusableElements(){return this.containerRef&&this.containerRef.current&&this.containerRef.current.getElementsByClassName(_r)||[]}setFocusOnNextTarget(){const e=document.activeElement,t=this.getFocusableElements();let r=!1;for(let i=0;i<t.length-1;i++)if(t[i]===e){t[i+1].focus(),r=!0;break}r||t[0].focus()}setFocusOnPreviousTarget(){const e=document.activeElement,t=this.getFocusableElements();let r=!1;for(let i=1;i<t.length;i++)if(t[i]===e){t[i-1].focus(),r=!0;break}r||t[t.length-1].focus()}exitSearchModal(){this.props.onHide(),P.restoreWindowState(),this.logSearchExited()}logSearchExited(){this.lastNonEmptyQuery&&this.analytics.logSearchExited(this.lastNonEmptyQuery,this.isLastSearchSuggested),this.lastNonEmptyQuery=void 0}registerTimeSpentOnPageListeners(){window.addEventListener("unload",this.logTimeSpentOnPageBeforeUnload),this.logTimeSpentOnPageTimeout=window.setTimeout(this.logTimeSpentOnPage,6e4)}unregisterTimeSpentOnPageListeners(){clearTimeout(this.logTimeSpentOnPageTimeout)}}function oi(e){const t=n.useContext(i.ClientsContext);return n.createElement(si,Object.assign({clientsContext:t},e))}r.d(t,"SearchContainer",(function(){return oi}))},G8r7:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));class i{constructor(e){this.filterSet=new Set(e.map(e=>e.toQueryString())),this.filters=e}size(){return this.filterSet.size}has(e){return this.filterSet.has(e)}hasFilterInGroup(e){for(const t of e.getFilters())if(this.hasFilter(t))return!0;return!1}hasFilter(e){return this.has(e.toQueryString())}getFilters(){return this.filters}equals(e){for(const t of this.filterSet)if(!e.has(t))return!1;return e.size()===this.size()}}},Rnpp:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a}));var i=r("7eW0"),n=i.Kaggle.Sdk.Search.Protos.DocumentType,a=i.Kaggle.Sdk.Search.Protos.FilterType,s=i.Kaggle.Sdk.Search.Protos.FilterName},deIe:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var i=r("Rnpp");function n(e){return Intl&&Intl.NumberFormat?(new Intl.NumberFormat).format(e):e.toString()}function a(e){switch(e){case i.a.BLOG:return"book";case i.a.COMMENT:return"question_answer";case i.a.COMPETITION:return"trophy";case i.a.DATASET:return"table_chart";case i.a.KERNEL:return"code";case i.a.ORGANIZATION:return"business";case i.a.TOPIC:return"question_answer";case i.a.USER:return"account_circle";case i.a.TUTORIAL:return"code";case i.a.COURSE:return"book";default:throw new Error(`Unrecognized category: ${e}`)}}},hGh4:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("dtFi"),n=r("deIe");class a{constructor(e){this.model=e}getId(){return this.model.id}getRank(){return this.model.rank}isPrivate(){return this.model.isPrivate}getTitle(){return this.model.title||""}getUrl(){return this.model.url||""}getAuthorDisplayName(){return this.model.authorDisplayName}getAuthorSlug(){return this.model.authorSlug}getDate(){return this.model.date&&Object(i.b)(this.model.date)||void 0}getVotes(){return this.model.votes}getCategory(){return this.model.documentType}getImageUrl(){return this.model.thumbnailImageUrl||""}getIconName(){return Object(n.b)(this.getCategory())}getMatchingTextHtml(){return this.model.matchedText}getVotesSubheaderItem(){return{text:this.getVotes().toString(),icon:"expand_less"}}getByAuthorText(){return`by ${this.model.authorDisplayName}`}getCommonSubheaderItems(){const e=[];return this.model.isPrivate&&e.push({text:"Private",icon:"visibility_off"}),e}}},htQU:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r("dtFi"),n=r("ID3L"),a=r("dnDE"),s=r("hGh4");class o extends s.a{constructor(e){super(e)}getSubtitle(){return this.getDescription()||""}getUserVisibleCategory(){return"Kaggle User"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems(),t=this.getLastSeenDate();return t&&e.push({text:`Last seen ${n(t).fromNow()}`}),e.push({text:`Joined ${n(this.getDate()).fromNow()}`}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getTier(){return Object(a.c)(this.getPerformanceTier()||0)}getKernelsCount(){return this.model.userInfo&&this.model.userInfo.kernelsCount}getTopicsCount(){return this.model.userInfo&&this.model.userInfo.topicsCount}getDescription(){return this.model.userInfo&&this.model.userInfo.description}getLastSeenDate(){const e=this.model.userInfo&&this.model.userInfo.lastSeenDate;return e&&Object(i.b)(e)||void 0}getPerformanceTier(){return this.model.userInfo&&this.model.userInfo.performanceTier}}},jnZR:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));const i=(()=>{const e=("; "+document.cookie).split("; searchToken=");let t;return 2===e.length&&(t=e.pop().split(";").shift()),document.cookie="searchToken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;",t})();function n(e){document.cookie=`searchToken=${e};path=/`}function a(){return i}},zaIJ:function(e,t,r){"use strict";var i=r("B9N9"),n=r("Ellv");class a{constructor(e,t,r){this.category=e,this.items=t,this.count=r}getItems(){return this.items}getCount(){return this.count}getCategory(){return this.category}}var s=r("hGh4");class o extends s.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Blog"}getFullSubheaderItems(){return this.getCommonSubheaderItems()}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}}var l=r("ID3L");class c extends s.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Comment"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems();e.push({text:l(this.getDate()).fromNow()});const t=this.getForumName();return t&&e.push({text:t}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getForumName(){return this.model.commentInfo&&this.model.commentInfo.forumName}getForumType(){return this.model.commentInfo&&this.model.commentInfo.forumType}getMatchingText(){return this.model.commentInfo&&this.model.commentInfo.matchingText}}var u=r("dtFi"),h=r("7eW0");class m extends s.a{constructor(e){super(e)}getSubtitle(){const e=[this.getUserVisibleType()];return this.model.competitionInfo&&this.model.competitionInfo.isKernelsOnly&&e.push("Kernels competition"),e.join(" • ")}getUserVisibleCategory(){return"Competition"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems(),t=this.getDeadlineDate();t&&e.push({text:l(t).fromNow()});const r=this.getPrizeValue();r&&e.push({text:`$${r.toLocaleString()}`});const i=this.getTeamsCount();return i&&e.push({text:`${i} teams`}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getTeamsCount(){return this.model.competitionInfo&&this.model.competitionInfo.teamsCount}getDeadlineDate(){const e=this.model.competitionInfo&&this.model.competitionInfo.deadlineDate;return e&&Object(u.b)(e)||void 0}getPrizeValue(){return this.model.competitionInfo&&this.model.competitionInfo.prizeValue}getHasEntered(){return this.model.competitionInfo&&this.model.competitionInfo.hasEntered}getHostSegmentType(){return this.model.competitionInfo&&this.model.competitionInfo.type}getUserVisibleType(){switch(this.getHostSegmentType()||h.Kaggle.Sdk.Competitions.Protos.HostSegment.UNSPECIFIED){case h.Kaggle.Sdk.Competitions.Protos.HostSegment.UNSPECIFIED:return"None";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.FEATURED:return"Featured";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.RESEARCH:return"Research";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.RECRUITMENT:return"Recruitment";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.PROSPECT:return"Prospect";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.GETTING_STARTED:return"Getting Started";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.MASTERS:return"Masters";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.GE_QUESTS:return"GE Quests";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.PLAYGROUND:return"Playground";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.DATASETS:return"Datasets";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.IN_CLASS:return"In Class";case h.Kaggle.Sdk.Competitions.Protos.HostSegment.ANALYTICS:return"Analytics";default:return""}}isKernelsOnly(){return this.model.competitionInfo&&this.model.competitionInfo.isKernelsOnly}}class d extends s.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Learn Micro-Course"}getFullSubheaderItems(){return this.getCommonSubheaderItems()}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}}var g=r("PYUi");class p extends s.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Dataset"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems();e.push({text:l(this.getDate()).fromNow()});const t=this.getFileTypes(),r=this.getFilesCount();t&&t.length&&r&&e.push({text:`${r} ${1===r?"file":"files"} (${t.join(", ")})`});const i=this.getSize();return i&&e.push({text:g(i,{round:0})}),e.push(this.getVotesSubheaderItem()),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getSize(){return this.model.datasetInfo&&this.model.datasetInfo.size}getFileTypes(){return this.model.datasetInfo&&this.model.datasetInfo.fileTypes}getKernelsCount(){return this.model.datasetInfo&&this.model.datasetInfo.kernelsCount}getFilesCount(){return this.model.datasetInfo&&this.model.datasetInfo.filesCount}}class f extends s.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Notebook"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems();e.push({text:l(this.getDate()).fromNow()});const t=this.getRunTimeText();t&&e.push({text:t});const r=this.getLanguageGroup();r&&e.push({text:r}),e.push(this.getVotesSubheaderItem());const i=this.getDataSource();return i&&e.push({text:i}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getRunTimeText(){if(!this.getSecondsToRun())return null;const e=new Date(1e3*(this.getSecondsToRun()||0));return(e.getUTCHours()>0?`${e.getUTCHours()}h`:e.getUTCMinutes()>0?`${e.getUTCMinutes()}m`:`${e.getUTCSeconds()}s`)+" to run"}getLanguageGroup(){return this.model.kernelInfo&&this.model.kernelInfo.languageGroup}getSecondsToRun(){return this.model.kernelInfo&&this.model.kernelInfo.secondsToRun}getDataSource(){return this.model.kernelInfo&&this.model.kernelInfo.dataSource}getForksCount(){return this.model.kernelInfo&&this.model.kernelInfo.forksCount}}class b extends s.a{constructor(e){super(e)}getSubtitle(){return this.getLocation()}getUserVisibleCategory(){return"Organization"}getFullSubheaderItems(){return this.getCommonSubheaderItems()}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getLocation(){return this.model.organizationInfo&&this.model.organizationInfo.location||""}}class S extends s.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Discussion topic"}getFullSubheaderItems(){const e=this.getCommonSubheaderItems(),t=this.getCreationDate();t&&e.push({text:l(t).fromNow()});const r=this.getForumName();return r&&e.push({text:r}),e}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}getCreationDate(){const e=this.model.topicInfo&&this.model.topicInfo.creationDate;return e&&Object(u.b)(e)||void 0}getForumName(){return this.model.topicInfo&&this.model.topicInfo.forumName}}class y extends s.a{constructor(e){super(e)}getSubtitle(){return this.getByAuthorText()}getUserVisibleCategory(){return"Tutorial"}getFullSubheaderItems(){return this.getCommonSubheaderItems()}getCondensedSubheaderItems(){return[{text:this.getUserVisibleCategory()},...this.getFullSubheaderItems()]}}var w=r("htQU"),x=r("Rnpp");r.d(t,"e",(function(){return E})),r.d(t,"d",(function(){return C})),r.d(t,"c",(function(){return v})),r.d(t,"f",(function(){return T})),r.d(t,"b",(function(){return $})),r.d(t,"a",(function(){return k}));const E=e=>{switch(e.documentType){case x.a.BLOG:return new o(e);case x.a.COMMENT:return new c(e);case x.a.COMPETITION:return new m(e);case x.a.DATASET:return new p(e);case x.a.KERNEL:return new f(e);case x.a.ORGANIZATION:return new b(e);case x.a.TOPIC:return new S(e);case x.a.USER:return new w.a(e);case x.a.TUTORIAL:return new y(e);case x.a.COURSE:return new d(e);case x.a.UNSPECIFIED:default:throw new Error(`Unexpected search document type: ${e.documentType}`)}},C=e=>{const t=e.type;switch(t){case x.a.BLOG:return new a(t,e.documents.map(e=>new o(e)),e.count);case x.a.COMMENT:return new a(t,e.documents.map(e=>new c(e)),e.count);case x.a.COMPETITION:return new a(t,e.documents.map(e=>new m(e)),e.count);case x.a.DATASET:return new a(t,e.documents.map(e=>new p(e)),e.count);case x.a.KERNEL:return new a(t,e.documents.map(e=>new f(e)),e.count);case x.a.ORGANIZATION:return new a(t,e.documents.map(e=>new b(e)),e.count);case x.a.TOPIC:return new a(t,e.documents.map(e=>new S(e)),e.count);case x.a.USER:return new a(t,e.documents.map(e=>new w.a(e)),e.count);case x.a.COURSE:return new a(t,e.documents.map(e=>new d(e)),e.count);case x.a.TUTORIAL:return new a(t,e.documents.map(e=>new y(e)),e.count);case x.a.UNSPECIFIED:default:throw new Error(`Unrecognized category: ${t}`)}};function v(e){return e.map(I).filter(e=>e.hasOption())}function I(e){const t=function(e){switch(e){case x.c.CHECKBOX:return"checkbox";case x.c.RADIO:return"radio";case x.c.TEXT:return"tag";default:return e}}(e.type),r=e.name,a=e.options.map(e=>(function(e,t,r){return new i.a(t,e.name,r,e.count)})(e,t,r));return new n.a(t,r,a)}function T(e){return I({type:x.c.TEXT,name:x.b.TAG,options:e,categories:[]})}function $(e){switch(e){case x.a.BLOG:return"Blogs";case x.a.COMMENT:return"Comments";case x.a.COMPETITION:return"Competitions";case x.a.DATASET:return"Datasets";case x.a.KERNEL:return"Notebooks";case x.a.ORGANIZATION:return"Organizations";case x.a.TOPIC:return"Topics";case x.a.USER:return"Users";case x.a.TUTORIAL:return"Tutorials";case x.a.COURSE:return"Courses";default:throw new Error(`Unrecognized category: ${e}`)}}function k(e){if(!e)return"";let t=e[0].toUpperCase();for(let r=1;r<e.length;r++){const i=e[r];i===i.toUpperCase()&&(t+=" "),t+=i}return t}}}]);
//# sourceMappingURL=chunk-11-4e343b0fac36616eed59.js.map