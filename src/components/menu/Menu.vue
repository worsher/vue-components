<template>
	<div>1</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	@Component({
		name : "my-menu"
	})
	export default class MyMenu extends Vue {
		@Prop() private msg!: string;
	}
</script>