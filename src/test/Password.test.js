import { mount } from '@vue/test-utils';
import Password from '../components/Password.vue';

test('mount component', async () => {
	expect(Password).toBeTruthy();

	const wrapper = mount(Password, {
		props: {
			password: 'abc1234',
			showPassword: false,
		},
	});

	const password = wrapper.get('[data-test="password"]');
	expect(password.text()).toBe('*******');

	const button = wrapper.get('[data-test="button"]');
	expect(button.text()).toBe('Show');

	await button.trigger('click');
	expect(password.text()).toBe('abc1234');
	expect(button.text()).toBe('Hide');
});
