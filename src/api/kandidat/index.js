import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from './../utils'

Vue.use(VueResource)

export default {

    getKandidat(window) {
        return getApiNoAuth().get('Kandidats')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
}