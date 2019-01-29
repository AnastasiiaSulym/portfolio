<template>
    <div>
        <div class="wrapper">
        <div class="header">
        <div class="header-navbar">
            <div class="logo"><img src="/img/logo-header.png"/></div>
            <div class="navbar">

                <router-link to="/home"><li>Home</li></router-link>
                <router-link to="/about"><li>About</li></router-link>
                <router-link to="/portfolio"><li>Portfolio</li></router-link>
                <li>Blog</li>
                <router-link to="/archives"><li>Archives</li></router-link>
                <router-link to="/contact"><li>Contact</li></router-link>

            </div>


            <input type="search" class="header-input">
            <i class="fas fa-search"></i>


        </div>
        </div>
    </div>
    </div>
</template>

<script>
   
    import "./headernavbar.scss"
    export default {
        name: "headernavbar"
    }
</script>


