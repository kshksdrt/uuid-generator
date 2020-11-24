<template>
	<div>
		<h1 class="text-primary text-bold">Create unique Ids</h1>
		<h5 class="text-secondary text-bold">
			An open-source ad-free UUIDv4 generator
		</h5>
		<div id="new" class="flex-between">
			<input
				type="text"
				placeholder="Give it a name (Optional)"
				class="full-width bg-bg-2"
				v-model="name"
			/>
			<button class="ml4" @click="createUUID">Create</button>
		</div>
		<div id="description">
			<h3 class="text-bold">What is UUIDv4?</h3>
			<p>
				A universally unique identifier (UUID) or globally unique identifier
				(GUID) is a 128-bit number which can be used to identify information.
				UUID4 is randomly generated and its uniqueness is guaranteed, as there
				can be 2^128 possible combinations.
			</p>
		</div>
	</div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { mutate } from "@/scripts/state";
import { names } from "@/name.js";

const name = ref("");

function createUUID() {
	const i = Math.floor(Math.random() * names.length);
	const j = Math.floor(Math.random() * names.length);
	if (name.value === "") name.value = `${names[i]} ${names[j]}`;
	mutate.saveUUID(name.value);
	name.value = "";
}

export { name, createUUID };

export default defineComponent({
	name: "CreateUUID",
});
</script>

<style lang="scss" scoped>
#description {
	color: var(--bg-6);
	margin-top: 5rem;
}

#new {
	margin-top: 3rem;
}
</style>
