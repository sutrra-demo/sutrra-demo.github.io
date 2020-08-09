<template>
    <div>
        Success
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: ""
        }
    },

    mounted() {
        this.email = this.$route.query.email
    }
}
</script>