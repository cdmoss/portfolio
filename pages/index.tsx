import Head from "next/head";
import Link from "next/link";
import Carousel from "../components/Carousel";
import Selector from "../components/Selector";
import { CNP, Elixr, YARO, Foodbank } from "../data/workdata";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <>
            <header className="flex flex-col content-center align-center justify-evenly h-1/3">
                <Link className="text-3xl font-thin self-center" href="/">
                    CHASE MOSSING
                </Link>
                <Link className="text-3xl font-thin self-center" href="/">
                    <FontAwesomeIcon icon={faGithub} />
                </Link>
            </header>
            <main className="flex flex-col w-2/3 m-auto h-2/3">
                <h3 className="text-xl mb-3 ml-10">My work</h3>
                <div
                    style={{
                        backgroundColor: "black",
                        height: 2,
                        marginBottom: 5,
                    }}
                />
                <div
                    style={{
                        backgroundColor: "black",
                        height: 2,
                        marginBottom: 5,
                    }}
                />
                <Selector
                    headings={[
                        "Click & Push",
                        "YARO",
                        "Elixr",
                        "Volunteer Manager",
                    ]}
                    views={{
                        "Click & Push": <Carousel {...CNP} />,
                        YARO: <Carousel {...YARO} />,
                        Elixr: <Carousel {...Elixr} />,
                        "Volunteer Manager": <Carousel {...Foodbank} />,
                    }}
                />
            </main>
        </>
    );
}
