(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(32);var i=a(0),r=a.n(i),n=a(153),s=a(155),l=a(148),o=a(150),d=a(162),c=a.n(d);t.default=function(e){var t=e.data,a=e.location,i=[{title:"The Boiler",subheading:"Purdue's Student Run Startup Accellerator",paragraphs:["The longest running and most successful initiative of The Anvil, The Boiler is back for our fifth year enabling student startups in the Purdue community. The Boiler is a pre-seed accelerator with a mission of taking early stage startups from Purdue students and giving them the resources they need to succeed and generate revenue.",r.a.createElement(r.a.Fragment,null,r.a.createElement(n.Link,{to:"/events/theboiler"},"Find more about this year's program here"))],imageFluid:t.imageOne.childImageSharp.fluid,alt:"Olivia Cane of Unibubbles wins the 4th annual Boiler Accellerator"},{title:"Crossing State Street",subheading:"Purdue's First Social Entrepreneurship Competition",paragraphs:[r.a.createElement(r.a.Fragment,null,"In November 2018, The Anvil hosted Purdue’s first social entrepreneurship competition. Named Crossing State Street, metaphorically bridging our campus, it consisted of multidisciplinary teams which created a business plan of a social enterprise. We partnered with Care For Friends, a nonprofit based in Chicago, to have a common goal, solving the communication between services and the homeless population.")],imageFluid:t.imageTwo.childImageSharp.fluid,alt:"Students collaborate in the Crossing State Street competition"}];return r.a.createElement(s.a,{location:a,pageTitle:"Events"},r.a.createElement(l.a,{Pattern:c.a,title:"Events",theme:"blue"}),i.map(function(e,t){return r.a.createElement(o.a,Object.assign({Pattern:c.a},e,{index:t,key:t}))}))};var u="718342295"},148:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(149),s=a.n(n);t.a=function(e){var t=e.title,a=e.theme,i=e.Pattern,n=[s.a.section,"blue"===a?s.a.sectionBlue:"","gold"===a?s.a.sectionGold:"","green"===a?s.a.sectionGreen:""].join(" ").trim();return r.a.createElement("div",{className:n},r.a.createElement("h2",{className:s.a.title+" text-uppercase"},t),r.a.createElement(i,{className:s.a.pattern}))}},149:function(e,t,a){e.exports={section:"title-section-module--section--2faFW",title:"title-section-module--title--3sjWA",pattern:"title-section-module--pattern--nJlD2",sectionGold:"title-section-module--section-gold--3-6mj",sectionBlue:"title-section-module--section-blue--2zVGX",sectionGreen:"title-section-module--section-green--EidBa"}},150:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(151),s=a.n(n),l=a(152),o=a.n(l);t.a=function(e){var t=e.title,a=e.subheading,i=e.paragraphs,n=e.index,l=e.imageFluid,d=e.Pattern,c=e.alt;n=n||0;var u=[o.a.section,n%2?o.a.sectionGrey:""].join(" ").trim();return r.a.createElement("div",{className:u},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:l?"col-md-7":"col-12"},r.a.createElement(d,{className:o.a.pattern,style:{transform:"rotate("+90*n+"deg)"}}),r.a.createElement("h3",{className:o.a.title+" text-uppercase"},t),r.a.createElement("h4",{className:o.a.subheading},a),i&&i.map(function(e,t){return r.a.createElement("p",{className:o.a.text,key:t},e)})),r.a.createElement("div",{className:l?"col-md-5":""},l&&r.a.createElement(s.a,{fluid:l,style:{width:"100%"},alt:c||""})))))}},151:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(51)),l=i(a(156)),o=i(a(157)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+l+o+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:o,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,E=e.Tag,v="boolean"==typeof b?"lightgray":b,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),w=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),k={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var x=h;return d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&d.default.createElement(y,(0,o.default)({src:x.base64},k)),x.tracedSVG&&d.default.createElement(y,(0,o.default)({src:x.tracedSVG},k)),v&&d.default.createElement(E,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),d.default.createElement(y,{alt:a,title:t,src:x.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},x))}}))}if(m){var L=m,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},n);return"inherit"===n.display&&delete R.display,d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&d.default.createElement(y,(0,o.default)({src:L.base64},k)),L.tracedSVG&&d.default.createElement(y,(0,o.default)({src:L.tracedSVG},k)),v&&d.default.createElement(E,{title:t,style:{backgroundColor:v,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:E,sizes:v,fixed:E,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var S=b;t.default=S},152:function(e,t,a){e.exports={section:"text-section-module--section--3CfmC",title:"text-section-module--title--2NGzZ",subheading:"text-section-module--subheading--BLjJH",text:"text-section-module--text--37cT5",pattern:"text-section-module--pattern--3SbZ-",sectionGrey:"text-section-module--section-grey--3MCPk"}},162:function(e,t,a){var i=a(0);function r(e){return i.createElement("svg",e,[i.createElement("title",{key:0},"pattern"),i.createElement("desc",{key:1},"Created with Sketch."),i.createElement("defs",{key:2},i.createElement("filter",{x:"-14.0%",y:"-14.0%",width:"128.0%",height:"128.0%",filterUnits:"objectBoundingBox",id:"filter-1"},[i.createElement("feOffset",{dx:"0",dy:"-2",in:"SourceAlpha",result:"shadowOffsetOuter1",key:0}),i.createElement("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1",key:1}),i.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1",key:2}),i.createElement("feMerge",{key:3},[i.createElement("feMergeNode",{in:"shadowMatrixOuter1",key:0}),i.createElement("feMergeNode",{in:"SourceGraphic",key:1})])])),i.createElement("g",{id:"pattern",filter:"url(#filter-1)",key:3},[i.createElement("polygon",{id:"Rectangle",fill:"#1C313D",points:"150 100 150 150 100 150",key:0}),i.createElement("polygon",{id:"Rectangle",fill:"#40738F",transform:"translate(125.000000, 125.000000) scale(-1, -1) translate(-125.000000, -125.000000) ",points:"150 100 150 150 100 150",key:1}),i.createElement("polygon",{id:"Rectangle",fill:"#DEEAF0",points:"100 50 100 100 50 100",key:2}),i.createElement("polygon",{id:"Rectangle",fill:"#345D74",points:"150 0 150 50 100 50",key:3}),i.createElement("polygon",{id:"Rectangle",fill:"#2E5266",transform:"translate(75.000000, 125.000000) scale(-1, 1) translate(-75.000000, -125.000000) ",points:"100 100 100 150 50 150",key:4}),i.createElement("polygon",{id:"Rectangle",fill:"#9ABED2",transform:"translate(75.000000, 125.000000) scale(1, -1) translate(-75.000000, -125.000000) ",points:"100 100 100 150 50 150",key:5}),i.createElement("polygon",{id:"Rectangle",fill:"#649BB9",transform:"translate(125.000000, 75.000000) scale(-1, 1) translate(-125.000000, -75.000000) ",points:"150 50 150 100 100 100",key:6}),i.createElement("polygon",{id:"Rectangle",fill:"#2E5266",transform:"translate(125.000000, 75.000000) scale(1, -1) translate(-125.000000, -75.000000) ",points:"150 50 150 100 100 100",key:7}),i.createElement("polygon",{id:"Rectangle",fill:"#8DB5CB",points:"50 100 50 150 0 150",key:8})])])}r.defaultProps={width:"150px",height:"150px",viewBox:"0 0 150 150",version:"1.1"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-events-index-js-2ed5e8ffe0e04169f3df.js.map