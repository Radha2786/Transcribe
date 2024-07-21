import React from 'react'
import { ThemeProvider } from "@/components/theme-provider"
interface PageLayoutProps {
    children : React.ReactNode;
    className ?: string;
}

const PageLayout:React.FC<PageLayoutProps> = (
    {
        children,
        className
    }
) => {
  return (
    // bg-black text-white dark:bg-white dark:text-black  classes removed from div below
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className={` ${className}`}>
        {children}
    </div>
    </ThemeProvider>
  )
}

export default PageLayout