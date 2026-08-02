import ContactBtn from "@/components/ContactBtn";
import Icon from "@/components/icons/Icon";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaMedium } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";

const contactItems = [
  {
    icon: <FaGithub />,
    text: "Github",
    url: "https://github.com/jayanththalla",
  },
  {
    icon: <FaLinkedin />,
    text: "Linkedin",
    url: "https://linkedin.com/in/thallajayanth",
  },
  {
    icon: <FaMedium />,
    text: "Medium",
    url: "https://medium.com/@jayanththalla33",
  },
  {
    icon: <FaEnvelope />,
    text: "Email",
    url: "mailto:thallajayanth12@gmail.com",
  },
  {
    icon: <GrDocumentText />,
    text: "Resume",
    url: "/resume.pdf",
  },
];

export default function Contact() {
  return (
    <div className="relative w-full px-4 md:px-8">
      <div className="border-border pointer-events-none absolute bottom-0 left-1/2 z-0 w-screen -translate-x-1/2 border-b" />
      <div className="grid w-full grid-cols-5">
        {contactItems.map((contact, index) => {
          let borderClasses = "border-border";
          if (index !== contactItems.length - 1) borderClasses += " border-r";
          return (
            <ContactBtn
              key={index}
              icon={<Icon icon={contact.icon} />}
              text={contact.text}
              url={contact.url}
              className={borderClasses}
            />
          );
        })}
      </div>
    </div>
  );
}
