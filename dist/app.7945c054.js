parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EVxB":[function(require,module,exports) {
"use strict";var o=document.querySelector(".newgame"),c=document.querySelector(".rock"),e=document.querySelector(".paper"),n=document.querySelector(".scissors"),t=document.querySelector(".hands"),s=document.querySelector(".yourID"),r=document.querySelector(".compID"),a=document.querySelector(".yourScore"),i=document.querySelector(".compScore"),l=document.querySelector(".resultsText"),u='<span class="yourID yourHand__rock rock"><i class="far fa-hand-rock"></i></span>',p='<span class="compID compHand__rock rock"><i class="far fa-hand-rock fa-flip-vertical"></i></span>',S={yourScore:0,compScore:0},m={rock:"rock",paper:"paper",scissors:"scissors"},y={rock:{winsAgainst:"scissors",losesAgainst:"paper"},scissors:{winsAgainst:"paper",losesAgainst:"rock"},paper:{winsAgainst:"rock",losesAgainst:"scissors"}},d={yourSelection:"",compSelection:""};o.addEventListener("click",function(){v()}),c.addEventListener("click",function(){q(),d.yourSelection="rock",f();var o=y.rock.winsAgainst,c=y.rock.losesAgainst;g(o,c),A()}),e.addEventListener("click",function(){q(),d.yourSelection="paper",f();var o=y.paper.winsAgainst,c=y.paper.losesAgainst;g(o,c),A()}),n.addEventListener("click",function(){q(),d.yourSelection="scissors",f();var o=y.scissors.winsAgainst,c=y.scissors.losesAgainst;g(o,c),A()});var f=function(){var o=Math.floor(3*Math.random());0==o?d.compSelection="rock":1==o?d.compSelection="paper":2==o?d.compSelection="scissors":console.log("error!")},k=function(){var o,c;o="scissors"===d.yourSelection?'<span class="yourID yourHand__'.concat(d.yourSelection," ").concat(d.yourSelection,'"><i class="far fa-hand-').concat(d.yourSelection,' fa-flip-vertical"></i></span>'):'<span class="yourID yourHand__'.concat(d.yourSelection," ").concat(d.yourSelection,'"><i class="far fa-hand-').concat(d.yourSelection,'"></i></span>'),c="scissors"===d.compSelection?'<span class="compID compHand__'.concat(d.compSelection," ").concat(d.compSelection,'"><i class="far fa-hand-').concat(d.compSelection,' fa-flip"></i></span>'):'<span class="compID compHand__'.concat(d.compSelection," ").concat(d.compSelection,'"><i class="far fa-hand-').concat(d.compSelection,' fa-flip-vertical"></i></span>'),t.innerHTML=o+c},g=function(o,c){t.classList.toggle("bounce"),setTimeout(function(){k(),o===d.compSelection?(S.yourScore++,l.textContent="You Win!",a.textContent=S.yourScore):c===d.compSelection?(S.compScore++,l.textContent="You Lose!",i.textContent=S.compScore):l.textContent="Tie!"},1800)},v=function(){S.yourScore=0,S.compScore=0,a.textContent=S.yourScore,i.textContent=S.compScore,l.textContent="",t.innerHTML=u+p},q=function(){t.innerHTML=u+p,l.textContent=""},A=function(){setTimeout(function(){t.classList.toggle("bounce");var o=document.querySelector(".yourID"),c=document.querySelector(".compID");s=o,r=c},2e3)};
},{}]},{},["EVxB"], null)
//# sourceMappingURL=/app.7945c054.js.map