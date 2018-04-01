<template>
    <div class="home">
        <h1>Home Page</h1>
        <router-link to="/hello">
            <mt-button>go to hello</mt-button>
        </router-link>
    </div>
</template>

<script>
    import {Button} from 'mint-ui'

    export default {
        name: "Home",
        components: {Button}
    }
</script>

<style scoped>
    .home {
        width: 100%;
    }
</style>