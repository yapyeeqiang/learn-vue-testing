import { mount } from '@vue/test-utils';
import Counter from '../components/Counter.vue';

test('mount component', async () => {
	expect(Counter).toBeTruthy();

	const wrapper = mount(Counter, {
		props: {
			count: 10,
		},
	});

	expect(wrapper.text()).contain('10');

	await wrapper.get('button').trigger('click');
	expect(wrapper.text()).contain('11');

	await wrapper.get('button').trigger('click');
	expect(wrapper.text()).contain('12');
});
