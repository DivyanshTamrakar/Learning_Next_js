import { useRouter } from 'next/router'


//out domain/news/details


function Details() {
const router = useRouter()
const newsId = router.query.newsId

  return (
    <h1>This is Detail Page </h1>
  )
}

export default Details