# 🐙 Visualizador de Perfil GitHub

Un visualizador de perfiles de GitHub que permite buscar usuarios y ver información detallada sobre sus perfiles y repositorios.

## ✨ Características

- 🔍 **Búsqueda de usuarios** - Busca cualquier usuario de GitHub
- 👤 **Información del perfil** - Visualiza datos personales, bio, seguidores y seguidos
- 📚 **Repositorios** - Ve todos los repositorios públicos del usuario con estadísticas
- ⏳ **Indicador de carga** - Feedback visual mientras se cargan los datos
- ⌨️ **Búsqueda por Enter** - Presiona Enter para buscar sin hacer clic
- 📱 **Diseño responsivo** - Compatible con dispositivos móviles y escritorio

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos, animaciones y responsive design
- **JavaScript ES6** - Módulos, arrow functions, async/await
- **API GitHub** - Para obtener datos de usuarios y repositorios

## 📁 Estructura del Proyecto

```
visualizador-perfil-github/
│
├── index.html                 # Archivo principal HTML
├── README.md                  # Este archivo
│
└── src/
    ├── css/
    │   ├── reset.css         # Reset de estilos del navegador
    │   ├── styles.css        # Estilos principales
    │   ├── animations.css    # Animaciones y efectos
    │   └── responsive.css    # Media queries para responsividad
    │
    └── js/
        ├── index.js          # Archivo principal (orquestación)
        ├── api.js            # Llamadas a la API de GitHub
        └── dom.js            # Manipulación del DOM
```

## 🚀 Cómo Usar

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/visualizador-perfil-github.git
   cd visualizador-perfil-github
   ```

2. **Abre el archivo HTML**
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local (recomendado):
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

3. **Busca un usuario**
   - Digita el nombre de usuario de GitHub en el input
   - Presiona `Enter` o haz clic en "Buscar"
   - Visualiza la información del perfil y repositorios

## 📦 Módulos JavaScript (ES6)

### **api.js**
Gestiona las llamadas a la API de GitHub
```javascript
- fetchUser(userName)           // Obtiene datos del usuario
- fetchGitubUserRepos(userName) // Obtiene repositorios del usuario
```

### **dom.js**
Manipula el DOM y actualiza la interfaz
```javascript
- showLoading()       // Muestra indicador de carga
- hideLoading()       // Oculta indicador de carga
- clearResults()      // Limpia resultados previos
- renderProfile()     // Renderiza el perfil y repositorios
- getInputValue()     // Obtiene valor del input
- getSearchButton()   // Obtiene referencia del botón
- getSearchInput()    // Obtiene referencia del input
```

### **index.js**
Orquesta la lógica principal
```javascript
- handleSearch()      // Maneja la búsqueda de usuarios
- Event listeners     // Captura clics y teclas (Enter)
```

## 🎨 Características de Diseño

- **Animaciones suave** - Efectos de transición elegantes
- **Colores personalizados** - Paleta de colores coherente
- **Grid layout** - Disposición flexible de repositorios
- **Icons devicon** - Iconos de tecnologías
- **Loader animado** - Indicador de carga visual

## 📊 Información Mostrada del Usuario

- Avatar (imagen de perfil)
- Nombre completo
- Bio
- Seguidores
- Seguidos
- Lista de repositorios con:
  - Nombre del repositorio
  - Enlace al repositorio (GitHub)
  - Estrellas ⭐
  - Forks 🍴
  - Watchers 👀
  - Lenguaje de programación 💻

## 🌐 API Utilizada

- **GitHub REST API v3** - Endpoints públicos gratuitos
- Sin autenticación requerida
- Límite: 60 solicitudes por hora (por IP)

## 📝 Ejemplo de Uso

```javascript
// Buscar usuario
const userData = await fetchUser('octocat');

// Obtener repositorios
const repos = await fetchGitubUserRepos('octocat');

// Mostrar en la interfaz
renderProfile(userData, repos);
```

## 🐛 Manejo de Errores

- Usuario no encontrado
- Errores de conexión
- Mensajes de error claros al usuario
- Consola con logs para debugging

## 📱 Responsive Design

- Mobile first approach
- Breakpoints para tablets y desktop
- Menú adaptable
- Imágenes responsive

## 🔒 Privacidad

- No almacena datos personales
- Consulta API pública de GitHub
- Sin cookies ni seguimiento

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/mi-feature`)
3. Commit tus cambios (`git commit -m 'Agrego mi feature'`)
4. Push a la rama (`git push origin feature/mi-feature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

DevQuest 2.0

## 🙏 Agradecimientos

- GitHub por su excelente API
- Comunidad open source
- Devicon por los iconos de tecnologías

---

**¿Preguntas o sugerencias?** Abre un issue en el repositorio.

Hecho con ❤️ para la comunidad de desarrolladores