<template>
    <div id="main-content">
    <headernavbar></headernavbar>

        <router-view></router-view>
        <my-footer></my-footer>

    </div>
</template>

<script>
    import Headernavbar from "../pages/about/headernavbar/headernavbar";
    import MyFooter from "../pages/my-footer/my-footer";


    export default {
        name: "main-content",
        components: {MyFooter, Headernavbar},
        data: () => ({
            // reactive data property of the component.
            webpack: 'Powered by webpack!',
        }),
    }
</script>

<style scoped>

</style>

