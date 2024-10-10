import Image from 'next/image'

export default function Login() {
  return (
    <main className="min-h-screen">
      <section className="flex h-screen items-center justify-center">
        <div className="bg-hero mx-4 object-cover bg-no-repeat w-full min-h-[912px] max-w-[598px]" />
        <div className="flex flex-col gap-10 pl-56">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-semibold text-2xl">Boas vindas!</h1>
            <p className="text-white font-light">
              Faça seu login ou acesse como visitante.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-600 cursor-pointer min-w-[372px] px-6 py-5 flex items-center gap-4 rounded-md">
              <Image
                className="w-8 h-8"
                src="/images/logo-google.png"
                alt=""
                width={50}
                height={50}
              />
              <p className="text-lg text-nowrap font-semibold text-white">
                Entrar com Google
              </p>
            </div>
            <div className="bg-gray-600 cursor-pointer min-w-[372px] px-6 py-5 flex items-center gap-4 rounded-md">
              <Image
                className="w-8 h-8"
                src="/images/logo-github.png"
                alt=""
                width={50}
                height={50}
              />
              <p className="text-lg text-nowrap font-semibold text-white">
                Entrar com Github
              </p>
            </div>
            <div className="bg-gray-600 cursor-pointer min-w-[372px] px-6 py-5 flex items-center gap-4 rounded-md">
              <Image
                className="w-8 h-8"
                src="/images/logo-rocket.png"
                alt=""
                width={50}
                height={50}
              />
              <p className="text-lg text-nowrap font-semibold text-white">
                Entrar como visitante
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
