import { useState } from "react"
import "./App.css"
import Input from "./components/Input"
import List from "./components/List"
import { DevCycleProvider, isDevCycleReady } from "./components/DevCycleContext"

function App() {
  const [inputValue, setInputValue] = useState("")
  const devCycleReady = isDevCycleReady()

  if (!devCycleReady) return null

  return (
    <>
      <Input
        value={inputValue}
        onChange={setInputValue}
        onSubmit={() => {
          console.log(inputValue)
          setInputValue("")
        }}
      />
      <List items={["Learn React", "Learn Vite", "Make an awesome app"]} />
    </>
  )
}

// Export both the wrapped and unwrapped versions
export const WrappedApp = () => (
  <DevCycleProvider sdkKey={"DEVCYCLE_SDK_KEY"}>
    <App />
  </DevCycleProvider>
)

export default App
