# Projecte Outodoor Fitness 🏋️‍♂️🌿

El projecte **TGN Outdoor Fitness** neix amb l’objectiu de fomentar l’activitat física a l’aire lliure a la ciutat de Tarragona. Aquesta iniciativa aposta per aprofitar els espais urbans i naturals per crear rutes i circuits d’entrenament funcional, promovent hàbits de vida saludables entre la població.

Aquest treball s’emmarca dins l’àmbit de la *Geografia*, concretament en la branca de la geografia urbana i la planificació territorial. A través de l’anàlisi dels espais disponibles i la seva funcionalitat, s'ha elaborat una proposta que combina esport, salut pública i ocupació sostenible de l'espai urbà.

---

## 📋 Dades/Continguts

### Fonts de dades

Els continguts s’han elaborat a partir d’un projecte del *Departament de Geografia de la URV*, amb suport de fonts públiques com:

- [Ajuntament de Tarragona](https://www.tarragona.cat)
- [El Tiempo a Tarragona](https://www.eltiempo.es/tarragona.html)
- Materials propis del projecte

### Imatges

Les imatges utilitzades són:

- Propies i d’ús lliure
- Icons extrets de projectes de codi obert
- Optimitzades per garantir càrrega ràpida

---

## 🧭 Estructura de la Web

La web es compon de cinc seccions principals:

1. **Inici** – Presentació general del projecte
2. **Membres** – Participants del projecte
3. **Projecte** – Objectius i descripció detallada
4. **Mapa** – Espai destinat a cartografia del projecte (en desenvolupament)
5. **Contacte** – Secció per connectar amb l’equip

S'han pres decisions visuals com:

- Menú desplegable
- Botó de "Tornar amunt"
- Mode fosc/clar integrat

---

## 📱 Web responsive

Per fer la web adaptativa, s’han aplicat les següents tècniques:

- **Media queries** per adaptar-se a diferents resolucions de pantalla
- **Flexbox** per distribuir els continguts de forma fluida
- Imatges amb `width: 100%` per garantir compatibilitat

Exemple de codi CSS:
```css
@media screen and (max-width: 768px) {
  .projecte-titol h1 {
    font-size: 1.5rem;
  }
}
