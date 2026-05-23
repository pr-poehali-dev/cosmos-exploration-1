export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ГРАМОТНО
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Коллекция
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О бренде
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
              ГРАМ
              <br />
              ОТНО
            </h1>
            <p className="text-xl max-w-xl">
              Оверсайз — это не размер, это позиция. Одежда для тех, кто носит вещи осознанно, свободно и грамотно.
            </p>
            <a
              href="#work"
              className="inline-block mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Смотреть коллекцию
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/73e237d8-b17f-4a06-820e-febc6ecd39ac.jpg"
                alt="ГРАМОТНО оверсайз"
                className="w-full h-full object-cover mix-blend-multiply"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">КОЛЛЕКЦИЯ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/f4c55ba0-c57f-49dc-b83e-f93cc13d15d6.jpg"
                  alt="Оверсайз худи"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Худи ГРАМОТНО</h3>
              <p className="text-neutral-400">Оверсайз силуэт, плотный хлопок, без лишних деталей</p>
            </div>

            {/* Item 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/1d79b60d-c808-4802-8942-ef0932bf85b5.jpg"
                  alt="Оверсайз футболка"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Футболка ГРАМОТНО</h3>
              <p className="text-neutral-400">Удлинённый крой, дышащий материал, свободная посадка</p>
            </div>

            {/* Item 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-900 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-white text-6xl font-bold tracking-tighter">СКОРО</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Новинки — осень 2025</h3>
              <p className="text-neutral-400">Следующая капсула уже в разработке — подпишитесь, чтобы узнать первыми</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О БРЕНДЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/f4c55ba0-c57f-49dc-b83e-f93cc13d15d6.jpg"
                  alt="О бренде ГРАМОТНО"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                ГРАМОТНО — это бренд оверсайз одежды для тех, кто ценит свободу в движении и уверенность в образе. Никакой лишней мишуры — только правильный крой и качественный материал.
              </p>
              <p className="mb-6">
                Мы создаём вещи, в которых комфортно и на улице, и дома. Широкие плечи, удлинённые силуэты, нейтральные цвета — классика, которая не выходит из моды.
              </p>
              <p className="mb-6">
                Каждая вещь шьётся осознанно: без переплат за логотипы, без компромиссов в качестве. Просто грамотная одежда.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Оверсайз силуэт</li>
                    <li>Натуральные ткани</li>
                    <li>Минималистичный дизайн</li>
                    <li>Честная цена</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Ассортимент</h3>
                  <ul className="space-y-2">
                    <li>Худи и свитшоты</li>
                    <li>Футболки и лонгсливы</li>
                    <li>Широкие брюки</li>
                    <li>Верхняя одежда</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Хотите узнать о новинках или задать вопрос? Напишите нам — ответим быстро.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:hello@gramotno.ru" className="hover:underline">
                    hello@gramotno.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+74951234567" className="hover:underline">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Адрес</span>
                  <span>Москва, Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш вопрос или заказ"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2025 ГРАМОТНО. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              VK
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
