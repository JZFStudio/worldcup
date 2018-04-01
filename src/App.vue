<template>
    <div id="app">
        <mt-header fixed :title="title" v-if="isShowHeader" style="width: 100%; position: fixed; top: 0; left: 0; z-index: 100">
            <mt-button slot="left" icon="back" v-if="headerLeft" @click="goBack">返回</mt-button>
        </mt-header>
        <transition :name="pageTransitionName">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import {Header, Button} from 'mint-ui'
    import {mapState} from 'vuex';

    export default {
        name: 'App',
        components: {Header, Button},
        created() {
            if (this.isShowHeader) {
                document.body.className = 'has-header';
            }
        },
        computed: {
            ...mapState({
                isShowHeader: state => state.app.isShowHeader,
                direction: state => state.app.direction,
                historyCount: state => state.app.historyCount,
                isSlideNavigation: state => state.app.isSlideNavigation,
                title: state => state.app.title
            }),
            headerLeft() {
                return (this.$route.path !== '/' && this.historyCount > 0);
            },
            pageTransitionName() {
                if (this.isSlideNavigation || this.historyCount < 2) {
                    return 'nav-hide';
                } else {
                    return 'mint-pop-' + (this.direction === 'forward' ? 'in' : 'out');
                }
            }
        },
        mounted() {
            console.log(this.title);
        },
        methods: {
            goBack: function () {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="less">
    body {
        position: relative;
    }
    body.has-header {
        padding-top: 46px;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    .mint-pop-out-enter-active,
    .mint-pop-out-leave-active,
    .mint-pop-in-enter-active,
    .mint-pop-in-leave-active {
        will-change: transform;
        transition: all 500ms;
        height: 100%;
        top: 0;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000;
    }

    body.has-header {
        .mint-pop-out-enter-active,
        .mint-pop-out-leave-active,
        .mint-pop-in-enter-active,
        .mint-pop-in-leave-active {
            top: 46px;
        }
    }

    .mint-pop-out-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
    .mint-pop-out-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .mint-pop-in-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    .mint-pop-in-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }
</style>
