(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});a(28);var i=a(0),r=a.n(i),s=a(142),n=a(137),l=a(139),o=a(148),d=a.n(o);t.default=function(e){var t=e.data,a=e.location,i=[{title:"The Boiler",subheading:"Purdue's Student Run Startup Accellerator",paragraphs:["The longest running and most successful initiative of The Anvil, The Boiler is back for our fifth year enabling student startups in the Purdue community. The Boiler is a pre-seed accelerator with a mission of taking early stage startups from Purdue students and giving them the resources they need to succeed and generate revenue."],imageFluid:t.imageOne.childImageSharp.fluid},{title:"Section 2",subheading:"Lorem ispum blah blah blah",paragraphs:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus auctor vestibulum. Ut efficitur scelerisque sagittis. Aliquam dignissim fringilla laoreet. Sed auctor erat id erat fermentum eleifend. Nam arcu magna, egestas nec sem a, ultrices fringilla augue. Praesent ac feugiat ex, at vulputate diam. Maecenas vel hendrerit lorem, ac faucibus sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis dolor imperdiet, blandit ex in, congue risus."]}];return r.a.createElement(s.a,{location:a},r.a.createElement(n.a,{Pattern:d.a,title:"Events",theme:"blue"}),i.map(function(e,t){return r.a.createElement(l.a,Object.assign({Pattern:d.a},e,{index:t,key:t}))}))};var c="4218696746"},137:function(e,t,a){"use strict";var i=a(0),r=a.n(i),s=a(138),n=a.n(s);t.a=function(e){var t=e.title,a=e.theme,i=e.Pattern,s=[n.a.section,"blue"===a?n.a.sectionBlue:"","gold"===a?n.a.sectionGold:"","green"===a?n.a.sectionGreen:""].join(" ").trim();return r.a.createElement("div",{className:s},r.a.createElement("h2",{className:n.a.title+" text-uppercase"},t),r.a.createElement(i,{className:n.a.pattern}))}},138:function(e,t,a){e.exports={section:"title-section-module--section--2faFW",title:"title-section-module--title--3sjWA",pattern:"title-section-module--pattern--nJlD2",sectionGold:"title-section-module--section-gold--3-6mj",sectionBlue:"title-section-module--section-blue--2zVGX",sectionGreen:"title-section-module--section-green--EidBa"}},139:function(e,t,a){"use strict";var i=a(0),r=a.n(i),s=(a(135),a(140)),n=a.n(s),l=a(141),o=a.n(l);t.a=function(e){var t=e.title,a=e.subheading,i=e.paragraphs,s=e.index,l=e.imageFluid,d=e.Pattern;s=s||0;var c=[o.a.section,s%2?o.a.sectionGrey:""].join(" ").trim();return r.a.createElement("div",{className:c},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:l?"col-md-7":"col-12"},r.a.createElement(d,{className:o.a.pattern,style:{transform:"rotate("+90*s+"deg)"}}),r.a.createElement("h3",{className:o.a.title+" text-uppercase"},t),r.a.createElement("h4",{className:o.a.subheading},a),i&&i.map(function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("div",{className:l?"col-md-5":""},l&&r.a.createElement(n.a,{fluid:l,style:{width:"100%"}})))))}},140:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(6)),n=i(a(46)),l=i(a(143)),o=i(a(144)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+l+o+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,s=(0,l.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,o.default)({},s,{onLoad:i,onError:r,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,s=!1,l=t.fadeIn,o=m(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,s=!0),"undefined"==typeof window&&(i=!1,r=!1),t.critical&&(i=!0,r=!1,s=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:r,IOSupported:s,fadeIn:l,hasNoScript:c,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,l=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,E=e.Tag,v="boolean"==typeof b?"lightgray":b,w=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),S=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),k={title:t,alt:this.state.isVisible?"":a,style:w,className:m};if(p){var R=p;return d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(E,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(y,(0,o.default)({src:R.base64},k)),R.tracedSVG&&d.default.createElement(y,(0,o.default)({src:R.tracedSVG},k)),v&&d.default.createElement(E,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},R))}}))}if(h){var x=h,L=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},s);return"inherit"===s.display&&delete L.display,d.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&d.default.createElement(y,(0,o.default)({src:x.base64},k)),x.tracedSVG&&d.default.createElement(y,(0,o.default)({src:x.tracedSVG},k)),v&&d.default.createElement(E,{title:t,style:{backgroundColor:v,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&d.default.createElement("picture",null,x.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),d.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),d.default.createElement(y,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:E,sizes:v,fixed:E,fluid:v,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var w=b;t.default=w},141:function(e,t,a){e.exports={section:"text-section-module--section--3CfmC",title:"text-section-module--title--2NGzZ",subheading:"text-section-module--subheading--BLjJH",pattern:"text-section-module--pattern--3SbZ-",sectionGrey:"text-section-module--section-grey--3MCPk"}},148:function(e,t,a){var i=a(0);function r(e){return i.createElement("svg",e,[i.createElement("title",{key:0},"pattern"),i.createElement("desc",{key:1},"Created with Sketch."),i.createElement("defs",{key:2},i.createElement("filter",{x:"-14.0%",y:"-14.0%",width:"128.0%",height:"128.0%",filterUnits:"objectBoundingBox",id:"filter-1"},[i.createElement("feOffset",{dx:"0",dy:"-2",in:"SourceAlpha",result:"shadowOffsetOuter1",key:0}),i.createElement("feGaussianBlur",{stdDeviation:"5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1",key:1}),i.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0",type:"matrix",in:"shadowBlurOuter1",result:"shadowMatrixOuter1",key:2}),i.createElement("feMerge",{key:3},[i.createElement("feMergeNode",{in:"shadowMatrixOuter1",key:0}),i.createElement("feMergeNode",{in:"SourceGraphic",key:1})])])),i.createElement("g",{id:"pattern",filter:"url(#filter-1)",key:3},[i.createElement("polygon",{id:"Rectangle",fill:"#1C313D",points:"150 100 150 150 100 150",key:0}),i.createElement("polygon",{id:"Rectangle",fill:"#40738F",transform:"translate(125.000000, 125.000000) scale(-1, -1) translate(-125.000000, -125.000000) ",points:"150 100 150 150 100 150",key:1}),i.createElement("polygon",{id:"Rectangle",fill:"#DEEAF0",points:"100 50 100 100 50 100",key:2}),i.createElement("polygon",{id:"Rectangle",fill:"#345D74",points:"150 0 150 50 100 50",key:3}),i.createElement("polygon",{id:"Rectangle",fill:"#2E5266",transform:"translate(75.000000, 125.000000) scale(-1, 1) translate(-75.000000, -125.000000) ",points:"100 100 100 150 50 150",key:4}),i.createElement("polygon",{id:"Rectangle",fill:"#9ABED2",transform:"translate(75.000000, 125.000000) scale(1, -1) translate(-75.000000, -125.000000) ",points:"100 100 100 150 50 150",key:5}),i.createElement("polygon",{id:"Rectangle",fill:"#649BB9",transform:"translate(125.000000, 75.000000) scale(-1, 1) translate(-125.000000, -75.000000) ",points:"150 50 150 100 100 100",key:6}),i.createElement("polygon",{id:"Rectangle",fill:"#2E5266",transform:"translate(125.000000, 75.000000) scale(1, -1) translate(-125.000000, -75.000000) ",points:"150 50 150 100 100 100",key:7}),i.createElement("polygon",{id:"Rectangle",fill:"#8DB5CB",points:"50 100 50 150 0 150",key:8})])])}r.defaultProps={width:"150px",height:"150px",viewBox:"0 0 150 150",version:"1.1"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-events-js-16962086f2b9220fdb82.js.map