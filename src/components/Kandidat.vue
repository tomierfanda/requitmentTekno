<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="kandidat"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>
<script>
import Vue from "vue";
import kandidat from '../api/kandidat/index';


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
      ],
      kandidat : []
    }
  },
    beforeCreate() {
    let self = this;

            kandidat
            .getKandidat(window)
            .then(function(datas) {
                return datas;
            })
            .then(function(result) {
                console.log(result);
                self.kandidat = result;
            })
            .catch(function(err) {
                console.log(err);
            });
        },
        computed : {
          funcDataPelamar(){

            let self = this;
  
              kandidat
              .getKandidat(window)
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
