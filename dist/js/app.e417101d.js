(function(t){function r(r){for(var o,s,c=r[0],u=r[1],i=r[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(r);while(p.length)p.shift()();return n.push.apply(n,i||[]),e()}function e(){for(var t,r=0;r<n.length;r++){for(var e=n[r],o=!0,c=1;c<e.length;c++){var u=e[c];0!==a[u]&&(o=!1)}o&&(n.splice(r--,1),t=s(s.s=e[0]))}return t}var o={},a={app:0},n=[];function s(r){if(o[r])return o[r].exports;var e=o[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,r,e){s.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,r){if(1&r&&(t=s(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)s.d(e,o,function(r){return t[r]}.bind(null,o));return e},s.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(r,"a",r),r},s.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=r,c=c.slice();for(var i=0;i<c.length;i++)r(c[i]);var l=u;n.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},"034f":function(t,r,e){"use strict";e("85ec")},"56d7":function(t,r,e){"use strict";e.r(r);var o=e("2b0e"),a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"block"},[e("h3",[t._v("constructor:")]),e("form",{staticClass:"constructor"},[e("label",{attrs:{for:"name"}},[t._v(" Имя ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.constructor.name,expression:"constructor.name"}],attrs:{id:"name",type:"text"},domProps:{value:t.constructor.name},on:{input:function(r){r.target.composing||t.$set(t.constructor,"name",r.target.value)}}}),e("br"),e("label",{attrs:{for:"damage"}},[t._v(" Урон ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.constructor.damage,expression:"constructor.damage"}],attrs:{id:"damage",type:"number"},domProps:{value:t.constructor.damage},on:{input:function(r){r.target.composing||t.$set(t.constructor,"damage",r.target.value)}}}),e("br"),e("label",{attrs:{for:"type"}},[t._v(" Тип ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.constructor.type,expression:"constructor.type"}],attrs:{id:"type"},on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){var r="_value"in t?t._value:t.value;return r}));t.$set(t.constructor,"type",r.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("Не выбрано")]),e("option",[t._v("Меч")]),e("option",[t._v("Кинжал")]),e("option",[t._v("Топор")]),e("option",[t._v("Копье")])]),e("br"),e("label",{attrs:{for:"speed"}},[t._v(" Скорость атаки ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.constructor.speed,expression:"constructor.speed"}],attrs:{id:"speed"},on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){var r="_value"in t?t._value:t.value;return r}));t.$set(t.constructor,"speed",r.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("Не выбрано")]),e("option",[t._v("Быстрая")]),e("option",[t._v("Средняя")]),e("option",[t._v("Медленная")])]),e("br"),e("label",{attrs:{for:"addDamage"}},[t._v(" Доп. Урон ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.constructor.addDamage,expression:"constructor.addDamage"}],attrs:{id:"addDamage",type:"number"},domProps:{value:t.constructor.addDamage},on:{input:function(r){r.target.composing||t.$set(t.constructor,"addDamage",r.target.value)}}}),e("br"),e("label",{attrs:{for:"addArmour"}},[t._v(" Доп. Броня ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.constructor.addArmour,expression:"constructor.addArmour"}],attrs:{id:"addArmour",type:"number"},domProps:{value:t.constructor.addArmour},on:{input:function(r){r.target.composing||t.$set(t.constructor,"addArmour",r.target.value)}}}),e("br"),e("label",{attrs:{for:"addHealth"}},[t._v(" Доп. Здоровье ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.constructor.addHealth,expression:"constructor.addHealth"}],attrs:{id:"addHealth",type:"number"},domProps:{value:t.constructor.addHealth},on:{input:function(r){r.target.composing||t.$set(t.constructor,"addHealth",r.target.value)}}}),e("br"),e("label",{attrs:{for:"critalDamage"}},[t._v(" Критический урон ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.constructor.critalDamage,expression:"constructor.critalDamage"}],attrs:{id:"critalDamage",type:"number"},domProps:{value:t.constructor.critalDamage},on:{input:function(r){r.target.composing||t.$set(t.constructor,"critalDamage",r.target.value)}}}),e("br"),e("label",{attrs:{for:"critalChanse"}},[t._v(" Критический шанс ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.constructor.critalChanse,expression:"constructor.critalChanse"}],attrs:{id:"critalChanse",type:"number"},domProps:{value:t.constructor.critalChanse},on:{input:function(r){r.target.composing||t.$set(t.constructor,"critalChanse",r.target.value)}}}),e("br"),e("label",{attrs:{for:"evasion"}},[t._v(" Уклонение ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.constructor.evasion,expression:"constructor.evasion"}],attrs:{id:"evasion",type:"number"},domProps:{value:t.constructor.evasion},on:{input:function(r){r.target.composing||t.$set(t.constructor,"evasion",r.target.value)}}}),e("br"),e("label",{attrs:{for:"description"}},[t._v(" Описание ")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.constructor.description,expression:"constructor.description"}],attrs:{id:"description",cols:"30",rows:"5"},domProps:{value:t.constructor.description},on:{input:function(r){r.target.composing||t.$set(t.constructor,"description",r.target.value)}}}),e("br"),e("label",{attrs:{for:"runes"}},[t._v(" Руны ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.constructor.runes,expression:"constructor.runes"}],attrs:{id:"runes"},on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){var r="_value"in t?t._value:t.value;return r}));t.$set(t.constructor,"runes",r.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("Не выбрано")]),e("option",{attrs:{value:"1"}},[t._v("Одна")]),e("option",{attrs:{value:"2"}},[t._v("Две")]),e("option",{attrs:{value:"3"}},[t._v("Три")])]),e("br"),e("label",{attrs:{for:"rare"}},[t._v(" Редкость ")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.constructor.rare,expression:"constructor.rare"}],attrs:{id:"rare"},on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){var r="_value"in t?t._value:t.value;return r}));t.$set(t.constructor,"rare",r.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v("Не выбрано")]),e("option",[t._v("Обычная")]),e("option",[t._v("Необычная")]),e("option",[t._v("Редкая")]),e("option",[t._v("Эпическая")]),e("option",[t._v("Легендарная")])])])]),e("br"),e("div",{staticClass:"block"},[e("h3",[t._v("output:")]),e("br"),e("div",{staticClass:"out-line"},[e("div",{staticClass:"out-block"},[e("img",{staticClass:"copy",attrs:{src:"https://img.icons8.com/material-outlined/24/000000/copy.png"},on:{click:function(r){return t.copyToClipboard(t.output1)}}}),e("pre",{staticClass:"output"},[t._v(t._s(t.output1))])]),e("div",{staticClass:"out-block"},[e("img",{staticClass:"copy",attrs:{src:"https://img.icons8.com/material-outlined/24/000000/copy.png"},on:{click:function(r){return t.copyToClipboard(t.output2)}}}),e("pre",{staticClass:"output"},[t._v(t._s(t.output2))])]),e("div",{staticClass:"out-block"},[e("img",{staticClass:"copy",attrs:{src:"https://img.icons8.com/material-outlined/24/000000/copy.png"},on:{click:function(r){return t.copyToClipboard(t.output3)}}}),e("pre",{staticClass:"output"},[t._v(t._s(t.output3))])])])])])},n=[],s={name:"App",data:()=>({constructor:{name:"",damage:0,type:"",speed:"",addDamage:0,addArmour:0,addHealth:0,critalDamage:0,critalChanse:0,evasion:0,description:"",runes:"",rare:""}}),computed:{output1:t=>{let r=[];if(t.constructor.name){let e="";switch(t.constructor.rare){case"Обычная":e="f";break;case"Необычная":e="a";break;case"Редкая":e="b";break;case"Эпическая":e="5";break;case"Легендарная":e="6";break}r.push(`/rename &${e}${t.constructor.name}`)}if(t.constructor.damage&&(r.push("/lore add &7Урон: &6"+t.constructor.damage),r.push("/lemonitemedit:addattr attack_damage "+t.constructor.damage),r.push("/lore add &f")),t.constructor.type&&r.push("/lore add &7Тип: &8"+t.constructor.type),t.constructor.speed){switch(r.push("/lore add &7Скорость атаки: &8"+t.constructor.speed),t.constructor.speed){case"Быстрая":r.push("/lemonitemedit:addattr attack_speed -1");break;case"Средняя":r.push("/lemonitemedit:addattr attack_speed -2");break;case"Медленная":r.push("/lemonitemedit:addattr attack_speed -3");break}r.push("/lore add &f")}return t.constructor.addDamage&&r.push(`/lore add &c+${t.constructor.addDamage} Урон`),t.constructor.addArmour&&r.push(`/lore add &f+${t.constructor.addArmour} Защита`),r.join(";\n")},output2:t=>{let r=[];return t.constructor.addHealth&&r.push(`/lore add &2+${t.constructor.addHealth} Здоровье`),t.constructor.critalDamage&&r.push(`/lore add &4+${t.constructor.critalDamage} Крит. Урон`),t.constructor.critalChanse&&r.push(`/lore add &6+${t.constructor.critalChanse} Крит. Шанс`),t.constructor.evasion&&r.push(`/lore add &9+${t.constructor.evasion} Уклонение`),(t.constructor.addDamage||t.constructor.addArmour||t.constructor.addHealth||t.constructor.critalDamage||t.constructor.critalChanse||t.constructor.evasion)&&r.push("/lore add &f"),r.join(";\n")},output3:t=>{let r=[];if(t.constructor.description&&(r.push("/lore add "+t.constructor.description),r.push("/lore add &f")),t.constructor.runes){for(let e=0;e<t.constructor.runes;e++)r.push("/lar gems addslot");r.push("/lore add &f")}if(t.constructor.rare)switch(t.constructor.rare){case"Обычная":r.push("/lore add &fОбычный предмет");break;case"Необычная":r.push("/lore add &aНеобычный предмет");break;case"Редкая":r.push("/lore add &bРедкий предмет");break;case"Эпическая":r.push("/lore add &5Эпический предмет");break;case"Легендарная":r.push("/lore add &6Легендарный предмет");break}return r.push("/lemonitemedit:addflag hide_attributes"),r.join(";\n")}},methods:{copyToClipboard(t){navigator.clipboard.writeText(t)}}},c=s,u=(e("034f"),e("2877")),i=Object(u["a"])(c,a,n,!1,null,null,null),l=i.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(l)}}).$mount("#app")},"85ec":function(t,r,e){}});
//# sourceMappingURL=app.e417101d.js.map