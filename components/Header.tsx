import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex items-center justify-between gap-2 font-bold px-8 py-4'>
      <Link href='/' className='flex items-center gap-2'>
        <Image
          src='https://creativevaluemarketing.com/assets/images/favicon.svg'
          width={50}
          height={50}
          alt='logo'
        />
        <span className='text-lg'>alltochlitetill.se</span>
      </Link>
      <div>
        <Link
          href='https://creativevaluemarketing.com/'
          target='_blank'
          className='transition-colors duration-300 px-5 py-3 text-sm md:text-base bg-primary text-light border-2 border-primary hover:text-primary hover:bg-light flex items-center rounded-full text-center'
        >
          Besök Creative Value Marketing nu!
        </Link>
      </div>
    </header>
  )
}

export default Header
