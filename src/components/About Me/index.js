import React from "react";
import me from "../../assets/large/Photo of myself holding a bird.jpg"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Taylor.
            <br className="hidden lg:inline-block" />I love to code amazing things.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a part time student of software development and coding. I've attended a bootcamp with UC Berkeley for Full-Stack Development, and am attending Western Governor's University. 
            I'm also a part time photographer, and full time lover of animals and video games.
          </p>
          <img src={me} class=""></img>
        </div>

      </div>
    </section>
  );
}