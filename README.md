
# Aromas Intensos - Jabones y Velas Aromáticas

**Aromas Intensos** es una tienda en línea que ofrece una selección de jabones y velas aromáticas. Esta aplicación web está desarrollada con **React**, **TypeScript** y **Vite**, y permite a los usuarios explorar el catálogo de productos, agregar artículos a su carrito de compras y finalizar la compra a través de WhatsApp.

## Funcionalidades Principales

- **Catálogo de productos**: Los usuarios pueden navegar por una lista de jabones y velas, con detalles de cada producto.
- **Carrito de compras**: Permite agregar productos al carrito y ver el número total de artículos seleccionados.
- **Finalizar compra por WhatsApp**: Una vez que los productos están en el carrito, los usuarios pueden enviar un mensaje a WhatsApp con todos los productos elegidos para completar su compra.

## Tecnologías utilizadas

- **Frontend**:
  - React con TypeScript para la estructura de componentes.
  - Vite para un desarrollo rápido con HMR (Hot Module Replacement).
  - Tailwind CSS para un diseño moderno y minimalista.
  
- **Backend**:
  - Actualmente no se utiliza un backend real. Los productos son cargados desde un archivo JSON.

## Instrucciones para desarrolladores

### Requisitos previos
Asegúrate de tener instalados:
- **Node.js** (versión 14 o superior)
- **npm** (versión 6 o superior)

### Instalación

1. Clona el repositorio:

   \`\`\`bash
   git clone https://github.com/gonzaviale/aromas-intensos.git
   \`\`\`

2. Accede al directorio del proyecto:

   \`\`\`bash
   cd aromas-intensos
   \`\`\`

3. Instala las dependencias del proyecto:

   \`\`\`bash
   npm install
   \`\`\`

4. Inicia el servidor de desarrollo:

   \`\`\`bash
   npm run dev
   \`\`\`

   Esto levantará el servidor local y podrás acceder a la aplicación en `http://localhost:5173`.

### Estructura del proyecto

- `src/`: Contiene todos los archivos de la aplicación.
  - **components**: Componentes reutilizables como `Product` y `Cart`.
  - **layout**: Componentes de diseño general como `Header` y `AboutUs`.
  - **utils/productsList.ts**: Archivo que contiene el listado de productos en formato JSON.

### Cómo agregar un producto al carrito

1. Navega por el catálogo de productos.
2. Haz clic en "Agregar al carrito" en el producto deseado.
3. El ícono del carrito en la esquina inferior derecha muestra el número de productos seleccionados.
4. Haz clic en el carrito para ver los productos agregados y eliminar cualquiera si lo deseas.
5. Al finalizar la selección, haz clic en el botón de WhatsApp para completar la compra.

## Contribución

Si deseas contribuir al proyecto, siéntete libre de abrir un _pull request_ o _issue_ en GitHub.
