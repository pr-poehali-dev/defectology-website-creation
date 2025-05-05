
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Methods = () => {
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
          <h2 className="text-4xl font-bold mb-6 text-purple-900 text-center">Методики в дефектологии</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Эффективная работа дефектолога базируется на научно обоснованных методиках и технологиях. 
            Рассмотрим основные подходы к коррекционной работе.
          </p>
        </section>

        <div className="max-w-5xl mx-auto mb-16">
          <Tabs defaultValue="speech">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="speech">Нарушения речи</TabsTrigger>
              <TabsTrigger value="intellectual">Интеллектуальные нарушения</TabsTrigger>
              <TabsTrigger value="sensory">Сенсорные нарушения</TabsTrigger>
              <TabsTrigger value="complex">Комплексные нарушения</TabsTrigger>
            </TabsList>
            
            <TabsContent value="speech" className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-purple-900">Методики работы с нарушениями речи</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-800">Логопедические технологии</h4>
                  <ul className="space-y-4">
                    <li className="bg-purple-50 p-4 rounded-md">
                      <p className="font-medium text-purple-900 mb-1">Артикуляционная гимнастика</p>
                      <p className="text-sm text-gray-700">Комплекс упражнений для развития подвижности органов артикуляционного аппарата</p>
                    </li>
                    <li className="bg-purple-50 p-4 rounded-md">
                      <p className="font-medium text-purple-900 mb-1">Фонетическая ритмика</p>
                      <p className="text-sm text-gray-700">Система двигательных упражнений, сочетающихся с произнесением звуков</p>
                    </li>
                    <li className="bg-purple-50 p-4 rounded-md">
                      <p className="font-medium text-purple-900 mb-1">Логопедический массаж</p>
                      <p className="text-sm text-gray-700">Активный метод механического воздействия на мышцы артикуляционного аппарата</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-800">Авторские методики</h4>
                  <ul className="space-y-4">
                    <li className="bg-purple-50 p-4 rounded-md">
                      <p className="font-medium text-purple-900 mb-1">Метод Новиковой-Иванцовой</p>
                      <p className="text-sm text-gray-700">Формирование языковой системы у детей с тяжелыми нарушениями речи</p>
                    </li>
                    <li className="bg-purple-50 p-4 rounded-md">
                      <p className="font-medium text-purple-900 mb-1">Система Монтессори</p>
                      <p className="text-sm text-gray-700">Развитие речи через дидактические материалы и самостоятельную активность</p>
                    </li>
                    <li className="bg-purple-50 p-4 rounded-md">
                      <p className="font-medium text-purple-900 mb-1">Система Зайцева</p>
                      <p className="text-sm text-gray-700">Обучение чтению и развитие речи с помощью кубиков и таблиц</p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="intellectual" className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-purple-900">Методики работы с интеллектуальными нарушениями</h3>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-md">
                  <h4 className="text-xl font-semibold mb-3 text-purple-800">Метод Феликса Франка (Германия)</h4>
                  <p className="text-gray-700 mb-3">Специальная система обучения детей с интеллектуальными нарушениями, основанная на тактильном и зрительном восприятии.</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Постепенное усложнение материала</li>
                    <li>• Обучение через практическую деятельность</li>
                    <li>• Многократное повторение</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-md">
                  <h4 className="text-xl font-semibold mb-3 text-purple-800">Нумикон (Великобритания)</h4>
                  <p className="text-gray-700 mb-3">Мультисенсорная система обучения математическим навыкам детей с синдромом Дауна и другими интеллектуальными нарушениями.</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Наглядность и тактильность материалов</li>
                    <li>• Игровой подход к обучению</li>
                    <li>• Структурированность программы</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-md">
                  <h4 className="text-xl font-semibold mb-3 text-purple-800">Метод замещающего онтогенеза (Россия)</h4>
                  <p className="text-gray-700 mb-3">Разработан А.В. Семенович, направлен на коррекцию и абилитацию процессов развития ребенка.</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Нейропсихологическая диагностика</li>
                    <li>• Двигательные упражнения</li>
                    <li>• Дыхательные техники</li>
                    <li>• Глазодвигательные упражнения</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sensory" className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-purple-900">Методики работы с сенсорными нарушениями</h3>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4 text-purple-800">Методики при нарушениях слуха</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium text-purple-900 mb-1">Верботональный метод</p>
                    <p className="text-sm text-gray-700">Развитие слухового восприятия через остаточный слух и вибротактильные ощущения</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium text-purple-900 mb-1">Метод билингвизма</p>
                    <p className="text-sm text-gray-700">Использование жестового языка как первого и словесного как второго языка</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium text-purple-900 mb-1">Кохлеарная имплантация</p>
                    <p className="text-sm text-gray-700">Методики слухоречевой реабилитации после операции</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium text-purple-900 mb-1">Дактильная речь</p>
                    <p className="text-sm text-gray-700">Использование пальцевой азбуки для обучения речи</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-purple-800">Методики при нарушениях зрения</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium text-purple-900 mb-1">Система Брайля</p>
                    <p className="text-sm text-gray-700">Рельефно-точечная система чтения и письма</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium text-purple-900 mb-1">Тифлографика</p>
                    <p className="text-sm text-gray-700">Методика обучения восприятию рельефных изображений</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium text-purple-900 mb-1">Методика Гленна Домана</p>
                    <p className="text-sm text-gray-700">Развитие мозга через визуальную стимуляцию</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-md">
                    <p className="font-medium text-purple-900 mb-1">Пространственное ориентирование</p>
                    <p className="text-sm text-gray-700">Системы обучения самостоятельному передвижению</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="complex" className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-purple-900">Методики работы с комплексными нарушениями</h3>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-purple-800 font-semibold">Сенсорная интеграция</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-3">Метод терапии, направленный на улучшение обработки сенсорной информации нервной системой. Разработан Джин Айрес.</p>
                    <div className="bg-purple-50 p-4 rounded-md">
                      <h5 className="font-medium text-purple-900 mb-2">Основные принципы:</h5>
                      <ul className="text-sm text-gray-700 space-y-1 pl-4">
                        <li>• Создание специальной среды для сенсорной стимуляции</li>
                        <li>• Следование за мотивацией ребенка</li>
                        <li>• Создание адаптивных реакций на сенсорные стимулы</li>
                        <li>• Формирование "потока успеха" в процессе занятий</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-purple-800 font-semibold">ТЕАССН-программа</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-3">Программа помощи людям с аутизмом и другими коммуникативными нарушениями. Разработана в Университете Северной Каролины.</p>
                    <div className="bg-purple-50 p-4 rounded-md">
                      <h5 className="font-medium text-purple-900 mb-2">Ключевые элементы:</h5>
                      <ul className="text-sm text-gray-700 space-y-1 pl-4">
                        <li>• Структурированное обучение</li>
                        <li>• Визуальная поддержка</li>
                        <li>• Предсказуемость среды</li>
                        <li>• Индивидуальный подход к каждому ребенку</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-purple-800 font-semibold">АВА-терапия</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-3">Прикладной анализ поведения – методика, основанная на модификации поведения через систему поощрений и последствий.</p>
                    <div className="bg-purple-50 p-4 rounded-md">
                      <h5 className="font-medium text-purple-900 mb-2">Основные техники:</h5>
                      <ul className="text-sm text-gray-700 space-y-1 pl-4">
                        <li>• Дискретные пробы (DTT)</li>
                        <li>• Обучение в естественной среде (NET)</li>
                        <li>• Вербальное поведение (VB)</li>
                        <li>• Функциональный анализ поведения</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-purple-800 font-semibold">Методика Марии Монтессори</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 mb-3">Педагогическая система, основанная на идее свободного воспитания и самостоятельного развития ребенка в специально подготовленной среде.</p>
                    <div className="bg-purple-50 p-4 rounded-md">
                      <h5 className="font-medium text-purple-900 mb-2">Принципы работы:</h5>
                      <ul className="text-sm text-gray-700 space-y-1 pl-4">
                        <li>• Подготовленная среда с дидактическими материалами</li>
                        <li>• Свобода выбора деятельности ребенком</li>
                        <li>• Сенсорное развитие через специальные материалы</li>
                        <li>• Работа в собственном темпе ребенка</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>

        <section className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-purple-900 text-center">Инновационные технологии в дефектологии</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-purple-800">Использование IT-технологий</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Специализированные приложения</li>
                <li>• Интерактивные программы</li>
                <li>• Системы биологической обратной связи</li>
                <li>• Виртуальная реальность</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-purple-800">Нейропсихологический подход</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Метод замещающего онтогенеза</li>
                <li>• Кинезиотерапия</li>
                <li>• Нейрокоррекция</li>
                <li>• Сенсомоторная коррекция</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-purple-800">Альтернативная коммуникация</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Система PECS</li>
                <li>• Коммуникативные доски</li>
                <li>• Жестовые системы</li>
                <li>• Электронные голосовые устройства</li>
              </ul>
            </div>
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

export default Methods;
