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

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component({
  name: "AuthForm",  
})


export default class extends Vue{
 
 
}
</script>

<style>

</style>