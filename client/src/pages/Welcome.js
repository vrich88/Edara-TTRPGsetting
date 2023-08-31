import React from "react";

function welcome() {
  return (
    <>
      {/* hero banner welcome */}
      <header>
        <h1>Edara</h1>
      </header>
      {/* left side content */}
      <aside>left</aside>
      {/* main content */}
      <main>
        <article class="intro">
          <h2>Welcome</h2>
          <section>
            <p>
              Greetings my fellow Edarans, and welcome to the library of ???.
              Here you will find the records of ???
            </p>
          </section>
        </article>
      </main>
      {/* right side content */}
      <aside>right</aside>
      
    </>
  );
}

export default welcome;
