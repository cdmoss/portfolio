import Head from "next/head";
import Link from "next/link";
import Carousel from "../components/Carousel";
import Selector from "../components/Selector";
import { CNP } from "../data/workdata";

export default function Home() {
    return (
        <>
            <header className="flex content-center justify-center">
                <Link className="text-3xl font-thin pt-10" href="/">
                    CHASE MOSSING
                </Link>
            </header>
            <main className="flex flex-col w-2/3 m-auto">
                <h3 className="mb-3 ml-10">My work</h3>
                <hr
                    style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2,
                    }}
                />
                <Selector
                    headings={["Trad Data Monitor", "Click & Push", "YARO"]}
                    views={{
                        "Trad Data Monitor": <p></p>,
                        "Click & Push": <Carousel blurb={CNP.blurb} photos={CNP.photos} />,
                        YARO: <p></p>,
                    }}
                />
            </main>
        </>
    );
}
