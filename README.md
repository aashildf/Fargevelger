 The Little Fox`s Colorbook


<img width="600" alt="Skjermbilde 2026-01-03 153937" src="https://github.com/user-attachments/assets/11ecb4cd-cc7c-4c72-b2bb-8843cd43ac4c" />


Dette er en interaktiv fargeleggings-app bygget med React. Prosjektet lar brukere gi liv
til en håndtegnet rev ved hjelp av en fargepalett inspirert av klassisk animasjonsfilm.

Om prosjektet                                                                                               
Reven er opprinnelig designet i Figma og eksportert som en strukturert SVG. Hver kroppsdel er definertsom et
eget element, noe som muliggjør individuell fargelegging og interaktivitet.


Funksjonalitet                                                                                                
Interaktiv SVG: Klikk direkte på revens kroppsdeler (ører, hale, mage osv.) for å velge hva du vil fargelegge.
Dynamisk Fargevelger: Velg mellom forhåndsdefinerte farger som automatisk oppdaterer den valgte delen.
Sanntids-oppdatering: Endringer vises umiddelbart takket være Reacts state-håndtering.
Brukervennlig design: Responsive knapper for å nullstille (Start over) eller lagre bildet (Save picture).
Tydelige tekstindikatorer som viser hvilken del som er valgt.
Tilgjengelighet (A11y): Full støtte for tastaturnavigering (Tab) med tydelige fokusindikatorer og hover-effekter.

Teknisk oppbygging                                                                                                      
Prosjektet er bygget modulært for å sikre ren og vedlikeholdbar kode:                                                          
React (Vite): Bruker useState for å håndtere farge-data og valgte segmenter.                                                   
Komponentbasert: Logikken er delt mellom Figure (SVG-håndtering), ColorSelector (grensesnitt for farger) og hovedkomponenten App.
Avansert CSS: Bruk av clamp() for responsiv tekst, drop-shadow for visuell dybde, og transition for myke fargeoverganger.
Canvas API: Implementert funksjonalitet for å konvertere SVG til PNG for nedlasting.

Slik bruker du appen                                                                                                        
Velg del: Bruk dropdown-menyen eller klikk direkte på en del av reven.
Velg farge: Klikk på en av de harmoniske fargene i paletten.
Lagre: Når du er fornøyd, trykk på "Save picture" for å laste ned ditt eget kunstverk!
