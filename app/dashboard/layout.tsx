import React from "react";

export default function DashboardLayout({
    children, //will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <h1>H1 Header For A Dashboard Page</h1>
            {/* Include shared UI here e. g. a header or sidebar */}
            <nav></nav>

            {children}
        </section>
    )
}