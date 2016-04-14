<template>
    <div class="head">
        <div class="head-con">
            <a v-link="{ path: '/' }" href="javascript:;">
                <div class="logo">
                    Toxmen
                </div>
            </a>
            <div class="navbar">
                <a v-link="{ path: '/page1' }" href="javascript:;">页面一</a>
                <a v-link="{ path: '/page2' }" href="javascript:;">页面二</a>
                <a v-link="{ path: '/page3' }" href="javascript:;">页面三</a>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style >
    .head{
        width: 100%;
        height: 110px;
        background-color: rgb(0, 243, 255);
    }
    .head-con {
        margin: 0 5%;
    }
    .logo,.navbar{
        display: inline-block;
        line-height: 110px;
    }
    .logo{
        float: left;
        font-size: 2.4rem;
        font-weight: bold;
    }
    .navbar{
        float: right;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
</style>
