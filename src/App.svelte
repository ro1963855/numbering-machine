<script>
	export let name;
</script>

<main>
	<header>
		<h1>Bank Counter</h1>
	</header>
	<article class="nm__table">
		<div class="nm__table__header">
			<span class="nm__table__header__title">Counter</span>
			<span class="nm__table__header__title">Processing</span>
			<span class="nm__table__header__title">Processed</span>
		</div>
		<div class="nm__table__counter">
			<span class="nm__table__counter__name">Amy</span>
			<span class="nm__table__counter__processing">11</span>
			<span class="nm__table__counter__processed">1,2,7</span>
		</div>
		<div class="nm__table__counter">
			<span class="nm__table__counter__name">Bob</span>
			<span class="nm__table__counter__processing">14</span>
			<span class="nm__table__counter__processed">3,9</span>
		</div>
		<div class="nm__table__counter">
			<span class="nm__table__counter__name">Cory</span>
			<span class="nm__table__counter__processing">13</span>
			<span class="nm__table__counter__processed">4,6,10</span>
		</div>
		<div class="nm__table__counter">
			<span class="nm__table__counter__name">Dora</span>
			<span class="nm__table__counter__processing">12</span>
			<span class="nm__table__counter__processed">5,8</span>
		</div>
	</article>
	<div class="nm__table__summary">
		<span class="nm__table__summary__waiting">18</span>
		<button class="nm__table__summary__add">Next 33</button>
	</div>
</main>

<style lang="scss">
	.nm__table {
		display: table;
		grid-template-columns: 1fr;

		&__header, &__counter, &__summary {
			display: table-row;
		}

		&__header {
			&__title {
				padding: 8px;
				display: table-cell;
				width: min-content;
				border-bottom: 1px solid gray;
			}
		}

		&__counter {
			&__name, &__processing, &__processed {
				padding: 8px;
				display: table-cell;
				border-bottom: 1px solid gray;
			}

			&__name, &__processing {
				display: table-cell;
				width: min-content;
				border-bottom: 1px solid gray;
			}

			&__processed {
				width: 100%;
			}
		}

		&__summary {
			margin-top: 8px;
			padding: 8px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>