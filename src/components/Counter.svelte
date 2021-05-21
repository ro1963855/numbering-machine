<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  export let index
	export let name
  export let processing
  export let processed

  $: {
    doJob(processing)
  }

  function doJob() {
    if (processing === null) {
      return
    }

    const timeout = getRandomJobTime()
    setTimeout(() => {
      dispatch('jobFinished', { index })
    }, timeout * 1000)
  }

  function getRandomJobTime(){
    return (Math.floor(Math.random() * (15 - 5)) + 5) / 10
  }
</script>

<div class="nm__counter">
  <span class="nm__counter__name">{name}</span>
  <span class="nm__counter__processing">
    {processing === null ? 'Idle' : processing}
  </span>
  <span class="nm__counter__processed">{processed.join()}</span>
</div>

<style lang="scss">
  .nm__counter {
    display: table-row;

    &__name, &__processing, &__processed {
      padding: 0.5rem;
      display: table-cell;
      border-bottom: 1px solid gray;
    }

    &__processed {
      width: 100%;
      word-break: break-word;
    }
  }
</style>