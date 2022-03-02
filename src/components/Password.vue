<script setup>
const { password, showPassword } = defineProps({
	password: {
		type: String,
	},
	showPassword: {
		type: Boolean,
	},
});
</script>

<template>
	<div>
		<p data-test="password">
			{{ showPassword ? password : '*******' }}
		</p>
		<button
			@click.prevent="showPassword = !showPassword"
			data-test="button"
		>
			{{ showPassword ? 'Hide' : 'Show' }}
		</button>
	</div>
</template>
