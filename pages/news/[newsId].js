import { useRouter } from 'next/router'
import Link from "next/link";

//out domain/news/details


function Details() {
  const router = useRouter()
  const newsId = router.query.newsId

  return (
    <div>
      <h1>This is Detail Page </h1>
      <Link href="/news" >Back to news page or previous page </Link>
      <Link href="/" >Back to home </Link>
    </div>
  )
}

export default Details