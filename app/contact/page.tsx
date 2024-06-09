import { EmailIcon, GithubIcon, LinkedInIcon } from "./icons";

const ContactLineItem = ({ name, url, icon }) => {
  return (
    <li className="mb-4">
      <a
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href={url}
      >
        {icon()}
        <p className="ml-2">{name}</p>
      </a>
    </li>
  );
};

const ContactList = () => {
  return (
    <footer className="mb-16 print:hidden">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2">
        <ContactLineItem
          name="Email"
          url="mailto:trivett@gmail.com"
          icon={EmailIcon}
        />
        <ContactLineItem
          name="Github"
          url="https://github.com/trivett"
          icon={GithubIcon}
        />
        <ContactLineItem
          name="LinkedIn"
          url="https://www.linkedin.com/in/vtrivett/"
          icon={LinkedInIcon}
        />
      </ul>
    </footer>
  );
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold">Contact</h1>
      <p className="mb-4">
        Feel free to drop me a line on the following platforms
      </p>

      <ContactList />
    </section>
  );
}
