function App() {
  return (
    <div className="App text-gray-600">
      <div>
        <div>
          <nav>
            <div>
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <a href="/">Food Ninjadd</a>
              </h1>
            </div>
            <ul>
              <li className="text-gray-700 font-bold">
                <a href="#">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main className="px-16 py-6">
        <div>
          <a href="#" className="text-primary">
            Log in
          </a>
          <a href="#" className="text-primary">
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-600 text-5xl font-semibold">Recipes</h2>
          <h3 className="text-3xl font-semibold">Dla Januszy</h3>
        </header>

        <div>
          <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">
            najnowsze
          </h4>

          <div>
            <div className="mt-8">
              <img
                src="src/img/pizza.jpg"
                alt="pizza"
                width="150"
                height="200"
              />
              <div>
                <span>pizza</span>
                <span>przepis wojtka</span>
              </div>
            </div>

            <div className="mt-8">
              <img
                src="src/img/groch.jpg"
                alt="groch"
                width="150"
                height="200"
              />
              <div>
                <span>groszek</span>
                <span>przepis wojtka</span>
              </div>
            </div>

            <div className="mt-8">
              <img
                src="src/img/schab.jpg"
                alt="schab"
                width="150"
                height="200"
              />
              <div>
                <span>schabik</span>
                <span>przepis wojtka</span>
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

        <div className="mt-12">
          <div>Wiele więcej</div>
        </div>
      </main>
    </div>
  );
}

export default App;
