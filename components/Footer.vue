<template>
    <footer class="bg-primary py-16">
        <div class="container">
            <div class="grid items-center grid-cols-12">
                <div class="col-span-12 md:col-span-8 text-center md:text-left mb-12 md:mb-0">
                    <img class="logo" src="@/assets/img/logo-white.svg">

                    <label class="color-bright text-sm font-primary block mb-6 mt-6">
                        Imate dodatniih pitanja?<br>
                        Kontaktirajte nas na:
                    </label>

                    <a class="color-dark text-sm font-primary" href="mailto:hello@suttra.com">hello@suttra.com</a>
                </div>

                <div class="col-span-12 md:col-span-4 text-center md:text-right">
                    <label class="color-bright text-sm font-primary mt-6">
                        Pronađite nas ovde:<br>

                        <span class="mt-2 inline-block text-center md:text-left">
                            <a href="" class="mr-2" target="_blank">
                                <img width="28" heigth="28" src="@/assets/img/icon-instagram.svg">
                            </a>
        
                            <a href="" target="_blank">
                                <img width="28" heigth="28" src="@/assets/img/icon-facebook.svg">
                            </a>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    img.logo{
        width: 150px;
        height: 40px;
    }
    
}
</style>

