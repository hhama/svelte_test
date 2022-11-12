<script>
  import { link } from 'svelte-spa-router';
  import PageTransition from './PageTransition.svelte';
  export let params = {};
  $: prevUrl = '/test/' + (parseInt(params.param) - 1);
  $: nextUrl = '/test/' + (parseInt(params.param) + 1);
</script>

{#key params.param}
  <PageTransition>
    <div>
      <h1>This is {params.param}.</h1>
      {#if params.param > 1}
        <a href={prevUrl} use:link>Prev</a>
      {/if}
      <a href={nextUrl} use:link>Next</a>
    </div>
  </PageTransition>
{/key}

<style>
  div {
    text-align: center;
  }

  h1 {
    color: #33ff00;
    font-size: 4em;
    font-weight: bold;
  }
</style>
