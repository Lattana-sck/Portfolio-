import Head from "next/head";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import avatar from "../public/avatar.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>NaxDev - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Nax.ico" />
      </Head>
      <main className=" bg-slate-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-2xl">Developed by NaxDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/CV.pdf"
                  download
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-500 font-medium dark:text-teal-400 md:text-6xl">
              SOUCKSENGPHET Lattana
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              FullStack Développeur
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelance fournissant des services pour les besoins de
              programmation et de conception de contenu. Rejoignez-moi
              ci-dessous et mettons-nous au travail !
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/lattana-sck">
                <AiOutlineGithub />
              </a>
              <a href="https://www.linkedin.com/in/lattana-soucksengphet/">
                <AiFillLinkedin />
              </a>
              <a href="mailto:lattana-s@hotmail.fr">
                <AiFillMail />
              </a>
            </div>
            <div className="dark:border-teal-500 border-white border-4 mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={avatar}
                layout="fill"
                objectFit="cover"
                alt="avatar"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-teal-500 dark:text-teal-400 ">
              Mes services
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              En tant que développeur web, j&apos;ai travaillé dans plusieurs
              sociétés dans lesquelles j&apos;ai pu apprendre d&apos;avantage
              sur le métier. Tout au long de ces expériences, j&apos;ai eu la
              chance d&apos;apprendre plusieurs langages de programmation tels
              que
              <strong>
                {" "}
                JavaScript, React.JS, Next.JS, PHP, Laravel et Symfony
              </strong>
              . Je suis également très à l&apos;aise avec les outils de
              productivité tels que{" "}
              <strong>Notion, Slack, Vercel et Github </strong>pour assurer un
              travail efficace et collaboratif avec mes clients. En dehors de
              mon travail en freelance, je suis passionné par le{" "}
              <strong>Web 3.0</strong> ainsi que la <strong>blockchain</strong>,
              et je suis en plein apprentissage les langages suivants :{" "}
              <strong>Solidity</strong> et <strong>Rust</strong>.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Si vous cherchez un développeur web polyvalent avec une grande
              expérience et une passion pour la technologie émergente,
              n&apos;hésitez pas à me contacter. Je serais ravi de travailler
              avec vous sur votre prochain projet web.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center hover:shadow-2xl p-10 rounded-xl my-10 bg-slate-100 dark:bg-slate-50 dark:shadow-slate-50 flex-1">
              <Image src={design} width={100} height={100} alt="design logo" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Belles conceptions
              </h3>
              <p className="py-2">
                Créer des designs élégants adaptés à vos besoins en suivant la
                théorie de base du design.
              </p>
              <h4 className="py-4 text-teal-600">Outils de conception</h4>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center hover:shadow-2xl p-10 rounded-xl my-10 bg-slate-100 dark:bg-slate-50 dark:shadow-slate-50 flex-1">
              <Image src={code} width={100} height={100} alt="code logo" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Coder le projet de vos rêves
              </h3>
              <p className="py-2">
                Vous avez une idée pour votre prochain grand site web ? Faisons
                en sorte qu&apos;elle devienne réalité.
              </p>
              <h4 className="py-4 text-teal-600">Langages & frameworks</h4>
              <p className="text-gray-800 py-1">React.JS / Next.JS</p>
              <p className="text-gray-800 py-1">Node.JS</p>
              <p className="text-gray-800 py-1">MongoDB / Prisma</p>
            </div>
            <div className="text-center dark:shadow-slate-50 hover:shadow-2xl p-10 rounded-xl my-10 bg-slate-100 dark:bg-slate-50 flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="thumb logo"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Conseil</h3>
              <p className="py-2">
                Êtes-vous intéressé par un retour d&apos;information sur votre
                projet actuel ? Je peux vous donner des conseils et des astuces
                pour l&apos;améliorer.
              </p>
              <h4 className="py-4 text-teal-600">Mes priorités</h4>
              <p className="text-gray-800 py-1">Clean Code</p>
              <p className="text-gray-800 py-1">Architecture</p>
              <p className="text-gray-800 py-1">Scalabilité</p>
              <p className="text-gray-800 py-1">Optimisation</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-teal-500 dark:text-teal-400 ">
              Mon portofolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Depuis le début de mon parcours en tant que concepteur et
              développeur, j&apos;ai travaillé à distance pour des agences,
              consulté des startups et collaboré avec des personnes talentueuses
              pour créer des produits numériques à usage professionnel et grand
              public.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Je propose un large éventail de services, notamment la conception
              de marques, la programmation et l&apos;enseignement. Retrouver
              ci-dessous quelques projets sur lesquels j&apos;ai eu la chance de
              travailler.
            </p>
          </div>
          <div className=" py-10 lg:flex-row lg:flex-wrap">
            <div className="grid grid-cols-2 gap-6">
              <Image
                className="rounded-lg object-scale-down"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={web1}
                alt="carlab"
              />
              <div className="max-sm:h-64 overflow-auto bg-slate-50 border-1 border-slate-300 dark:border-slate-700 dark:shadow-slate-400 shadow-2xl dark:shadow-lg rounded-2xl p-2 sm:p-10  dark:text-slate-600">
                <h2 className="text-2xl text-center font-bold text-teal-500 dark:text-teal-400">
                  Carlab
                </h2>
                <br />
                <span>
                  Développement d&apos;un SaaS permettant aux professionnels
                  d&apos;automobile de se positionner sur des leads selon leurs
                  filtres, d&apos;accéder aux détails des leads et de les
                  contacter directement depuis la plateforme.
                </span>
                <br />
                <br />
                <span className="italic">
                  PHP, Laravel, Javascrit, MySQL, AWS
                </span>
              </div>
              <div className="max-sm:h-64 overflow-auto bg-slate-50 border-1 border-slate-300 dark:border-slate-700 dark:shadow-slate-400 shadow-2xl dark:shadow-lg rounded-2xl p-2 sm:p-10  dark:text-slate-600">
                <h2 className="text-2xl text-center font-bold text-teal-500 dark:text-teal-400">
                  OpenSea Clone
                </h2>
                <br />
                <span>
                  Duplique de la célèbre marketplace NFTs OpenSea.
                  L&apos;utilisateur peut créer un compte, acheter et vendre des
                  NFTs, créer des collections et les mettre en vente.
                </span>
                <br />
                <br />
                <span className="italic">
                  Next.JS, Replit, Thirdweb, Infura & TailwindCSS
                </span>
              </div>
              <Image
                className="object-scale-down"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={web2}
                alt="opensea"
              />

              <Image
                className="rounded-lg object-scale-down"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={web3}
                alt="munchies"
              />
               <div className="max-sm:h-64 overflow-auto bg-slate-50 border-1 border-slate-300 dark:border-slate-700 dark:shadow-slate-400 shadow-2xl dark:shadow-lg rounded-2xl p-2 sm:p-10  dark:text-slate-600">
                <h2 className="text-2xl text-center font-bold text-teal-500 dark:text-teal-400">
                  Munchies
                </h2>
                <br />
                <span>
                  Site e-commerce de CBD, permettant aux utilisateurs de créer
                  un compte, d&apos;accéder au catalogue des produits et de
                  commander des produits CBD en ligne en en payant via Paypal.
                </span>
                <br />
                <br />
                <span className="italic">
                  Symfony, React.JS, MySQL, PaypalDeveloper
                </span>
              </div>
              <div className="max-sm:h-64 overflow-auto bg-slate-50 border-1 border-slate-300 dark:border-slate-700 dark:shadow-slate-400 shadow-2xl dark:shadow-lg rounded-2xl p-2 sm:p-10  dark:text-slate-600">
                <h2 className="text-2xl text-center font-bold text-teal-500 dark:text-teal-400">
                  Spotify Clone
                </h2>
                <br />
                <span className="overflow">
                  Duplique de la célèbre plateforme de streaming musical
                  Spotify. Après avoir lié son compte Spotify,
                  l&apos;utilisateur peut créer un compte, écouter de la
                  musique, créer des playlists et les partager avec ses amis.
                </span>
                <br />
                <br />
                <span className="italic">
                  Next.JS, Spotify API, TailwindCSS, Recoil, NextAuth
                </span>
              </div>
              <Image
                className="rounded-lg object-scale-down"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={web4}
                alt="spotify"
              />
              <Image
                className="rounded-lg object-scale-down"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={web6}
                alt="sezame"
              />
              <div className="max-sm:h-64 overflow-auto bg-slate-50 border-1 border-slate-300 dark:border-slate-700 dark:shadow-slate-400 shadow-2xl dark:shadow-lg rounded-2xl p-2 sm:p-10  dark:text-slate-600">
                <h2 className="text-2xl text-center font-bold text-teal-500 dark:text-teal-400">
                  Sezame
                </h2>
                <br />
                <span>
                  Développement d&apos;un SaaS permettant aux professionnels
                  d&apos;accéder a leur portail partenaire et de gérer leurs
                  clients et de voir leur avancés de leurs processus. De plus,
                  les clients peuvent accéder à leur espace personnel et suivre
                  l&apos;avancé de leur dossier, signer des documents et
                  échanger avec leur conseiller via un chatbot.
                </span>
                <br />
                <br />
                <span className="italic">
                  Next.JS, TailwindCSS, SendGrid, MongoDB, Hubspot, Vercel
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center	 justify-end">
            <AiOutlineArrowUp
              className="items-center	self-end cursor-pointer h-10 w-10 p-2 bg-teal-400 hover:bg-teal-500 text-white font-bold rounded"
              onClick={handleClick}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
