import Head from 'next/head'
import Link from 'next/link'
import {getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Header from '../components/header'
import Footer from '../components/footer'
export default function Home({allPostsData}) {
  // console.log(allPostsData)
  return (
    <div className="dark:bg-blackTheme">
      <Head>
        <title>Khalil M.</title>
        <meta name="author" content="khalil meziane" />
        <meta name="theme-color" content="#1f1f1F" />
        <meta name="keywords" content="blog, web development, front end" />
        <meta name="title" content="khalil M. Blog"/>
        <meta name="description" content="Hi, I'm khalil meziane i am web developer, I am writing various articles on programming
        "/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://khalil-meziane.vercel.app"/>
        <meta property="og:title" content="khalil M."/>
        <meta property="og:description" content="Hi, I'm khalil meziane i am web developer, I am writing various articles on programming"/>
        <meta property="og:image" content="https://khalil-meziane.vercel.app/thumbnails/ProgrammingIllustration.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://khalil-meziane.vercel.app/"/>
        <meta property="twitter:title" content="khalil M."/>
        <meta property="twitter:description" content="Hi, I'm khalil meziane i am web developer, I am writing various articles on programming "/>
        <meta property="twitter:image" content="https://khalil-meziane.vercel.app/thumbnails/ProgrammingIllustration.png"/>
      </Head>
      <Header home={true} />
      <main className="h-full" style={{direction:"rtl"}}>
        <section className="pb-12 font-Almarai">
          <div className="container mx-auto px-8 md:px-24 lg:px-44 xl:px-64">
            {
              allPostsData.map(({id, date, title,description})=>{
                return(
                  <article className="px-3 pb-3" key={id}>
                    <header>
                      <small>
                        <Date dateString={date} />
                      </small>
                      <br/>
                      <Link href="/[id]" as={`/${id}`}>
                        <a className=" inline-block text-2xl lg:text-3xl  pb-2 font-semibold hover:text-customBlue dark:hover:text-customBlue transition duration-300 ease text-gray-900 dark:text-white">{title}</a>
                      </Link>
                      <p className="text-gray-700 dark:text-gray-200 pb-4 lg:text-lg">{description}</p>
                      <Link href="/[id]" as={`/${id}`}>
                      <a className="font-bold text-gray-900 dark:text-white underline  hover:text-customBlue dark:hover:text-customBlue transition duration-300 ease">إقرأ المزيد</a>
                      </Link>
                    </header>
                  </article>
                )
              })
            }
          </div>
        </section>
      </main>
      <Footer home={true}/>
    </div>
  )
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
