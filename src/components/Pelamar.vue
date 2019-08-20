<template>
<div class="col-md-12">

<div class="flex flex-center">
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="param['name']"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="param['jobApplied']"
        label=" Job Apllied*"
        hint="Job Applied"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="param['phone']"
        label="Your Phone *"
        hint="Phone"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="email"
        label="Your Email *"
        hint="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="birthDate"
        label="Your Birth Day *"
        hint="Birth Day"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="jenisKelamin"
        label="Jeis Kelamin *"
        hint="Jenis Kelamin"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="agama"
        label="Agama *"
        hint="Agama"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="status"
        label="Status *"
        hint="Status"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="school"
        label="SMA *"
        hint="SMA"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="school"
        label="SMP *"
        hint="SMP"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="school"
        label="SD *"
        hint="SD"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="major"
        label="Major *"
        hint="Major"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="years"
        label="Age *"
        hint="Age"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="GPA"
        label="GPA *"
        hint="GPA"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="coreSkill"
        label="Skill *"
        hint="Skill"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="source"
        label="Source *"
        hint="Source"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

     

      <div>
        <q-btn label="Submit" @click="funcRegister()"  color="primary"/>
      </div>
    </q-form>
    </div>

  </div>
</div>
</template>

<script>
import Vue from "vue";
import pelamar from '../api/pelamar/index';

export default {
  data () {
    return {
      postPelamar : {},
      param : {},
         name : "",
        jobApplied: "",
        phone: 0,
        email: "",
        birthDate: "",
        jenisKelamin: "",
        agama: "",
        status: "",
        school: "",
        major: "",
        years: 0,
        GPA: "",
        coreSkill: "",
        source: ""

    }
  },
  methods : {
    funcRegister(){
        let self = this
  
        pelamar
        .funcPostpelamar(window, self.param)
        .then(function(datas){
            return datas;
        })
        .then(function(result){
            console.log(result)
            self.postPelamar = result
        })
        .catch(function(err){
            console.log(err);
        });
    }

  }
}

</script>