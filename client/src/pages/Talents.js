import React from "react";

function Talents() {
    return (
        <>
            {/* title */}
            <header>
                <h1>Talents</h1>
            </header>
            {/* main content */}
            <main>
                {/* explanation of page content */}
                <section>
                    <article>
                        <h2>explanation</h2>
                        <br />
                        <p>page basic description or explanation of talents and sorting</p>
                    </article>
                </section>
                {/* cards area */}
                <section>
                    sorted talent table/list as links to pop up cards insert from a
                    component import might be multiple tables/lists with sub headings
                </section>
            </main>
        </>
    );
}

export default Talents;
