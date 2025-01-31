
## Technologies utilisées

- **React** : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Tailwind CSS** : Un framework CSS utilitaire pour un design moderne et réactif.
- **Framer Motion** : Une bibliothèque d'animations pour React qui facilite les transitions fluides.
- **Lucide Icons** : Une collection d'icônes pour les boutons de contrôle du carousel.
- **react-swipeable** : Pour ajouter la fonctionnalité de swipe (glisser) sur mobile.

## Prérequis

Avant de commencer, assure-toi que tu aies installé les éléments suivants :

1. **Node.js** et **npm** : Tu peux les télécharger et les installer depuis [nodejs.org](https://nodejs.org/).
2. **Git** : Pour cloner le projet depuis GitHub.

## Étapes pour lancer le projet

1. **Cloner le projet depuis GitHub** :
   ```bash
   git clone https://github.com/AZIZABADA10/projet_ismail_slide.git
   cd nom-du-repository
   ```

2. **Installer les dépendances** :
   Utilise `npm`  pour installer toutes les dépendances nécessaires au projet.

   Avec npm :
   ```bash
   npm install
   ```



3. **Lancer le projet** :
   Pour démarrer le serveur de développement, exécute la commande suivante :

   Avec npm :
   ```bash
   npm start
   ```


   Cela ouvrira ton application dans le navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du projet

- **`src/`** : Contient tous les fichiers sources du projet.
  - **`components/`** : Composants réutilisables du projet, tels que le carousel, les contrôles et les indicateurs.
  - **`assets/`** : Dossier pour les images et avatars utilisés dans le carousel.
  - **`App.tsx`** : Composant principal du projet.
  - **`index.tsx`** : Le point d'entrée de l'application.

- **`tailwind.config.ts`** : Configuration de Tailwind CSS.

## Fonctionnalités principales

- **Carousel interactif** : Un carousel avec des images, des titres et des sous-titres défilants.
- **Animation fluide** : Des animations d'entrée et de sortie pour les éléments du carousel, créées avec Framer Motion.
- **Contrôles et indicateurs** : Des boutons de navigation pour faire défiler les slides et des indicateurs en bas pour sélectionner un slide.
- **Swipe sur mobile** : Le carousel est également interactif sur les appareils mobiles grâce à `react-swipeable`.

## Personnalisation

Si tu veux personnaliser ce projet :
1. Modifie les images dans le dossier `assets/`.
2. Change les textes (titres et sous-titres) dans le fichier `Carousel.tsx` en mettant à jour le tableau `slides`.
3. Personnalise la configuration de Tailwind dans `tailwind.config.ts` pour ajuster le design.

