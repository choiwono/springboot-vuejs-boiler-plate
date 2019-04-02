<template>
  <header>
    <b-navbar toggleable="lg" type="light" class="pl-5 mb-3 pr-5 border-bottom navbar-expand-lg fixed-top bg-white" variant="light">
      <b-navbar-brand href="/main">Pouch</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">User</template>
            <b-dropdown-item href="/login">로그인</b-dropdown-item>
            <b-dropdown-item href="/join">회원가입</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
