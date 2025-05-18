import cartIconUrl from "./assets/icon-cart.svg";

function App() {
  return (
    <div className=" p-4 flex h-full flex-col font-familylight font-light">
      <main className="flex-1 content-center">
        <div className="md:max-[10em]: md:w-140 md:grid md:grid-cols-2 m-auto my-auto flex flex-col bg-neutral-colorlighter text-neutral-colorbold flex-1 rounded-2xl overflow-hidden">
          <figure>
            <picture>
              <source
                media="(max-width: 640px)"
                srcSet="/image-product-mobile.jpg"
                className="w-full"
              />
              <source
                media="(min-width: 640px)"
                srcSet="/image-product-desktop.jpg"
              />
              <img
                src="/image-product-desktop.jpg"
                alt=""
                className="h-full w-full"
              />
            </picture>
          </figure>
          <div className="p-6 flex flex-col gap-4">
            <span className="uppercase font-light text-sm tracking-[0.4em]">
              Perfume
            </span>

            <h1 className="text-4xl font-familybold font-bold text-neutral-colorbolder">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="leading-6">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center gap-5">
              <span className="text-primary-colorlight font-familybold text-[2em] font-bold">
                $149.99
              </span>
              <span className="text-sm line-through">$169.99</span>
            </div>
            <button className="cursor-pointer bg-primary-colorlight flex  text-neutral-colorlighter font-bold w-full justify-center py-4 rounded-[12px] gap-4 hover:bg-primary-colorbold">
              <img src={cartIconUrl} alt="" className="object-contain" />
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <footer className="m-auto">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/MoriNo23/">Mori23</a>.
      </footer>
    </div>
  );
}

export default App;
