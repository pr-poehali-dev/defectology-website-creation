
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-800">Дефектология</h1>
            <div className="flex gap-6">
              <Link to="/" className="text-purple-900 hover:text-purple-700 font-medium">Главная</Link>
              <Link to="/education" className="text-purple-900 hover:text-purple-700 font-medium">Образование</Link>
              <Link to="/methods" className="text-purple-900 hover:text-purple-700 font-medium">Методики</Link>
              <Link to="/career" className="text-purple-900 hover:text-purple-700 font-medium">Карьера</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-purple-900 text-center">Карьера дефектолога</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Профессия дефектолога предоставляет широкие возможности для карьерного роста 
            и профессиональной самореализации.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-purple-900">Места работы</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="School" className="w-6 h-6 text-purple-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-1">Образовательные учреждения</h4>
                  <p className="text-sm text-gray-700">Специальные и инклюзивные школы, детские сады, интернаты</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Building" className="w-6 h-6 text-purple-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-1">Центры развития</h4>
                  <p className="text-sm text-gray-700">Реабилитационные центры, центры психолого-педагогической коррекции</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Stethoscope" className="w-6 h-6 text-purple-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-1">Медицинские учреждения</h4>
                  <p className="text-sm text-gray-700">Поликлиники, больницы, перинатальные центры</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="Home" className="w-6 h-6 text-purple-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-1">Частная практика</h4>
                  <p className="text-sm text-gray-700">Индивидуальные консультации, домашнее обучение, онлайн-консультирование</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="GraduationCap" className="w-6 h-6 text-purple-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-1">Научная деятельность</h4>
                  <p className="text-sm text-gray-700">НИИ, вузы, исследовательские центры</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-purple-900">Специализации</h3>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-md">
                <h4 className="font-semibold text-purple-800 mb-2">Логопед</h4>
                <p className="text-sm text-gray-700">Специалист, занимающийся диагностикой и коррекцией нарушений речи, голоса и глотания.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-md">
                <h4 className="font-semibold text-purple-800 mb-2">Сурдопедагог</h4>
                <p className="text-sm text-gray-700">Специалист по обучению и воспитанию лиц с нарушениями слуха.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-md">
                <h4 className="font-semibold text-purple-800 mb-2">Тифлопедагог</h4>
                <p className="text-sm text-gray-700">Специалист по обучению и воспитанию лиц с нарушениями зрения.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-md">
                <h4 className="font-semibold text-purple-800 mb-2">Олигофренопедагог</h4>
                <p className="text-sm text-gray-700">Специалист по работе с людьми с интеллектуальными нарушениями.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-md">
                <h4 className="font-semibold text-purple-800 mb-2">ABA-терапист</h4>
                <p className="text-sm text-gray-700">Специалист по прикладному анализу поведения, работающий с детьми с РАС.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-purple-900 text-center">Карьерные перспективы</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="TrendingUp" className="w-8 h-8 text-purple-800" />
              </div>
              <h4 className="font-semibold mb-3 text-purple-800 text-center">Профессиональный рост</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• От ассистента до главного специалиста</li>
                <li>• Расширение методических компетенций</li>
                <li>• Повышение квалификационной категории</li>
                <li>• Освоение новых методик и технологий</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="Users" className="w-8 h-8 text-purple-800" />
              </div>
              <h4 className="font-semibold mb-3 text-purple-800 text-center">Управленческий путь</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Руководитель методического объединения</li>
                <li>• Заведующий отделением</li>
                <li>• Директор центра коррекции и развития</li>
                <li>• Организация собственного центра</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon name="Lightbulb" className="w-8 h-8 text-purple-800" />
              </div>
              <h4 className="font-semibold mb-3 text-purple-800 text-center">Экспертно-методическое направление</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Разработка методических материалов</li>
                <li>• Проведение тренингов для коллег</li>
                <li>• Экспертная деятельность</li>
                <li>• Написание научных работ</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-purple-900 text-center">Востребованность и заработная плата</h3>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-800">Факторы, влияющие на уровень дохода</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Icon name="MapPin" className="w-5 h-5 text-purple-700 mt-0.5" />
                    <span><strong>Регион:</strong> В крупных городах оплата труда выше, чем в небольших населенных пунктах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Award" className="w-5 h-5 text-purple-700 mt-0.5" />
                    <span><strong>Квалификация:</strong> Специалисты с высокой квалификацией и большим опытом зарабатывают больше</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Briefcase" className="w-5 h-5 text-purple-700 mt-0.5" />
                    <span><strong>Место работы:</strong> Государственный сектор обычно предлагает более низкие ставки, чем частные центры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="BookOpen" className="w-5 h-5 text-purple-700 mt-0.5" />
                    <span><strong>Специализация:</strong> Некоторые узкие специализации более востребованы и лучше оплачиваются</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-800">Диапазон заработных плат</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-700 pl-4">
                    <h5 className="font-medium text-purple-900 mb-1">Государственный сектор</h5>
                    <p className="text-sm text-gray-700">От 25 000 до 50 000 рублей в месяц в зависимости от региона, стажа и категории</p>
                  </div>
                  <div className="border-l-4 border-purple-700 pl-4">
                    <h5 className="font-medium text-purple-900 mb-1">Частные центры</h5>
                    <p className="text-sm text-gray-700">От 40 000 до 90 000 рублей в месяц в зависимости от квалификации и нагрузки</p>
                  </div>
                  <div className="border-l-4 border-purple-700 pl-4">
                    <h5 className="font-medium text-purple-900 mb-1">Частная практика</h5>
                    <p className="text-sm text-gray-700">От 60 000 до 150 000 рублей в месяц и выше при наличии постоянных клиентов</p>
                  </div>
                  <div className="border-l-4 border-purple-700 pl-4">
                    <h5 className="font-medium text-purple-900 mb-1">Онлайн-консультирование</h5>
                    <p className="text-sm text-gray-700">Гибкий доход в зависимости от количества клиентов, в среднем от 50 000 до 120 000 рублей</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold mb-6 text-purple-900">Востребованность на рынке труда</h4>
            <p className="text-gray-700 mb-6">
              Профессия дефектолога входит в список наиболее востребованных социально значимых профессий. 
              С каждым годом спрос на квалифицированных специалистов растёт, что связано с увеличением числа 
              детей, нуждающихся в коррекционной помощи, и развитием инклюзивного образования.
            </p>
            <Button asChild className="bg-purple-700 hover:bg-purple-800">
              <Link to="/">Узнать больше о профессии</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold mb-4">Дефектология</h2>
              <p className="text-purple-200">Информационный портал о профессии дефектолога</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Разделы сайта</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-purple-200 hover:text-white">Главная</Link></li>
                <li><Link to="/education" className="text-purple-200 hover:text-white">Образование</Link></li>
                <li><Link to="/methods" className="text-purple-200 hover:text-white">Методики</Link></li>
                <li><Link to="/career" className="text-purple-200 hover:text-white">Карьера</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-purple-800 text-center text-purple-300 text-sm">
            © 2025 Информационный портал о дефектологии. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Career;
