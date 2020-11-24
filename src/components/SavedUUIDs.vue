<template>
	<div class="card rounded-subtle">
		<h3>Saved UUIDs</h3>
		<div id="UUIDList">
			<div class="list-item" v-for="each in list" :key="each.uuid">
				<p class="text-secondary pb2">{{ each.name }}</p>
				<p class="text-smallest mono">{{ each.uuid }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineComponent } from "vue";
import { state } from "@/scripts/state";

const list = state.savedUUIDs.value;
export { list };

export default defineComponent({
	name: "SavedUUIDs",
});
</script>

<style lang="scss" scoped>
.card {
	background: var(--bg-1);
	height: 70vh;
	padding: 0.7rem 1.2rem;
	margin-bottom: 2rem;
	border-radius: 5px;
}

#UUIDList {
	height: 85%;
	overflow-x: hidden;
	overflow-y: auto;
}

.list-item {
	background: var(--bg-0);
	padding: 0.7rem;
	margin: 0.7rem 0;
	margin-right: 1.3rem;

	p {
		margin: 0;
	}
}
</style>
