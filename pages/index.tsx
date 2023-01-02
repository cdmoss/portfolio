import Head from "next/head";
import Link from "next/link";
import Selector from "../components/Selector";

export default function Home() {
    return (
        <>
            <header className="flex content-center justify-center">
                <Link className="text-3xl font-thin pt-10" href="/">
                    CHASE MOSSING
                </Link>
            </header>
            <main className="flex flex-col w-5/6 m-auto">
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
                        "Trad Data Monitor": "",
                        "Click & Push": "",
                        YARO: "",
                    }}
                />
            </main>
        </>
    );
}
