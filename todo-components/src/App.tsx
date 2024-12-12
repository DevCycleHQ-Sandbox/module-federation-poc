import { useState } from "react"
import "./App.css"
import Input from "./components/Input"
import List from "./components/List"
import { DevCycleProvider, isDevCycleReady } from "./components/DevCycleContext"
import process from "process"

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
  <DevCycleProvider sdkKey={process.env.DEVCYCLE_SDK_KEY as string}>
    <App />
  </DevCycleProvider>
)

export default App
