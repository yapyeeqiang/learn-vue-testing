<script setup>
import Counter from '@/components/Counter.vue';
import Password from '../components/Password.vue';

let count = $ref(0);
</script>

<template>
	<h1>Home Page</h1>

	<router-link to="/about">Go to About</router-link>

	<Counter :count="count" @addCount="addCount" />

	<Password password="abc1234" :showPassword="false" />
</template>
