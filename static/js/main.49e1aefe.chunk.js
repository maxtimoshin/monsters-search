(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,function(e,t,n){e.exports={cardlist:"card-list_cardlist__3aEqP"}},function(e,t,n){e.exports={cardcontainer:"card_cardcontainer__2pVKU"}},function(e,t,n){e.exports={search:"search-box_search__1q7G5"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(3),a=n.n(c),o=(n(15),n(4)),i=n(5),h=n(10),l=n(9),u=(n(16),n(6)),d=n.n(u),j=n(7),m=n.n(j),p=n(0),f=function(e){return Object(p.jsxs)("div",{className:m.a.cardcontainer,children:[Object(p.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=200x200")}),Object(p.jsx)("h2",{children:e.monster.name}),Object(p.jsx)("p",{children:e.monster.email})]})},b=function(e){return Object(p.jsx)("div",{className:d.a.cardlist,children:e.monsters.map((function(e){return Object(p.jsx)(f,{monster:e},e.id)}))})},x=n(8),O=n.n(x),g=function(e){var t=e.placeholder,n=e.handleChange;return Object(p.jsx)("input",{className:O.a.search,type:"search",placeholder:t,onChange:n})},v=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"MONSTER SEARCHER"}),Object(p.jsx)(g,{placeholder:"search monsters",handleChange:this.handleChange}),Object(p.jsx)(b,{monsters:s})]})}}]),n}(r.a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),C()}],[[18,1,2]]]);
//# sourceMappingURL=main.49e1aefe.chunk.js.map