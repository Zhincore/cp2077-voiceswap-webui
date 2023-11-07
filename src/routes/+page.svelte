<script lang="ts">
  import Section from "$lib/elements/Section.svelte";
  import Selector from "$lib/elements/Selector.svelte";

  let project: string;
</script>

<header class="flex items-start justify-between p-4">
  <h1 class="text-red text-4xl">VoiceSwap</h1>

  <div class="flex items-end gap-2">
    <Selector bind:value={project} canAdd label="Project" options={["test"]} />
  </div>
</header>

<main class="mx-auto max-w-5xl">
  {project}

  <Section>
    <h1 class="text-glow font-cyberpunk text-4xl text-cyan-300">Ayo what is this</h1>
    <div class="h-[300px]" />
  </Section>
</main>
