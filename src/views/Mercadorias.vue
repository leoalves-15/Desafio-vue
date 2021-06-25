<template>
  <div class="home">
    <h1>Mercadoria </h1>
    <!--{{$store.state.teste}} / {{this.teste}} 
    <button @click="CHANGE_TESTE({name:'teste', id:0})">{{this.teste}}</button> -->
    <Mercadoria/>
  </div>
</template>

<script>
// @ is an alias to /src
import Mercadoria from "@/components/Mercadoria.vue";

export default {
  name: "Mercadorias",
  components: {
    Mercadoria,
  },
};
</script>
