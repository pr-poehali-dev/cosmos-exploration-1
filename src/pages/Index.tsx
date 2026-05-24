import { useState } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Худи ГРАМОТНО',
    desc: 'Оверсайз силуэт, плотный хлопок 380г/м², дроп-плечо',
    tag: 'Хит',
    dark: true,
    img: 'https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/d77d8faa-55a6-4818-a2c0-47ea804ffdd4.jpg',
  },
  {
    id: 2,
    name: 'Футболка ГРАМОТНО',
    desc: 'Удлинённый крой, 100% хлопок, свободная посадка',
    tag: 'Базовый',
    dark: false,
    img: 'https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/68eb656f-9805-4454-8563-cd9a7b657bdb.jpg',
  },
  {
    id: 3,
    name: 'Карго ГРАМОТНО',
    desc: 'Широкие брюки с карманами, свободный силуэт',
    tag: 'Новинка',
    dark: true,
    img: 'https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/7a4fc0a9-09b3-4e50-98a8-52d82dfda01a.jpg',
  },
  {
    id: 4,
    name: 'Свитшот ГРАМОТНО',
    desc: 'Оверсайз, мягкий начёс внутри, нейтральный оттенок',
    tag: 'Базовый',
    dark: false,
    img: 'https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/f3c10621-57dd-440e-834b-e2156a15663c.jpg',
  },
  {
    id: 5,
    name: 'Лонгслив ГРАМОТНО',
    desc: 'Удлинённые рукава, плотный трикотаж, оверсайз крой',
    tag: 'Базовый',
    dark: true,
    img: 'https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/43378d5e-4e65-4b0c-8c70-5521280474a5.jpg',
  },
  {
    id: 6,
    name: 'Зип-худи ГРАМОТНО',
    desc: 'На молнии, оверсайз, плотный хлопок, тёмно-серый',
    tag: 'Новинка',
    dark: true,
    img: 'https://cdn.poehali.dev/projects/ee33edc8-3dfc-4557-af9c-ade93c43108f/files/607b2c6b-1df3-4997-8033-72cda5fa6430.jpg',
  },
];

const TAG_COLORS: Record<string, string> = {
  'Хит': 'bg-orange-600 text-white',
  'Новинка': 'bg-black text-white',
  'Базовый': 'bg-white text-black border border-black',
};

export default function Index() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://functions.poehali.dev/90e8288a-1d0a-4a4a-ade8-178acb37eaa6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('ok');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ГРАМОТНО
          </a>
          <div className="flex space-x-8">
            <a href="#work" className="text-sm uppercase tracking-widest hover:text-orange-600 transition-colors">
              Коллекция
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-orange-600 transition-colors">
              О бренде
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-orange-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6 whitespace-nowrap">
              ГРАМОТНО
            </h1>
            <p className="text-xl max-w-xl">
              Оверсайз — это не размер, это позиция. Одежда для тех, кто носит вещи осознанно, свободно и грамотно.
            </p>
            <a
              href="#work"
              className="inline-block mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors"
            >
              Смотреть коллекцию
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-orange-600 overflow-hidden">
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

      {/* Products Section */}
      <section id="work" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">КОЛЛЕКЦИЯ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square bg-neutral-100 mb-4 overflow-hidden relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                    <svg viewBox="0 0 200 200" width="70%" height="70%">
                      <defs>
                        <path id={`circle-${product.id}`} d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                      </defs>
                      <text fontFamily="inherit" fontWeight="900" fontSize="16" letterSpacing="6" fill={product.dark ? 'rgba(255,255,255,0.92)' : 'rgba(0,0,0,0.82)'}>
                        <textPath href={`#circle-${product.id}`}>GRAMOTNO • ГРАМОТНО • GRAMOTNO • ГРАМОТНО •</textPath>
                      </text>
                    </svg>
                  </div>
                  <span className={`absolute top-3 left-3 text-xs uppercase tracking-widest px-2 py-1 font-bold ${TAG_COLORS[product.tag]}`}>
                    {product.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-neutral-400 text-sm">{product.desc}</p>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4 px-6 py-2 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Узнать наличие
                </button>
              </div>
            ))}
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
      <section id="contact" className="py-20 px-4 md:px-8 bg-orange-600 text-white">
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
              {status === 'ok' ? (
                <div className="flex flex-col justify-center h-full">
                  <p className="text-4xl font-bold tracking-tighter mb-4">ОТПРАВЛЕНО</p>
                  <p className="text-lg opacity-80">Ответим в ближайшее время!</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 w-fit px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    Написать ещё
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                      Почта
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                      placeholder="Ваш email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                      placeholder="Ваш вопрос или заказ"
                      required
                    />
                  </div>
                  {status === 'error' && (
                    <p className="text-sm text-black bg-white/20 px-4 py-2">
                      Что-то пошло не так. Попробуйте ещё раз.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Отправка...' : 'Отправить'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2025 ГРАМОТНО. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-orange-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-orange-600 transition-colors">
              VK
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-orange-600 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}