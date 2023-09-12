# Utiliser une image de base appropriée pour Node.js
FROM node:18

# Créer le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Compiler les fichiers TypeScript en JavaScript
RUN npm run build

# Exposer le port sur lequel l'application écoute
EXPOSE 3100

# Commande pour démarrer l'application
CMD ["npm", "start"]
