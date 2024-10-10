import { Binoculars, ChartLineUp } from '@phosphor-icons/react/dist/ssr'

export function SidebarOptions() {
  return (
    <nav className="flex flex-col items-start gap-8 px-12">
      <div className="flex gap-4">
        <div
          className={`bg-gradient-to-b from-green-100 to-purple-100 w-1 h-auto rounded-lg`}
        />
        <div className="flex items-center gap-4 text-white font-bold">
          <ChartLineUp size={26} />
          <p className="text-lg">Início</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div
          className={`bg-gradient-to-b from-green-100 to-purple-100 w-1 h-auto rounded-lg`}
        />
        <div className="flex items-center gap-4 text-white font-bold">
          <Binoculars size={26} />
          <p className="text-lg">Explorar</p>
        </div>
      </div>
    </nav>
  )
}
