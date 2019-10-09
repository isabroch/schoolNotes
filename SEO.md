## TITLES
Keyword - Keyword | Brand Name

e.g.
Kultur— og historiefortællinger | Tyra.dk
Om Hanne Fabricius | Tyra.dk
Arrangementer i 19/20 | Tyra.dk

Maks 55 tegn.





## META DESCRIPTION
Har mindre vægt i forhold til søgresultater, men er vigtig for at få menneskers opmærksomhed.
Relevante søgord bliver fremhævet hvis de står i meta descriptionen.

e.g.
Fabelagtige, fantastiske & finurlige fortællinger om Københavns historie. Historiske byvandringer, foredrag og bøger for børn og voksne ved Hanne Fabricius.

150 - 160 tegn er anbefallet.
Kvote "" og non-alpha tegn bliver slettet.





## NOTES ON SEO
### H1 in body vs inner section
H1 inside of section, article, aside are, by default, rendered and recognized as one step lower than H1 directly inside body.
Body > H1 == H1\
Body > Section > H1 == H2\
Body > Section > Section > H1 == H3

### Meta Description
Meta description is not necessarily gonna be shown - just as likely to take the first p tag directly beneath a H1, or take a relevant snippet.





## STRUKTUREREDE DATA
https://schema.org/docs/documents.html
Microdata can be used to give more context to a search engine.

Relevant attributes are:
* itemscope
  boolean that, when specified, says that everything within is part of structured data.
* itemtype
  a 'dictionary' or object defined via https://schema.org/docs/full.html.
* itemprop
  creates a key-value pair where itemprop val is the key and (usually) text wrapped is value. exceptions include href being used for url...
* itemref
  if your itemscope/type is in a seperate wrapper, ref tells it WHICH wrapper (by id) it should look for the data from.


God eksempel af mulighed for Strukturerede Data på tyra.dk
```html
<div itemscope itemtype="https://schema.org/Person">

<p>
  Ved <span itemprop="name">Hanne Fabricius</span>
  <span itemprop="jobTitle">Forfatter</span>, <span itemprop="jobTitle">historiefortæller</span>, <span itemprop="jobTitle">forlægger</span> og <span itemprop="jobTitle">arkæolog</span>
</p>

<p itemprop="affiliation" itemscope itemtype="https://schema.org/Organization">
  Medlem af <span itemprop="name">Dansk Forfatterforening & Københavns Byvandrerlaug</span>
  <a itemprop="url" href="http://danskforfatterforening.dk/hanne-fabricius-4297/">Hanne Fabricius på danskforfatterforening.dk</a>
</p>

</div>
```




## Sitemap
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://www.tyra.dk/</loc>
    <lastmod>2019-10-06</lastmod>
  </url>
  <url>
    <loc>http://www.tyra.dk/Baggrund.htm</loc>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>http://www.tyra.dk/Kalender.htm</loc>
  </url>
  <url>
    <loc>http://www.tyra.dk/Priser.htm</loc>
  </url>
</urlset>