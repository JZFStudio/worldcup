<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <router-link to="/hello/world">
            <mt-button>go to world</mt-button>
        </router-link>
    </div>
</template>

<script>
    import {Button} from 'mint-ui'
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {Button}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .hello {
        width: 100%;
        h1, h2 {
            font-weight: normal;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            display: inline-block;
            margin: 0 10px;
        }
        a {
            color: #42b983;
        }
    }
</style>
