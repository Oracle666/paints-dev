/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-typescript/recommended",
        "@vue/eslint-config-prettier",
    ],
    plugins: ["prettier"],
    // add your custom rules here
    rules: {
        indent: ["error", 4],
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                endOfLine: "auto",
                printWidth: 80,
            },
            { usePrettierrc: true },
        ],
    },
};
