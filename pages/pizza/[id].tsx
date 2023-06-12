import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

type Car = {
  id: string;
  toppings: string[];
  image: string;
}

export default function Car({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <h1>Hello {id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const id = params?.id as string
  console.log({ id })

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data: any = await res.json()

  return {
    props: {
      data,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{
      params: { id: 'pizza' },
    }],
    fallback: false,
  }
}
