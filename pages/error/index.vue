<template>
    <div class="bg-pale section">
        <div class="container relative">
            <img class="floating-logo" src="@/assets/img/logo-letter-big.svg">
            <div class="grid grid-cols-12 items-center height-100 h-screen">
                <div class="col-span-12 text-center">
                    <img src="@/assets/img/logo.svg" width="150" height="40" class="block mx-auto">
    
                    <h2 class="font-secondary text-4xl color-primary mb-6 mt-12">Oops! Porudžbina nije primljena.</h2>
    
                    <p class="font-primary color-primary text-sm mb-4">Vaša porudžbina nije izvršena, molimo vas pokušajte ponovo.</p>
                    <a href="/" class="font-primary underline color-dark text-sm cursor-pointer">Poruči ponovo</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
img.floating-logo {
    position: absolute;
    width: 140px;
    height: 170px;
    bottom: 60px;
    left: -40px;

    @media all and (max-width: 992px) {
        opacity: 0.2;
        left: 40px;
    }
}
</style>