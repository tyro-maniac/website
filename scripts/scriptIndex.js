    const facts = [
      "Im Bundestag sind aktuell 630 Abgeordnete vertreten.",
      "Die erste Sitzung des Bundestags fand 1949 in Bonn statt.",
      "Der Bundestag hat seinen Sitz im Reichstagsgebäude in Berlin.",
      "Im Plenarsaal hängen über 20 Mikrofone für optimale Tonaufnahme.",
      "Der Bundesadler im Plenarsaal wird oft 'Fette Henne' genannt.",
      "Der Bundestag ist mit rund 3 Millionen Besuchern pro Jahr das meistbesuchte Parlamentsgebäude der Welt.",
      "Die Parlamentsstenographen schreiben im Schnitt 400 Silben pro Minute.",
      "In der Wahlperiode 2002-2005 wurden 13623 Fragen an die Bundesregierung gestellt und 643 Gesetze verabschiedet, das alles innerhalb von nur 187 Sitzungen.",
      "Reden im Bundestag sind öffentlich und können im <a href='https://www.youtube.com/@bundestag' class='no-deco' target='_blank'>Livestream</a> verfolgt werden.",
      "Die Sitzordnung im Bundestag ist nach politischem Spektrum (rechts - links) geordnet."
    ];

    let currentIndex = 0;

    const factText = document.getElementById('factText');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    function updateFact(index) {
      factText.innerHTML = facts[index];
    }

    prevArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + facts.length) % facts.length;
      updateFact(currentIndex);
    });

    nextArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % facts.length;
      updateFact(currentIndex);
    });