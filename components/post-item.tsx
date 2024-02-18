import Link from 'next/link'
import Image from 'next/image'
import PostDate from '@/components/post-date'

export default function PostItem({ ...props }) {
  return (
    <article className="flex flex-col h-full">
      <header>
        {props.image &&
          <Link className="block mb-4" href={`https://www.instagram.com/seniorduck`}>
            <figure className="relative h-0 pb-9/16">
              <Image className="absolute inset-0 w-full h-full object-cover" src={props.image} width={352} height={198} alt={props.title} />
            </figure>
          </Link>
        }
        <Link className="hover:underline" href={`https://www.instagram.com/seniorduck`}>
          <h3 className="h4 font-red-hat-display mb-2">{props.title}</h3>
        </Link>
      </header>

    </article>
  )
}
