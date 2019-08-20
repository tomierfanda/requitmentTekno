import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuth} from './../utils'

Vue.use(VueResource)

export default {

    getPelamar(window) {
        return getApiNoAuth().get('Pelamars')
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    funcPostpelamar(window, param) {
        return getApiNoAuth().post('Pelamars', param)
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    updateNewEmployee(window, param) {
        return getApiNoAuth().put('Employees', param)
        .then(function (response){
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },

}