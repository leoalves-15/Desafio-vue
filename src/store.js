import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
 state:{
    mercadorias:[

    ],
    compras:[]
 },
 mutations:{
    addMercadoria(state, mercadoria){
        state.mercadorias.push(mercadoria)
    },
    removeMercadoria(state, item){
        state.mercadorias.splice(item,1);
    },
    editMercadoria(state, parametro){
        const lugar = state.mercadorias.indexOf(parametro.m)
        state.mercadorias[lugar].title = parametro.mercadoria.title
        state.mercadorias[lugar].valor = parametro.mercadoria.valor
        console.log(state.mercadorias[lugar])
      },
    finalizarCompra(state, compra){
       state.compras.push(compra)
    }
 }
})