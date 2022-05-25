import Home from "../Home.svelte";
import About from "../About.svelte";
import Test from "../Test.svelte";

export const routes = {
  "/": Home,
  "/test/:param": Test,
  "/about": About,
};
