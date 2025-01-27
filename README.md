# Coffee Listing App

## Descripcion
Esta aplicación muestra una lista de cafés con detalles como nombre, imagen, precio, calificación, popularidad y disponibilidad. Los datos se obtienen de una fuente externa y se muestran en una interfaz de usuario atractiva.

## Caracteristicas
- **Listado de Productos**: Muestra una lista de cafés con detalles como nombre, imagen, precio, calificación, popularidad y disponibilidad.
- **Filtro de Disponibilidad**: Permite a los usuarios filtrar los productos para mostrar solo los que están disponibles actualmente.
- **Interfaz Responsiva**: La aplicación está diseñada para ser completamente responsiva y funcionar bien en dispositivos móviles, tabletas y escritorios.
- **Diseño Atractivo**: Utiliza un diseño moderno y atractivo para mejorar la experiencia del usuario.
- **Componentes Reutilizables**: Construida con componentes reutilizables de React para facilitar el mantenimiento y la escalabilidad.
- **Tipado Estricto**: Utiliza TypeScript para asegurar un tipado estricto y reducir errores en el código.
- **Optimización de Rendimiento**: Carga solo los datos necesarios y optimiza el rendimiento para una experiencia de usuario fluida.
- **Pequeños Lotes**: Los cafés se tuestan en pequeños lotes y se envían frescos semanalmente.
- **SVG Gráficos**: Incluye gráficos SVG personalizados para mejorar la estética visual.


## Vista Previa
![Captura del Proyecto](./src/assets/desktop-preview.png)

Puedes ver la versión demo en vivo aquí: [Coffee Listing App](https://movie-search-app-ten-woad.vercel.app/)


## Tecnologías Utilizadas
- Vite
- React JS
- TypeScript
- Tailwindcss 4.0


## Instalación
1. Clona el repositorio:
    ```sh
    git clone https://github.com/Ibrahim-003/Coffee-Listing-App.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd simple-coffee-listing-ts
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```


## Scripts Disponibles
- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación compilada.


## Uso
1. Inicia el servidor de desarrollo:
    ```sh
    npm run dev
    ```
2. Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.


## Estructura del Proyecto
simple-coffee-listing-ts/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
│   └── favicon.ico
├── README.md
├── src/
│   ├── App.tsx
│   ├── assets/
│   │   └── desktop-preview.png
│   ├── components/
│   │   ├── CoffeeCard.tsx
│   │   └── CoffeeListing.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types/
│   │   └── Coffee.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

## Autor 👨‍💻
Desarrollado por **[Ibrahim Almeyda](https://github.com/Ibrahim-003)**.
