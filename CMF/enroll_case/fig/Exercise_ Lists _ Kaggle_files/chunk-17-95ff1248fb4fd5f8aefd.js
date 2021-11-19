(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{W3bA:function(e,n,a){"use strict";a.r(n),a.d(n,"NavigationOverlayBar",(function(){return f}));var t=a("rQ3t"),r=a("YM3X"),i=a("bNz0"),o=a.n(i),c=a("r0ML"),s=a("QJ/z"),l=a("/MMI"),u=a("0xmT"),m=a("/O7p"),d=a("aMXe"),b=a("VCsC");const p=o.a.div`
  background: ${e=>l.a[e.theme.name].surface.background};
  width: ${t.g}px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${e=>e.theme.zindex[1e3]};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.28);
  transition: transform ${t.a}ms cubic-bezier(0, 0, 0.2, 1);
  /* -105% offset to account for box shadow. */
  transform: ${e=>e.isOpen?"translateX(0)":"translateX(-105%)"};

  ${t.e} {
    display: none;
  }
`,v=o.a.div`
  display: flex;
  align-items: center;
  height: ${t.n}px;
  box-sizing: border-box;
`;function f({innerRef:e,navigationService:n,isOpen:a,userAvatarUrl:t,userId:i,recentlyViewed:o,onActivateSearch:l,onHamburgerClick:f}){return c.createElement(p,{ref:e,isOpen:a},c.createElement(v,null,c.createElement(m.a,{navigationService:n,onHamburgerClick:f})),c.createElement(u.a,null),c.createElement(d.a,{navigationService:n,onActivateSearch:l}),c.createElement(b.a,{items:o}),c.createElement(r.a,null),c.createElement(s.a,{userAvatarUrl:t,userId:i}))}}}]);
//# sourceMappingURL=chunk-17-95ff1248fb4fd5f8aefd.js.map