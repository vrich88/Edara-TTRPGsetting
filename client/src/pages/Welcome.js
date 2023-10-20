import React from "react";
import "../assets/css/fonts.css";

export default function Welcome() {
  return (
    <>
      {/* title */}
      <header>
        <h1>Edara</h1>
      </header>
      {/* main content */}
      <main>
        <section>
          <article className="intro">
            <h2>Greetings and welcome</h2>
            <br />
            <p>
              Greetings my fellow Edarans, and welcome to the library of ???.
              Here you will find our scribes have meticulously preserved and curated records that chronicle the events of Edaran politics, adventurers, and everyday folks like you.
            </p>
            <br />
            <p>
              This is a TTRPG setting sourced from DnD 5e materials to begin; but "homebrewed" with our collaborative storytelling that will change and grow based on our decisions.
              There’s some information spread throughout the various channels under the <strong>Homebrew Rules</strong> category regarding changes and tweaks that I am using to tailor this homebrew setting.
              Please note that some of these are a work in progress and that I will make adjustments as we go through our games here to make this a fun and challenging world that is designed around a gritty and tough “fantastic reality” that our characters live in.
              I want a world we can return to and play future adventures in; that could see changes reflected from past adventures.
              The goal of all this is to have a semi-serious game, while we have fun playing this great game.
              <br /><br />
              A few key concepts that I would like to point out to you:
              <br /><br />
              RP:  Please focus on this over your gameplay mechanics for a more friendly DM experience
              <br /><br />
              Grit:  The resources are necessary, injures hurt, recovery takes time and resources
              <br /><br />
              Homebrew:  I love it, let’s talk about it; you will experience power fluctuations as part of balancing it
              <br /><br />
              Big Parties:  These are fun and allow for lots of RP, but will slow us down in combat and forward story moving progress from time to time; be ok with it, make sure to get the DMs attention if you need something
              <br /><br />
              Slower Pace:  Let's explore and build this world together and have your characters be involved with and engaged in it; not jump from one dungeon highlight to the next
              <br /><br />
              Deus Ex Machina:  DM reserves the right to impose outcomes if something starts to abuse the intent of the world; or to facilitate the in game passage of time
              <br /><br />
              Retcons:  This might happen as a result of a review of a session and call at the table that facilitates us staying in the game at the time
            </p>
          </article>
        </section>
      </main>
    </>
  )
}