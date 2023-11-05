<script lang="ts">
  import Selector from "$lib/elements/Selector.svelte";

  let project: string;
</script>

<header class="p-4 flex items-start justify-between">
  <h1 class="text-4xl text-red">VoiceSwap</h1>

  <div class="flex gap-2 items-end">
    <Selector bind:value={project} canAdd label="Project" options={["test"]} />
  </div>
</header>

<main class="max-w-4xl mx-auto">
  {project}
</main>
