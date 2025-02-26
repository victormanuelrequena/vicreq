import BlogHeader from "@/components/BlogHeader";
import Link from "next/link";

export default function BlogPage() {
  return (
    <article className="wrapper mx-auto max-w-3xl p-6">
      <BlogHeader title="SWR y useEffect" />
      <div className="page-body mt-10">
        <h3 className="text-xl font-bold mt-4">useEffect</h3>
        <p>
          El hook <code>useEffect</code> se usa para ejecutar código cuando se
          renderiza el componente o cuando cambian las dependencias del efecto.
        </p>
        <h4 className="font-semibold mt-4">Recibe dos parámetros:</h4>
        <ol className="list-decimal ml-6 mt-2">
          <li>
            Función → Se ejecutará al cambiar las dependencias o al renderizar
            el componente.
          </li>
          <li>
            Array → Un array de dependencias. Si cambia el valor de alguna,
            ejecutará la función.
          </li>
        </ol>
        <h4 className="font-semibold mt-4">Usa useEffect cuando:</h4>
        <ul className="list-disc ml-6 mt-2">
          <li>
            Necesitas ejecutar efectos secundarios que no son solo fetch de
            datos.
          </li>
          <li>
            Conectar o desconectar eventos (addEventListener,
            removeEventListener).
          </li>
          <li>Manipular el DOM directamente.</li>
          <li>Suscribirse a WebSockets.</li>
          <li>
            Interactuar con APIs del navegador (localStorage, sessionStorage,
            document, etc.).
          </li>
        </ul>
        <h4 className="font-semibold mt-4">Ejemplo con useEffect</h4>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          <code>
            {`import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api_test.com")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
}`}
          </code>
        </pre>
        <h3 className="text-xl font-bold mt-6">SWR</h3>
        <p>
          SWR es una estrategia para primero devolver los datos de la caché (
          <strong>stale</strong>), luego enviar la solicitud de recuperación (
          <strong>revalidate</strong>) y finalmente entregar los datos
          actualizados.
        </p>
        <h4 className="font-semibold mt-4">Usa SWR cuando:</h4>
        <ul className="list-disc ml-6 mt-2">
          <li>Necesitas revalidación automática.</li>
          <li>
            Datos que pueden cambiar y deben actualizarse sin refrescar la
            página.
          </li>
          <li>Varias partes de la UI usan los mismos datos.</li>
          <li>Quieres un fetch más eficiente con caché.</li>
        </ul>
        <h4 className="font-semibold mt-4">Ejemplo con SWR</h4>
        <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
          <code>
            {`import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error } = useSWR("https://api_test.com", fetcher, {
    refreshInterval: 5000,
  });

  if (!data) return <p>Loading...</p>;
  if (error) return <p>Error al cargar los datos</p>;

  return <div>{JSON.stringify(data)}</div>;
}`}
          </code>
        </pre>
        <h3 className="text-xl font-bold mt-6">
          Diferencias clave entre useEffect y SWR
        </h3>
        <table className="table-auto w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Característica</th>
              <th className="border border-gray-300 p-2">useEffect</th>
              <th className="border border-gray-300 p-2">SWR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">Caché automático</td>
              <td className="border border-gray-300 p-2">❌ No</td>
              <td className="border border-gray-300 p-2">✅ Sí</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Revalidación automática
              </td>
              <td className="border border-gray-300 p-2">❌ No</td>
              <td className="border border-gray-300 p-2">✅ Sí</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">
                Deduplicación de requests
              </td>
              <td className="border border-gray-300 p-2">❌ No</td>
              <td className="border border-gray-300 p-2">✅ Sí</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-xl font-bold mt-6">¿Cuál deberías usar?</h3>
        <p>
          Si necesitas obtener datos una sola vez sin actualización automática,
          usa <code>useEffect</code>. Si necesitas datos actualizados
          constantemente con caché y revalidación, usa <code>SWR</code>.
        </p>
        <p className="mt-6">
          Para más información, puedes visitar{" "}
          <Link
            href="https://swr.vercel.app/"
            className="text-blue-500 underline"
          >
            SWR Docs
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
