<template>
    <div class="hero relative">
        <img class="hero-logo" src="@/assets/img/logo-letter-small.svg">
        <!-- class="container" -->
        <div style="z-index: 20;">
            <div class="grid grid-cols-12 box-1-wrapper items-center">
                <div class="col-start-2 col-end-6 relative h-full sm:hidden md:block">
                    <img class="img-box-1" src="@/assets/img/img-box-1-2.png">
                </div>
                <div class="lg:col-span-7 sm:col-span-12 box-2-wrapper relative h-full">
                    <h1 class="font-secondary text-5xl color-primary" stlye="z-index: 100;">Odgovornost<br>sa stilom</h1>
                    <img class="img-box-2 sm:hidden lg:block" src="@/assets/img/img-box-3.png">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.hero{
    z-index: 10;
    //min-height: 70vh;
    padding-top: 30px;
    padding-bottom: 60px;

    .hero-logo{
        position: absolute;
        width: 90px;
        height: 110px;
        bottom: 0;
        left: 6vw;
        z-index: 0;

        @media all and (max-width: 992px) {
            display: none;
        }
    }

    .grid{
        @media all and (max-width: 992px) {
            padding-left: 0 !important;
            width: 100%;
            display: block;

            .font-secondary{
                font-size: 32px;
            }
        }
    }

    .img-box-2{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        height: 100%;
        width: 49vw;
        object-fit: cover;
    }

    .box-1-wrapper{
        padding-left: 60px;

        .col-start-2 {
            @media all and (max-width: 992px) {
                display: none;
            }   
        }
    }

    .img-box-1{
        width: 100%;
        display: block;
        max-width: 520px;

    }

    .box-2-wrapper{
        padding-left: 20px;

        h1.font-secondary{
            position: absolute;
            top: calc(50% - 36px);

            @media all and (max-width: 992px) {
                position: static;
            }
        }

        img{
            @media all and (max-width: 992px) {
                display: none;
            }
            
        }

        @media all and (max-width: 992px) {
            padding-left: 0;
            text-align: center;
            padding: 15% 0 0% 0;
        }
    }
}
</style>