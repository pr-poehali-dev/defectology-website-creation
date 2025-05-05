
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-2xl font-bold text-purple-800 mb-4 md:mb-0">Дефектология</h1>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link to="/" className="text-purple-900 hover:text-purple-700 font-medium">Главная</Link>
              <Link to="/specializations" className="text-purple-900 hover:text-purple-700 font-medium">Специализации</Link>
              <Link to="/education" className="text-purple-900 hover:text-purple-700 font-medium">Образование</Link>
              <Link to="/methods" className="text-purple-900 hover:text-purple-700 font-medium">Методики</Link>
              <Link to="/career" className="text-purple-900 hover:text-purple-700 font-medium">Карьера</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-900">Профессия дефектолог</h2>
          <p className="text-lg text-gray-700 mb-8">
            Дефектолог — это специалист, который помогает детям и взрослым с особенностями 
            психофизического развития преодолевать трудности в обучении и адаптации.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-purple-700 hover:bg-purple-800">
              <Link to="/specializations">Узнать о специализациях</Link>
            </Button>
            <Button asChild variant="outline" className="border-purple-300 hover:bg-purple-50">
              <Link to="/education">Узнать об образовании</Link>
            </Button>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Кто такой дефектолог?</h3>
            <p className="text-gray-700 mb-4">
              Дефектолог — это специалист в области специальной педагогики, который занимается 
              изучением, обучением, воспитанием и социальной адаптацией людей с различными 
              нарушениями в психофизическом развитии.
            </p>
            <p className="text-gray-700 mb-4">
              Этот специалист работает с детьми и взрослыми, имеющими различные отклонения
              в развитии: нарушения слуха, зрения, речи, интеллекта, опорно-двигательного аппарата, 
              расстройства аутистического спектра и другие особенности.
            </p>
            <p className="text-gray-700">
              Дефектолог помогает своим подопечным преодолеть ограничения, связанные с их состоянием, 
              максимально развить их способности и адаптироваться к жизни в обществе.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Ключевые обязанности</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="Search" className="w-5 h-5 text-purple-700 mt-0.5" />
                <span className="text-gray-700"><strong>Диагностика</strong> особенностей развития и выявление нарушений</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="FileText" className="w-5 h-5 text-purple-700 mt-0.5" />
                <span className="text-gray-700"><strong>Разработка</strong> индивидуальных коррекционных программ и адаптированных образовательных маршрутов</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="BookOpen" className="w-5 h-5 text-purple-700 mt-0.5" />
                <span className="text-gray-700"><strong>Проведение</strong> занятий по коррекции нарушений и развитию навыков</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MessageCircle" className="w-5 h-5 text-purple-700 mt-0.5" />
                <span className="text-gray-700"><strong>Консультирование</strong> родителей и педагогов по вопросам развития и обучения</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="LineChart" className="w-5 h-5 text-purple-700 mt-0.5" />
                <span className="text-gray-700"><strong>Мониторинг</strong> прогресса и корректировка методик работы</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Users" className="w-5 h-5 text-purple-700 mt-0.5" />
                <span className="text-gray-700"><strong>Социальная адаптация</strong> людей с ограниченными возможностями здоровья</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Share2" className="w-5 h-5 text-purple-700 mt-0.5" />
                <span className="text-gray-700"><strong>Взаимодействие</strong> с другими специалистами (психологами, логопедами, врачами) в рамках комплексного подхода</span>
              </li>
            </ul>
          </div>
        </div>

        <section className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-8 text-purple-900 text-center">История профессии</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-purple-200"></div>
            <div className="space-y-12">
              <div className="relative pl-10 md:pl-0">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="absolute top-0 left-0 md:left-auto md:right-0 bg-purple-700 rounded-full w-8 h-8 flex items-center justify-center transform md:translate-x-4 -translate-y-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-purple-800 mb-2">Истоки (XVIII-XIX века)</h4>
                    <p className="text-sm text-gray-700">
                      Первые попытки систематической работы с людьми с особенностями развития. 
                      Французский врач Жан Итар начал работу по обучению "дикого мальчика из Аверона". 
                      В России открываются первые специализированные учебные заведения для глухих и слепых детей.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-10 md:pl-0">
                <div className="md:ml-auto md:w-1/2 md:pl-8">
                  <div className="absolute top-0 left-0 md:left-1/2 bg-purple-700 rounded-full w-8 h-8 flex items-center justify-center transform md:-translate-x-4 -translate-y-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-purple-800 mb-2">Становление науки (начало XX века)</h4>
                    <p className="text-sm text-gray-700">
                      Формирование дефектологии как науки. Труды Л.С. Выготского заложили теоретические основы 
                      специальной педагогики и психологии. Начало дифференциации специальных методик обучения для 
                      детей с различными нарушениями.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-10 md:pl-0">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="absolute top-0 left-0 md:left-auto md:right-0 bg-purple-700 rounded-full w-8 h-8 flex items-center justify-center transform md:translate-x-4 -translate-y-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-purple-800 mb-2">Развитие системы (середина XX века)</h4>
                    <p className="text-sm text-gray-700">
                      Создание сети специальных учреждений образования. Разработка методик диагностики и коррекции нарушений. 
                      Формирование специализаций внутри дефектологии (сурдопедагогика, тифлопедагогика и др.).
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative pl-10 md:pl-0">
                <div className="md:ml-auto md:w-1/2 md:pl-8">
                  <div className="absolute top-0 left-0 md:left-1/2 bg-purple-700 rounded-full w-8 h-8 flex items-center justify-center transform md:-translate-x-4 -translate-y-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-purple-800 mb-2">Современный этап (конец XX - XXI век)</h4>
                    <p className="text-sm text-gray-700">
                      Развитие инклюзивного образования. Внедрение новых технологий и методик. Расширение спектра нарушений, 
                      с которыми работают дефектологи (РАС, СДВГ, множественные нарушения). Интеграция международного опыта.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-purple-900 text-center">Особенности профессии</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Icon name="Heart" className="w-6 h-6 text-purple-800" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-800">Гуманистическая направленность</h4>
                <p className="text-gray-700 text-sm">Профессия основана на принципах гуманизма, уважении личности и веры в потенциал каждого человека вне зависимости от его особенностей.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Icon name="BookOpen" className="w-6 h-6 text-purple-800" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-800">Междисциплинарность</h4>
                <p className="text-gray-700 text-sm">Работа дефектолога находится на стыке педагогики, психологии, медицины и социальной работы, требуя комплексных знаний.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Icon name="Settings" className="w-6 h-6 text-purple-800" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-800">Индивидуальный подход</h4>
                <p className="text-gray-700 text-sm">Необходимость разработки и применения индивидуальных программ, учитывающих уникальные особенности каждого подопечного.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Icon name="Clock" className="w-6 h-6 text-purple-800" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-800">Длительность процесса</h4>
                <p className="text-gray-700 text-sm">Коррекционная работа требует времени и терпения, результаты могут быть отсрочены, но значимы для жизни человека.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Icon name="Users" className="w-6 h-6 text-purple-800" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-800">Командная работа</h4>
                <p className="text-gray-700 text-sm">Необходимость взаимодействия с другими специалистами и родителями для достижения наилучших результатов.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Icon name="RefreshCw" className="w-6 h-6 text-purple-800" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-800">Непрерывное развитие</h4>
                <p className="text-gray-700 text-sm">Постоянное обновление методик и подходов, необходимость непрерывного обучения и профессионального роста.</p>
              </div>
            </div>
          </div>
        </section>
        
        <div className="mt-16 text-center">
          <Button asChild className="bg-purple-700 hover:bg-purple-800">
            <Link to="/specializations">Узнать подробнее о специализациях дефектолога</Link>
          </Button>
        </div>
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
                <li><Link to="/specializations" className="text-purple-200 hover:text-white">Специализации</Link></li>
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

export default Index;
