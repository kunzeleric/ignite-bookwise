import Image from 'next/image'
import { SidebarOptions } from './sidebar_options'
import { SignIn } from '@phosphor-icons/react/dist/ssr'

export function Sidebar() {
  return (
    <aside className="w-[232px] relative h-[calc(100vh-2.5rem)] overflow-hidden rounded-lg bg-gradient-to-b from-purple-100/10 via-gray-600/10 to-green-100/10">
      <div className="w-full flex items-center justify-center pt-10 pb-20">
        <Image
          src="/images/logo-bookwise.png"
          width={100}
          height={100}
          alt="Bookwise Logo Image"
          className="w-32 h-8"
        />
      </div>
      <SidebarOptions />
      <div className="text-white absolute bottom-5 left-0 right-0 flex justify-center items-center gap-2">
        <p className="text-lg">Fazer login</p>
        <SignIn className="text-green-100" size={28} />
      </div>
    </aside>
  )
}
