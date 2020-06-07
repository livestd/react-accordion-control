import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
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
    sass({
      insert: true
    }),
    copy({
      targets: [
        {
          src: 'src/**/*.json',
          dest: "build"
        },
      ],
      flatten: false
    })
  ]
};
