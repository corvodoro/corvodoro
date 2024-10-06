import Image from "next/image";

export default function Home() {
  return (
    <main>
      <article id="about">
        <h1 className="text-5xl w-full text-center font-bold">About Us</h1>
        <p>We are a small team from Poland, working on web3 projects"</p>
        <img src="corvodoro_logo.png"></img>
      </article>
      <article id="projects">
        <h1 className="text-5xl w-full text-center font-bold">Projects</h1>
        <img src="corvodoro_logo.png"></img>
      </article>
      <article id="team">
        <h1 className="text-5xl w-full text-center font-bold">Team</h1>
        <img src="corvodoro_logo.png"></img>
      </article>
    </main>
  );
}
