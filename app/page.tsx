import { ModeToggle } from '@/components/theme-switcher'
import React from 'react'

function page() {
    return (
        <div className="flex  items-center justify-center text-7xl">
            <h1>Asosiy page</h1>
            <ModeToggle />
        </div>
    )
}

export default page