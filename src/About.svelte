<script>
  import { link } from 'svelte-spa-router';
  import PageTransition from './PageTransition.svelte';
</script>

<PageTransition>
  <div>
    <h1>Aboutページです!</h1>
    <a href="/" use:link>Home</a>
  </div>
</PageTransition>

<style>
  div {
    text-align: center;
  }

  h1 {
    color: #0033ff;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: bold;
  }
</style>
