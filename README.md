# Labb 2 i kursen Programmering i TypeScript, DT208G

Länk till applikationen:
https://ts-labb-2.netlify.app/

**Genomförd av joha2102**

Det här projektet är en enkel att-göra-lista byggd med TypeScript där fokus ligger på objektorienterad programmering (OOP), detta genom att dela upp ansvar i olika delar; en klass för funktionalitet, en för lagring och en fil för koppling till användargränssnittet. 

## Hur sidan fungerar

När sidan laddas hämtas tidigare todos från localStorage och laddas in i listan, vilket gör att sparade uppgifter finns kvar även efter uppdatering av sidan.

När användaren lägger till en ny todo skickas den till TodoList, där den sparas i en array och sedan visas i gränssnittet. Efter varje ändring sparas hela listan igen i localStorage.  


## Funktionalitet, Todolist

Kärnan i projektet är klassen TodoList, som ansvarar för hanteringen av alla todos. Istället för att hantera data direkt i main-filen hanteras allt i klassen, som har sin egen data och sina egna funktioner.

Varje todo representeras dessutom av ett interface (Todo) som beskriver hur ett todo-objekt ska se ut. Det gör att datam får en tydlig struktur och hjälper TypeScript kolla att rätt typ av data skickas in.


## Lagring, LocalStorageUtil

För att spara och ladda data används klassen LocalStorageUtil. Den sökter kommunikationen med localStorage. 

## Koppling, main

I main.ts kopplas allt ihop. Här hämtas data från DOM, användarens input hanteras och listan renderas på sidan.