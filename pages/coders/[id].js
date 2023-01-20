export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await res.json()

    const paths = data.map((coder) => {
        return { params: { id: coder.id.toString() } }
    })

    return {
        paths,
        fallback: false,
    }
}

export default function Detail({ coder }) {
    console.log({ coder })
    return (
        <div>
            <h1>{coder.name}</h1>
            <div>
                <p>Email: {coder.email}</p>
                <p>Website: {coder.website}</p>
                <p>Address: {coder.address?.street}</p>
                <p>Company: {coder.company?.name}</p>
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: { coder: data },
    }
}
