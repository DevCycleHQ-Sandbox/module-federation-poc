import { createContext, useContext } from "react"
import {
  withDevCycleProvider,
  useIsDevCycleInitialized,
} from "@devcycle/react-client-sdk"

export const DevCycleContext = createContext(null)

export const createDevCycleProvider = (sdkKey: string) => {
  // Create the wrapped provider once with the SDK key
  return withDevCycleProvider({
    sdkKey,
  })(({ children }: { children: React.ReactNode }) => children)
}

export const DevCycleProvider = ({
  sdkKey,
  children,
}: {
  sdkKey: string
  children: React.ReactNode
}) => {
  const Provider = createDevCycleProvider(sdkKey)
  return <Provider>{children}</Provider>
}

export const isDevCycleReady = () => {
  return useIsDevCycleInitialized()
}

export const useDevCycle = () => {
  const context = useContext(DevCycleContext)
  if (!context) {
    throw new Error("useDevCycle must be used within a DevCycleProvider")
  }
  return context
}
