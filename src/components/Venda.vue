<template>
  <div class="venda">
      <form  @submit.prevent="addProd(itemcompra)">
            <select v-model="itemcompra.prod" name="" id="">
                <option selected="true" disabled="disabled">Escolha o produto</option>    
                <option v-for="(m, index) in $store.state.mercadorias" :key="index" :value="m">
                    {{m.title}}
                </option>
            </select>
            <input v-model="itemcompra.qtd" type="number">
            <button class="btn">Adicionar</button>
      </form>
      <form @submit.prevent="finalizar(compra)">
            <input v-model="compra.vendedor" type="text">
            <input v-model="compra.data" type="date" name="" id="">
            <button class="btn" type="submit">Finalizar</button>
      </form>
      <div>
        {{itemcompra}}<br>
      {{compra}} <br>
      {{produtos}} <br>
      {{$store.state.compras}}
      </div>
  </div>
</template>

<script>
import vuex from "vuex";
export default {
name: 'Venda',
data(){
    return{
        itemcompra:{
            
        },
        produtos:[],
        compra:{

        },
 }
},
methods:{
    addProd(itemcompra){
        this.itemcompra.ValorItem = (this.itemcompra.prod.valor *  this.itemcompra.qtd)
        this.compra.valorfinal = this.compra.valorfinal + this.itemcompra.valor
        this.itemcompra = {cheked:false}
        this.compra = {cheked:false}
        this.produtos.push(itemcompra)
       // this.compra.produtos = itemcompra
       this.compra.produtos = this.produtos
    },
    finalizar(compra){
        this.produtos = {cheked:false}
        this.$store.commit("finalizarCompra",compra)
        this.compra = {cheked:false}
    }
}
}
</script>
<style src="../styles/Venda.scss" lang="scss" scoped />