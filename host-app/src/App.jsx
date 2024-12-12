// App.jsx in host-app
import { useState } from "react"
import List from "todo_components/List"
import Input from "todo_components/Input"
import {
  DevCycleProvider,
  isDevCycleReady,
} from "todo_components/DevCycleContext"

function AppContent() {
  const devCycleReady = isDevCycleReady()

  const [newTodo, setNewTodo] = useState("")
  const [todos, setTodos] = useState([])

  const onSubmit = () => {
    setTodos((prev) => [...prev, newTodo])
    setNewTodo("")
  }

  if (!devCycleReady) return <div>DVC not ready...</div>

  return (
    <>
      <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
      <List items={todos} />
    </>
  )
}

function App() {
  return (
    <DevCycleProvider sdkKey={"DEVCYLE_SDK_KEY"}>
      <AppContent />
    </DevCycleProvider>
  )
}

export default App
