import { Suspense } from "react";
import { AppSidebar } from "@/src/components/global/sidebar/app-sidebar";
import { AppNavbar } from "@/src/components/global/navbar/app-navbar";
import { Page } from "@/src/components/global/page";
import { SidebarProvider } from "@/src/components/ui/sidebar";

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex w-full flex-1 flex-col">
          <AppNavbar />
          <Page content="app">{children}</Page>
        </main>
      </SidebarProvider>
    </Suspense>
  );
}