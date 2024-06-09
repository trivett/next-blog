function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
} // replace with fontawesome

const ContactLineItem = ({ name, url }) => {
  return (
    <li>
      <a
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href={url}
      >
        <ArrowIcon />
        <p className="ml-2 h-7">{name}</p>
      </a>
    </li>
  );
};

const ContactList = () => {
  return (
    <footer className="mb-16 print:hidden">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2">
        <ContactLineItem name="Email" url="mailto:trivett@gmail.com" />
        <ContactLineItem name="Github" url="https://github.com/trivett" />
        <ContactLineItem
          name="LinkedIn"
          url="https://www.linkedin.com/in/vtrivett/"
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
