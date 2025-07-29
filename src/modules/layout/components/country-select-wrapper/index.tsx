"use client"

import { HttpTypes } from "@medusajs/types"
import useToggleState from "@lib/hooks/use-toggle-state"
import CountrySelect from "../country-select"

type CountrySelectWrapperProps = {
  regions: HttpTypes.StoreRegion[]
}

const CountrySelectWrapper = ({ regions }: CountrySelectWrapperProps) => {
  const toggleState = useToggleState()

  return (
    <CountrySelect
      toggleState={toggleState}
      regions={regions}
    />
  )
}

export default CountrySelectWrapper 