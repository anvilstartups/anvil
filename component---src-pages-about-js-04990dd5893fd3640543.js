(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(28);var r=a(0),i=a.n(r),n=a(141),s=a(142),o=a(136),l=a(138),d=a(145),c=a.n(d),u="2808849786";t.default=function(e){var t=e.data,a=e.location,r=[{title:"Who are we?",subheading:"Purdue's Student Entrepreneurship Hub",paragraphs:["The Anvil is a student run, 501(c)(3) non-profit organization whose mission is to inspire and empower the entrepreneurs of Purdue University and the Greater Lafayette, Indiana, community by providing co-working for founders and startups as well as mentorship, programming and resources.","As an organization, we provide a space for students interested in creating their own companies to meet other like minded peers and exchange ideas with one another. Throughout the academic year, we host experts with experience in startups, and provide events and resources for the student-run ventures getting their start in West Lafayette."],imageFluid:t.imageOne.childImageSharp.fluid},{title:"Where are we?",subheading:'The "Church of Entrepreneurship"',paragraphs:[i.a.createElement(i.a.Fragment,null,"One year after we founded, we took over the old University Church at"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://goo.gl/maps/VqYT5xv5fuJ2"},"320 North Street"),", right across from Purdue Memorial Union. The upstairs consists of a 2,000 square foot coworking space, which is open to our members to work. It also features our main stage which we use to host"," ",i.a.createElement(n.Link,{to:"events"},"our events"),". We also host few tenants, such as a makerspace for Purdue student organizations downstairs, and office space for local startups.")],imageFluid:t.imageTwo.childImageSharp.fluid},{title:"Intrested in our mission?",subheading:"We are supported by our community",paragraphs:[i.a.createElement(i.a.Fragment,null,"We are a 501(c)(3) nonprofit organization, funded through donations through our community. If you're interested in sponosoring us so we can continue our work please see our"," ",i.a.createElement(n.Link,{to:"/sponsor"},"sponsorshop page here"),"."),i.a.createElement(i.a.Fragment,null,"Feel free to contact us any time at"," ",i.a.createElement("a",{href:"mailto:contact@anvilstartups.com"},"contact@anvilstartups.com"),".")]}];return i.a.createElement(s.a,{location:a},i.a.createElement(o.a,{Pattern:c.a,title:"About the Anvil",theme:"gold"}),r.map(function(e,t){return i.a.createElement(l.a,Object.assign({Pattern:c.a},e,{index:t,key:t}))}))}},136:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(137),s=a.n(n);t.a=function(e){var t=e.title,a=e.theme,r=e.Pattern,n=[s.a.section,"blue"===a?s.a.sectionBlue:"","gold"===a?s.a.sectionGold:"","green"===a?s.a.sectionGreen:""].join(" ").trim();return i.a.createElement("div",{className:n},i.a.createElement("h2",{className:s.a.title+" text-uppercase"},t),i.a.createElement(r,{className:s.a.pattern}))}},137:function(e,t,a){e.exports={section:"title-section-module--section--2faFW",title:"title-section-module--title--3sjWA",pattern:"title-section-module--pattern--nJlD2",sectionGold:"title-section-module--section-gold--3-6mj",sectionBlue:"title-section-module--section-blue--2zVGX",sectionGreen:"title-section-module--section-green--EidBa"}},138:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(139),s=a.n(n),o=a(140),l=a.n(o);t.a=function(e){var t=e.title,a=e.subheading,r=e.paragraphs,n=e.index,o=e.imageFluid,d=e.Pattern;n=n||0;var c=[l.a.section,n%2?l.a.sectionGrey:""].join(" ").trim();return i.a.createElement("div",{className:c},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:o?"col-md-7":"col-12"},i.a.createElement(d,{className:l.a.pattern,style:{transform:"rotate("+90*n+"deg)"}}),i.a.createElement("h3",{className:l.a.title+" text-uppercase"},t),i.a.createElement("h4",{className:l.a.subheading},a),r&&r.map(function(e,t){return i.a.createElement("p",{key:t},e)})),i.a.createElement("div",{className:o?"col-md-5":""},o&&i.a.createElement(s.a,{fluid:o,style:{width:"100%"}})))))}},139:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(6)),s=r(a(46)),o=r(a(143)),l=r(a(144)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},h=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!0,n=!1,o=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,n=!0),"undefined"==typeof window&&(r=!1,i=!1),t.critical&&(r=!0,i=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:i,IOSupported:n,fadeIn:o,hasNoScript:c,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,E=e.backgroundColor,b=e.Tag,w="boolean"==typeof E?"lightgray":E,v=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),k={title:t,alt:this.state.isVisible?"":a,style:v,className:p};if(h){var x=h;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&d.default.createElement(y,(0,l.default)({src:x.base64},k)),x.tracedSVG&&d.default.createElement(y,(0,l.default)({src:x.tracedSVG},k)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),d.default.createElement(y,{alt:a,title:t,src:x.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},x))}}))}if(m){var R=m,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete L.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},k)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},k)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});E.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var v=E;t.default=v},140:function(e,t,a){e.exports={section:"text-section-module--section--3CfmC",title:"text-section-module--title--2NGzZ",subheading:"text-section-module--subheading--BLjJH",pattern:"text-section-module--pattern--3SbZ-",sectionGrey:"text-section-module--section-grey--3MCPk"}},145:function(e,t,a){var r=a(0);function i(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"pattern"),r.createElement("desc",{key:1},"Created with Sketch."),r.createElement("defs",{key:2},r.createElement("filter",{x:"-14.0%",y:"-14.0%",width:"128.0%",height:"128.0%",filterUnits:"objectBoundingBox",id:"filter-1"},[r.createElement("feOffset",{dx:"0",dy:"-2",in:"SourceAlpha",result:"shadowOffsetOuter1",key:0}),r.createElement("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1",key:1}),r.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1",key:2}),r.createElement("feMerge",{key:3},[r.createElement("feMergeNode",{in:"shadowMatrixOuter1",key:0}),r.createElement("feMergeNode",{in:"SourceGraphic",key:1})])])),r.createElement("g",{id:"pattern",filter:"url(#filter-1)",key:3},[r.createElement("polygon",{id:"Rectangle",fill:"#FFC407",points:"150 100 150 150 100 150",key:0}),r.createElement("polygon",{id:"Rectangle",fill:"#FFE490",transform:"translate(125.000000, 125.000000) scale(-1, -1) translate(-125.000000, -125.000000) ",points:"150 100 150 150 100 150",key:1}),r.createElement("polygon",{id:"Rectangle",fill:"#FFC81A",points:"100 50 100 100 50 100",key:2}),r.createElement("polygon",{id:"Rectangle",fill:"#FFE07C",points:"150 0 150 50 100 50",key:3}),r.createElement("polygon",{id:"Rectangle",fill:"#FFDB69",transform:"translate(75.000000, 125.000000) scale(-1, 1) translate(-75.000000, -125.000000) ",points:"100 100 100 150 50 150",key:4}),r.createElement("polygon",{id:"Rectangle",fill:"#F2B800",transform:"translate(75.000000, 125.000000) scale(1, -1) translate(-75.000000, -125.000000) ",points:"100 100 100 150 50 150",key:5}),r.createElement("polygon",{id:"Rectangle",fill:"#FFD655",transform:"translate(125.000000, 75.000000) scale(-1, 1) translate(-125.000000, -75.000000) ",points:"150 50 150 100 100 100",key:6}),r.createElement("polygon",{id:"Rectangle",fill:"#FFF3CB",transform:"translate(125.000000, 75.000000) scale(1, -1) translate(-125.000000, -75.000000) ",points:"150 50 150 100 100 100",key:7}),r.createElement("polygon",{id:"Rectangle",fill:"#FFE9A4",points:"50 100 50 150 0 150",key:8})])])}i.defaultProps={width:"150px",height:"150px",viewBox:"0 0 150 150",version:"1.1"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-about-js-04990dd5893fd3640543.js.map