import { WorkExperience } from "./WorkExperience";
import { Company } from "./experience";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold">Vincent Trivett</h1>

      <p className="mb-4">
        I am a generalist full stack developer. I have about ten years of
        experience creating software for companies large and small.
      </p>

      <h2 className="text-3xl mb-4" font-semibold>
        Work experience
      </h2>
      <hr className="mb-6 mt-4" />

      {Object.values(Company).map((company) => (
        <WorkExperience company={company} />
      ))}

      <section className="mb-8">
        <h3 className="text-3xl mb-4">Education</h3>
        <hr className="mb-6 mt-6" />

        <section className="mb-8">
          <h3 className="text-2xl">
            General Assembly Web Development Immersive
          </h3>
          <h5 className="text-sm">Feb 2014 - May 2014</h5>

          <ul className="list-disc list-outside">
            <li className="mb-3 ml-3 pl-2 leading-5">
              Completed a 12-week immersive bootcamp in full stack web
              development.
            </li>
            <li className="mb-3 ml-3 pl-2 leading-5">
              Learned basics of software engineering with a focus on Ruby on
              Rails, relational databases, and JavaScript.
            </li>
          </ul>
          <hr className="mb-6 mt-6" />
        </section>

        <section className="mb-8">
          <h3 className="text-2xl">CUNY Graduate School of Journalism</h3>
          <h5 className="text-sm">Aug 2010 - Dec 2011</h5>

          <ul className="list-disc list-outside">
            <li className="mb-3 ml-3 pl-2 leading-5">
              MS in digital journalism, specialized in business and economic
              reporting.
            </li>
          </ul>
          <hr className="mb-6 mt-6" />
        </section>

        <section className="mb-8">
          <h3 className="text-2xl">Rutgers University</h3>
          <h5 className="text-sm">Aug 2002 - May 2006</h5>

          <ul className="list-disc list-outside">
            <li className="mb-3 ml-3 pl-2 leading-5">BA in English</li>
          </ul>
          <hr className="mb-6 mt-6" />
        </section>
      </section>
    </section>
  );
}

// My Resume
//

// My professional history
// I currently work for Fabric Technologies in Brooklyn. Here, I am learning the joys of back end web development without managing servers and getting my hands dirty with Gatsby and React.

// Before joining Fabric at the start of 2019, I spent a year and a work as a contractor at Google, mostly for the Local Guides community. I also got to work on an interesting internal tool that worked as an interface for creating templates for eloquent natural language to describe places on Google Maps.

// Before my that, I worked at a small startup called Study Abroad Apartments, where I was the first and only technical employee for quite some time. This stage of my career also gave me the pleasure of training and mentoring a junior developer fresh out of a web bootcamp.

// Prior to that, I had the honor to be a part of 2U, a leading education technology company, for just over two years.

// Before that, I went through the crucible of General Assembly’s Web Development Immersive program, where I spent three months learning and practicing front and back end web development.

// I have enjoyed a number of careers before I became a professional web developer. I was a freelance business journalist, a Japanese to English translator, an arts and culture reporter, photographer, and translator in Yokohama while teaching in the city’s public schools, and thats only the non service jobs I have worked.

// The remains of my day
// I ride my bike a lot. (Follow me on Strava)! I like a nice long rides into the sticks and I plan on posting more field notes from my rides on this blog.

// I read a bunch, also picking up Spanish where I can.

// I’m also getting into birding lately.

// Please drop me a line to get in touch!
