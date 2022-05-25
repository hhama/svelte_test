<script>
  import { link } from 'svelte-spa-router';
  import PageTransition from './PageTransition.svelte';
</script>

<PageTransition>
  <div>
    <h1>ホームページです!</h1>
    <a href="/about" use:link>About</a>
  </div>
</PageTransition>

<style>
  div {
    text-align: center;
  }
  h1 {
    color: #ff3e00;
    font-size: 4em;
    font-weight: bold;
  }
</style>
