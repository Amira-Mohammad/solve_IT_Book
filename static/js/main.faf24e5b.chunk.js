(this["webpackJsonpsolve-it-book"]=this["webpackJsonpsolve-it-book"]||[]).push([[0],{26:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(20),r=c.n(n),l=(c(26),c(27),c(11)),i=c(3),o=c(2),d=c(9),j=c.n(d),b=c(13),u=c(10),O=c(7),x=c(0),h=Object(s.createContext)(),f=function(e){var t=Object(s.useState)([]),c=Object(u.a)(t,2),a=c[0],n=c[1],r=Object(s.useMemo)((function(){return{userData:a,setData:n}}),[a]);return Object(x.jsx)(h.Provider,{value:r,children:e.children})},m=function(e){var t=e.filter,c=e.setFilter;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"font-weight-bold",children:"Users Dictionary"}),Object(x.jsx)("input",{className:"border rounded",value:t||"",onChange:function(e){return c(e.target.value)}})]})};c(31);function g(e){var t=Object(s.useContext)(h).setData,c=Object(s.useState)([]),n=Object(u.a)(c,2),r=n[0],i=n[1],d=a.a.useMemo((function(){return[{Header:"#",accessor:"id"},{Header:"Name",accessor:"name"},{Header:"Email address",accessor:"email"},{Header:"Gender",accessor:"gender"},{Header:"Status",accessor:"status",Cell:function(e){return"Active"==e.value?Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("i",{class:"fas fa-circle mt-1 mx-1 activeIcon"}),Object(x.jsx)("span",{className:"activeIcon",children:e.value})]}):Object(x.jsxs)("div",{className:"d-flex",children:[Object(x.jsx)("i",{class:"fas fa-circle mt-1 mx-1"}),Object(x.jsx)("span",{children:e.value})]})}},{Header:"Create Date",accessor:"created_at"},{Header:"Update Date",accessor:"updated_at"}]}),[]);Object(s.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gorest.co.in/public-api/users");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log("users",c.data),console.log("users from state ",c.data),i(c.data);case 9:case"end":return e.stop()}}),e)})))()}),[]),t(r);var f=Object(O.useTable)({columns:d,data:r},O.useGlobalFilter,O.usePagination),g=f.getTableProps,p=f.getTableBodyProps,v=f.headerGroups,N=f.page,w=f.rows,P=f.nextPage,C=f.canNextPage,H=f.canPreviousPage,k=f.previousPage,T=f.pageOptions,y=f.setPageSize,S=f.prepareRow,F=f.state,E=f.setGlobalFilter,D=F.globalFilter,G=F.pageIndex,I=F.pageSize;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between px-5 mt-4",children:[Object(x.jsx)(m,{className:"",filter:D,setFilter:E}),Object(x.jsxs)("div",{children:["show ",I," of ",w.length,Object(x.jsx)("select",{value:I,onChange:function(e){y(Number(e.target.value))},children:[3,5,10,20].map((function(e){return Object(x.jsx)("option",{children:e})}))}),"per page"]})]}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsxs)("table",Object(o.a)(Object(o.a)({},g()),{},{className:"container m-3 text-center shadow-lg",children:[Object(x.jsx)("thead",{children:v.map((function(e){return Object(x.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(x.jsx)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(x.jsx)("tbody",Object(o.a)(Object(o.a)({},p()),{},{children:N.map((function(e){return S(e),Object(x.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:e.cells.map((function(t){return Object(x.jsx)(a.a.Fragment,{children:Object(x.jsx)("td",Object(o.a)(Object(o.a)({},t.getCellProps()),{},{children:Object(x.jsx)(l.b,{to:"/posts/"+e.original.id,className:"postsLink",children:t.render("Cell")})}))})}))}))}))}))]}))}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("button",{className:"rounded",onClick:function(){return k()},disabled:!H,children:Object(x.jsx)("i",{class:"fas fa-long-arrow-alt-left"})}),Object(x.jsxs)("span",{children:["page ","",Object(x.jsxs)("strong",{children:[G+1," of ",T.length]})]}),Object(x.jsx)("button",{className:"rounded",onClick:function(){return P()},disabled:!C,children:Object(x.jsx)("i",{class:"fas fa-long-arrow-alt-right"})})]})]})}var p=function(e){console.log("useHistory from post",Object(i.f)());var t=Object(i.f)(),c=Object(s.useContext)(h).userData,n=Object(s.useState)([]),r=Object(u.a)(n,2),d=r[0],f=r[1],m=Object(i.g)().id,g=a.a.useMemo((function(){return[{Header:"Post ID",accessor:"id"},{Header:"Post Title",accessor:"title"},{Header:"Body",accessor:"body"}]}),[]);Object(s.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gorest.co.in/public-api/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log("dataaaaaaaaaaaaaa",c.data),console.log("dataaaaaaaaaaaaaa from state ",c.data),s=c.data.filter((function(e){if(e.user_id===+m)return e})),f(s),console.log("ssssssssssssss",s);case 11:case"end":return e.stop()}}),e)})))()}),[]);var p=function(e){var t;return e.forEach((function(e){e.id===+m&&(t=e)})),t}(c);console.log("renderedUser",p);var v=Object(O.useTable)({columns:g,data:d},O.useGlobalFilter,O.usePagination),N=v.getTableProps,w=v.getTableBodyProps,P=v.headerGroups,C=v.page,H=v.rows,k=v.nextPage,T=v.canNextPage,y=v.canPreviousPage,S=v.previousPage,F=v.pageOptions,E=v.setPageSize,D=v.prepareRow,G=v.state,I=G.pageIndex,A=G.pageSize;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("button",{onClick:function(){t.goBack()},className:"mx-5 mt-4 btn border bg-light",children:["back ",Object(x.jsx)("i",{class:"fas fa-undo-alt"})]}),Object(x.jsx)("hr",{className:"mx-5"}),Object(x.jsxs)("div",{className:"d-flex mx-5 mt-4",children:[Object(x.jsx)("div",{className:"Avatar bg-light text-center pt-4 mx-3",children:Object(x.jsx)("i",{class:"far fa-user fa-3x"})}),Object(x.jsxs)("div",{className:"d-flex flex-column",children:[Object(x.jsx)("div",{className:"mt-4 font-weight-bold",children:p.name}),Object(x.jsx)("div",{className:"text-muted",children:p.email}),Object(x.jsx)("div",{className:"activeIcon",children:p.status})]})]}),Object(x.jsxs)("div",{className:"d-flex border-bottom mx-5 p-4",children:[Object(x.jsxs)("div",{className:"cube border-right px-4 d-flex flex-column justify-content-between",children:[Object(x.jsx)("div",{children:"TOTAL NO OF POSTS"}),Object(x.jsx)("div",{className:"font-weight-bold",children:d.length})]}),Object(x.jsxs)("div",{className:"cube border-right px-4 d-flex flex-column justify-content-between",children:[Object(x.jsx)("div",{children:"CURRENT PAGE NO OF POSTS"}),Object(x.jsx)("div",{className:"font-weight-bold text-danger",children:A})]}),Object(x.jsxs)("div",{className:"cube border-right px-4 d-flex flex-column justify-content-between",children:[Object(x.jsx)("div",{children:"USER CREATION DATE"}),Object(x.jsx)("div",{className:"font-weight-bold overflow-hidden",children:p.created_at})]}),Object(x.jsxs)("div",{className:"cube  px-4 d-flex flex-column justify-content-between",children:[Object(x.jsx)("div",{children:"USER UPDATE DATE"}),Object(x.jsx)("div",{className:"font-weight-bold overflow-hidden",children:p.updated_at})]})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between px-5 mt-4",children:[Object(x.jsx)("div",{className:"font-weight-bold",children:"Posts"}),Object(x.jsxs)("div",{children:["show ",A," of ",H.length,Object(x.jsx)("select",{value:A,onChange:function(e){E(Number(e.target.value))},children:[3,5,10,20].map((function(e){return Object(x.jsx)("option",{children:e})}))}),"per page"]})]}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsxs)("table",Object(o.a)(Object(o.a)({},N()),{},{className:"container m-3 text-center shadow-lg",children:[Object(x.jsx)("thead",{children:P.map((function(e){return Object(x.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(x.jsx)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(x.jsx)("tbody",Object(o.a)(Object(o.a)({},w()),{},{children:C.map((function(e){return D(e),Object(x.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:e.cells.map((function(t){return Object(x.jsx)(a.a.Fragment,{children:Object(x.jsx)("td",Object(o.a)(Object(o.a)({},t.getCellProps()),{},{children:Object(x.jsx)(l.b,{to:"/comments/"+e.original.id,className:"postsLink",children:t.render("Cell")})}))})}))}))}))}))]}))}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("button",{className:"rounded",onClick:function(){return S()},disabled:!y,children:Object(x.jsx)("i",{class:"fas fa-long-arrow-alt-left"})}),Object(x.jsxs)("span",{children:["page ","",Object(x.jsxs)("strong",{children:[I+1," of ",F.length]})]}),Object(x.jsx)("button",{className:"rounded",onClick:function(){return k()},disabled:!T,children:Object(x.jsx)("i",{class:"fas fa-long-arrow-alt-right"})})]})]})},v=function(){var e=Object(i.f)(),t=Object(s.useState)([]),c=Object(u.a)(t,2),n=c[0],r=c[1],l=Object(i.g)().id,d=a.a.useMemo((function(){return[{Header:"#",accessor:"post_id"},{Header:"Name",accessor:"name"},{Header:"Email address",accessor:"email"},{Header:"Body",accessor:"body"},{Header:"Created At",accessor:"created_at"},{Header:"Updated At",accessor:"updated_at"}]}),[]);Object(s.useEffect)((function(){Object(b.a)(j.a.mark((function e(){var t,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gorest.co.in/public-api/comments");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log("users",c.data),console.log("users from state ",c.data),s=c.data.filter((function(e){if(e.post_id===+l)return e})),r(s),console.log("filterdComments",s);case 11:case"end":return e.stop()}}),e)})))()}),[]);var h=Object(O.useTable)({columns:d,data:n},O.useGlobalFilter,O.usePagination),f=h.getTableProps,m=h.getTableBodyProps,g=h.headerGroups,p=h.page,v=h.rows,N=h.nextPage,w=h.canNextPage,P=h.canPreviousPage,C=h.previousPage,H=h.pageOptions,k=h.setPageSize,T=h.prepareRow,y=h.state,S=y.pageIndex,F=y.pageSize;return Object(x.jsxs)("div",{children:[Object(x.jsxs)("button",{onClick:function(){e.goBack()},className:"mx-5 mt-4 btn border bg-light",children:["back ",Object(x.jsx)("i",{class:"fas fa-undo-alt"})]}),Object(x.jsx)("hr",{className:"mx-5"}),Object(x.jsxs)("div",{className:"d-flex justify-content-between px-5 mt-4",children:[Object(x.jsx)("div",{className:"font-weight-bold",children:"Comments"}),Object(x.jsxs)("div",{children:["show ",F," of ",v.length,Object(x.jsx)("select",{value:F,onChange:function(e){k(Number(e.target.value))},children:[3,5,10,20].map((function(e){return Object(x.jsx)("option",{children:e})}))}),"per page"]})]}),Object(x.jsx)("div",{className:"d-flex justify-content-center",children:Object(x.jsxs)("table",Object(o.a)(Object(o.a)({},f()),{},{className:"container m-3 text-center shadow-lg",children:[Object(x.jsx)("thead",{children:g.map((function(e){return Object(x.jsx)("tr",Object(o.a)(Object(o.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(x.jsx)("th",Object(o.a)(Object(o.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(x.jsx)("tbody",Object(o.a)(Object(o.a)({},m()),{},{children:p.map((function(e){return T(e),Object(x.jsx)("tr",Object(o.a)(Object(o.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(x.jsx)(a.a.Fragment,{children:Object(x.jsx)("td",Object(o.a)(Object(o.a)({},e.getCellProps()),{},{children:e.render("Cell")}))})}))}))}))}))]}))}),Object(x.jsxs)("div",{className:"text-center",children:[Object(x.jsx)("button",{className:"rounded",onClick:function(){return C()},disabled:!P,children:Object(x.jsx)("i",{class:"fas fa-long-arrow-alt-left"})}),Object(x.jsxs)("span",{children:["page ","",Object(x.jsxs)("strong",{children:[S+1," of ",H.length]})]}),Object(x.jsx)("button",{className:"rounded",onClick:function(){return N()},disabled:!w,children:Object(x.jsx)("i",{class:"fas fa-long-arrow-alt-right"})})]})]})};c(37);var N=function(){return Object(x.jsx)(f,{children:Object(x.jsxs)(l.a,{basename:"/solve_IT_Book",children:[Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("div",{className:"w-100 bg-dark header",children:"header"}),Object(x.jsx)("div",{className:"w-100 bg-light text-left p-1 logo ",children:Object(x.jsxs)("div",{className:"d-flex m-2",children:[Object(x.jsx)("i",{class:"fas fa-swatchbook fa-3x align-self-center"}),Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("span",{className:"font-weight-bold greenText",children:"Solve IT"}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"font-weight-bold",children:"Book"})]})]})})]}),Object(x.jsxs)(i.c,{children:[Object(x.jsx)(i.a,{exact:!0,path:"/",children:Object(x.jsx)(g,{})}),Object(x.jsx)(i.a,{path:"/posts/:id",children:Object(x.jsx)(p,{})}),Object(x.jsx)(i.a,{path:"/comments/:id",children:Object(x.jsx)(v,{})})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.faf24e5b.chunk.js.map