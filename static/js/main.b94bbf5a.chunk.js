(this.webpackJsonpshowcasexr=this.webpackJsonpshowcasexr||[]).push([[0],{20:function(t,n,e){},21:function(t,n,e){"use strict";e.r(n);var i=e(0),o=e(1),r=e.n(o),a=e(9),s=e.n(a),l=e(2),d=e(3);function c(){var t=Object(l.a)(['\n  /* cardTitle */\n\n  position: static;\n  width: 280px;\n  height: 49px;\n  left: 12px;\n  top: 12px;\n\n  /* Inside Auto Layout */\n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 0;\n\n  font-family: "Lora", serif;\n  font-style: normal;\n  font-weight: bold;\n  // font-size: 2.5vh;\n  // replaced with this clamp model found online for min max css\n  font-size: clamp(17px, 4vh, 25px);\n  line-height: 2em;\n\n  color: #fcfcfc;\n']);return c=function(){return t},t}var h=d.a.div(c());function p(t){var n=t.title;return Object(i.jsx)(h,{children:n})}function u(){var t=Object(l.a)(['\n  /* body */\n\n  position: static;\n  width: 280px;\n  height: 34px;\n\n  /* Inside Auto Layout */\n\n  flex: none;\n  order: 1;\n  flex-grow: 0;\n  margin: 0px 0px;\n\n  font-family: "Lato", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: clamp(11px, 1vh, 11px);\n  //   line-height: 13px;\n\n  color: #fcfcfc;\n']);return u=function(){return t},t}var m=d.a.div(u());function f(t){var n=t.description;return Object(i.jsx)(m,{children:n})}function g(){var t=Object(l.a)(["\n  /* CardBody */\n\n  /* Auto Layout */\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0.75em;\n\n  position: relative;\n  width: 299px;\n  height: 125px;\n  margin: 0;\n"]);return g=function(){return t},t}var b=d.a.div(g());function x(t){var n=t.title,e=t.description;return Object(i.jsxs)(b,{children:[Object(i.jsx)(f,{description:e}),Object(i.jsx)(p,{title:n})]})}function v(){var t=Object(l.a)(["\n  position: relative;\n  width: 300px;\n  height: 287px;\n  left: 0px;\n  top: 0px;\n\n  background: url(.jpg);\n  border-radius: 1.25em;\n\n  /* Inside Auto Layout */\n\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 0px 0px;\n"]);return v=function(){return t},t}var w=d.a.div(v());function j(t){var n=t.imgURL;return Object(i.jsx)(w,{children:Object(i.jsx)("img",{"data-src":n,loading:"lazy"})})}function y(){var t=Object(l.a)(["\n  // padding-bottom: 3%; /* Same as width, sets height */\n  // padding-top: 3%; /* Same as width, sets height */\n  // margin-bottom: 2%; /* (100-32*3)/2 */\n\n  display: flex;\n  flex-direction: column;\n  align-items: middle;\n  padding: 0px;\n\n  position: relative;\n  width: 18.75em;\n  height: 25.8125em;\n  // left: calc(50% - 18.75em / 2);\n  // top: calc(50% - 25.8125em / 2 - 0.5px);\n\n  background: #333333;\n  // border: 1.3vh solid #000000;\n  border: clamp(7px, 1.6vh, 10px) solid #030303;\n  // box-shadow: 1.25em 1.25em 0.25em #623cea;\n  transition-property: box-shadow;\n  transition-duration: .38s;\n  transition-timing-function: linear;\n  box-shadow: 2.85vh 2.85vh 0.85vh #623cea;\n  border-radius: 1.25em;\n\n  &:hover {\n    // box-shadow: 2em 2em 0.25em #623cea;\n    transition-property: box-shadow;\n    transition-duration: .18s;\n    transition-timing-function: linear;\n    // transition-delay: 0s;\n    box-shadow: 1.85vh 1.85vh 0.25vh #623cea;\n  }\n"]);return y=function(){return t},t}var k=d.a.div(y());function R(t){var n=t.cardInfo;return Object(i.jsx)(k,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{imgURL:n.imgURL,loading:"lazy"}),Object(i.jsx)(x,{title:n.title,description:n.description,loading:"lazy"})]})})}e(8);var L=Object.freeze([{title:"{{TetrisArcade}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/tetris.gif",description:"Explore new twists on an old classic (and on any device) in Tetris Arcade.",link:"https://tetrisarcade.xyz/"},{title:"{{SIMULACRA}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/simulacra.gif",description:"SIMULACRA is a WebXR art experience featuring the work of over 13 Twin Cities artists who work in digital and new media mediums.",link:"https://virtualrem5.com/as6hbyy/simulacra"},{title:"{{S.E.N.S WebVR}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/sens.gif",description:"LucidWeb worked with ARTE and Red Corner to make the first VR game inspired by a graphic novel. In 10 minutes the character created by Marc-Antoine Mathieu comes to life searching for the unknown in a meditative and surreal maze.",link:"https://sens.arte.tv/webvr/"},{title:"{{SilkBrush}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/silkbrush.gif",description:"Silk Brush is a port of Tilt Brush to WebXR. Headset required.",link:"https://msub2.github.io/silk-brush/"},{title:"{{Webaverse}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/webaverse.gif",description:"The Internet MMO built with NFTs.",link:"https://app.webaverse.com/"},{title:"{{Starship0}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/starship0.gif",description:"Starship forged and updated regularly using Asset Forge and A-Frame.",link:"https://starship0.glitch.me/"},{title:"{{SpaceTrain}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/train.gif",description:"Hop aboard an XR train ride to various different experiences.",link:"https://train.gatunes.com/#/Metro"},{title:"{{D.C. 360}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/dc360.gif",description:"A collection of 360 images around Washington D.C. Landmarks and Monuments",link:"https://kuula.co/share/collection/7PSxv?fs=1&vr=1&sd=1&initload=0&thumbs=1&info=0&logo=0"},{title:"{{ShaderWorlds}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/shaderworlds.gif",description:"A PC-first high end collection of mathematically rendered XR Worlds.",link:"https://shaderworlds.com/"},{title:"{{Edgewater Sunset}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/dhf020721.gif",description:"First capture of sunset at a farm house in Maryland.",link:"https://sunset-edgewater.glitch.me"},{title:"{{Animalia Art Show}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/animalia.gif",description:"The process of ANIMALIA provides a glimpse into the creative mind of an 8th Grade Artist.",link:"https://framevr.io/kibsdart"},{title:"{{Troll Tower}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/trolltower.gif",description:"Scale the Troll tower with friends in this Multiplayer XR Climbing Game.",link:"https://trolltower.app"},{title:"{{Spiderman VR}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/spidey.gif",description:"Headset Req: Fly around a city as a low poly Spidey!",link:"https://spiderman.webvr.link"},{title:"{{Elfland Glider}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/elflandglider.gif",description:"A tranquil action game for VR and mobile. Fly through fantastic worlds, help the merry and mischievous light elves, & avoid the surly and mischievous dark elves.",link:"https://dougreeder.github.io/elfland-glider/"},{title:"{{VR Space}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/pbloomvrspace.gif",description:"A collection of over 30 works by Pat Bloom. Pay a visit alone or with all of your friends - safety guaranteed.",link:"http://patbloom.com/vrspace"},{title:"{{Caught in Guelph}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/guelphsky.gif",description:"Day and night transitional overlooking the east end of Guelph.",link:"https://caughtinguelph.com/Aerial-01/"},{title:"{{Ocean City}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/ocmd-010221.gif",description:"A rainy morning, on January 2, 2021, in Ocean City, Maryland.",link:"https://oceancity.glitch.me"},{title:"{{Horror Lobby}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/HorrorRoom.gif",description:"Small room with old horror movie posters and floating spirit.",link:"https://webxr-horror-exhibit.glitch.me/"},{title:"{{Lothian, Skyline}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/LothianSky.gif",description:"360 degree memory of a sunrise over a beautiful horse farm in Lothian, MD.",link:"https://lothian-memory.glitch.me"},{title:"{{OG Sandbox}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/ogsandboxsky.gif",description:"An early project for testing our asset deployment and aframe sky. Featuring Annapolis, MD.",link:"https://angellxr.github.io/oldsandbox/"},{title:"{{Dove Hill}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/dovehill.gif",description:"360 degree memory over a beautiful horse farm in Edgewater, MD.",link:"https://edgewater-dream.glitch.me/"},{title:"{{ChessVR}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/chessvr.gif",description:"aframe Chess, because we can.",link:"https://chessvr.glitch.me/"},{title:"{{Hounds, Sunset}}",imgURL:"https://d3i9te5634opuo.cloudfront.net/houndwalk.gif",description:"Aerial view of a Marlboro Hunt Club hound walk, Fall 2020",link:"https://marlboro-hounds.glitch.me/"}]);function O(){var t=Object(l.a)(["\n  // position: center;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n  // max-width: 140vmin;\n  }\n"]);return O=function(){return t},t}var A=d.a.div(O());function U(t){return Object(i.jsx)(A,{children:Object(i.jsx)("div",{class:"cardgrid",children:L.map((function(t){return Object(i.jsx)("a",{href:t.link,children:Object(i.jsxs)("div",{className:"item",children:[" ",Object(i.jsx)(R,{cardInfo:t})," "]})})}))})})}function S(){var t=Object(l.a)(["\n  position: relative;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  // bottom: 1.28%;\n\n  font-family: Lora; serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 12vmin;\n  line-height: 12vmin;\n  /* identical to box height */\n\n  color: #030303;\n"]);return S=function(){return t},t}var M=d.a.div(S());function C(t){t.props;return Object(i.jsx)(M,{children:"XR Showcase"})}var T="375px",I="425px",W="768px",z="1024px",H="1440px",X="2560px";"(min-width: ".concat("320px",")"),"(min-width: ".concat(T,")"),"(min-width: ".concat(I,")"),"(min-width: ".concat(W,")"),"(min-width: ".concat(z,")"),"(min-width: ".concat(H,")"),"(min-width: ".concat(X,")"),"(min-width: ".concat(X,")");var E=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("body",{children:[Object(i.jsx)(C,{}),Object(i.jsx)("h3",{children:"Each card contains a VR or AR experience. Browse Worlds, memories, sites, and assets on any device."}),Object(i.jsxs)("p",{children:["We believe in an open and collaborative Metaverse. Have a WebXR project we should showcase? Submit your project ",Object(i.jsx)("a",{href:"https://forms.gle/UfpUuKmvXQGjuX737",children:Object(i.jsx)("u",{children:"with this form"})})," to be featured."]}),Object(i.jsx)("h4",{children:Object(i.jsx)("a",{href:"https://angellxr.com/",children:"back to angellxr.com"})}),Object(i.jsx)("div",{children:Object(i.jsx)(U,{})})]})})};e(20);s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))},8:function(t,n,e){}},[[21,1,2]]]);
//# sourceMappingURL=main.b94bbf5a.chunk.js.map