import { useVariableValue } from "@devcycle/react-client-sdk"

const List = (props: { items: string[] }) => {
  const { items } = props
  const isEnabled = useVariableValue("test-3", false)
  return (
    <ul>
      <li>isEnabled: {isEnabled ? "true" : "false"}</li>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List
