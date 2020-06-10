import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from 'rollup-plugin-postcss';
import copy from "rollup-plugin-copy";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

export default {
  input: "src/index.tsx",
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    url(),
    svgr(),
    postcss({
      extract: false,
      modules: true,
      use: ['sass']
    }),
    copy({
      targets: [
        {
          src: 'src/**/*.json',
          dest: "build"
        },
      ],
      flatten: false
    }),
    copy({
      targets: [
        {
          src: 'README.md',
          dest: "build"
        },
      ]
    })
  ]
};
