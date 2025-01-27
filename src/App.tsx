import CoffeeListing from "./components/CoffeListing";

function App() {
  return (
    <main className="relative py-10 sm:pt-20 lg:pt-[120px] xl:pt-[160px] bg-midnight-shadow font-bold">
      <section className="absolute top-0 left-0 w-full">
        <picture>
          <source
            media='(max-width: 640px )'
            srcSet='./bg-cafe-sm.jpg'
            type='image/jpeg'
          />
          <source
            media='(max-width: 1280px )'
            srcSet='./bg-cafe.jpg'
            type='image/jpeg'
          />
          <source
            media='(min-width: 1281px )'
            srcSet='./bg-cafe-lg.jpg'
            type='image/jpeg'
          />
          <img src="./bg-cafe-jpg" alt="hero image" />
        </picture>
      </section>
      <CoffeeListing />
    </main>
  );
}

export default App;
