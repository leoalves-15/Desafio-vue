<template>
  <div id="app">
    <div id="nav">
      <select name="" id="">
        <option value="" disabled> selecione o perfil</option>
        <option value="">Vendedor</option>
        <option value="">Gerente</option>
      </select>
      <router-link to="/">Mercadorias</router-link>
      <router-link to="/Vendas">Vendas</router-link>
      <router-link to="/about">Vendas por vendedor</router-link>
    </div>
    <router-view class="tela" />
  </div>
</template>
<style lang="scss">
*{
  overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: row;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
width: 100vw;
height: 100vh;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #2c3e50;
  height: 100%;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.tela{
  width: 100%;
  height: 100%;
}
</style>
