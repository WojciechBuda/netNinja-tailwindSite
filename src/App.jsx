function App() {
  return (
    <div className="App text-gray-600">
      <div className=" bg-zinc-200">
        <div>
          <nav>
            <div>
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <a href="/">Jedzenie</a>
              </h1>
            </div>
            <ul>
              <li className="text-gray-700 font-bold flex space-x-4">
                <a href="#">
                  <span>chaupa</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>co to</span>
                </a>
              </li>
              <li className="text-">
                <a href="#">
                  <span>kontakt</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main className="px-16 py-6  bg-gray-100">
        <div className="flex sm:justify-center md:justify-end">
          <a href="#" className="text-primary">
            Log in
            </a>
          <a href="#" className="text-primary ml-2">
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-600 text-5xl font-semibold animate-bounce flex justify-center">Przepisy</h2>
          <h3 className="text-3xl font-semibold animate-bounce flex justify-center"> Domowe </h3>
        </header>

        <div>
          <h4 className="font-bold pb-2 mt-12 border-b border-gray-200 text-3xl">
            Najnowsze
          </h4>

          <div className="mt-8">
            <div className=" bg-white  rounded-lg overflow-hidden shadow-md relative">
              <img className=" w-full  h-32 sm:h-48 object-cover "
                src="src/img/pizza.jpg"
                alt="pizza"
              />
              <div className="m-4">
                <span className=" font-bold ">Pizza</span>
                <span className=" block text-gray-500 text-sm">Przepis wojtka</span>
              </div>
              <div className=" bg-lime-600  text-yellow-500 text-xs  uppercase font-bold  rounded-full p-2 absolute top-0 ml-2 mt-2">
                <span>90 min</span>
              </div>
            </div>

            <div className=" bg-white  rounded-lg overflow-hidden shadow-md relative">
              <img className=" w-full  h-32 sm:h-48 object-cover "
                src="src/img/rosol.jpg"
                alt="rosół"
              />
              <div>
                <span className=" font-bold">Rosół</span>
                <span className=" block text-gray-500 text-sm">Przepis wojtka</span>
              </div>
              <div className=" bg-lime-600  text-yellow-500 text-xs  uppercase font-bold  rounded-full p-2 absolute top-0 ml-2 mt-2">
                <span>60 min</span>
              </div>
            </div>

            <div className=" bg-white  rounded-lg overflow-hidden shadow-md relative">
              <img className=" w-full  h-32 sm:h-48 object-cover "
                src="src/img/schab.jpg"
                alt="schab"
              />
              <div>
                <span className="font-bold">Schabik</span>
                <span className=" block text-gray-500 text-sm">Przepis wojtka</span>
              </div>
              <div className=" bg-lime-600  text-yellow-500 text-xs  uppercase font-bold  rounded-full p-2 absolute top-0 ml-2 mt-2">
                <span>75 min</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
            Najlepsze
          </h4>

          <div className="mt-8">
            <div>Coming soon...</div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className=" bg-transparent">Wiele więcej</div>
        </div>
      </main>
    </div>
  );
}

export default App;
