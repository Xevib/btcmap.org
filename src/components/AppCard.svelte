<script>
	export let image;
	export let text;
	export let desc;
	export let link;
</script>

<div>
	{#if link}
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			class="text-link hover:text-hover text-2xl font-semibold"
		>
			<div class="bg-offwhite rounded-2xl mb-5 h-60 flex justify-center items-center">
				<i class="{image} w-28 h-28" />
			</div>
			<p>{text}</p>
			<p class="font-normal text-xl">{desc}</p>
		</a>
	{:else}
		<div
			class="opacity-50 text-link bg-offwhite rounded-2xl mb-5 h-60 flex justify-center items-center"
		>
			<i class="{image} w-28 h-28" />
		</div>
		<p class="opacity-50 text-link text-2xl font-semibold">{text}</p>
		<p class="opacity-50 text-link text-xl">Soon!</p>
	{/if}
</div>
