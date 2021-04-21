<template>
    <nav class="brown darken-1">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo right">Открытки</router-link>
            <ul calss="right hide-on-med-and-down">
                <li><router-link
                    tag="li"
                    to="/"
                    exact
                    active-class="active"
                >
                    <a href="#">Menu</a>
                </router-link></li>
                <li><router-link
                    tag="li"
                    to="/Aboutpostcards"
                    exact
                    active-class="active"
                >
                    <a href="#">About</a>
                </router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    nav {
        padding: 0 2rem;
    }
</style>