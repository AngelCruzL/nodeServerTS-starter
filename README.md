# Servidor de NodeJS con Typescript

La finalidad de este proyecto es tener un template de un servidor de NodeJS funcionando con typescript, contando con las configuraciones básicas para poder utilizarlo y con algunos ejemplos de rutas.

## Requisitos para usar el proyecto

Es necesario contar con [Nodejs](https://nodejs.org/en/) en el equipo, para asegurarse de tener instalado Node se puede ejecutar el siguiente comando en la consola:

```sh
node --version
```

Se recomienda tener instalado [github](https://git-scm.com/downloads), el cuál será necesario en caso de querer clonar el repositorio.

## Instalación del proyecto

Para poder descargar el proyecto puedes hacerlo clonando el repositorio de git:

```sh
git clone https://github.com/AngelCruzL/nodeServerTS-starter.git
```

## Instalación de dependencias

Para poder instalar los módulos y dependencias necesarias para el correcto funcionamiento del proyecto se debe ejecutar el siguiente comando en el directorio del proyecto:

```sh
npm install
```

## Funcionamiento

El template te permite trabajar con un servidor de NodeJS el cuál monta el servidor en el puerto `5000` ejecutando el comando:

```sh
npm run dev
```

A su vez este comando realiza el build de producción el cuál se almacena en la carpeta `dist`, la cual contendrá los archivos del proyecto en su versión de javascript.
