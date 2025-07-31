"use client"

import { Button } from "@medusajs/ui"
import { ReactNode } from "react"

type ButtonWrapperProps = {
  children: ReactNode
  variant?: "primary" | "secondary" | "transparent" | "danger" | undefined
  size?: "small" | "base" | "large"
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  "data-testid"?: string
}

const ButtonWrapper = ({
  children,
  variant = "primary",
  size = "base",
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
  onClick,
  "data-testid": dataTestId,
}: ButtonWrapperProps) => {
  // Green color classes based on variant
  const getGreenClasses = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all"
      case "secondary":
        return "bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all"
      case "transparent":
        return "bg-transparent hover:bg-teal-50 text-teal-700 border-teal-300 hover:border-teal-400 transition-all"
      case "danger":
        return "bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700 transition-all"
      default:
        return "bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all"
    }
  }

  const greenClasses = getGreenClasses(variant ?? "primary")
  const combinedClassName = `${greenClasses} ${className}`.trim()

  return (
    <Button
      variant={variant}
      size={size}
      className={combinedClassName}
      type={type}
      disabled={disabled}
      isLoading={isLoading}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </Button>
  )
}

export default ButtonWrapper
