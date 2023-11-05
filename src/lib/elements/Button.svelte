<script lang="ts">
  import { twMerge } from "tailwind-merge";

  export let label = "";
  let classes = "";
  export { classes as class };
</script>

<button
  on:click
  class={twMerge(
    "p-2 leading-none rounded bg-zinc-1000 cursor-pointer",
    "hover:bg-zinc-950 hover:text-white transition",
    classes,
  )}
>
  <slot>{label}</slot>
</button>
