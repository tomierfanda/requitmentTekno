<template>
  <div class="q-pa-md">
    <q-table
      title="Daftar Pelamar"
      :data="pelamarData"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
    />

    <!-- <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div> -->
    <q-btn color="white" text-color="black" label="Submit"/>
  </div>  
</template>

<script>
import Vue from "vue";
import pelamar from '../api/pelamar/index';


export default {
    name : 'Dashboard',
  data () {
    return {
        selected : [],
        pelamarData : {},
        columns: [
        {
          name: 'name',
          required: true,
          label: 'Nama',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'jobApplied',
          required: true,
          label: 'JobApplied',
          align: 'left',
          field: row => row.jobApplied,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'phone',
          required: true,
          label: 'Phone',
          align: 'left',
          field: row => row.phone,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'email',
          required: true,
          label: 'Email',
          align: 'left',
          field: row => row.email,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'birhDay',
          required: true,
          label: 'Birth Day',
          align: 'left',
          field: row => row.birthDate,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'jenisKelamin',
          required: true,
          label: 'Jenis Kelamin',
          align: 'left',
          field: row => row.jenisKelamin,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'agama',
          required: true,
          label: 'Agama',
          align: 'left',
          field: row => row.agama,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'School',
          required: true,
          label: 'School',
          align: 'left',
          field: row => row.school.SMA,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'Action',
          required: true,
          label: 'Action',
          align: 'center',
          // field: row => row.school.SMA,
          // format: val => `${val}`,
          // sortable: true
        },
      ],
      pelamarData : []
    }
  },
    beforeCreate() {
    let self = this;

            pelamar
            .getPelamar(window)
            .then(function(datas) {
                return datas;
            })
            .then(function(result) {
                console.log(result);
                self.pelamarData = result;
            })
            .catch(function(err) {
                console.log(err);
            });
        },
        computed : {
          funcDataPelamar(){

            let self = this;
  
              pelamar
              .getPelamar(window)
              .then(function(datas) {
                  return datas;
              })
              .then(function(result) {
                  console.log(result);
                  self.pelamarData = result;
              })
              .catch(function(err) {
                  console.log(err);
              });
          }
        },

}
</script>

