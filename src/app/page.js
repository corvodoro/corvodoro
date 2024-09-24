import Image from "next/image";

export default function Home() {
  return (
    <main>
      <article id="about">
        <h1 className="text-5xl w-full text-center font-bold">About Us</h1>
      </article>
      <article id="projects">
        <h1 className="text-5xl w-full text-center font-bold">Projects</h1>
        
      </article>
      <article id="team">
        <h1 className="text-5xl w-full text-center font-bold">Team</h1>
      </article>
    </main>
  );
}
