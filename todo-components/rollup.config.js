import typescript from "@rollup/plugin-typescript"

export default {
  input: "src/components/Input.tsx",
  plugins: [typescript()],
  // ... rest of your rollup config
}
