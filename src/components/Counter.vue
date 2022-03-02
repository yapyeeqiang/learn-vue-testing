<script setup>
defineProps({
	count: {
		type: Number,
		required: true,
	},
});
</script>

<template>
	<p>{{ count }}</p>
	<button @click.prevent="count += 1">Add Count</button>
</template>
