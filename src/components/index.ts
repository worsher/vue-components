/**
 * 
 * @authors Wangfeiran (wangfeiran@qiyi.com)
 * @date    2019-06-17 16:37:11
 * @version 1.0.0
 * @desc 加载整个组件库
 */
import Vue from 'vue'
import {Menu} from "./menu"
const components : Components = {
	Menu
}

export default {
	install (vue: typeof Vue){
		for(var k  in components){
			let value : any = components[k]
			vue.component(value.name,value)
		}
		
	}
}
