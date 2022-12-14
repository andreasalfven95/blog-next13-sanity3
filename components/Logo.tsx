import Image from 'next/image'

const Logo = (props: any) => {
  const { renderDefault, title } = props

  return (
    <div className='flex items-center space-x-2'>
      <Image
        className='p-1 rounded-full object-cover bg-white'
        height={50}
        width={50}
        src='https://creativevaluemarketing.com/assets/images/favicon.svg'
        alt='logo'
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo
