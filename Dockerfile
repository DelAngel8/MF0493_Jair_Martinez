# lenguaje Yaml
# Imagen que descargaremos como base desde Docker hub
FROM node:24-alpine
# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app
# Copiamos el package.json y package-lock.json al contenedor
COPY package*.json ./
# Instalamos las dependencias del proyecto
RUN npm install
# Copiamos el resto de los archivos del proyecto al contenedor
COPY . .
# Exponemos el puerto en el que la aplicación escuchará
EXPOSE 4000
# Comando para iniciar la aplicación
CMD ["npm", "start"]