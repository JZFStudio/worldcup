<template>
    <div class="world">
        <mt-spinner type="snake"></mt-spinner>
        <mt-spinner type="double-bounce"></mt-spinner>
        <mt-spinner type="triple-bounce"></mt-spinner>
        <mt-spinner type="fading-circle"></mt-spinner>

        <!-- 或者接受传入类型的序号 -->
        <mt-spinner :type="0"></mt-spinner>
        <mt-spinner :type="1"></mt-spinner>
        <mt-spinner :type="2"></mt-spinner>
        <mt-spinner :type="3"></mt-spinner>
    </div>
</template>

<script>
    import {Spinner} from 'mint-ui'
    export default {
        name: "World",
        components: {Spinner}
    }
</script>

<style scoped>

</style>