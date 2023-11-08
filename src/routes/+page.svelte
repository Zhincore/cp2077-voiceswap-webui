<script lang="ts">
  import Section from "$lib/elements/Section.svelte";
  import Selector from "$lib/elements/Selector.svelte";
  import Logo from "$lib/parts/Logo.svelte";

  let project: string;
</script>

<header class="flex items-start justify-center p-4">
  <h1 class="text-red text-4xl">
    <Logo class="h-32 w-auto" />
    <span class="sr-only">VoiceSwap</span>
  </h1>
</header>

<main class="mx-auto my-8 max-w-5xl">
  <div class="flex items-end gap-2">
    <Selector bind:value={project} canAdd label="Project" options={["test"]} />
  </div>

  {project}

  <Section>
    <h1 class="text-glow font-cyberpunk text-4xl text-cyan-300">Ayo what is this</h1>
    <div class="h-[300px]" />
  </Section>
</main>
