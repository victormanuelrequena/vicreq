import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="wrapper">
      <h1 className="font-semibold">Victor Requena</h1>
      <p className="mt-8">
        Soy un Full-Stack/Product Engineer, Iterativo, enfocado en el usuario y
        pragmático. Apasionado por crear experiencias de alta calidad. Tengo un
        impulso constante por aprender y explorar nuevas ideas.
      </p>

      <div className="mt-12">
        <h3 className="font-semibold">Just Writing</h3>
        <ol className="mt-4 list-disc pl-4">
          <li className="">
            <Link
              className="underline cursor-pointer"
              href="/n/productivity/feynman-technique"
            >
              Técnica Feynman
            </Link>
          </li>
        </ol>
      </div>

      <div className="mt-12">
        <h3 className="font-semibold">Technical Writing</h3>
        <ol className="mt-4 list-disc pl-4 flex flex-col gap-4">
          <li className="">
            <Link
              className="underline cursor-pointer"
              href="/n/react/swr-useeffect"
            >
              SWR y useEffect
            </Link>
          </li>
          <li className="">
            <Link
              className="underline cursor-pointer"
              href="/n/productivity/feynman-technique"
            >
              Dart básico
            </Link>
          </li>
          <li className="">
            <Link
              className="underline cursor-pointer"
              href="/feynman-technique"
            >
              Python para novatos, como yo.
            </Link>
          </li>
        </ol>
      </div>

      <div className="mt-12">
        <h3 className="font-semibold">Code</h3>
        <ol className="mt-4 list-disc pl-4">
          <li className="">
            <Link
              className="underline cursor-pointer"
              href="https://dolarvenapp.vercel.app/"
            >
              Dolarven
            </Link>
          </li>
        </ol>
      </div>
    </main>
  );
}
