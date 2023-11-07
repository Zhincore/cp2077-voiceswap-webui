<script lang="ts">
  import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
  import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
  import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
  import Fa from "svelte-fa";
  import { twMerge } from "tailwind-merge";
  import Button from "./Button.svelte";

  export let label: string;
  export let options: string[] = [];
  export let canAdd = false;
  export let value = "";

  let select: HTMLSelectElement;
  let input: HTMLInputElement;
  let creating = false;

  const inputClasses = twMerge(
    "p-2 pr-4 bg-zinc-1000 rounded caret-zinc-200 leading-none cursor-pointer text-zinc-200 [&[value='']]:text-zinc-500",
    "hover:bg-zinc-950 hover:text-white transition",
  );

  function onSubmit() {
    creating = !creating;
    if (creating) return;

    if (input.value) {
      options = [...options, input.value];
      value = input.value;
    }
  }

  $: if (input) input.focus();
</script>

<label class="flex cursor-pointer flex-col">
  {label}

  <form class="flex gap-2" on:submit|preventDefault|capture={onSubmit}>
    <div class="relative" class:hidden={creating}>
      <select bind:this={select} bind:value class={inputClasses}>
        <option value="" hidden disabled selected>Select option</option>
        {#each options as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
      <Fa icon={faCaretDown} class="absolute right-3 top-1/2 -translate-y-1/2 transform" />
    </div>

    {#if creating}
      <input bind:this={input} placeholder="Create new" type="text" class={inputClasses} />
    {/if}

    {#if canAdd}
      <Button class="bg-green-800 hover:bg-green-600">
        <Fa fw icon={creating ? faCheck : faPlus} />
      </Button>
    {/if}
  </form>
</label>
