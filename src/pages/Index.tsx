
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
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
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-900">Профессия дефектолог</h2>
          <p className="text-lg text-gray-700 mb-8">
            Дефектолог — это специалист, который помогает детям и взрослым с особенностями 
            психофизического развития преодолевать трудности в обучении и адаптации.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-purple-700 hover:bg-purple-800">
              <Link to="/education">Узнать об образовании</Link>
            </Button>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Кто такой дефектолог?</h3>
            <p className="text-gray-700 mb-4">
              Дефектолог — это педагог, который работает с детьми и взрослыми, имеющими различные отклонения
              в развитии: нарушения слуха, зрения, речи, интеллекта, опорно-двигательного аппарата и другие 
              особенности.
            </p>
            <p className="text-gray-700">
              Этот специалист помогает своим подопечным преодолеть ограничения, связанные с их состоянием, 
              и максимально адаптироваться к жизни в обществе.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Ключевые обязанности</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Диагностика особенностей развития</li>
              <li>Разработка индивидуальных коррекционных программ</li>
              <li>Проведение занятий по коррекции нарушений</li>
              <li>Консультирование родителей и педагогов</li>
              <li>Мониторинг прогресса и корректировка методик</li>
              <li>Социальная адаптация людей с ограниченными возможностями</li>
            </ul>
          </div>
        </div>

        <section className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-purple-900 text-center">Направления дефектологии</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-purple-800">Сурдопедагогика</h3>
              <p className="text-gray-700 text-sm">Работа с людьми, имеющими нарушения слуха</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-purple-800">Тифлопедагогика</h3>
              <p className="text-gray-700 text-sm">Работа с людьми, имеющими нарушения зрения</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-purple-800">Олигофренопедагогика</h3>
              <p className="text-gray-700 text-sm">Работа с людьми с нарушениями интеллекта</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-purple-800">Логопедия</h3>
              <p className="text-gray-700 text-sm">Работа с людьми с нарушениями речи</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-purple-800">Коррекция двигательных нарушений</h3>
              <p className="text-gray-700 text-sm">Работа с людьми с нарушениями опорно-двигательного аппарата</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-purple-800">Коррекция поведения</h3>
              <p className="text-gray-700 text-sm">Работа с людьми с расстройствами аутистического спектра</p>
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

export default Index;
