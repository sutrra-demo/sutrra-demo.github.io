<template>
    <div class="mt-24">
        <div class="container">
            <ul class="grid grid-cols-12 gap-0 sm:gap-6 md:gap-8 lg:gap-10 mb-24">
                <li v-for="product, index in products" 
                    class="col-span-12 md:col-span-4 mb-16 md:mb-0 ">
                    <div class="product-box bg-pale relative">
                        <h2 class="font-secondary uppercase text-2xl">{{ product.name }}</h2>

                        <img :src="product.image_url">
                    </div>

                    <div class="mt-5 grid grid-cols-12 items-center">
                        <label class="col-span-6 font-primary text-sm">{{ product.price.toFixed(2) }} RSD</label>
                        
                        <div class="col-span-6">
                            <div class="quantity bg-pale">
                                <button @click="remove(index)" class="font-primary">-</button>
                                <input
                                    :ref="product.id"
                                    @click="focus(product.quantity, index);"
                                    @input="check(product.quantity, index);"
                                    type="number"
                                    max="99"
                                    min="0"
                                    class="font-primary"
                                    v-model="product.quantity">
                                <button @click="add(index);" class="font-primary">+</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bg-pale pt-24 pb-24">
            <div class="container relative md:overflow-hidden lg:overflow-visible">
                <img class="floating-logo floating-logo--big" src="@/assets/img/logo-letter-big.svg">
                <div class="form">
                    <validation-observer v-slot="{ handleSubmit, invalid }">
                        <h2 class="font-secondary text-4xl text-center mb-12">Tvoji podaci</h2>
                        
                        <div class="mb-8 grid grid-cols-6 col-gap-6">
                            <div class="col-span-6 sm:col-span-6 md:col-span-3 sm:mb-6 mb-6 md:mb-0">
                                <validation-provider
                                    v-slot="{ errors, failedRules }"
                                    :rules="{ required: true, max: 50 }">
                                        <label class="font-primary mb-2 block color-dark text-sm">Ime</label>
                                        <input class="font-primary" :class="{'error': errors && errors.length}" type="text" v-model="firstname" placeholder="Tvoje ime">

                                    <div v-if="errors" class="text-xs font-primary color-danger">
                                        <span class="block mt-2" v-if="failedRules['required']">{{ failedRules['required'] }}</span>
                                        <span class="block mt-2" v-if="failedRules['max']">{{ failedRules['max'] }}</span>
                                    </div>
                                    
                                </validation-provider>
                            </div>
                            
                            <div class="col-span-6 sm:col-span-6 md:col-span-3">
                                <validation-provider 
                                    v-slot="{ errors, failedRules }"
                                    :rules="{ required: true, max: 50 }">
                                        <label class="font-primary mb-2 block color-dark text-sm">Prezime</label>
                                        <input class="font-primary" :class="{'error': errors && errors.length}" type="text" v-model="lastname" placeholder="Tvoje prezime">

                                    <div v-if="errors" class="text-xs font-primary color-danger">
                                        <span class="block mt-2" v-if="failedRules['required']">{{ failedRules['required'] }}</span>
                                        <span class="block mt-2" v-if="failedRules['max']">{{ failedRules['max'] }}</span>
                                    </div>
                                </validation-provider>
                            </div>
                        </div>

                        <div class="mb-8">
                            <validation-provider
                                v-slot="{ errors, failedRules }"
                                :rules="{ required: true, max: 50 }">
                                    <label class="font-primary mb-2 block color-dark text-sm">Adresa</label>
                                    <input class="font-primary" :class="{'error': errors && errors.length}" type="text" v-model="address" placeholder="Tvoja adresa">

                                <div v-if="errors" class="text-xs font-primary color-danger">
                                    <span class="block mt-2" v-if="failedRules['required']">{{ failedRules['required'] }}</span>
                                    <span class="block mt-2" v-if="failedRules['max']">{{ failedRules['max'] }}</span>
                                </div>
                                    
                            </validation-provider>
                        </div>

                        <div class="mb-8">
                            <validation-provider
                                v-slot="{ errors, failedRules }"
                                :rules="{ required: true, max: 50 }">
                                    <label class="font-primary mb-2 block color-dark text-sm">Grad</label>
                                    <input class="font-primary" :class="{'error': errors && errors.length}" type="text" v-model="city" placeholder="Ime grada">

                                <div v-if="errors" class="text-xs font-primary color-danger">
                                    <span class="block mt-2" v-if="failedRules['required']">{{ failedRules['required'] }}</span>
                                    <span class="block mt-2" v-if="failedRules['max']">{{ failedRules['max'] }}</span>
                                </div>
                                    
                            </validation-provider>
                        </div>

                        <div class="mb-8">
                            <validation-provider
                                v-slot="{ errors, failedRules }"
                                :rules="{ required: true, max: 50 }">
                                    <label class="font-primary mb-2 block color-dark text-sm">Poštanski broj</label>
                                    <input class="font-primary" :class="{'error': errors && errors.length}" type="text" v-model="postal" placeholder="Poštanski broj">

                                <div v-if="errors" class="text-xs font-primary color-danger">
                                    <span class="block mt-2" v-if="failedRules['required']">{{ failedRules['required'] }}</span>
                                    <span class="block mt-2" v-if="failedRules['max']">{{ failedRules['max'] }}</span>
                                </div>
                            </validation-provider>
                        </div>

                        <div class="mb-8">
                            <validation-provider
                                v-slot="{ errors, failedRules }"
                                :rules="{ required: true, min: 5, max: 50 }">
                                    <label class="font-primary mb-2 block color-dark text-sm">Telefon</label>
                                    <input class="font-primary" :class="{'error': errors && errors.length}" type="text" v-model="phone" placeholder="Telefon">

                                <div v-if="errors" class="text-xs font-primary color-danger">
                                    <span class="block mt-2" v-if="failedRules['required']">{{ failedRules['required'] }}</span>
                                    <span class="block mt-2" v-if="failedRules['max']">{{ failedRules['max'] }}</span>
                                    <span class="block mt-2" v-if="failedRules['min']">{{ failedRules['min'] }}</span>
                                </div>
                            </validation-provider>
                        </div>

                        <div class="mb-10">
                            <validation-provider
                                v-slot="{ errors, failedRules }"
                                :rules="{ required: true, email: true }">
                                    <label class="font-primary mb-2 block color-dark text-sm">Email</label>
                                    <input class="font-primary" :class="{'error': errors && errors.length}" type="text" v-model="email" placeholder="your@email.com">

                                <div v-if="errors" class="text-xs font-primary color-danger">
                                    <span class="block mt-2" v-if="failedRules['required']">{{ failedRules['required'] }}</span>
                                    <span class="block mt-2" v-if="failedRules['email']">{{ failedRules['email'] }}</span>
                                </div>
                            </validation-provider>
                        </div>

                        <div class="mb-12 text-center">
                            <label class="font-primary text-sm color-primary">Ukupan iznos vaše porudžbine je:</label>
                            <label class="font-primary text-sm color-dark block mt-2 mb-2">{{ total.toLocaleString('de-DE') }} RSD</label>

                            <label class="font-primary text-sm color-primary">Porudžbina se plaća pouzećem.</label>
                        </div>
                            
                        <button
                            :disabled="loading"
                            :class="{'opacity-50': loading}"
                            class="font-primary btn-primary" @click="handleSubmit(submit)">
                                <span>Poruči</span>
                        </button>
                    </validation-observer>
                </div>

                <p class="font-primary text-xs color-primary" style="max-width: 500px; text-align: center; margin: 100px auto 0 auto;">
                    Podaci koji se prikupljaju kroz formu za naručivanje koristiće se isključivo za komunikaciju u vezi da isporukom poručenih proizvoda i obaveštavanje o novim proizvodima, posebnim ponudama i sl. Vaši podaci biće obrađivani u skladu sa odredbama važećih zakona Republike Srbije.
                </p>
            </div>
        </div>

        <div style="display: none;">
        <form action="../contact.php" method="post">
            <input v-model="email" type="email" value="" name="cf_email" class="required email" id="mce-EMAIL">
            <input v-model="firstname" type="text" value="" name="cf_fname" class="" id="mce-FNAME">
            <input v-model="lastname" type="text" value="" name="cf_lname" class="" id="mce-LNAME">
            <input v-model="phone" type="text" name="cf_phone" class="" value="" id="mce-PHONE">
            <input v-model="address" type="text" value="" name="cf_address" class="" id="mce-ADDRESS">
            <input v-model="city" type="text" value="" name="cf_city" class="" id="mce-CITY">
            <input v-model="postal" type="text" value="" name="cf_postal" class="" id="mce-POSTAL">
            <input v-model="total" type="text" value="" name="cf_total" class="" id="mce-TOTAL">
            <input v-model="bag" type="text" value="" name="cf_items" class="" id="mce-ITEMS">
            <input type="submit" value="Subscribe" name="cf_subscribe" id="mc-embedded-subscribe" class="button">
        </form>
        </div>
        <!--End mc_embed_signup-->
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import productsJSON from "@/products.json";

const MAX = 100,
    MAX_CHARS = 3,
    MIN = 0;

export default {
    data() {
        return {
            products: [],
            loading: false,
            firstname: "",
            lastname: "",
            address: "",
            city: "",
            postal: "",
            phone: "",
            email: "",

            // used for mailchimp
            total: 0,
            bag: ""
        }
    },

    methods: {
        calcTotal,
        focus,
        getProducts,
        check,
        add,
        remove,
        submit,
        submitMailChimp
    },

    beforeMount() {
        this.getProducts();
    }
}

function focus(quantity, index) {
    if(quantity <= MIN) {
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
    if(Number(quantity) > MAX) {
        this.products[index].quantity = MAX;
    }

    if(isNaN(quantity) || Number(quantity) < MIN) {
        this.products[index].quantity = MIN;
    }

    this.calcTotal();
}

function calcTotal() {
    this.total = 0;

    this.products.forEach(product => {
        if(product.quantity > MIN && 
            product.quantity <= MAX && 
            isNaN(product.quantity) === false &&
            product.quantity.toString().length > 0) {
                this.total += Number(product.quantity) * Number(product.price);
        }
    });
}

function getProducts() {
    this.products = [... productsJSON];
    this.products.forEach(product => {
        Vue.set(product, "quantity", 0);
    });
}

function submit() {
    const bag = [];

    this.products.forEach(product => {
        if(product.quantity > MIN && 
            product.quantity <= MAX && 
            isNaN(product.quantity) === false &&
            product.quantity.toString().length > 0) {
                bag.push(`${product.name}(${product.quantity})`);
        }
    });

    this.bag = bag.toString();

    if(this.total) {
        this.loading = true;

        const date = new Date();

        axios({
            method: "post",
            url: "https://api.airtable.com/v0/appGa3yFLdTClsX2h/Orders",
            data: {
                "fields": {
                    "Timestamp": `${date.toDateString()} ${date.toLocaleTimeString()}`,
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
        })
        .then((response) => {
            this.submitMailChimp();
        }) 
        .catch((error) => {
            this.loading = false;
            this.$router.push('/error');
        });
    }
}

async function submitMailChimp(total, bag) {
    const submitContactForm = document.getElementById("mc-embedded-subscribe");
    submitContactForm.click();
}
</script>

<style lang="scss">
img.floating-logo {
    position: absolute;

    &.floating-logo--big{
        width: 240px;
        height: 300px;

        top: calc(50% - 150px);
        right: -40px;

        @media all and (max-width: 992px) {
            opacity: 0.2;
            right: 40px;
        }
    }
}
div.form{
    max-width: 400px;
    margin: 0 auto;

    input, 
    button{
        width: 100%;
    }
}
div.quantity{
    max-width: 180px;
    margin-left: auto;

    button,
    input{
        padding: 10px 0;
        margin: 0;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        background: transparent;
        border: none;
        box-shadow: none;
        border-radius: 0;

        &:focus{
            outline: none;
        }
    }

    button{
        cursor: pointer;
        width: 50px;
        color: #C39579;
        font-size: 14px;
        text-align: center;
    }

    input{
        width: calc(100% - 2 * 54px);
        color: #262423;
        font-size: 28px;
    }
}

div.product-box{
    padding-top: 3rem;
    padding-bottom: 3rem;

    h2{
        position: absolute;
        left: 20px;
        top: -12px;
    }

    img{
        max-width: 300px;
        width: 85%;
        display: block;
        margin: 0 auto;

        @media all and (max-width: 768px) {
            max-width: 60%;
        }
    }
}
</style>