<template>
	<div class="root grid-container">
		<CreateUUID />
		<SavedUUIDs />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateUUID from "@/components/CreateUUID.vue";
import SavedUUIDs from "@/components/SavedUUIDs.vue";
import initialize from "@/scripts/core/initialize";

initialize();

export default defineComponent({
	name: "App",
	components: { CreateUUID, SavedUUIDs },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap");

@import "@/assets/utilities.scss";
@import "@/assets/spacing.scss";
@import "@/assets/elements.scss";

:root {
	--gray0: #f2f2f2;
	--gray1: #e8e8e8;
	--gray2: #dfdfdf;
	--gray3: #d1d1d1;
	--gray4: #b6b6b6;
	--gray5: #5d5d5d;
	--gray6: #3f3f3f;
	--gray7: #2f2f2f;
	--gray8: #2a2a2a;
	--gray9: #222222;
	--primary: #f06292;
	--secondary: #aa7aff;
	--bg-absolute: #000000;
	--bg: var(--gray9);
	--bg-0: var(--gray9);
	--bg-1: var(--gray8);
	--bg-2: var(--gray7);
	--bg-3: var(--gray6);
	--bg-4: var(--gray5);
	--bg-5: var(--gray4);
	--bg-6: var(--gray3);
	--bg-7: var(--gray2);
	--bg-8: var(--gray1);
	--bg-9: var(--gray0);
	--text: var(--gray0);
}

#app {
	box-sizing: border-box;
	font-family: "Nunito", sans-serif;
	font-weight: 400;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	outline: none;
}

input,
button {
	font-family: "Nunito", sans-serif;
}

body {
	margin: 0;
	height: 100vh;
	width: 100vw;
	background: var(--bg);
	color: #ffffff;
}

.root {
	width: clamp(50vw, 800px, 93vw);
	margin: auto;
	padding-top: 3rem;
}

p {
	-moz-user-select: text;
	-khtml-user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
	user-select: text;
}

*::-webkit-scrollbar {
	width: 0.4rem;
	height: 0.4rem;
}

*::-webkit-scrollbar-track {
	background: var(--bg-1);
	border: 1px solid var(--bg-2);
}

*::-webkit-scrollbar-thumb {
	background: var(--bg-4);
}

.mono {
	font-family: "Fira Code", monospace;
	-moz-user-select: text;
	-khtml-user-select: text;
	-webkit-user-select: text;
	-ms-user-select: text;
	user-select: text;
}
</style>
