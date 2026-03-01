"use client"

import { cn } from "@/src/lib/utils"

interface AppNavbarProps {
  className?: string
  children?: React.ReactNode
}

export function AppNavbar({ className, children }: AppNavbarProps) {
  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center gap-2 border-b bg-background px-4",
        className
      )}
    >
      <div className="flex flex-1 items-center gap-2">{children}</div>
    </header>
  )
}
