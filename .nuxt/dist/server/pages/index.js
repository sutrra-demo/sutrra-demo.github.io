exports.ids = [1];
exports.modules = Array(26).concat([
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("98acb71e", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("33164fa7", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("597ceaf9", content, true, context)
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Products.vue?vue&type=template&id=cd9b24ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-24"},[_vm._ssrNode("<div class=\"container\"><ul class=\"grid grid-cols-12 gap-0 sm:gap-6 md:gap-8 lg:gap-10 mb-24\">"+(_vm._ssrList((_vm.products),function(product,index){return ("<li class=\"col-span-12 md:col-span-4 mb-16 md:mb-0 \"><div class=\"product-box bg-pale relative py-20\"><h2 class=\"font-secondary uppercase text-2xl\">"+_vm._ssrEscape(_vm._s(product.name))+"</h2> <img"+(_vm._ssrAttr("src",product.image_url))+"></div> <div class=\"mt-5 grid grid-cols-12 items-center\"><label class=\"mb-4 sm:mb-0 col-span-12 sm:col-span-6 font-primary text-sm\">"+_vm._ssrEscape("RSD "+_vm._s(product.price.toFixed(2)))+"</label> <div class=\"col-span-12 sm:col-span-6\"><div class=\"quantity bg-pale\"><button class=\"font-primary\">-</button> <input type=\"number\" max=\"99\" min=\"0\""+(_vm._ssrAttr("value",(product.quantity)))+" class=\"font-primary\"> <button class=\"font-primary\">+</button></div></div></div></li>")}))+"</ul></div> "),_vm._ssrNode("<div class=\"bg-pale pt-24 pb-24\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"form\">","</div>",[_c('validation-observer',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
var invalid = ref.invalid;
return [_c('h2',{staticClass:"font-secondary text-4xl text-center mb-12"},[_vm._v("Tvoji podaci")]),_vm._v(" "),_c('div',{staticClass:"mb-8 grid grid-cols-6 col-gap-6"},[_c('div',{staticClass:"col-span-6 sm:col-span-6 md:col-span-3 sm:mb-6 mb-6 md:mb-0"},[_c('validation-provider',{attrs:{"rules":{ required: true, max: 50 }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var failedRules = ref.failedRules;
return [_c('label',{staticClass:"font-primary mb-2 block color-dark text-sm"},[_vm._v("Ime")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.firstname),expression:"firstname"}],staticClass:"font-primary",class:{'error': errors && errors.length},attrs:{"type":"text","placeholder":"Tvoje ime"},domProps:{"value":(_vm.firstname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.firstname=$event.target.value}}}),_vm._v(" "),(errors)?_c('div',{staticClass:"text-xs font-primary color-danger"},[(failedRules['required'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['required']))]):_vm._e(),_vm._v(" "),(failedRules['max'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['max']))]):_vm._e()]):_vm._e()]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"col-span-6 sm:col-span-6 md:col-span-3"},[_c('validation-provider',{attrs:{"rules":{ required: true, max: 50 }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var failedRules = ref.failedRules;
return [_c('label',{staticClass:"font-primary mb-2 block color-dark text-sm"},[_vm._v("Prezime")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.lastname),expression:"lastname"}],staticClass:"font-primary",class:{'error': errors && errors.length},attrs:{"type":"text","placeholder":"Tvoje prezime"},domProps:{"value":(_vm.lastname)},on:{"input":function($event){if($event.target.composing){ return; }_vm.lastname=$event.target.value}}}),_vm._v(" "),(errors)?_c('div',{staticClass:"text-xs font-primary color-danger"},[(failedRules['required'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['required']))]):_vm._e(),_vm._v(" "),(failedRules['max'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['max']))]):_vm._e()]):_vm._e()]}}],null,true)})],1)]),_vm._v(" "),_c('div',{staticClass:"mb-8"},[_c('validation-provider',{attrs:{"rules":{ required: true, max: 50 }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var failedRules = ref.failedRules;
return [_c('label',{staticClass:"font-primary mb-2 block color-dark text-sm"},[_vm._v("Adresa")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.address),expression:"address"}],staticClass:"font-primary",class:{'error': errors && errors.length},attrs:{"type":"text","placeholder":"Tvoja adresa"},domProps:{"value":(_vm.address)},on:{"input":function($event){if($event.target.composing){ return; }_vm.address=$event.target.value}}}),_vm._v(" "),(errors)?_c('div',{staticClass:"text-xs font-primary color-danger"},[(failedRules['required'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['required']))]):_vm._e(),_vm._v(" "),(failedRules['max'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['max']))]):_vm._e()]):_vm._e()]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"mb-8"},[_c('validation-provider',{attrs:{"rules":{ required: true, max: 50 }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var failedRules = ref.failedRules;
return [_c('label',{staticClass:"font-primary mb-2 block color-dark text-sm"},[_vm._v("Grad")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.city),expression:"city"}],staticClass:"font-primary",class:{'error': errors && errors.length},attrs:{"type":"text","placeholder":"Ime grada"},domProps:{"value":(_vm.city)},on:{"input":function($event){if($event.target.composing){ return; }_vm.city=$event.target.value}}}),_vm._v(" "),(errors)?_c('div',{staticClass:"text-xs font-primary color-danger"},[(failedRules['required'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['required']))]):_vm._e(),_vm._v(" "),(failedRules['max'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['max']))]):_vm._e()]):_vm._e()]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"mb-8"},[_c('validation-provider',{attrs:{"rules":{ required: true, max: 50 }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var failedRules = ref.failedRules;
return [_c('label',{staticClass:"font-primary mb-2 block color-dark text-sm"},[_vm._v("Poštanski broj")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.postal),expression:"postal"}],staticClass:"font-primary",class:{'error': errors && errors.length},attrs:{"type":"text","placeholder":"Poštanski broj"},domProps:{"value":(_vm.postal)},on:{"input":function($event){if($event.target.composing){ return; }_vm.postal=$event.target.value}}}),_vm._v(" "),(errors)?_c('div',{staticClass:"text-xs font-primary color-danger"},[(failedRules['required'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['required']))]):_vm._e(),_vm._v(" "),(failedRules['max'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['max']))]):_vm._e()]):_vm._e()]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"mb-8"},[_c('validation-provider',{attrs:{"rules":{ required: true, min: 5, max: 50 }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var failedRules = ref.failedRules;
return [_c('label',{staticClass:"font-primary mb-2 block color-dark text-sm"},[_vm._v("Telefon")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.phone),expression:"phone"}],staticClass:"font-primary",class:{'error': errors && errors.length},attrs:{"type":"text","placeholder":"Telefon"},domProps:{"value":(_vm.phone)},on:{"input":function($event){if($event.target.composing){ return; }_vm.phone=$event.target.value}}}),_vm._v(" "),(errors)?_c('div',{staticClass:"text-xs font-primary color-danger"},[(failedRules['required'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['required']))]):_vm._e(),_vm._v(" "),(failedRules['max'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['max']))]):_vm._e(),_vm._v(" "),(failedRules['min'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['min']))]):_vm._e()]):_vm._e()]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"mb-10"},[_c('validation-provider',{attrs:{"rules":{ required: true, email: true }},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
var failedRules = ref.failedRules;
return [_c('label',{staticClass:"font-primary mb-2 block color-dark text-sm"},[_vm._v("Email")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"font-primary",class:{'error': errors && errors.length},attrs:{"type":"text","placeholder":"dunja@gmail.com"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_vm._v(" "),(errors)?_c('div',{staticClass:"text-xs font-primary color-danger"},[(failedRules['required'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['required']))]):_vm._e(),_vm._v(" "),(failedRules['email'])?_c('span',{staticClass:"block mt-2"},[_vm._v(_vm._s(failedRules['email']))]):_vm._e()]):_vm._e()]}}],null,true)})],1),_vm._v(" "),_c('div',{staticClass:"mb-12 text-center"},[_c('label',{staticClass:"font-primary text-sm color-primary"},[_vm._v("Ukupan iznos vaše porudžbine je:")]),_vm._v(" "),_c('label',{staticClass:"font-primary text-sm color-dark block mt-2 mb-2"},[_vm._v("RSD "+_vm._s(_vm.total.toLocaleString('de-DE')))]),_vm._v(" "),_c('label',{staticClass:"font-primary text-sm color-primary"},[_vm._v("Porudžbina se plaća pouzećem.")])]),_vm._v(" "),_c('button',{staticClass:"font-primary btn-primary",on:{"click":function($event){return handleSubmit(_vm.submit)}}},[_c('span',[_vm._v("Poruči")])])]}}])})],1),_vm._ssrNode(" <p class=\"font-primary text-xs color-primary\" style=\"max-width: 500px; text-align: center; margin: 100px auto 0 auto;\">\n                Podaci koji se prikupljaju kroz formu za naručivanje koristiće se isključivo za komunikaciju u vezi da isporukom poručenih proizvoda i obaveštavanje o novim proizvodima, posebnim ponudama i sl. Vaši podaci biće obrađivani u skladu sa odredbama važećih zakona Republike Srbije.\n            </p>")],2)]),_vm._ssrNode(" <div id=\"mc_embed_signup\" style=\"display: none;\"><form action=\"https://codetri.us17.list-manage.com/subscribe/post?u=357ec6cb4eda9f428fa295e93&id=91d31a5332\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" target=\"_blank\" novalidate=\"novalidate\" class=\"validate\"><div id=\"mc_embed_signup_scroll\"><div class=\"indicates-required\"><span class=\"asterisk\">*</span> indicates required</div> <div class=\"mc-field-group\"><label for=\"mce-EMAIL\">Email Address  <span class=\"asterisk\">*</span></label> <input type=\"email\" value name=\"EMAIL\" id=\"mce-EMAIL\" class=\"required email\"></div> <div class=\"mc-field-group\"><label for=\"mce-FNAME\">First Name </label> <input type=\"text\" value name=\"FNAME\" id=\"mce-FNAME\"></div> <div class=\"mc-field-group\"><label for=\"mce-LNAME\">Last Name </label> <input type=\"text\" value name=\"LNAME\" id=\"mce-LNAME\"></div> <div class=\"mc-field-group size1of2\"><label for=\"mce-PHONE\">Phone Number </label> <input type=\"text\" name=\"PHONE\" value id=\"mce-PHONE\"></div> <div class=\"mc-field-group\"><label for=\"mce-ADDRESS\">Address </label> <input type=\"text\" value name=\"ADDRESS\" id=\"mce-ADDRESS\"></div> <div class=\"mc-field-group\"><label for=\"mce-CITY\">City </label> <input type=\"text\" value name=\"CITY\" id=\"mce-CITY\"></div> <div class=\"mc-field-group\"><label for=\"mce-POSTAL\">Postal </label> <input type=\"text\" value name=\"POSTAL\" id=\"mce-POSTAL\"></div> <div class=\"mc-field-group\"><label for=\"mce-TOTAL\">Total </label> <input type=\"text\" value name=\"TOTAL\" id=\"mce-TOTAL\"></div> <div class=\"mc-field-group\"><label for=\"mce-ITEMS\">Items </label> <input type=\"text\" value name=\"ITEMS\" id=\"mce-ITEMS\"></div> <div id=\"mce-responses\" class=\"clear\"><div id=\"mce-error-response\" class=\"response\" style=\"display:none\"></div> <div id=\"mce-success-response\" class=\"response\" style=\"display:none\"></div></div> <div aria-hidden=\"true\" style=\"position: absolute; left: -5000px;\"><input type=\"text\" name=\"b_357ec6cb4eda9f428fa295e93_91d31a5332\" tabindex=\"-1\" value></div> <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div></div></form></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Products.vue?vue&type=template&id=cd9b24ba&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./products.json
var products = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Products.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const MAX = 100,
      MAX_CHARS = 3,
      MIN = 0;
/* harmony default export */ var Productsvue_type_script_lang_js_ = ({
  data() {
    return {
      products: [],
      loading: true,
      // firstname: "",
      // lastname: "",
      // address: "",
      // city: "",
      // postal: "",
      // phone: "",
      firstname: "Konstantin",
      lastname: "Srdjanov",
      address: "Simeona Piscevica 21",
      city: "Novi Sad",
      postal: "21000",
      phone: "+381637083408",
      email: "",
      // used for mailchimp
      total: 0,
      bag: ""
    };
  },

  methods: {
    calcTotal,
    focus: Productsvue_type_script_lang_js_focus,
    getProducts,
    check,
    add,
    remove,
    submit: Productsvue_type_script_lang_js_submit,
    submitMailChimp
  },

  beforeMount() {
    this.getProducts();
  }

});

function Productsvue_type_script_lang_js_focus(quantity, index) {
  if (quantity <= MIN) {
    this.products[index].quantity = "";
  }
}

function add(index) {
  this.products[index].quantity += 1;
  this.check(this.products[index].quantity, index);
}

function remove(index) {
  this.products[index].quantity -= 1;
  this.check(this.products[index].quantity, index);
}

function check(quantity, index) {
  if (Number(quantity) > MAX) {
    this.products[index].quantity = MAX;
  }

  if (isNaN(quantity) || Number(quantity) < MIN) {
    this.products[index].quantity = MIN;
  }

  this.calcTotal();
}

function calcTotal() {
  this.total = 0;
  this.products.forEach(product => {
    if (product.quantity > MIN && product.quantity <= MAX && isNaN(product.quantity) === false && product.quantity.toString().length > 0) {
      this.total += Number(product.quantity) * Number(product.price);
    }
  });
}

function getProducts() {
  this.products = [...products];
  this.products.forEach(product => {
    external_vue_default.a.set(product, "quantity", 0);
  });
}

function Productsvue_type_script_lang_js_submit() {
  const bag = [];
  this.products.forEach(product => {
    if (product.quantity > MIN && product.quantity <= MAX && isNaN(product.quantity) === false && product.quantity.toString().length > 0) {
      bag.push(`${product.name}(${product.quantity})`);
    }
  });
  this.bag = bag.toString();

  if (this.total) {
    this.loading = true;
    external_axios_default()({
      method: "post",
      url: "https://api.airtable.com/v0/appGa3yFLdTClsX2h/Orders",
      data: {
        "fields": {
          "Firstname": this.firstname,
          "Lastname": this.lastname,
          "Address": this.address,
          "City": this.city,
          "Postal": this.postal,
          "Email": this.email,
          "Phone": this.phone,
          "Bag": this.bag,
          "Total": this.total,
          "Status": "Processing"
        }
      },
      headers: {
        "Authorization": "Bearer key0qRBjhprnC6Hor"
      }
    }).then(response => {
      this.submitMailChimp();
    }).catch(error => {
      this.loading = false;
    });
  }
}

async function submitMailChimp(total, bag) {
  const mceButton = document.getElementById("mc-embedded-subscribe");
  mceButton.click();
  setTimeout(() => this.$router.push('/success'), 2000);
}
// CONCATENATED MODULE: ./components/Products.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Productsvue_type_script_lang_js_ = (Productsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Products.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Productsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4b8250e2"
  
)

/* harmony default export */ var Products = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Hero.vue?vue&type=template&id=5007a487&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Hero.vue?vue&type=template&id=5007a487&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Hero.vue

var script = {}
function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "8ccd1110"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=532caadf&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"bg-primary py-16"},[_vm._ssrNode("<div class=\"container\"><div class=\"grid items-center grid-cols-12\"><div class=\"col-span-12 md:col-span-8 text-center md:text-left mb-12 md:mb-0\"><img"+(_vm._ssrAttr("src",__webpack_require__(38)))+" class=\"logo\"> <label class=\"color-bright text-sm font-primary block mb-6 mt-6\">\n                    Imate dodatniih pitanja?<br>\n                    Kontaktirajte nas na:\n                </label> <a href=\"mailto:hello@suttra.com\" class=\"color-dark text-sm font-primary\">hello@suttra.com</a></div> <div class=\"col-span-12 md:col-span-4 text-center md:text-right\"><label class=\"color-bright text-sm font-primary mt-6\">\n                    Pronađite nas ovde:<br> <span class=\"mt-2 inline-block text-center md:text-left\"><a href target=\"_blank\" class=\"mr-2\"><img width=\"28\" heigth=\"28\""+(_vm._ssrAttr("src",__webpack_require__(39)))+"></a> <a href target=\"_blank\"><img width=\"28\" heigth=\"28\""+(_vm._ssrAttr("src",__webpack_require__(40)))+"></a></span></label></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=532caadf&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6cde79ce"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(33).default})


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _TopNavbar_vue_vue_type_template_id_4d35414b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);



function injectStyles (context) {
  
  var style0 = __webpack_require__(36)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNavbar_vue_vue_type_template_id_4d35414b___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _TopNavbar_vue_vue_type_template_id_4d35414b___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  null,
  "a9308892"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.536e72c.svg";

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "header.navigation nav{padding:30px 0}header.navigation nav img{width:150px;height:40px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-white.7852ace.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-instagram.51f5e24.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-facebook.f6c6581.svg";

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "footer img.logo{width:150px;height:40px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 43 */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0b3bdfbd-9659-4c45-91aa-2c89a08009ed\",\"name\":\"Black\",\"price\":1760,\"image_url\":\"https://i.imgur.com/gcylJbU.png\"},{\"id\":\"828f3a95-585d-40e4-8199-b77312fafc23\",\"name\":\"Olive\",\"price\":1760,\"image_url\":\"https://i.imgur.com/CGWat8B.png\"},{\"id\":\"05875f4a-f6e4-4988-972a-2867ef5ab252\",\"name\":\"Nude\",\"price\":1760,\"image_url\":\"https://i.imgur.com/S9bB4KW.png\"}]");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.form{max-width:400px;margin:0 auto}div.form button,div.form input{width:100%}div.quantity{max-width:180px;margin-left:auto}div.quantity button,div.quantity input{padding:10px 0;margin:0;display:inline-block;vertical-align:middle;text-align:center;background:transparent;border:none;box-shadow:none;border-radius:0}div.quantity button:focus,div.quantity input:focus{outline:none}div.quantity button{cursor:pointer;width:50px;color:#c39579;font-size:14px;text-align:center}div.quantity input{width:calc(100% - 108px);color:#262423;font-size:28px}div.product-box h2{position:absolute;left:20px;top:-12px}div.product-box img{max-width:85%;display:block;margin:0 auto}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopNavbar.vue?vue&type=template&id=4d35414b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"navigation container"},[_vm._ssrNode("<nav><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+"></nav>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopNavbar.vue?vue&type=template&id=4d35414b&


/***/ }),
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=908242b6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-medium"},[_c('top-navigation'),_vm._ssrNode(" "),_c('hero'),_vm._ssrNode(" "),_c('products'),_vm._ssrNode(" "),_c('bottom-navigation')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=908242b6&

// EXTERNAL MODULE: ./components/TopNavbar.vue
var TopNavbar = __webpack_require__(34);

// EXTERNAL MODULE: ./components/Footer.vue + 2 modules
var Footer = __webpack_require__(33);

// EXTERNAL MODULE: ./components/Hero.vue + 2 modules
var Hero = __webpack_require__(32);

// EXTERNAL MODULE: ./components/Products.vue + 4 modules
var Products = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./pages?vue&type=script&lang=js&




/* harmony default export */ var lib_ref_2_0_pages_vue_type_script_lang_js_ = ({
  components: {
    TopNavigation: TopNavbar["default"],
    BottomNavigation: Footer["default"],
    Hero: Hero["default"],
    Products: Products["default"]
  }
});
// CONCATENATED MODULE: ./pages?vue&type=script&lang=js&
 /* harmony default export */ var pages_vue_type_script_lang_js_ = (lib_ref_2_0_pages_vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9a0ad168"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Hero: __webpack_require__(32).default,Products: __webpack_require__(31).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map