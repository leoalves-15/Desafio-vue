<template>
   <div>
       <form @submit.prevent="add(mercadoria)">
           <input v-model="mercadoria.title" placeholder="Nome da mercaodria" type="text" name="" id="">
           <input v-model="mercadoria.valor" placeholder="Valor da mercadoria" type="number" step=".01" name="" id="">
           <button>Cadastrar</button>
       </form>
       <div class="merc">
           <div v-for="(m, index) in $store.state.mercadorias" :key="index">
               <h1>
                  <span>Mercadoria :</span> {{m.title}} <br>
                  <span>Valor :</span> {{m.valor}}
               </h1>
               <button v-on:click.prevent="remove(index)">remover</button>
               <button v-on:click.prevent="edit(m, mercadoria)">Editar</button>               
           </div>
       </div>  
   </div>
</template>

<script>
import vuex from "vuex";
var cont = 0;
export default {
name:'Mercadoria',
data(){
    return {
    mercadoria:{
        id: cont,
    }
    }
},
methods:{
    add(mercadoria){
        this.mercadoria = {cheked:false},
        this.$store.commit("addMercadoria", mercadoria),
        cont = cont + 1;
    },
    remove(item){
        this.$store.commit("removeMercadoria", item)
    },
    edit(m,mercadoria){
        this.mercadoria = {cheked:false},
        this.$store.commit("editMercadoria", {m:m,mercadoria:mercadoria})
    }
}
}
</script>

<style>
.merc{
    text-align: left;
}
</style>