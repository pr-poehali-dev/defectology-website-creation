
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
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
          <h2 className="text-4xl font-bold mb-6 text-purple-900 text-center">Образование дефектолога</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Профессия дефектолога требует специального образования и постоянного совершенствования навыков.
            Рассмотрим основные пути получения профессии и необходимые компетенции.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-purple-800">Высшее образование</CardTitle>
              <CardDescription>Основные направления подготовки</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="bg-purple-50 p-4 rounded-md">
                  <h4 className="font-medium text-purple-900 mb-1">Специальное (дефектологическое) образование</h4>
                  <p className="text-sm text-gray-700">Профили: логопедия, сурдопедагогика, тифлопедагогика, олигофренопедагогика</p>
                </li>
                <li className="bg-purple-50 p-4 rounded-md">
                  <h4 className="font-medium text-purple-900 mb-1">Психолого-педагогическое образование</h4>
                  <p className="text-sm text-gray-700">С углубленным изучением коррекционной педагогики</p>
                </li>
                <li className="bg-purple-50 p-4 rounded-md">
                  <h4 className="font-medium text-purple-900 mb-1">Клиническая психология</h4>
                  <p className="text-sm text-gray-700">Со специализацией в нейропсихологии и патопсихологии</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-purple-800">Дополнительное образование</CardTitle>
              <CardDescription>Профессиональное развитие</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="bg-purple-50 p-4 rounded-md">
                  <h4 className="font-medium text-purple-900 mb-1">Профессиональная переподготовка</h4>
                  <p className="text-sm text-gray-700">Для специалистов с педагогическим или психологическим образованием</p>
                </li>
                <li className="bg-purple-50 p-4 rounded-md">
                  <h4 className="font-medium text-purple-900 mb-1">Курсы повышения квалификации</h4>
                  <p className="text-sm text-gray-700">По конкретным методикам работы и диагностическим инструментам</p>
                </li>
                <li className="bg-purple-50 p-4 rounded-md">
                  <h4 className="font-medium text-purple-900 mb-1">Специализированные семинары и тренинги</h4>
                  <p className="text-sm text-gray-700">По работе с различными нарушениями и новым технологиям</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-6 text-purple-900">Ключевые компетенции дефектолога</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-purple-800">Знания</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Анатомия и физиология ЦНС</li>
                <li>• Специальная психология</li>
                <li>• Основы медицинских знаний</li>
                <li>• Методики коррекционной работы</li>
                <li>• Возрастная психология</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-purple-800">Навыки</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Диагностика нарушений</li>
                <li>• Составление программ</li>
                <li>• Проведение коррекционных занятий</li>
                <li>• Работа с документацией</li>
                <li>• Взаимодействие с родителями</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-3 text-purple-800">Личные качества</h4>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Терпение и эмпатия</li>
                <li>• Стрессоустойчивость</li>
                <li>• Организованность</li>
                <li>• Внимательность к деталям</li>
                <li>• Коммуникабельность</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-purple-900">Ведущие ВУЗы для подготовки дефектологов</h3>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="divide-y divide-gray-200">
              <li className="py-4">
                <h4 className="font-medium text-purple-900">Московский педагогический государственный университет (МПГУ)</h4>
                <p className="text-sm text-gray-700 mt-1">Дефектологический факультет с богатой историей и научной школой</p>
              </li>
              <li className="py-4">
                <h4 className="font-medium text-purple-900">Российский государственный педагогический университет им. А.И. Герцена</h4>
                <p className="text-sm text-gray-700 mt-1">Институт дефектологического образования и реабилитации</p>
              </li>
              <li className="py-4">
                <h4 className="font-medium text-purple-900">Московский государственный психолого-педагогический университет (МГППУ)</h4>
                <p className="text-sm text-gray-700 mt-1">Факультет клинической и специальной психологии</p>
              </li>
              <li className="py-4">
                <h4 className="font-medium text-purple-900">Уральский государственный педагогический университет</h4>
                <p className="text-sm text-gray-700 mt-1">Институт специального образования</p>
              </li>
            </ul>
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

export default Education;
