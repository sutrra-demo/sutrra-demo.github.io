import Vue from "vue";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, max, min } from "vee-validate/dist/rules";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

extend("required", {
  ...required,
  message: "Obavezno polje"
});

extend("email", {
    ...email,
    message: "Email nije validan"
});

extend("min", {
    ...min,
    message: "Nedovoljno karaktera"
});

extend("max", {
    ...max,
    message: "Polje predugacko"
});