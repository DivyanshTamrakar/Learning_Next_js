import Link from "next/link";

// our domain/news
function News() {

    return (
        <div>
            <h1>This is News Page </h1>
            <ul>
                <Link href="/news/divyansh"><li>
                    NextJs is great framework , hottest in the industry
                    </li></Link>
                <li>Typescript is staic type checking library for javascript</li>
            </ul>
        </div>
    )
}

export default News;