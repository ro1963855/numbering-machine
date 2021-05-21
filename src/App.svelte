<script>
	import { onMount } from 'svelte'
	import Counter from './components/Counter.svelte';
	export let countersName = []
	let counters = []
	let totalNumber = 0
	let waitingQueue = []

	onMount(() => {
		if (Array.isArray(counters)) {
			counters = countersName.map(counterName => ({
				name: counterName,
				processing: null,
				processed: [],
			}))
		}
	})

	$: {
		handleDispatchJob(waitingQueue)
	}

	function handleDispatchJob() {
		if (waitingQueue.length === 0) {
			return
		}

		for (let index = 0; index < counters.length; index++) {
			if (counters[index].processing === null) {
				counters[index].processing = waitingQueue.shift()
				counters = counters
				waitingQueue = waitingQueue
				return
			}
		}
	}

	function handleClickAddButton() {
		totalNumber++
		waitingQueue = [...waitingQueue, totalNumber]
	}

	function handleJobFinished(event) {
		const counter = counters[event.detail.index]
		counter.processed = [...counter.processed, counter.processing]
		counter.processing = null
		counters = counters
		handleDispatchJob()
	}
</script>

<main>
	<header>
		<h1>Bank Counter</h1>
	</header>
	<div class="nm__table__summary">
		<span class="nm__table__summary__waiting">Waiting: { waitingQueue.length }</span>
		<button class="nm__table__summary__add" on:click={handleClickAddButton}>Next {totalNumber + 1}</button>
	</div>
	<article class="nm__table">
		<div class="nm__table__header">
			<span class="nm__table__header__title">Counter</span>
			<span class="nm__table__header__title">Processing</span>
			<span class="nm__table__header__title">Processed</span>
		</div>
		{#each counters as counter, index}
			<Counter
				index="{index}"
				name="{counter.name}"
				processing="{counter.processing}"
				processed="{counter.processed}"
				on:jobFinished={handleJobFinished}
			/>
		{/each}
	</article>
</main>

<style lang="scss">
	* {
		font-size: 1rem;
		line-height: 1.5;
	}

	.nm__table {
		display: table;

		&__header, &__summary {
			display: table-row;
		}

		&__header {
			&__title {
				padding: 0.5rem;
				display: table-cell;
				width: min-content;
				border-bottom: 1px solid gray;
			}
		}

		&__summary {
			margin-top: 0.5rem;
			padding: 0.5rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			&__add {
				margin: 0;
			}
		}
	}
</style>