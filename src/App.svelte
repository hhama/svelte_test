<script>
  import Router from 'svelte-spa-router';
  import { routes } from './router';
</script>

<div class="text-center p-4 max-w-xs md:max-w-none mx-auto">
  <Router {routes} />
</div>
