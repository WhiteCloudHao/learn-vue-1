<template>
  <div id="authenticationForm">
    <header>
      <router-link :to="{ name: 'register'}">
        Đăng ký
</router-link> 
<router-link :to="{ name: 'login'}">
       Đăng nhập
</router-link> 
    </header>
    
    
    <router-view/>
  </div>
</template>

<script>


export default {
  name: "AuthForm",
  components: {
    
  }
}
</script>

<style>

</style>