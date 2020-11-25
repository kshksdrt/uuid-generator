<template>
	<div class="card rounded-subtle">
		<div class="flex-between">
			<h3>Saved UUIDs</h3>
			<button class="ml4" @click="toggleEditState" v-if="list.length !== 0">
				{{ editState ? "done" : "edit" }}
			</button>
		</div>
		<div id="UUIDList">
			<div v-if="list.length === 0" class="pt8">
				<p class="margin-auto text-center text-dim">
					You do not have any saved UUIDs.
				</p>
			</div>
			<div class="list-item" v-for="each in list" :key="each.uuid">
				<div class="flex-between">
					<div>
						<p class="text-secondary pb2">{{ each.name }}</p>
						<p class="text-smallest mono">{{ each.uuid }}</p>
					</div>
					<transition name="fade">
						<img
							v-if="editState"
							src="@/assets/delete.png"
							width="18"
							alt="Delete button"
							class="p2 hover-bg-1"
							@click="removeItem(each.uuid)"
						/>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";
import { mutate, get } from "@/scripts/store/state";

const list = get.savedUUIDs;

const editState = ref(false);

function toggleEditState() {
	editState.value = !editState.value;
}

function removeItem(uuid: string) {
	console.log("removing", uuid);
	mutate.removeUUID(uuid);
}

export { list, editState, toggleEditState, removeItem };

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

.fade-enter-active,
.fade-leave-active {
	transition: opacity 100ms ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
