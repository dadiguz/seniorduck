import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Image from 'next/image'
import PostItem from '@/components/post-item'


export const metadata = {
    title: 'Seniorduck',
    description: 'Silly jokes about software development',
}

export default function Blog() {

    // Sort posts by date
    allPosts.sort((a, b) => {
        return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
    })

    const featuredPost = allPosts[0]
    const posts = allPosts.slice(1)

    return (
        <>
            {/* Featured post */}
            <section className="relative">
                {/* Background image */}
                {featuredPost.image &&
                    <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
                        <Image className="absolute inset-0 w-full h-full object-cover opacity-25" src={featuredPost.image} width={1440} height={577} priority alt={featuredPost.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
                    </div>
                }
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-16">
                        {/* Featured article */}
                        <div className="max-w-3xl" data-aos="fade-down">
                            <article>
                                <header>
                                    {/* Title and excerpt */}
                                    <div className="text-center md:text-left">
                                        <Link href="">
                                            <h1 className="h1 font-red-hat-display mb-4">{featuredPost.title}</h1>
                                        </Link>
                                        <p className="text-xl text-gray-600 dark:text-gray-400">{featuredPost.summary}</p>
                                    </div>
                                    {/* Article meta */}
                                    <div className="md:flex md:items-center md:justify-between mt-5">
                                        {/* Author meta */}
                                        <div className="flex items-center justify-center">


                                        </div>
                                    </div>
                                </header>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
