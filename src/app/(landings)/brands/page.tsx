import { Counter } from "@/app/components/counter/Counter";

export default async function BrandsPage() {

  const result = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1', {
    next: {
      revalidate: 20
    }
  });
  const data = await result.json();
  return (
    <>
      <h1>Marcas</h1>
      <Counter value={data[0]} />

    </>
  )
}