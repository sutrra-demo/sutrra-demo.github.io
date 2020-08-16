import TopNavigation from "@/components/TopNavbar.vue";
import BottomNavigation from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/components/Products.vue";

export default {
    components: {
        TopNavigation,
        BottomNavigation,
        Hero,
        Products
    },

    title: "Codetribe | Software Development Company",
    meta: [
        {
            hid: "keywords", name: 'keywords',
            content: 'sutrra, maskka, clothing, clothing brand, odgovornostsastilom, madeinserbia'
        },
        {
            hid: "description", name: 'description',
            content: "Za tvoj stil - koji ne pristaje na kompromise!"
        },
        {
            hid: "subject", name: 'subject',
            content: 'Clothing Brand'
        },
        {
            hid: "copyright", name: 'copyright',
            content: 'sutrra_'
        },
        {
            hid: "owner", name: 'owner',
            content: 'sutrra_'
        },
        {
            hid: "identifier-URL", name: 'identifier-URL',
            content: 'https://sutrra.com'
        },
    
        {
            hid: "og:image", property: 'og:image',
            content: 'https://sutrra.com/social.png',
        },
        {
            hid: "twitter:image", name: 'twitter:image',
            content: 'https://sutrra.com/social.png'
        },
        {	
            hid: "og:url", property: "og:url",
            content: "https://sutrra.com"
        },
        {	
            hid: "og:site_name", property: "og:site_name",
            content: "Sutrra"
        },
        {	
            hid: "og:type", property: "og:type",
            content: "article"
        },
        {	
            hid: "og:title", property: "og:title",
            content: "Sutrra | Odgovornost sa stilom"
        },
        {	
            hid: "og:headline", property: "og:headline",
            content: "Sutrra | Odgovornost sa stilom"
        },
        {	
            hid: "og:description", property: "og:description",
            content: "Za tvoj stil - koji ne pristaje na kompromise!"
        },
        {	
            hid: "og:image:width", property: "og:image:width",
            content: "600"
        },
        {	
            hid: "og:image:height", property: "og:image:height",
            content: "315"
        },
        {
            hid: "image", itemprop: 'image',
            content: 'https://sutrra.com/social.png'
        },
        {	
            hid: "name", itemprop: "name",
            content: "Sutrra | Odgovornost sa stilom"
        },
        {	
            hid: "description", itemprop: "description",
            content: "Sutrra | Odgovornost sa stilom"
        },
        {
            hid: "twitter:card", name: "twitter:card",
            content: "summary_large_image"
        },
        {
            hid: "twitter:url", name: "twitter:url",
            content: "https://sutrra.com"
        },
        {
            hid: "twitter:title", name: "twitter:title",
            content: "Sutrra | Odgovornost sa stilom"
        },
        {
            hid: "twitter:description", name: "twitter:description",
            content: "Za tvoj stil - koji ne pristaje na kompromise!"
        }
    ]
}