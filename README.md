# gg_kin-100j
# Nuit des 100 jours KIN

## Tuy'ss pour Zt Com

### Pour avoir un visu en direct en local sur son ordi
Installer Wamp Server http://www.wampserver.com/en/
Le lancer (le logo W apparait dans la barre des tâches, là où y'a l'heure et la deconnexion de clé USB, il doit être vert).
Clic sur ce logo > ```www directory```. Et glisser dans ce dossier tous les fichiers du GitHub dans un dossier ```gala```
Dans le navigateur internet, taper ```localhost/gala```

### Documents principaux 
Utiliser index.php pour modifier les sections visibles. Penser à bien modifier le menu également (voir plus loin).
Utiliser css.css pour modifier le style (couleurs, polices).
Les images se trouvent dans le dossier img, leurs noms sont intuitifs.
Les sections peuvent être modifiées indépendamment dans le dossier sections.


### --- index.php ---
Mots-clés pour référencement dans un moteur de recherche :
```
<meta name="keywords" content="___" >
```
Inclusion de polices Google :
```
<link href="https://fonts.googleapis.com/css?family=___" rel="stylesheet">
```
Inclusion de polices personnelles :
```
<link href="[Chemin___vers___police]" rel="stylesheet">
```
Affichage des sections. Penser à bien modifier le menu également (voir plus loin) :
```
ON		include_once 'sections/___.php'; >
OFF		// include_once 'sections/___.php'; >
```
Effet sparkles sur l'image header :
```
ON		<script type="text/javascript" src="jquery/sparkle.jquery.js"></script>
OFF		<!-- <script type="text/javascript" src="jquery/sparkle.jquery.js"></script> -->
```


### --- navigation.php ---
Modifier le menu :
```
ON    <li><a href="./#___">___</a></li>
OFF    <li><a href="./#___">___</a></li>
```
Changer l'adresse de billeterie dans l'attribut ```href``` de ```<a href="___" target="_blank">Billeterie</a>```

### --- teaser.php ---
Changer l'adresse du teaser dans l'attribut ```src``` de ```<iframe>```

### --- artistes.php ---
Image ```artiste0.png``` par défaut.
Photo des artistes dans ```img > artiste___.png```.
Remplir les Nom, Description et lien externes en fonction.

```div``` > Changer le style display en fonction du nombre d'artiste :
```
ON    <div style="display:block">
OFF   <div style="display:none">
```
```social-buttons``` > Changer le style display en fonction des liens externes artistes :
```
ON    <a href="___" target="_blank" style="display:inline">
OFF   <a href="___" target="_blank" style="display:none">
```

### --- ambiances.php ---
Photo des ambiances dans ```img > ambiance_.png```.
Changer les titres et description dans ```<h3>``` et ```<p>```.

```
TXT DROITE    <div class="col-sm-12 col-md-offset-7 col-md-5 ambiance-txt">
TXT GAUCHE    <div class="col-sm-12 col-md-5 ambiance-txt">
avant <h3>Titre</h3>
```

### --- galerie.php ---
Dans le dossier ```img > g___.png``` pour la miniature (200x200 px) et ```galerie___.jpg``` pour l'image originale.
Pour modifier une image, remplacer l'image dans ```img```.
Pour ajouter une image, ajouter à la suite :
```
<a href="img/galerie___.jpg" rel="shadowbox[1]"><img src="img/g___.png" /></a>
```

### --- restaurant.php ---
Juste le texte à changer.

### --- flaconnage.php ---
Juste le texte à changer. Pour changer l'image, remplacer ```flaconnage.png``` dans ```img```.

### --- infos.php ---
Juste le texte à changer. Pour changer l'```iframe``` de Google Maps, voir directement sur le site Google Maps et intégrer le code qu'il fournira.

### --- hotels.php ---
Juste le texte à changer.

### --- contact.php ---
Juste le texte à changer. Penser à modifier les liens ```<a href="___" target="_blanck"></a>``` (page Facebook) et les mails ```<a href="mailto:___@___" target="_blanck"></a>```

### --- partenaires.php ---
Dans le dossier ```img > partenaire___.png``` pour l'image. Penser à modifier les liens ```<a href="___" target="_blanck"></a>```
Pour modifier une image, remplacer l'image dans ```img```.
Pour ajouter une image, ajouter à la suite :
```
<a href="___" target="_blank"><img src="img/partenaire___.png" /></a>
```

### --- footer.php ---
Modifier le lien facebook ```<a href="___" target="_blank">```
