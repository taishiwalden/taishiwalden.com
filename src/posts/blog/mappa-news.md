---
title: "Mappa News"
category: "Code"
date: "2022-04-02 12:00:00 +09:00"
desc: "Minimum Viable Product for a startup idea called Mappa."
thumbnail: "./images/mappa-news/mappa-news-project.jpg"
alt: "Image of website mockup on a desktop for a startup that allows you to view global events on a map."
---

<img src="./images/mappa-news/mappa-news-project.jpg"
     alt="Image of website mockup on a desktop for a startup that allows you to view global events on a map."
     style="border-radius: 5px;" />

## Context

According to [Learning Theory Research](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=587201), nearly **65% of the general population are visual learners**, meaning they need to see information in order to retain it.

This prompted the creation of [Mappa](https://www.mappa.news/about): utilizing graphs, charts, maps, and other forms of visual stimulation to effectively illustrate current events and global news. To stand up a minimum viable product for my _"million dollar idea"_, I deduced it would be the most efficient to use HTML, CSS, and Vanilla JavaScript to create the blog, and utilize existing JavaScript Libraries like [MapBox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/).

> "Mapbox GL JS is a client-side JavaScript library for building web maps and web applications with Mapbox's modern mapping technology. You can use Mapbox GL JS to display Mapbox maps in a web browser or client, add user interactivity, and customize the map experience in your application."

### Featured Articles

<img src="./images/mappa-news/mappa-bri.jpg"
     alt="Screenshot of a Mappa news article describing the Belt and Road Initiative with an interactive map."
     style="border-radius: 5px;" />

> Readers can scroll on their device to move the map to the next point of interest and read about the Belt and Road Initiative and affiliated parties.

<img src="./images/mappa-news/mappa-seven-world-wonders.jpg"
     alt="Screenshot of a Mappa news article showcasing the 7 world wonders on an interactive map."
     style="border-radius: 5px;" />

> Given that the original Seven Wonders list was compiled in the 2nd century BCE, it seemed time for an update. [View the 7 World Wonders article here](https://www.mappa.news/seven-world-wonders).

<img src="./images/mappa-news/underwater-cities.jpg"
     alt="Screenshot of a Mappa news article depicting the first 12 major cities to go underwater due to climate change on an interactive map."
     style="border-radius: 5px;" />

> There is little doubt our oceans are rising and cities will go under. It is no longer an issue of if but when. [View the Underwater Cities article here](https://www.mappa.news/underwater-cities).

### Documentation

Although Mappa was initially built with the idea of giving visual learners more exposure to international relations and global politics, I developed a documentation page so that people could create interactive maps for other purposes–like mapping their study abroad program or travel plans.

<img src="./images/mappa-news/mappa-docs-1.jpg"
     alt="Screenshot of the Documentation section I created for Mappa, allowing users to create these maps themselves."
     style="border-radius: 5px;" />

#### HTML Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My First Mappa Map!</title>
    <link
      href="http://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" href="index.css" />
    <script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>
    <script src="https://unpkg.com/scrollama"></script>
    <script src="https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.js"></script>
    <link
      href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.0/mapbox-gl.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="map"></div>
    <div id="story"></div>
  </body>
</html>
```

#### JavaScript Template

```js
var config = {
    style: "mapbox://styles/taishiwalden/ckzovzbqj000714qnd5m3cdcm", //TODO
    accessToken: "pk.eyJ1IjoidGFpc2hpd2FsZGVuIiwiYSI6ImNrcXkzaWJvbzE0Zzgyd21mZHVjNDBvYmIifQ.E2__hXdmUMAPh2zjvGjJgw", //TODO
    title: "ADD TITLE", //TODO
    subtitle: "ADD SUBTITLE", //TODO
    byline: "By ADD NAME", //TODO
    footer: "©2022 ADD NAME",
    showMarkers: false,
    theme: "light",
    alignment: "left",
    chapters: [
        //ADD LOCATION INFORMATION
        {
            id: "48d352fe5c88b29680f9ce8d7a233191",
            title: "ADD TITLE",
            description:
                "ADD DESCRIPTION",
            location: {
                center: [72.823, 23.852],
                zoom: 2.26,
                pitch: 0,
                bearing: 0,
            },
        },
     ]
```

### Analytics

To measure the popularity of the project, I used **Google Analytics** to track web traffic, average time spent on the page, number of active users, as well as other key digital marketing indicators. I built a dashboard on **Google Data Studio** to allow for easy interpretation.

<img src="./images/mappa-news/mappa-analytics.jpg"
     alt="Image of a data analytics dashboard containing digital marketing insights about Mappa News."
     style="border-radius: 5px;" />

## View the live project: [Mappa News](https://www.mappa.news/seven-world-wonders)

## Skills

- HTML, CSS, JavaScript
- Mapbox Studio
- Mapbox GL JS
- Netlify
- Google Analytics
