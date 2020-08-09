export { default as Footer } from '../../components/Footer.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Products } from '../../components/Products.vue'
export { default as TopNavbar } from '../../components/TopNavbar.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/Hero" */).then(c => c.default || c)
export const LazyProducts = import('../../components/Products.vue' /* webpackChunkName: "components/Products" */).then(c => c.default || c)
export const LazyTopNavbar = import('../../components/TopNavbar.vue' /* webpackChunkName: "components/TopNavbar" */).then(c => c.default || c)
