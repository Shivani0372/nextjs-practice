import React from 'react'

export default function modelsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Models Layout</h1>
      {children}
    </div>
  )
}