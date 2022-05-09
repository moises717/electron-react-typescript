module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	rules: {
		'react/tsx-uses-react': 'off',
		'react/react-in-tsx-scope': 'off',
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/electron',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
};
