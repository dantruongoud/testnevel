import Image from 'next/image'
import React from 'react'
import ex1 from "../../../public/assets/exclesive1.svg"
import ex2 from "../../../public/assets/exclesive2.svg"
import ex3 from "../../../public/assets/exclesive3.svg"
import ex4 from "../../../public/assets/exclesive4.svg"
import ex5 from "../../../public/assets/exclesive5.svg"
import ex6 from "../../../public/assets/exclesive6.svg"
import ex7 from "../../../public/assets/exclesive7.svg"

const Tag = () => {
  const tags = [
    {
      name: "Diamond mine",
      logo: ex1
    },
    {
      name: "VIP",
      logo: ex2
    },
    {
      name: "Promotion",
      logo: ex7
    },
    {
      name: "Hot Match",
      logo: ex6
    },
    {
      name: "P2P Transaction",
      logo: ex3
    },
    {
      name: "Games",
      logo: ex4,
      isDark: true,
    },
    {
      name: "Providers",
      logo: ex5,
      isDark: true,
    }
  ]

  return (
    <div className='flex flex-wrap justify-center items-center gap-4 py-4'>
      {tags.map((tag, index) => (
        <div key={index} className={`flex-1 ${tag.isDark ? "bg-gray-300/50" : "bg-transparent"} ${!tag.isDark && "hidden"} flex rounded-md p-2 flex-row justify-center items-center flex-nowrap gap-2 border border-gray-300/20`}>
          <Image src={tag.logo} alt={tag.name} className='w-4 h-4' width={0} height={0} />
          <p className='w-fit'>{tag.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Tag