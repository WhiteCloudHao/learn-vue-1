<template>
  <div id="authenticationForm">
    <header>
        <span>Đăng nhập</span> 
        <span>Đăng ký</span>
    </header>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "@/component/LoginForm/RegisterForm.vue"

export default {
  name: "AuthForm",
  components: {
    RegisterForm
  }
}
</script>

<style>

</style>