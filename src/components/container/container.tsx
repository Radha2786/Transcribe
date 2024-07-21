import React from 'react'

interface ContainerLayoutProps {
    children : React.ReactNode;
    className ?: string;
}

const Container:React.FC<ContainerLayoutProps> = (
    {
        children,
        className
    }
) => {
  return (
    <div className={`container mx-auto px-4 h-screen ${className}`}>
        {children}
    </div>
  )
}

export default Container