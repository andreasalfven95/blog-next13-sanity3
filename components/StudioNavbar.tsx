import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className='flex items-center justify-between gap-4 p-4'>
        <Link
          href='/'
          className='flex items-center p-2 border border-black rounded-full'
        >
          <ArrowUturnLeftIcon className='w-6 h-6 mr-2' />
          Gå till hemsidan
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
