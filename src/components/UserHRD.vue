<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />


      <q-input
        filled
        v-model="password"
        label="Your Password *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />


      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import Login from '../api/login/index'
export default {
  data () {
    return {
      email: "",
      password:"",

      accept: false
    }
  },

  methods: {
    onSubmit () {
        let self = this

        Login.getLogin (window, self.email, self.password)
        .then(function(result){
            if (!result) {
              self.$q.notify({
                color: 'red-5',
                textColor: 'white',
                icon: 'fas fa-exclamation-triangle',
                message: 'You need to accept the license and terms first'
              })
            }
            else {
              self.$q.notify({
                color: 'green-4',
                textColor: 'white',
                icon: 'fas fa-check-circle',
                message: 'Anda Telah Login sebagai HRD'
              })

              self.$router.push('dashboard')
            }
            <router-link to='/'>dashboard</router-link>
            return result;

        })
        .catch(function(err){
        console.log(err)
        })

    },
  },
  
}
</script>