<template>
	<div class="">
		<header>
			<poi-header></poi-header>
		</header>
	    	    <router-view ></router-view>
		<footer>
		    <poi-footer></poi-footer>
		</footer>
	</div>

</template>

<script>
	import poiHeader from '../components/header';
	import poiFooter from '../components/footer';

	export default {
		data() {
			return {
				haha: 'fuck'
			}
		},
		components: {
			poiHeader,
			poiFooter
		},
		methods: {

		},
		created() {

		}
	};
</script>

<style >
@import "https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css"
	p {
		font-size: 2em;
	}

</style>
