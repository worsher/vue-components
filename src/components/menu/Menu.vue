<template>
	<div>1</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component({
		name : "menu"
	})
	export default class Menu extends Vue {
		@Prop() private msg!: string;
	}
</script>