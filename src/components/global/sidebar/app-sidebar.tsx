"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  CalendarDays,
  GalleryVerticalEnd,
  Settings2,
} from "lucide-react"
import { NavMain } from "@/src/components/global/navbar/nav-main"
import { NavUser } from "@/src/components/global/navbar/nav-user"
import { TeamSwitcher } from "@/src/components/global/sidebar/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/src/components/ui/sidebar"
import { Logo } from "./logo"
import { LogoName } from "./logo-name"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Eventos",
      url: "/events",
      icon: CalendarDays,
      isActive: true,
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-1.5 mt-2 ml-2">
          <Logo />
          <LogoName />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
        <TeamSwitcher teams={data.teams} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
