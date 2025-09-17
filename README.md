# 📞 Telephone Number Validator  

Este es un proyecto en **HTML, CSS y JavaScript** que valida si un número de teléfono corresponde a un formato válido de Estados Unidos. Forma parte de los proyectos de **FreeCodeCamp - JavaScript Algorithms and Data Structures**.  

---

## 🚀 Características  
- Interfaz con diseño de teléfono móvil.  
- Validación de números de teléfono usando **expresiones regulares**.  
- Botones para **verificar** y **limpiar** resultados.  
- Historial de números ingresados con diferenciación entre **válidos** e **inválidos**.  
- Manejo con tecla **Enter** para verificar más rápido.  

---

## 🛠️ Tecnologías usadas  
- **HTML5** → estructura de la aplicación.  
- **CSS3** → estilos y diseño responsive con tipografía moderna.  
- **JavaScript (ES6+)** → lógica de validación y renderizado de resultados.  

---

## 📂 Estructura del proyecto  

telephone-number-validator/
│── index.html # Estructura principal
│── styles.css # Estilos y diseño visual
│── index.js # Lógica de validación
│── README.md # Documentación del proyecto

yaml
Copiar código

---

## 📜 Funcionamiento  

1. El usuario ingresa un número de teléfono en el input.  
2. Al presionar el botón **Check** o la tecla **Enter**, se valida el número.  
3. El resultado se muestra en pantalla con un mensaje:  
   - ✅ **Valid US Number** → si cumple con el formato.  
   - ❌ **Invalid US Number** → si no cumple con el formato.  
4. Se puede limpiar el historial con el botón **Clear**.  

---

## 🔍 Expresión regular usada  

```regex
/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
^ → inicio de la cadena.

(1\s?)? → el número puede empezar con "1" (código de EEUU) y un espacio opcional.

(\(\d{3}\)|\d{3}) → acepta un área de 3 dígitos con o sin paréntesis.

[\s\-]? → permite espacio o guion como separador.

\d{3} → siguientes 3 dígitos.

\d{4} → últimos 4 dígitos.

$ → fin de la cadena.

Ejemplos válidos:

555-555-5555

(555)555-5555

1 555 555 5555

5555555555

📸 Vista previa
📱 La app simula una pantalla de teléfono:

Input en la parte superior.

Resultados listados en la parte central.

Botones Check y Clear en la parte inferior.

▶️ Uso
Clona este repositorio:

bash
Copiar código
git clone https://github.com/m1gang/telephone-number-validator.git
Abre el archivo index.html en tu navegador.

Ingresa un número de teléfono y valida.

📌 Mejoras futuras
Soporte para otros formatos internacionales.

Alerta visual en tiempo real mientras se escribe.

Guardar historial en LocalStorage.

👨‍💻 Autor
Desarrollado por Miguel Ángel (m1gang) 🚀