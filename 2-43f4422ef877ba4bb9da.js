(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{200:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),i=a.n(n),r=a(66),l=a.n(r);a.d(t,"a",function(){return l.a}),a.d(t,"d",function(){return r.withPrefix}),a.d(t,"c",function(){return r.navigate});a(203),a(9).default.enqueue;var c=i.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,l=a?a.data:t[n]&&t[n].data;return i.a.createElement(i.a.Fragment,null,l&&r(l),!l&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return i.a.createElement(c.Consumer,null,function(e){return i.a.createElement(s,{data:t,query:a,render:n||r,staticQueryData:e})})}},201:function(e,t,a){var n=a(0);function i(e){return n.createElement("svg",e,[n.createElement("style",{type:"text/css",key:0}),n.createElement("g",{id:"Layer_2_1_",key:1},n.createElement("g",{id:"Layer_1-2"},n.createElement("path",{className:"anvil-logo-path",d:"M446.7,0.2c-1.8-0.2-3.7-0.2-5.5,0H146.7c-2.7,2.1-5,4.7-6.7,7.6c-3.4,6.1-9.2,8.3-16,8.3\n\t\t\tc-36.7,0-73.3,0.3-110-0.2c-11.3-0.2-17.1,7-12.3,18.6c14.8,36.2,41.9,55.1,80,59.8c18.3,2.3,36.9,2.4,55.1,5.8\n\t\t\tc5.4,0.9,10.7,2.5,15.7,4.8c16.8,7.7,26.3,27.5,22,45.4c-1.8,7.5-6.4,14.5-13,18.4c-13.5,8-30.3-3.6-40.4,10.7\n\t\t\tc-4.7,6.7-9.6,13.2-14.1,20c-2.6,3.9-3.4,8-1.1,12.2c2.2,4.1,6,5.5,10.5,5.5c20.5,0,41,0,61.5,0c4.5,0,8.2-1.6,10.5-5.5\n\t\t\tc4.4-7.6,10.8-10,19.6-9.8c28.6,0.5,57.3,0.4,86,0.1c6.6-0.1,11.4,2.1,14.6,7.6c3.4,5.9,8.3,7.8,15,7.7c17-0.3,34-0.1,51-0.1\n\t\t\tc10.9,0,15.3-6.6,11.3-16.8c-2.9-7.4-6.3-14.7-10.1-21.7c-4.4-8.1-11-6.9-19.2-6.3c-15,1-32.8-3.4-43-15.2\n\t\t\tc-9.6-11.2-9.5-26.6-4.5-39.8c5.2-13.5,14.5-23.8,25.4-32.9c19.3-16.2,41.5-27.6,64.4-37.7c9.9-4.3,19.8-8.4,29.9-12\n\t\t\tc4.9-1.8,9.9-3.5,14.9-5c3.7-1.1,7.6-2.3,10.8-4.6c1.9-1.3,3.3-3.2,3.9-5.4c1.3-5.2-2.8-11.5-5.9-15.3c-1-1.4-2.3-2.6-3.7-3.5\n\t\t\tC448.2,0.5,447.5,0.3,446.7,0.2z"})))])}i.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 458.8 217.2",style:{enableBackground:"new 0 0 458.8 217.2"},xmlSpace:"preserve"},e.exports=i,i.default=i},202:function(e,t,a){"use strict";var n=a(208),i=a(0),r=a.n(i),l=a(218),c=a.n(l),s=a(200),o=(a(219),a(267)),d=a(268),u=a(271),m=a(269),g=a(270),A=a(220),p=a.n(A),h=a(201),f=a.n(h);var E=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggleNavbar=a.toggleNavbar.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={collapsed:!0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.toggleNavbar=function(){this.setState({collapsed:!this.state.collapsed})},i.render=function(){var e=this.props.location,t=[p.a.navbar,e.pathname===Object(s.d)("/membership")?p.a.navbarGold:"",e.pathname===Object(s.d)("/about")?p.a.navbarGold:"",e.pathname.startsWith(Object(s.d)("/events"))?p.a.navbarBlue:"",e.pathname===Object(s.d)("/sponsor")?p.a.navbarGreen:""].join(" ").trim();return r.a.createElement("div",{className:t},r.a.createElement(o.a,{light:!0,expand:"md"},r.a.createElement(s.a,{to:"/",className:"navbar-brand"},r.a.createElement(f.a,{className:p.a.logo+" d-inline-block align-top",height:"24"}),r.a.createElement("h1",{className:p.a.header},"The Anvil")),r.a.createElement(d.a,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(u.a,{isOpen:!this.state.collapsed,navbar:!0},r.a.createElement(m.a,{className:"mr-auto",navbar:!0,activeKey:"location.pathname"},r.a.createElement(g.a,null,r.a.createElement(s.a,{className:"nav-link",to:"/about"},"About")),r.a.createElement(g.a,null,r.a.createElement(s.a,{className:"nav-link",to:"/membership"},"Membership")),r.a.createElement(g.a,null,r.a.createElement(s.a,{className:"nav-link",to:"/events"},"Events")),r.a.createElement(g.a,null,r.a.createElement(s.a,{className:"nav-link",to:"/sponsor"},"Sponsor"))))))},n}(r.a.Component),b=(a(223),a(224)),w=a.n(b),v=a(210),G=a.n(v),I=a(211),y=a.n(I),L=a(212),R=a.n(L),S=function(){return r.a.createElement("div",{className:w.a.section},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:w.a.footer},r.a.createElement("div",{className:w.a.brand},r.a.createElement(f.a,{className:w.a.logo}),r.a.createElement("h1",{className:w.a.brandName},"The Anvil")),r.a.createElement("div",{className:w.a.footerBottom},r.a.createElement("address",{className:w.a.address},"320 North Street",r.a.createElement("br",null),"West Lafayette, IN 47906"),r.a.createElement("div",{className:w.a.links},r.a.createElement("a",{href:"mailto:contact@anvilstartups.com"},r.a.createElement("img",{className:w.a.socialIcon,src:G.a,alt:"The Anvil Email"})),r.a.createElement("a",{href:"https://www.facebook.com/anvilstartups"},r.a.createElement("img",{className:w.a.socialIcon,src:y.a,alt:"The Anvil on Facebook"})),r.a.createElement("a",{href:"https://www.instagram.com/anvilstartups"},r.a.createElement("img",{className:w.a.socialIcon,src:R.a,alt:"The Anvil on Instagram"})))),r.a.createElement("div",null,r.a.createElement("p",{className:w.a.copyright},"Copyright © 2018 The Anvil Inc. Icons designed by"," ",r.a.createElement("a",{href:"https://icons8.com/",className:w.a.link},"Icons8"),".")))))},N=(a(225),a(226),a(227),a(228)),M=a.n(N);t.a=function(e){var t=e.children,a=e.location,i=e.pageTitle;return r.a.createElement(s.b,{query:"1695598592",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:i?e.site.siteMetadata.title+" - "+i:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"og:description",content:e.site.siteMetadata.description},{name:"og:site_name",content:e.site.title},{name:"keywords",content:"Purdue University, Startups, Entrepreneurship, Technology, Co-working, coworking"},{name:"og:url",content:e.site.siteMetadata.siteUrl},{name:"og:type",content:"website"}]},r.a.createElement("link",{rel:"canonical",href:e.site.siteMetadata.siteUrl}),r.a.createElement("html",{lang:"en"})),a.pathname===Object(s.d)("/")?r.a.createElement("div",{className:M.a.squares,"aria-hidden":"true"},r.a.createElement("div",{className:M.a.yellowSquare,"aria-hidden":"true"}),r.a.createElement("div",{className:M.a.greenSquare,"aria-hidden":"true"}),r.a.createElement("div",{className:M.a.blueSquare,"aria-hidden":"true"})):null,r.a.createElement("header",{role:"banner"},r.a.createElement(E,{location:a})),r.a.createElement("main",{role:"main"},r.a.createElement("div",{className:M.a.container},t)),r.a.createElement("footer",{role:"contentinfo"},r.a.createElement(S,null)))},data:n})}},203:function(e,t,a){var n;e.exports=(n=a(209))&&n.default||n},208:function(e){e.exports={data:{site:{siteMetadata:{title:"The Anvil",description:"The Anvil is Purdue's Student Entrepreneurship Hub and coworking space. Create your next startup, build a new product, and network with Purdue University's student startup community.",siteUrl:"https://www.anvilstartups.com"}}}}},209:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),i=a.n(n),r=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},210:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTEtMDZUMTQ6NTU6NTMtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTA2VDE1OjAxOjU4LTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTExLTA2VDE1OjAxOjU4LTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmYwMTc3ZjM2LWQyOGQtNGUyZi05ZTA5LWVmZDRkMDI4ZGZiYyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpmMDE3N2YzNi1kMjhkLTRlMmYtOWUwOS1lZmQ0ZDAyOGRmYmMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMDE3N2YzNi1kMjhkLTRlMmYtOWUwOS1lZmQ0ZDAyOGRmYmMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmYwMTc3ZjM2LWQyOGQtNGUyZi05ZTA5LWVmZDRkMDI4ZGZiYyIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0wNlQxNDo1NTo1My0wNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F+eVnQAACapJREFUeJztnXuwV1UVxz/3gnCRK1xEy+vcdIoEBMwxsZwpS9GhwleSZBaaTkZGqTU1pc30bopSQR1Lqj806KHIVPTApiyQmcaGIUZjEMEBeSUPIUARqLj32x/rx/DrDvzW3ufs8zv38fvO7Ll3Zu/fd6191jn77LX22vs0SaKB8tBctgL9HQ0DlIyGAUpGwwAlo2GAktEwQMloGKBkDCxbAQenAucBY4CxwGjg9cBQYETlL8BrwJ7K3x3AWuB5YB2wEthVV60j0NTDHLEhwGXApEo5B2jKySngH8BfKuVJ4FBOzmToKQY4H7gR+AgwsmBZ+4DfAPOAP2MGKg1lGmAQ8FHgC8CbS9LhBeB7mDH+U4YCZRhgCDAD+DzQUW/hx8EW4B7gR9R5eKq3ASYB38deqD0R64HbgcX1ElivaWgH8EtszO2pFx9gFPB7YCF1ejrr8QRcCTwCnFy0oMTYB9yCGaMwFGmAQcAs4DPkm0puB5YBz2Hz+7XA3krZX2nTCrRhvsFozG8YD1wEnJZDtoDZwF3Af3PwHBdFGaANWAS8K+PvnwZ+gc3Z1+TUZRzmW1wPXJiRYynwfuypSIoiDNAO/AF4S+Tv9gIPAQ9j08MiMBq4GbgVu0li8CzwPmBbUo0kpSyjJG1QHHZKulPSsMS61CrDJN0l6eVIXTdU+phMl5SdOl1xF79T0jxJI1N2KLK0Sbpf0uEIvTdIak+lQ8qOPBvRidWSzk/ViQTlAklrIvR/RtLwFLJTKD9I0lMRyj8saWgK5ROXVtkTGYolkk7IKzeF4vcGKnxY0owE8ooun1T4kPTdvPLyKnu5pK4ARQ9JurbAi5a6XC3pQEC/uiptM8vKMw3twKZmnod7CLgci8X3JlwK/A5ocdrtAs4FXsoiJE8s6AH8i98JTKf3XXywuNV1wGGn3SnAnMxSMj46UwIeT6l3jPlemRnY18lZ+LMMQUOAVVjksBYewbzOFGgGJmLh7ImYR9vB/68Jb8XiRH/HnrgVQFci+fOAG5w2L2BLqP+OYs5gtTsC7obVSjPVbJf0LUmbA+/Camyq/DaF09SqMD/h07HcsYoMlrTFUeKw8jtZI2Qe6sGATns4WOFqy6nT22Teey1skvlFhRng4wEdfjBnR6dK2hEgJxbbK9x5dJsbIOdjMZwxwpskrXOE71T2O22A7E4tGvdVZGXR8WRJuxz+tbJrFcQZMw19J3CW02Y2FlaORQvwOLYeWzTuqMjy5vfHwr/wp5yjgXcEM0ZY/8eO5fcqW4BqgKTHHe4isEjSwAz6DpO0x+GeG8oX+gQMAaY5bX5AthWj2cC1GX6XF1cBd2f43SvAD5021xH6hAVa6krH4l2SzspwN011eLvjRdkYPlnSGNlUd2jl//fI3iEbI/i6JF2TQe+xAdxTQrhCBc5xhP01QyeGS3opoCOS+QEzFPbybJY0TdL6QO7tsmlvrP7LHd67Q3hChXmLLbdl6MADDucRPCppSAb+EyUtCJRxfwb+zzqcK0N4QgSdKj/kfHak8u0Kc7K+o4gp3TFKkyxm7+Gg4j3mCQ5npwKWW0NewudRO69nO5aLH4NP4b+kHgO+RL7sZQF3YtPOWmip6BSD1cDOGvXN2LWriRADjHHqlxF3kZrxA1sbsUBeipwZATcBm51204kLzwvrey141y6JAZ4L4KjGROAMp81XgIORvLVwAPiq0+ZM4K2RvF7f62KAtQEc1Zjk1G8EfhbJGYL5+E/BpZGcXt+TGMDLrVwXwFGNiU79ItLF8avRWeGuBU+37vD67ualhhig1anfHcBRDe+ueCKSLwYet3vHdoPX95M8ghADDHPqXw3gqMbpTv36SL4YbHDq2yP5vL4nMYD3BOx36mP5tkfyxeCfTr17wbqhLgboS/D6OziSz1v/dflCDODd4d4dHcsXOwzEwBv+6o4QA7zi1Mc+tl4C05si+WLwxgK5MyHEAN44F7ux2ps7T4nki0GR3JkQYoAdTv3oSJkrnPqrKebdNABbhOlRCOlobm+vG7w0xTPxY0VZcCN+CKTuSGGA8ZEyV+CHBL4BnBjJWwtDga8Hto2ZVHjvP9dHSmGAi4jbhtqFxWVq4QwstTHvSSlUOH4CvCGw/dkR3OOces/vCDLASmrHZk4jTmmw4wq8MxmmYfuM8xihCTuM4wMRv/lQRNvrnfqtLkPg6s8zzurP7ZGrSSg8CWuBbHkxln+opIWBMqpxQNK4AP4J8lf1vuzxhHZmtiPo6UCe6tImWxAPwSZJN8kW3D3eAZJulp/DWgsvShpfQ8YEhWVfnOPpG5qefgXwW6fNGOJD01OxsxhCh5nNWEh5MbZusKXy2w7MyZqCTTVTzHYOYRvHH8OWHwEmYEPUJ/CXVFcRsFk91AAt2A7xthptZmFnKsTiPixdsK/hKvybNtjhOYS/sH0rMDyQrxqfA36V4Xd5caBA7qUEXHyI8zjnOfVtwMwIviPoxGYT9TTCPGxj3Z4CuLcR40gGvNSqc2y89PSXlS3L7MjLc47Ctr1mRaekr+lortHFkl5LyH9Q0oWK6HfsRbolQImHIjm7l2sUPjuKwSZZ/mh3eZdI2p2Af5siL74yGGCQ/P1anbKzF/IYoU3ptijtlzRLts/rePJGSVqWQ8YSSR01+JMZAJnT5WGN0+HQ0i7pm7K7NxbrZY7Q6wJlNUmaLttgGIpVsszxzH3Msk21BZvjemd9zscikCnQjB3u2n2baiuWofYqFndZiwX7/oTt4s+SWdcEvB07IesCLMwyAtuwvQVbUFqK+SOrsnWnSlgGAwC8l7D0kZmYM9PAcZDnrIiF+EGuLsxz9HyIfot6HdZxBXb2QgPdkGfpbyvmcHgWbMEOQ/1gDll9FnnXXhcD9wa0Gwz8nGyecp9GimMrT8BmHe8ObD8fM0RsRl2fRKpzQ4cDT2HxlRA8jx1dvzyF8N6MVOkf+4DJhB+4Ohb4GxYUOyWRDr0SqU/OHQX8kbjstt3Y9v8HKeBo4J6Ooo4ufoLw4egI9gFzsWyI2E1/vRZFHd49HPg1cHHG3y8HHsVe7qsp+TsvRaLI4+sHAt/GPlWSJ7VkJ0ePrz/yaao9HD2+vpRvv6RCPT7gcBnwU+z7X70BKZLBglGPDRpPYts/F9RBVq9DvT/icwmWFRebSVdP9LknoBpLsO37t+En6PYLlP0htxuAL+IfhVZP1PUJ6GmfMvww5XvG/dIAR9CCLTteir0vzqX+w2S/NkB3jOTYn7M9CUsEa8WGspRoGKA/ob9t1O5xaBigZDQMUDIaBigZDQOUjIYBSkbDACXjf/lkKf57B22wAAAAAElFTkSuQmCC"},211:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTEtMDZUMTQ6NTU6NTMtMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTA2VDE1OjAyOjI3LTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTExLTA2VDE1OjAyOjI3LTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjViYzE1NDY5LTc2NzUtNGRkMS1hZDk0LTk5MzAzMDNlYTNhMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1YmMxNTQ2OS03Njc1LTRkZDEtYWQ5NC05OTMwMzAzZWEzYTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YmMxNTQ2OS03Njc1LTRkZDEtYWQ5NC05OTMwMzAzZWEzYTEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjViYzE1NDY5LTc2NzUtNGRkMS1hZDk0LTk5MzAzMDNlYTNhMSIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0wNlQxNDo1NTo1My0wNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MzOxzAAAA0tJREFUeJztnT1rVEEYRk9UiEoQJBaKEKKFlVH0HyimUGzsxMImgo0IARvB1sYiiWhExa/GHyCCgp9gZWFhEbFQUaKNaBoTCEbjWkwWFc3undm9Ptm5z4EtFuadfXfO3tm5c4eZrlqthtGxTJ1A1bEAMRYgxgLEWIAYCxBjAWIsQIwFiLEAMRYgph0CBoCzwAQwA9Qyf80sfNcxYGurjdfVwmRcNzAKHKW6V9IP4CIwDMylVJAqoBu4C+xKCc6QR8BeEiSk/nLHcOP/zm5gJCUw5QoYAJ5T3W5nMeaB7cCLmKCURjySGJc7y4Gh2KCUhtyTEFMVBmMDUrqgaaAnNqgiTANrYgJSBPghcmO6Ygq7LxezQp2AmGlgivAHWu9Wu4HV/yuBKgn4CNwh3DQ9WXj/dZGyq4BeYB2wE7haVlJVEPAeOENoxNmCMbPAh4XXt5LyAvIXcAs4DHxRJ7IYOf8JnwIOsIQbH/K9Am4Ap9VJFCHHK+AZYYq8I8hRwEkS5+YV5CbgKfBAnUQMuQm4rE4gltwEPFYnEEtOAl4B7yJjtgHXgdeE4eq/HsJPtC/Fv8lpGPoysvwgcJsw9yMjpytgKrL8ecSND3kJ+BxRdiOwpaxEYshJQMyUw4bSsogkJwEx9KoTqFNVAVGPDcukqgKWDBYgxgLEWIAYCxDTKQuzDgGfmpR5A7wtWF8vsKNg2SHgYMGyEDnC6hQBfYTVDQpuEn4ARfHKuDbTX2blFtCcTWVWbgGNWQmsL/MDLKAx/ZQ8bWEBjSm1+wELaIYFiLEAMRYgpnQBnXInPAl8b1JmBBgvWN9+wv4WzegjfuVI1KipU5al9BUoszaivh5gc2IubcVdkBgLEGMBYixAjAWIsQAxFiDGAsRYgBgLEGMBYixAjAWIsQAxFiDGAsRYgBgLEJMiYKbtWeRD9O5cKQImE2KqQnTbpAi4nxBTFe7FBqQIuELYqt38yTxwLTYoRcAEcCkhLncuEHl2AKSPgoYJO9CawEPgREpgqoA5wpkp41S7O5oHzgH7SNwosJX7gDngGOHYjlF+HWOVO/VjrEYJ3/04LezS2MoxVqYN+E5YjAWIsQAxFiDGAsRYgBgLEGMBYixAjAWIsQAxPwEcAL3ziOO+VwAAAABJRU5ErkJggg=="},212:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTEtMTdUMDk6MzQ6MDktMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTExLTE3VDA5OjM0OjUxLTA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTExLTE3VDA5OjM0OjUxLTA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBmYWZjYWU0LTI3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"},215:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(257),l=a.n(r);t.a=function(e){var t=e.title,a=e.theme,n=e.Pattern,r=[l.a.section,"blue"===a?l.a.sectionBlue:"","gold"===a?l.a.sectionGold:"","green"===a?l.a.sectionGreen:""].join(" ").trim();return i.a.createElement("div",{className:r},i.a.createElement("h2",{className:l.a.title+" text-uppercase"},t),i.a.createElement(n,{className:l.a.pattern}))}},216:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(258),l=a.n(r),c=a(259),s=a.n(c);t.a=function(e){var t=e.title,a=e.subheading,n=e.paragraphs,r=e.index,c=e.imageFluid,o=e.Pattern,d=e.alt;r=r||0;var u=[s.a.section,r%2?s.a.sectionGrey:""].join(" ").trim();return i.a.createElement("div",{className:u},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:c?"col-md-7":"col-12"},i.a.createElement(o,{className:s.a.pattern,style:{transform:"rotate("+90*r+"deg)"}}),i.a.createElement("h3",{className:s.a.title+" text-uppercase"},t),i.a.createElement("h4",{className:s.a.subheading},a),n&&n.map(function(e,t){return i.a.createElement("p",{className:s.a.text,key:t},e)})),i.a.createElement("div",{className:c?"col-md-5":""},c&&i.a.createElement(l.a,{fluid:c,style:{width:"100%"},alt:d||""})))))}},258:function(e,t,a){"use strict";a(29),a(30),a(13),a(98),a(139),a(233);var n=a(14);t.__esModule=!0,t.default=void 0;var i,r=n(a(70)),l=n(a(75)),c=n(a(140)),s=n(a(141)),o=n(a(0)),d=n(a(49)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,n=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},m=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),A=function(e){var t=u(e),a=m(t);return g[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,f=h&&window.IntersectionObserver,E=new WeakMap;function b(e){return e.map(function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},n&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:r}),o.default.createElement("source",{media:i,srcSet:a,sizes:r}))})}function w(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,n=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:n})})}function G(e){return e.map(function(e){var t=e.src,a=e.media,n=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:n})})}function I(e,t){var a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var y=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+o+l+c+a+n+t+r+i+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,r=o.default.createElement(S,(0,s.default)({src:t},i));return a.length>1?o.default.createElement("picture",null,n(a),r):r},S=o.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,l=e.onLoad,d=e.onError,u=e.loading,m=e.draggable,g=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,s.default)({sizes:a,srcSet:n,src:i},g,{onLoad:l,onError:d,ref:t,loading:u,draggable:m,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});S.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&A(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&f&&!t.critical&&!a.seenBefore;var n=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=y(e,function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,l=e.imgStyle,c=void 0===l?{}:l,d=e.placeholderStyle,m=void 0===d?{}:d,g=e.placeholderClassName,A=e.fluid,p=e.fixed,h=e.backgroundColor,f=e.durationFadeIn,E=e.Tag,w=e.itemProp,I=e.loading,y=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,s.default)({opacity:N?1:0,transition:M?"opacity "+f+"ms":"none"},c),Y="boolean"==typeof h?"lightgray":h,O={transitionDelay:f+"ms"},W=(0,s.default)({opacity:this.state.imgLoaded?0:1},M&&O,c,m),Z={title:t,alt:this.state.isVisible?"":a,style:W,className:g};if(A){var D=A,k=D[0];return o.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},o.default.createElement(E,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),Y&&o.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:Y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&O)}),k.base64&&o.default.createElement(R,{src:k.base64,spreadProps:Z,imageVariants:D,generateSources:G}),k.tracedSVG&&o.default.createElement(R,{src:k.tracedSVG,spreadProps:Z,imageVariants:D,generateSources:v}),this.state.isVisible&&o.default.createElement("picture",null,b(D),o.default.createElement(S,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:y})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:I},k,{imageVariants:D}))}}))}if(p){var B=p,j=B[0],z=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},r);return"inherit"===r.display&&delete z.display,o.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},Y&&o.default.createElement(E,{title:t,style:(0,s.default)({backgroundColor:Y,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},M&&O)}),j.base64&&o.default.createElement(R,{src:j.base64,spreadProps:Z,imageVariants:B,generateSources:G}),j.tracedSVG&&o.default.createElement(R,{src:j.tracedSVG,spreadProps:Z,imageVariants:B,generateSources:v}),this.state.isVisible&&o.default.createElement("picture",null,b(B),o.default.createElement(S,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:y})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,s.default)({alt:a,title:t,loading:I},j,{imageVariants:B}))}}))}return null},t}(o.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var M=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});N.propTypes={resolutions:M,sizes:T,fixed:d.default.oneOfType([M,d.default.arrayOf(M)]),fluid:d.default.oneOfType([T,d.default.arrayOf(T)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var Y=N;t.default=Y}}]);
//# sourceMappingURL=2-43f4422ef877ba4bb9da.js.map