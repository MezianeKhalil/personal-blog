import { getAllPostIds ,getPostData } from '../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Header from '../components/header'
import Footer from '../components/footer'
export default function Post({ postData }) {
  console.log(postData.keywords)
    return(
      <>
        <Head>
          <title>{postData.title}</title>
          <meta name="author" content="khalil meziane" />
          <meta name="theme-color" content="#1f1f1F" />
          <meta name="keywords" content={postData.keywords} />
          <meta name="title" content={postData.title}/>
          <meta name="description" content="Hi, I'm khalil meziane i am web developer, I am writing various articles on programming
          "/>
          <meta property="og:type" content="blog"/>
          <meta property="og:url" content="_________________"/>
          <meta property="og:title" content={postData.title}/>
          <meta property="og:description" content={postData.description}/>
          <meta property="og:image" content={postData.thumbnail}/>
          <meta property="twitter:url" content="________________"/>
          <meta property="twitter:title" content={postData.title}/>
          <meta property="twitter:description" content={postData.description}/>
          <meta property="twitter:image" content={postData.thumbnail}/>
        </Head>
        <Header/>
        <main className="font-Almarai relative dark:bg-blackTheme" style={{direction:"rtl"}}>
          <div className="container mx-auto px-8 md:px-24 lg:px-36 xl:px-56">
            <article>
              <header className="pb-6">
                <h2 className="text-3xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white pb-5 font-bold leading-12">{postData.title}</h2>
                <div className="flex justify-between ">
                    <Date dateString={postData.date} />
                    <div className="flex">
                        <span className="capitalize text-gray-900 dark:text-white font-bold pl-2 -pt-1">شارك</span>
                        <span className="flex leading-10">
                            <a href className="pl-1 cursor-pointer" aria-label="share article on facebook" onClick={()=>{
                              window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,'','width=900, height=500, toolbar=no, status=no')
                              return(false)
                            }}>
                                <svg className="fill-current dark:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127 C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"></path></svg>
                            </a>
                            <a href className="pl-1 cursor-pointer" aria-label="share article on facebook" onClick={()=>{
                              window.open(`https://twitter.com/intent/tweet?text=Tweet%22this&url=${window.location.href}`,'','width=900, height=500, toolbar=no, status=no')
                              return(false)
                            }}>
                                <svg className="fill-current dark:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path></svg>
                            </a>
                        </span>
                    </div>
                </div>
              </header>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
          </div>
          <div className="container mx-auto px-8 md:px-24 lg:px-36 xl:px-56 pt-4 pb-2">
            <Link href="/">
              <a id="back" className="text-lg font-bold underline text-gray-900 dark:text-white hover:text-customBlue dark:hover:text-customBlue">العودة</a>
            </Link>
          </div>
        </main>
        <Footer/>
      </>
    )
}
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}