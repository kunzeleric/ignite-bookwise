import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'

export default function Home() {
  return (
    <main>
      <div className="text-white flex-1 px-24 pt-20">
        <div className="flex items-center gap-4">
          <ChartLineUp size={32} className="text-green-100" />
          <h1 className="text-2xl text-white font-bold">Início</h1>
        </div>
      </div>
    </main>
  )
}
