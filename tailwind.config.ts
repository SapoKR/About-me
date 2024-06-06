import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
    content: ["./pages/about.vue"],
    safelist: [
      "py-4",
      {
        pattern: /(from|to)-(blue|indigo|purple)-(400|500|900)/,
      },
      {
        pattern: /bg-gradient-to-b/,
      },
    ],
    plugins: [daisyui],    
} satisfies Config;