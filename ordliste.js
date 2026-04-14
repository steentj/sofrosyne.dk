const GLOSSARY_TERMS = [
  {
    greek: "σωφροσύνη",
    transliteration: "sophrosyne",
    danish: "mådehold / besindighed",
    explanation: "Kernen i klassisk selvbeherskelse: lyst, følelse og fornuft holdes i en harmonisk orden.",
    links: {
      wiki: null,
      lex: "https://lex.dk/sofrosyne",
      sep: "https://plato.stanford.edu/entries/plato-ethics/#VirStaSou"
    }
  },
  {
    greek: "ἀρετή",
    transliteration: "arete",
    danish: "dyd / excellence",
    explanation: "Hos Platon og Aristoteles er arete den fremragende måde at udføre en funktion på.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dyd",
      lex: "https://lex.dk/dyd",
      sep: "https://plato.stanford.edu/entries/ethics-ancient/"
    }
  },
  {
    greek: "φρόνησις",
    transliteration: "phronesis",
    danish: "praktisk visdom",
    explanation: "Den dømmekraft, der finder det rette i konkrete situationer frem for abstrakt teori alene.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Viden",
      lex: "https://lex.dk/fronesis",
      sep: "https://plato.stanford.edu/search/searcher.py?query=phronesis"
    }
  },
  {
    greek: "σοφία",
    transliteration: "sophia",
    danish: "visdom",
    explanation: "Visdom som indsigt i de højeste principper; ofte skilt fra praktisk dømmekraft.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Visdom",
      lex: "https://lex.dk/sofia",
      sep: "https://plato.stanford.edu/entries/wisdom/"
    }
  },
  {
    greek: "δικαιοσύνη",
    transliteration: "dikaiosyne",
    danish: "retfærdighed",
    explanation: "I Staten bliver retfærdighed den orden, hvor hver del gør sit eget arbejde.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Retf%C3%A6rdighed",
      lex: "https://lex.dk/retf%C3%A6rdighed",
      sep: "https://plato.stanford.edu/entries/justice-virtue/"
    }
  },
  {
    greek: "ἀνδρεία",
    transliteration: "andreia",
    danish: "mod",
    explanation: "Mod er ikke dumdristighed, men standhaftighed over for frygt i det rette mål.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Mod_(følelse)",
      lex: null,
      sep: "https://plato.stanford.edu/entries/plato-ethics/"
    }
  },
  {
    greek: "εὐδαιμονία",
    transliteration: "eudaimonia",
    danish: "lykke / menneskelig blomstring",
    explanation: "Aristoteles' mål for livet: at leve vel gennem dydig aktivitet over et helt liv.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Den_nikomakhæiske_etik",
      lex: "https://lex.dk/lykke",
      sep: "https://plato.stanford.edu/entries/ethics-virtue/"
    }
  },
  {
    greek: "ψυχή",
    transliteration: "psyche",
    danish: "sjæl",
    explanation: "Sjælen forstås som livsprincip og som sæde for erkendelse, begær og karakter.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sj%C3%A6l",
      lex: "https://lex.dk/sj%C3%A6l",
      sep: "https://plato.stanford.edu/entries/ancient-soul/"
    }
  },
  {
    greek: "λόγος",
    transliteration: "logos",
    danish: "fornuft / tale / begrundelse",
    explanation: "Et nøgleord der spænder fra argument til verdensorden, afhængigt af forfatter og skole.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Logos",
      lex: "https://lex.dk/logos_-_i_filosofien",
      sep: "https://plato.stanford.edu/entries/plato-theaetetus/"
    }
  },
  {
    greek: "νοῦς",
    transliteration: "nous",
    danish: "intellekt",
    explanation: "Intellektet som evne til at gribe de første principper og det universelle.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Nous",
      lex: "https://lex.dk/fornuft",
      sep: "https://plato.stanford.edu/entries/aristotle-psychology/"
    }
  },
  {
    greek: "ἐπιστήμη",
    transliteration: "episteme",
    danish: "videnskabelig viden",
    explanation: "Sikker, begrundet viden om nødvendige sammenhænge, især i aristotelisk forstand.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Episteme",
      lex: "https://lex.dk/episteme",
      sep: "https://plato.stanford.edu/entries/episteme-techne/"
    }
  },
  {
    greek: "δόξα",
    transliteration: "doxa",
    danish: "mening / formodning",
    explanation: "Mening kan være sand eller falsk, men mangler den faste begrundelse i episteme.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Doxa",
      lex: "https://lex.dk/doksa",
      sep: "https://plato.stanford.edu/entries/plato-metaphysics/"
    }
  },
  {
    greek: "ἀλήθεια",
    transliteration: "aletheia",
    danish: "sandhed",
    explanation: "Sandhed som afdækning af det virkelige, både logisk og ontologisk forstået.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sandhed",
      lex: "https://lex.dk/sandhed",
      sep: "https://plato.stanford.edu/entries/truth/"
    }
  },
  {
    greek: "πίστις",
    transliteration: "pistis",
    danish: "tro / tillid",
    explanation: "Kan betyde både tro, loyalitet og overbevisning i retoriske og filosofiske tekster.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tro",
      lex: "https://lex.dk/tro",
      sep: "https://plato.stanford.edu/entries/aristotle-rhetoric/"
    }
  },
  {
    greek: "μνήμη",
    transliteration: "mneme",
    danish: "hukommelse",
    explanation: "Hos Aristoteles en særskilt psykisk funktion, vigtig for erfaring og læring.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hukommelse",
      lex: "https://lex.dk/erindring",
      sep: null
    }
  },
  {
    greek: "αἴσθησις",
    transliteration: "aisthesis",
    danish: "sansning",
    explanation: "Grundlaget for erfaring; hos Aristoteles indgangen til viden om det konkrete.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sansning",
      lex: "https://lex.dk/æstesi",
      sep: "https://plato.stanford.edu/entries/plato-theaetetus/"
    }
  },
  // Checket hertil 2027-04-14
  {
    greek: "πάθος",
    transliteration: "pathos",
    danish: "lidenskab / affekt",
    explanation: "Følelsesmæssig påvirkning, central i etik, retorik og tragedieteori.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Pathos",
      lex: "https://lex.dk/pathos",
      sep: null
    }
  },
  {
    greek: "ἔρως",
    transliteration: "eros",
    danish: "eros / begærende kærlighed",
    explanation: "Hos Platon en drivkraft, der kan løftes fra sanselig længsel til erkendelse af det skønne.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Eros",
      lex: "https://lex.dk/eros",
      sep: "https://plato.stanford.edu/entries/love/"
    }
  },
  {
    greek: "φιλία",
    transliteration: "philia",
    danish: "venskab",
    explanation: "Aristoteles ser venskab som en bærende social dyd og forudsætning for politisk fællesskab.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Venskab",
      lex: "https://lex.dk/venskab",
      sep: "https://plato.stanford.edu/entries/friendship/"
    }
  },
  {
    greek: "ἀγάπη",
    transliteration: "agape",
    danish: "næstekærlighed",
    explanation: "Begreb der især udvikles i senantikken, men bygger videre på græske kærlighedsbegreber.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Agape",
      lex: "https://lex.dk/agape",
      sep: null
    }
  },
  {
    greek: "ἡδονή",
    transliteration: "hedone",
    danish: "nydelse",
    explanation: "Et centralt diskussionsemne i etik: om nydelse er mål, middel eller ledsagefænomen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Nydelse",
      lex: "https://lex.dk/nydelse",
      sep: "https://plato.stanford.edu/entries/pleasure/"
    }
  },
  {
    greek: "λύπη",
    transliteration: "lype",
    danish: "smerte / sorg",
    explanation: "Modpol til nydelse i flere etiske analyser af menneskets motivation.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sorg",
      lex: "https://lex.dk/sorg",
      sep: null
    }
  },
  {
    greek: "φόβος",
    transliteration: "phobos",
    danish: "frygt",
    explanation: "I retorik en påvirkelig affekt; i etik et felt hvor modet trænes.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Frygt",
      lex: "https://lex.dk/frygt",
      sep: "https://plato.stanford.edu/entries/emotion/"
    }
  },
  {
    greek: "ὀργή",
    transliteration: "orge",
    danish: "vrede",
    explanation: "Aristoteles analyserer vrede som en socialt struktureret affekt med bestemte udløsere.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Vrede",
      lex: "https://lex.dk/vrede",
      sep: null
    }
  },
  {
    greek: "ἐπιθυμία",
    transliteration: "epithymia",
    danish: "begær",
    explanation: "Begærets styring er et omdrejningspunkt for både platonsk og stoisk etik.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Beg%C3%A6r",
      lex: "https://lex.dk/beg%C3%A6r",
      sep: "https://plato.stanford.edu/entries/desire/"
    }
  },
  {
    greek: "βούλησις",
    transliteration: "boulesis",
    danish: "vilje",
    explanation: "Viljen retter sig mod det, der fremtræder som godt, men kan formes af karakter.",
    links: {
      wiki: null,
      lex: "https://lex.dk/vilje",
      sep: "https://plato.stanford.edu/entries/desire/"
    }
  },
  {
    greek: "προαίρεσις",
    transliteration: "prohairesis",
    danish: "overvejet valg",
    explanation: "Hos Aristoteles det ansvarsbærende valg efter overvejelse af midler og mål.",
    links: {
      wiki: "https://en.wikipedia.org/wiki/Prohairesis",
      jstor: "https://www.jstor.org/stable/284144?",
      sep: "https://plato.stanford.edu/search/search?query=prohairesis"
    }
  },
  {
    greek: "βίος",
    transliteration: "bios",
    danish: "livsform",
    explanation: "Bruges om forskellige måder at leve på, fx det kontemplative eller politiske liv.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Bios",
      lex: null,
      sep: null
    }
  },
  {
    greek: "φύσις",
    transliteration: "physis",
    danish: "natur",
    explanation: "Natur som indre princip for bevægelse og udvikling, ikke kun ydre omgivelser.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Fyse",
      lex: "https://lex.dk/fyse",
      sep: "https://plato.stanford.edu/entries/aristotle-biology/"
    }
  },
  {
    greek: "νόμος",
    transliteration: "nomos",
    danish: "lov / norm",
    explanation: "Spændingen mellem natur og lov er et nøglespor i sofistik, politik og tragedie.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Nomos",
      lex: "https://lex.dk/lov",
      sep: null
    }
  },
  {
    greek: "πόλις",
    transliteration: "polis",
    danish: "bystat",
    explanation: "Den klassiske politiske ramme, hvor etik, uddannelse og lov tænkes sammen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Polis",
      lex: "https://lex.dk/polis",
      sep: "https://plato.stanford.edu/entries/ancient-political/"
    }
  },
  {
    greek: "πολιτεία",
    transliteration: "politeia",
    danish: "forfatning / statsorden",
    explanation: "Kan betyde både konstitution, borgerstatus og den overordnede politiske orden.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Politeia",
      lex: null,
      sep: "https://plato.stanford.edu/entries/ancient-political/"
    }
  },
  {
    greek: "πολίτης",
    transliteration: "polites",
    danish: "borger",
    explanation: "Borgeren defineres i antikken gennem deltagelse i dom, råd og offentlige embeder.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Borger",
      lex: "https://lex.dk/borger",
      sep: null
    }
  },
  {
    greek: "δημοκρατία",
    transliteration: "demokratia",
    danish: "demokrati",
    explanation: "Folkestyre i klassisk forstand, men med andre institutioner end moderne repræsentation.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Demokrati",
      lex: "https://lex.dk/demokrati",
      sep: "https://plato.stanford.edu/entries/democracy/"
    }
  },
  {
    greek: "ὀλιγαρχία",
    transliteration: "oligarchia",
    danish: "oligarki",
    explanation: "Styreform hvor få besidder magten, ofte begrundet med ejendom og social rang.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Oligarki",
      lex: "https://lex.dk/oligarki",
      sep: null
    }
  },
  {
    greek: "τυραννίς",
    transliteration: "tyrannis",
    danish: "tyranni",
    explanation: "Enevælde uden legitim forankring; et centralt advarselsmotiv hos både historikere og filosoffer.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tyranni",
      lex: "https://lex.dk/tyranni",
      sep: null
    }
  },
  {
    greek: "μοναρχία",
    transliteration: "monarchia",
    danish: "monarki",
    explanation: "Énmandsstyre, i antikken diskuteret både som legitim ordning og risiko for forfald.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Monarki",
      lex: "https://lex.dk/monarki",
      sep: null
    }
  },
  {
    greek: "ἀριστοκρατία",
    transliteration: "aristokratia",
    danish: "aristokrati",
    explanation: "Styret af de bedste i dyd eller dannelse, i klassisk teori en idealiseret forfatningsform.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Aristokrati",
      lex: "https://lex.dk/aristokrati",
      sep: null
    }
  },
  {
    greek: "ἰσονομία",
    transliteration: "isonomia",
    danish: "lighed for loven",
    explanation: "Tidligt politisk ideal om at loven gælder lige for frie borgere.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Isonomi",
      lex: null,
      sep: null
    }
  },
  {
    greek: "παρρησία",
    transliteration: "parrhesia",
    danish: "frimodig tale",
    explanation: "Modet til at tale sandt i det offentlige rum, også når det koster socialt.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Parrhesia",
      lex: null,
      sep: null
    }
  },
  {
    greek: "ἦθος",
    transliteration: "ethos",
    danish: "karakter / etos",
    explanation: "Hos Aristoteles både moralsk karakter og den troværdighed taleren udstråler.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Etos",
      lex: "https://lex.dk/etos",
      sep: "https://plato.stanford.edu/entries/moral-character/"
    }
  },
  {
    greek: "ἔθος",
    transliteration: "ethos-habit",
    danish: "vane / skik",
    explanation: "Gentaget praksis former karakteren; derfor er etikken tæt forbundet med opdragelse.",
    links: {
      wiki: null,
      lex: "https://lex.dk/vane",
      sep: "https://plato.stanford.edu/entries/aristotle-ethics/"
    }
  },
  {
    greek: "ἕξις",
    transliteration: "hexis",
    danish: "disposition / habitus",
    explanation: "En stabil tillært tilbøjelighed, der gør bestemte handlinger lettere og mere naturlige.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Heksis",
      lex: null,
      sep: "https://plato.stanford.edu/entries/aristotle-ethics/"
    }
  },
  {
    greek: "μεσότης",
    transliteration: "mesotes",
    danish: "midte-princippet",
    explanation: "Aristoteles' idé om dyd som den passende midte mellem overskud og mangel.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Den_gyldne_middelvej",
      lex: "https://lex.dk/gyldne_middelvej",
      sep: "https://plato.stanford.edu/entries/aristotle-ethics/"
    }
  },
  {
    greek: "τέλος",
    transliteration: "telos",
    danish: "mål / formål",
    explanation: "Alt forstås gennem sit formål; teleologi er bærende i aristotelisk naturfilosofi.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Telos",
      lex: "https://lex.dk/form%C3%A5l",
      sep: "https://plato.stanford.edu/entries/teleology-biology/"
    }
  },
  {
    greek: "αἰτία",
    transliteration: "aitia",
    danish: "årsag / forklaring",
    explanation: "Aristoteles' fire årsager er fire forklaringsmåder, ikke kun lineær fysisk kausalitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Aristoteles%27_fire_%C3%A5rsager",
      lex: "https://lex.dk/%C3%A5rsag",
      sep: "https://plato.stanford.edu/entries/aristotle-causality/"
    }
  },
  {
    greek: "οὐσία",
    transliteration: "ousia",
    danish: "substans / væsen",
    explanation: "Det, der eksisterer i sig selv, og som bærer egenskaber og forandringer.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ousia",
      lex: "https://lex.dk/substans",
      sep: "https://plato.stanford.edu/entries/substance/"
    }
  },
  {
    greek: "συμβεβηκός",
    transliteration: "symbebekos",
    danish: "tilfældig egenskab",
    explanation: "En egenskab der kan ændres uden at tingens grundlæggende væsen ophører.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "ὕλη",
    transliteration: "hyle",
    danish: "stof / materie",
    explanation: "Materie som mulighedsbærer, der får form gennem struktur og funktion.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hyle",
      lex: "https://lex.dk/materie",
      sep: "https://plato.stanford.edu/entries/aristotle-metaphysics/"
    }
  },
  {
    greek: "μορφή",
    transliteration: "morphe",
    danish: "form",
    explanation: "Formen gør en ting til netop den slags ting, den er.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Form_(filosofi)",
      lex: "https://lex.dk/form",
      sep: "https://plato.stanford.edu/entries/aristotle-metaphysics/"
    }
  },
  {
    greek: "ἐνέργεια",
    transliteration: "energeia",
    danish: "virkeliggørelse / aktualitet",
    explanation: "Det fuldt udfoldede virke i modsætning til blot mulighed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Energeia",
      lex: "https://lex.dk/energeia",
      sep: "https://plato.stanford.edu/entries/aristotle-metaphysics/"
    }
  },
  {
    greek: "δύναμις",
    transliteration: "dynamis",
    danish: "potentiale / kraft",
    explanation: "Evnen til at kunne blive eller gøre noget, før det aktualiseres.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dynamis",
      lex: "https://lex.dk/dynamis",
      sep: "https://plato.stanford.edu/entries/aristotle-metaphysics/"
    }
  },
  {
    greek: "κίνησις",
    transliteration: "kinesis",
    danish: "bevægelse / forandring",
    explanation: "Hos Aristoteles enhver overgang fra potentiale til aktualitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Kinesis",
      lex: "https://lex.dk/bev%C3%A6gelse",
      sep: "https://plato.stanford.edu/entries/change/"
    }
  },
  {
    greek: "γένεσις",
    transliteration: "genesis",
    danish: "tilblivelse",
    explanation: "Begrebet for opkomst og dannelse, ofte sat op imod det varigt værende.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Genesis",
      lex: "https://lex.dk/tilblivelse",
      sep: null
    }
  },
  {
    greek: "φθορά",
    transliteration: "phthora",
    danish: "forfald / undergang",
    explanation: "Modstykket til tilblivelse: den proces hvor noget ophører med at være det, det var.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "χρόνος",
    transliteration: "chronos",
    danish: "tid",
    explanation: "Tid behandles både kosmologisk, fysisk og eksistentielt i antikkens traditioner.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tid",
      lex: "https://lex.dk/tid",
      sep: null
    }
  },
  {
    greek: "τόπος",
    transliteration: "topos",
    danish: "sted",
    explanation: "Aristoteles analyserer sted som den nærmeste omsluttende grænse for en krop.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Topos",
      lex: "https://lex.dk/topos",
      sep: null
    }
  },
  {
    greek: "ἄπειρον",
    transliteration: "apeiron",
    danish: "det ubegrænsede",
    explanation: "Hos de tidlige naturfilosoffer et grundprincip uden fast afgrænsning.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Apeiron",
      lex: "https://lex.dk/apeiron",
      sep: null
    }
  },
  {
    greek: "πέρας",
    transliteration: "peras",
    danish: "grænse / afgrænsning",
    explanation: "Det, der giver form og mål; vigtigt i pythagoræisk og platonsk tænkning.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "ἀρχή",
    transliteration: "arche",
    danish: "oprindelsesprincip",
    explanation: "Grundbegreb i naturfilosofien: hvad alt udspringer af eller styres af.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Arche",
      lex: "https://lex.dk/arche",
      sep: "https://plato.stanford.edu/entries/aristotle-metaphysics/"
    }
  },
  {
    greek: "στοιχεῖον",
    transliteration: "stoicheion",
    danish: "element",
    explanation: "De grundbestanddele hvoraf komplekse ting menes opbygget.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Klassisk_element",
      lex: "https://lex.dk/element",
      sep: null
    }
  },
  {
    greek: "κόσμος",
    transliteration: "kosmos",
    danish: "ordnet verden",
    explanation: "Verden forstået som kosmos antyder orden, proportion og intelligibel struktur.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Kosmos",
      lex: "https://lex.dk/kosmos",
      sep: "https://plato.stanford.edu/entries/plato-timaeus/"
    }
  },
  {
    greek: "χάος",
    transliteration: "chaos",
    danish: "kaos / urtomhed",
    explanation: "I tidlig græsk tænkning ikke kun uorden, men et urtomt åbent rum.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Kaos",
      lex: "https://lex.dk/kaos",
      sep: null
    }
  },
  {
    greek: "ἰδέα",
    transliteration: "idea",
    danish: "idé",
    explanation: "Hos Platon de intelligible former, som sanselige ting kun deltager i.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Id%C3%A9l%C3%A6re",
      lex: "https://lex.dk/id%C3%A9",
      sep: "https://plato.stanford.edu/entries/plato-metaphysics/"
    }
  },
  {
    greek: "εἶδος",
    transliteration: "eidos",
    danish: "form / art",
    explanation: "Kan betyde synlig skikkelse eller begrebslig form, afhængigt af konteksten.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Eidos",
      lex: null,
      sep: "https://plato.stanford.edu/entries/plato-metaphysics/"
    }
  },
  {
    greek: "ὄν",
    transliteration: "on",
    danish: "det værende",
    explanation: "Kernen i ontologi: hvad det vil sige at være, og i hvilke betydninger.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ontologi",
      lex: "https://lex.dk/ontologi",
      sep: "https://plato.stanford.edu/entries/aristotle-metaphysics/"
    }
  },
  {
    greek: "μίμησις",
    transliteration: "mimesis",
    danish: "efterligning",
    explanation: "Nøglebegreb i kunstteori: hvordan digtning og drama afbilder handling og karakter.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Mimesis",
      lex: "https://lex.dk/mimesis",
      sep: "https://plato.stanford.edu/entries/plato-aesthetics/"
    }
  },
  {
    greek: "κάθαρσις",
    transliteration: "katharsis",
    danish: "renselse",
    explanation: "Aristoteles' tragediebegreb: følelsesbearbejdning gennem frygt og medlidenhed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Katharsis",
      lex: "https://lex.dk/katharsis",
      sep: "https://plato.stanford.edu/entries/aristotle-aesthetics/"
    }
  },
  {
    greek: "τραγῳδία",
    transliteration: "tragoidia",
    danish: "tragedie",
    explanation: "Dramatisk form der undersøger skyld, skæbne og handlingens uforudsigelige følger.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tragedie",
      lex: "https://lex.dk/tragedie",
      sep: "https://plato.stanford.edu/entries/aristotle-aesthetics/"
    }
  },
  {
    greek: "κωμῳδία",
    transliteration: "komoidia",
    danish: "komedie",
    explanation: "Komedien tematiserer normer og magt gennem satire, inversion og social kritik.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Komedie",
      lex: "https://lex.dk/komedie",
      sep: null
    }
  },
  {
    greek: "ῥητορική",
    transliteration: "rhetorike",
    danish: "retorik",
    explanation: "Læren om overbevisning i tale, hvor ethos, logos og pathos kombineres.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Retorik",
      lex: "https://lex.dk/retorik",
      sep: "https://plato.stanford.edu/entries/aristotle-rhetoric/"
    }
  },
  {
    greek: "διαλεκτική",
    transliteration: "dialektike",
    danish: "dialektik",
    explanation: "Samtalekunst og argumentationsmetode til at afprøve begreber og modsætninger.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dialektik",
      lex: "https://lex.dk/dialektik",
      sep: "https://plato.stanford.edu/entries/logic-ancient/"
    }
  },
  {
    greek: "λογική",
    transliteration: "logike",
    danish: "logik",
    explanation: "Formallæren om gyldige slutninger, systematiseret særligt i aristotelisk tradition.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Logik",
      lex: "https://lex.dk/logik",
      sep: "https://plato.stanford.edu/entries/aristotle-logic/"
    }
  },
  {
    greek: "ἀπόδειξις",
    transliteration: "apodeixis",
    danish: "bevis / demonstration",
    explanation: "En streng argumentform, hvor konklusionen følger nødvendigt af første principper.",
    links: {
      wiki: null,
      lex: null,
      sep: "https://plato.stanford.edu/entries/aristotle-logic/"
    }
  },
  {
    greek: "συλλογισμός",
    transliteration: "syllogismos",
    danish: "slutning / syllogisme",
    explanation: "Aristoteles' grundstruktur for deduktiv argumentation.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Syllogisme",
      lex: "https://lex.dk/syllogisme",
      sep: "https://plato.stanford.edu/entries/aristotle-logic/"
    }
  },
  {
    greek: "ἐπαγωγή",
    transliteration: "epagoge",
    danish: "induktion",
    explanation: "Overgangen fra mange enkelttilfælde til en almen indsigt eller regel.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Induktion_(logik)",
      lex: "https://lex.dk/induktion",
      sep: "https://plato.stanford.edu/entries/aristotle-logic/"
    }
  },
  {
    greek: "ἀπορία",
    transliteration: "aporia",
    danish: "vanskelighed / rådvilde",
    explanation: "Sokratisk og aristotelisk teknik: begynd med problemet før løsningen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Apori",
      lex: "https://lex.dk/apori",
      sep: "https://plato.stanford.edu/entries/socrates/"
    }
  },
  {
    greek: "θαῦμα",
    transliteration: "thauma",
    danish: "forundring",
    explanation: "Forundringen udpeges som filosofiens begyndelse hos både Platon og Aristoteles.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Filosofi",
      lex: "https://lex.dk/forundring",
      sep: null
    }
  },
  {
    greek: "ἱστορία",
    transliteration: "historia",
    danish: "undersøgelse / historie",
    explanation: "Oprindeligt aktiv undersøgelse; hos Thukydid bliver det metodisk historieskrivning.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Historiografi",
      lex: "https://lex.dk/historiografi",
      sep: null
    }
  },
  {
    greek: "πόλεμος",
    transliteration: "polemos",
    danish: "krig",
    explanation: "Krig analyseres i antikken både strategisk, etisk og antropologisk.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Krig",
      lex: "https://lex.dk/krig",
      sep: null
    }
  },
  {
    greek: "εἰρήνη",
    transliteration: "eirene",
    danish: "fred",
    explanation: "Fred opfattes som mere end fravær af krig: en orden med ret og stabilitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Fred",
      lex: "https://lex.dk/fred",
      sep: null
    }
  },
  {
    greek: "στάσις",
    transliteration: "stasis",
    danish: "borgerstrid",
    explanation: "Thukydids analyser af stasis viser, hvordan sprog og normer kollapser i kriser.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Thukydid",
      lex: "https://lex.dk/stasis",
      sep: null
    }
  },
  {
    greek: "συμμαχία",
    transliteration: "symmachia",
    danish: "alliance",
    explanation: "I græsk politik et nøglebegreb for magtbalance mellem bystater.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Alliance",
      lex: "https://lex.dk/alliance",
      sep: null
    }
  },
  {
    greek: "ναυτικόν",
    transliteration: "nautikon",
    danish: "sømilitær magt",
    explanation: "Athens imperialmagt byggede i høj grad på flådekapacitet og havkontrol.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Fl%C3%A5de",
      lex: "https://lex.dk/fl%C3%A5de",
      sep: null
    }
  },
  {
    greek: "ἰατρική",
    transliteration: "iatrike",
    danish: "lægekunst",
    explanation: "Medicinen bruges ofte som analogi for etisk og politisk behandling af fællesskabet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/L%C3%A6gekunst",
      lex: "https://lex.dk/l%C3%A6gekunst",
      sep: null
    }
  },
  {
    greek: "τέχνη",
    transliteration: "techne",
    danish: "kunst / håndværkskunnen",
    explanation: "Tekhne er regelbundet kunnen med et formål, ikke blot spontan dygtighed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tekhne",
      lex: "https://lex.dk/teknik",
      sep: null
    }
  },
  {
    greek: "παιδεία",
    transliteration: "paideia",
    danish: "dannelse",
    explanation: "Helhedsorienteret formning af karakter, smag og dømmekraft i bystatens kultur.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Paideia",
      lex: "https://lex.dk/paideia",
      sep: null
    }
  },
  {
    greek: "μουσική",
    transliteration: "mousike",
    danish: "musisk opdragelse",
    explanation: "Omfatter poesi, rytme og musik som karakterdannende praksis, ikke kun lydkunst.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Musik",
      lex: "https://lex.dk/musik",
      sep: null
    }
  },
  {
    greek: "γυμναστική",
    transliteration: "gymnastike",
    danish: "kropslig træning",
    explanation: "Sammen med musik udgør gymnastik en klassisk dobbeltakse i opdragelsen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Gymnastik",
      lex: "https://lex.dk/gymnastik",
      sep: null
    }
  },
  {
    greek: "ἄσκησις",
    transliteration: "askesis",
    danish: "øvelse / disciplin",
    explanation: "Vedvarende træning af opmærksomhed og vane, især i stoisk og senere asketisk tradition.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Askese",
      lex: "https://lex.dk/askese",
      sep: null
    }
  },
  {
    greek: "σωτηρία",
    transliteration: "soteria",
    danish: "redning / frelse",
    explanation: "Kan betyde både konkret sikkerhed og eksistentiel frelse, alt efter sammenhæng.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Frelse",
      lex: "https://lex.dk/frelse",
      sep: null
    }
  },
  {
    greek: "μοῖρα",
    transliteration: "moira",
    danish: "lod / skæbneandel",
    explanation: "Skæbne forstået som den tildelte andel i en større orden, især i tragedien.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Moirer",
      lex: "https://lex.dk/moira",
      sep: "https://plato.stanford.edu/entries/fatalism/"
    }
  },
  {
    greek: "τύχη",
    transliteration: "tyche",
    danish: "tilfældighed / lykke",
    explanation: "Fortuna-dimensionen i handling: ikke alt kan planlægges eller kontrolleres.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tyche",
      lex: "https://lex.dk/tilf%C3%A6ldighed",
      sep: null
    }
  },
  {
    greek: "ἀνάγκη",
    transliteration: "ananke",
    danish: "nødvendighed",
    explanation: "Det uafvendelige i natur, logik eller skæbne; en grænse for menneskelig frihed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ananke",
      lex: "https://lex.dk/n%C3%B8dvendighed",
      sep: "https://plato.stanford.edu/entries/fatalism/"
    }
  },
  {
    greek: "ἐλευθερία",
    transliteration: "eleutheria",
    danish: "frihed",
    explanation: "I antikken knyttet til borgerstatus, selvstyre og fravær af herredømme.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Frihed",
      lex: "https://lex.dk/frihed",
      sep: "https://plato.stanford.edu/entries/freedom-ancient/"
    }
  },
  {
    greek: "δουλεία",
    transliteration: "douleia",
    danish: "slaveri / ufrihed",
    explanation: "Et socialt og politisk grundvilkår i antikken, der udfordrer idealet om frihed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Slaveri",
      lex: "https://lex.dk/slaveri",
      sep: null
    }
  },
  {
    greek: "αὐτάρκεια",
    transliteration: "autarkeia",
    danish: "selvtilstrækkelighed",
    explanation: "Et ideal om at kunne stå i sig selv, personligt eller politisk.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Autarki",
      lex: "https://lex.dk/autarki",
      sep: "https://plato.stanford.edu/entries/aristotle-ethics/"
    }
  },
  {
    greek: "κοινωνία",
    transliteration: "koinonia",
    danish: "fællesskab",
    explanation: "Social deltagelse og deling af livsform; centralt i antikkens politiske antropologi.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/F%C3%A6llesskab",
      lex: "https://lex.dk/f%C3%A6llesskab",
      sep: null
    }
  },
  {
    greek: "κρίσις",
    transliteration: "krisis",
    danish: "bedømmelse / krise",
    explanation: "At skelne og dømme; i historiske tekster også vendepunkt eller kritisk situation.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Krise",
      lex: "https://lex.dk/krise",
      sep: null
    }
  },
  {
    greek: "ὑπόληψις",
    transliteration: "hypolepsis",
    danish: "antagelse",
    explanation: "Foreløbig opfattelse der styrer handling, men kræver kritisk afprøvning.",
    links: {
      wiki: null,
      lex: "https://lex.dk/antagelse",
      sep: null
    }
  },
  {
    greek: "σχολή",
    transliteration: "schole",
    danish: "studietid / fritid",
    explanation: "Oprindeligt fri tid til fordybelse; roden bag ordet skole.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Skole",
      lex: "https://lex.dk/skole",
      sep: null
    }
  },
  {
    greek: "θεωρία",
    transliteration: "theoria",
    danish: "kontemplation / teori",
    explanation: "Betragtende erkendelse af det universelle, ofte sat højere end rent nyttige aktiviteter.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Teori",
      lex: "https://lex.dk/teori",
      sep: "https://plato.stanford.edu/entries/aristotle-ethics/"
    }
  },
  {
    greek: "πρᾶξις",
    transliteration: "praxis",
    danish: "handling / praksis",
    explanation: "Menneskelig handling, hvor målet ligger i selve udførelsen og dens kvalitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Praxis",
      lex: "https://lex.dk/praksis",
      sep: "https://plato.stanford.edu/entries/aristotle-ethics/"
    }
  },
  {
    greek: "ποίησις",
    transliteration: "poiesis",
    danish: "frembringelse",
    explanation: "Produktion hvor målet ligger i et ydre resultat, fx et værk eller redskab.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Poiesis",
      lex: null,
      sep: "https://plato.stanford.edu/entries/aristotle-aesthetics/"
    }
  },
  {
    greek: "ἔργον",
    transliteration: "ergon",
    danish: "funktion / værk",
    explanation: "Aristoteles' funktion-argument spørger hvad menneskets særlige opgave er.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ergon-argument",
      lex: null,
      sep: "https://plato.stanford.edu/entries/aristotle-ethics/"
    }
  },
  {
    greek: "καλός",
    transliteration: "kalos",
    danish: "skøn / nobel",
    explanation: "Ordet dækker både æstetisk skønhed og moralsk værdighed i klassisk græsk.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sk%C3%B8nhed",
      lex: "https://lex.dk/sk%C3%B8nhed",
      sep: "https://plato.stanford.edu/entries/beauty/"
    }
  },
  {
    greek: "ἀγαθός",
    transliteration: "agathos",
    danish: "god",
    explanation: "Et vurderingsord der i etikken peger mod det efterstræbelsesværdige.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Det_gode",
      lex: "https://lex.dk/det_gode",
      sep: null
    }
  },
  {
    greek: "κακία",
    transliteration: "kakia",
    danish: "last / dårlig karakter",
    explanation: "Det modsatte af dyd: en stabil dårlig disposition i handling og dømmekraft.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Last_(etik)",
      lex: "https://lex.dk/last",
      sep: null
    }
  },
  {
    greek: "ἐγκράτεια",
    transliteration: "enkrateia",
    danish: "selvbeherskelse",
    explanation: "Evnen til at handle rigtigt trods modstridende begær.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Enkrateia",
      lex: null,
      sep: "https://plato.stanford.edu/entries/weakness-will/"
    }
  },
  {
    greek: "ἀκρασία",
    transliteration: "akrasia",
    danish: "svag vilje",
    explanation: "At vide hvad der er bedst, men alligevel handle imod bedre viden.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Akrasia",
      lex: null,
      sep: "https://plato.stanford.edu/entries/weakness-will/"
    }
  },
  {
    greek: "ἡγεμονικόν",
    transliteration: "hegemonikon",
    danish: "styrende fornuftdel",
    explanation: "Stoisk term for den ledende del af sjælen, som skal holdes fri og klar.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "καθήκον",
    transliteration: "kathekon",
    danish: "passende handling",
    explanation: "Stoisk idé om handlinger, der passer til rolle, relation og natur.",
    links: {
      wiki: null,
      lex: null,
      sep: "https://plato.stanford.edu/entries/stoicism/"
    }
  },
  {
    greek: "οἰκείωσις",
    transliteration: "oikeiosis",
    danish: "tilegnelse / naturlig orientering",
    explanation: "Stoisk teori om hvordan omsorg udvides fra selvet til familie og medborgere.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Oikeiosis",
      lex: null,
      sep: null
    }
  },
  {
    greek: "ἀταραξία",
    transliteration: "ataraxia",
    danish: "urokket ro",
    explanation: "Målet i flere hellenistiske skoler: et sind uden forstyrrende angst og tumult.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ataraxia",
      lex: null,
      sep: "https://plato.stanford.edu/entries/epicurus/"
    }
  },
  {
    greek: "ἀπονία",
    transliteration: "aponia",
    danish: "fravær af smerte",
    explanation: "Epikuræisk nøglebegreb for kropslig veltilstand som del af det gode liv.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Epikur%C3%A6isme",
      lex: null,
      sep: null
    }
  },
  {
    greek: "μακαρία",
    transliteration: "makaria",
    danish: "salighed / velsignet lykke",
    explanation: "Bruges om en højere lykketilstand, ofte med religiøse eller metafysiske overtoner.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "κενός",
    transliteration: "kenos",
    danish: "tom / forgæves",
    explanation: "Epikuræisk kritik af tomme begær og meninger uden naturligt grundlag.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "δόγμα",
    transliteration: "dogma",
    danish: "læresætning",
    explanation: "Fastslået tese i en skoletradition; hos stoikere ofte med praktisk konsekvens.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dogme",
      lex: "https://lex.dk/dogme",
      sep: null
    }
  },
  {
    greek: "σκεπτικός",
    transliteration: "skeptikos",
    danish: "skeptisk",
    explanation: "Henviser til den skeptiske tradition, hvor dom tilbageholdes for at opnå sindsro.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Skepticisme",
      lex: "https://lex.dk/skepticisme",
      sep: null
    }
  },
  {
    greek: "ἐποχή",
    transliteration: "epoche",
    danish: "domsophævelse",
    explanation: "Skeptisk metode: udsæt dommen når lige stærke grunde taler for og imod.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Epokhe",
      lex: null,
      sep: null
    }
  },
  {
    greek: "φαντασία",
    transliteration: "phantasia",
    danish: "forestilling",
    explanation: "Indtryk eller forestilling i sjælen, som kan være mere eller mindre pålidelig.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Fantasi",
      lex: "https://lex.dk/fantasi",
      sep: null
    }
  },
  {
    greek: "συγκατάθεσις",
    transliteration: "synkatathesis",
    danish: "tilslutning",
    explanation: "Stoisk begreb for når sindet giver samtykke til en forestilling som sand.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "φαντασία καταληπτική",
    transliteration: "phantasia kataleptike",
    danish: "gribende forestilling",
    explanation: "Stoisk kriterium for et særligt overbevisende og sandheds-nært indtryk.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "κατηγορία",
    transliteration: "kategoria",
    danish: "kategori",
    explanation: "Aristoteles' grundmåder hvorpå noget kan siges at være.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Kategori_(filosofi)",
      lex: "https://lex.dk/kategori",
      sep: null
    }
  },
  {
    greek: "γένος",
    transliteration: "genos",
    danish: "slægt / genus",
    explanation: "Logisk overbegreb der samler flere arter under en fælles ramme.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Genus",
      lex: "https://lex.dk/genus",
      sep: null
    }
  },
  {
    greek: "εἶδος (λογικόν)",
    transliteration: "eidos-logikon",
    danish: "art / species",
    explanation: "Den logiske undergruppe inden for et genus, defineret ved særlige kendetegn.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Species",
      lex: "https://lex.dk/species",
      sep: null
    }
  },
  {
    greek: "διαφορά",
    transliteration: "diaphora",
    danish: "artsforskel",
    explanation: "Den differentierende egenskab, der adskiller en art fra andre i samme slægt.",
    links: {
      wiki: null,
      lex: "https://lex.dk/forskel",
      sep: null
    }
  },
  {
    greek: "ὁρισμός",
    transliteration: "horismos",
    danish: "definition",
    explanation: "Definitionen søger at indfange et begrebs væsen og afgrænse det præcist.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Definition",
      lex: "https://lex.dk/definition",
      sep: null
    }
  },
  {
    greek: "τόποι",
    transliteration: "topoi",
    danish: "argumentsteder",
    explanation: "Retoriske og dialektiske mønstre, der hjælper med at finde argumenter.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Topik",
      lex: "https://lex.dk/topik",
      sep: null
    }
  },
  {
    greek: "ἔλεγχος",
    transliteration: "elenchos",
    danish: "modbevisning",
    explanation: "Sokratisk praksis for at afprøve påstande gennem spørgsmål og selvmodsigelser.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Elenchus",
      lex: null,
      sep: null
    }
  },
  {
    greek: "μαῖευσις",
    transliteration: "maieusis",
    danish: "jordemoderkunst",
    explanation: "Sokratisk metafor: læreren hjælper erkendelse frem i stedet for at levere færdige svar.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Maieutik",
      lex: null,
      sep: null
    }
  },
  {
    greek: "ὁμολογία",
    transliteration: "homologia",
    danish: "tilsluttet enighed",
    explanation: "I dialogen det punkt hvor samtalepartneren accepterer en præmis eller konsekvens.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "νόησις",
    transliteration: "noesis",
    danish: "intellektuel indsigt",
    explanation: "Den højeste erkendelsesform i flere klassiske modeller, over sansning og mening.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Noesis",
      lex: null,
      sep: "https://plato.stanford.edu/entries/aristotle-psychology/"
    }
  },
  {
    greek: "διάνοια",
    transliteration: "dianoia",
    danish: "diskursiv tænkning",
    explanation: "Trinvis tænkning med argumenter og mellemled, i modsætning til umiddelbar indsigt.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dianoia",
      lex: null,
      sep: "https://plato.stanford.edu/entries/aristotle-psychology/"
    }
  },
  {
    greek: "ἀνάμνησις",
    transliteration: "anamnesis",
    danish: "erindring",
    explanation: "Platons tanke om at læring kan forstås som gen-erindring af allerede kendt sandhed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Anamnese",
      lex: "https://lex.dk/anamnese",
      sep: "https://plato.stanford.edu/entries/plato-metaphysics/"
    }
  },
  {
    greek: "σῶμα",
    transliteration: "soma",
    danish: "krop",
    explanation: "Kroppens rolle diskuteres fra dualistiske til mere integrerede sjæl-krop modeller.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Krop",
      lex: "https://lex.dk/krop",
      sep: "https://plato.stanford.edu/entries/ancient-soul/"
    }
  },
  {
    greek: "πνεῦμα",
    transliteration: "pneuma",
    danish: "åndedræt / ånd",
    explanation: "I stoisk kosmologi et aktivt, gennemtrængende princip i naturen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Pneuma",
      lex: "https://lex.dk/pneuma",
      sep: "https://plato.stanford.edu/entries/stoicism/"
    }
  },
  {
    greek: "κόσμησις",
    transliteration: "kosmesis",
    danish: "ordning / udsmykning",
    explanation: "Peger på idéen om ordnet struktur, beslægtet med ordet kosmos.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "ἁρμονία",
    transliteration: "harmonia",
    danish: "harmoni",
    explanation: "Forholdet mellem dele i afstemt orden, centralt i etik, musik og kosmologi.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Harmoni",
      lex: "https://lex.dk/harmoni",
      sep: null
    }
  },
  {
    greek: "μέτρον",
    transliteration: "metron",
    danish: "mål / målestok",
    explanation: "Mådeholdets mål-princip: det passende frem for det ekstreme.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/M%C3%A5l",
      lex: "https://lex.dk/m%C3%A5l",
      sep: null
    }
  },
  {
    greek: "ὕβρις",
    transliteration: "hybris",
    danish: "overmod",
    explanation: "Overskridelse af grænser, ofte efterfulgt af korrektion i tragedie og moralfortælling.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hybris",
      lex: "https://lex.dk/hybris",
      sep: "https://plato.stanford.edu/entries/aristotle-rhetoric/"
    }
  },
  {
    greek: "νέμεσις",
    transliteration: "nemesis",
    danish: "gengældende retfærdighed",
    explanation: "Begreb for genoprettende modvægt når grænser og mål krænkes.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Nemesis",
      lex: "https://lex.dk/nemesis",
      sep: null
    }
  },
  {
    greek: "δίκη",
    transliteration: "dike",
    danish: "ret / dom",
    explanation: "Retfærdighedens konkrete udtryk i lov, dom og social orden.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dike",
      lex: null,
      sep: null
    }
  },
  {
    greek: "ἀλήθεια πρακτική",
    transliteration: "aletheia praktike",
    danish: "praktisk sandhed",
    explanation: "Sandhed i handling: at vurdering og valg svarer til den konkrete virkelighed.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "συμφέρον",
    transliteration: "sympheron",
    danish: "det gavnlige",
    explanation: "Vurderingen af hvad der tjener fællesskabet eller individets egentlige bedste.",
    links: {
      wiki: null,
      lex: "https://lex.dk/gavn",
      sep: null
    }
  },
  {
    greek: "κοινόν",
    transliteration: "koinon",
    danish: "det fælles",
    explanation: "Nøgleord i politik: hvad borgere deler som fælles anliggende og ansvar.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/F%C3%A6llesgode",
      lex: "https://lex.dk/f%C3%A6llesgode",
      sep: null
    }
  },
  {
    greek: "ἴδιον",
    transliteration: "idion",
    danish: "det private / særegne",
    explanation: "Kontrast til det fælles: den private sfære eller en arts særlige egenskab.",
    links: {
      wiki: null,
      lex: "https://lex.dk/privat",
      sep: null
    }
  },
  {
    greek: "φιλόσοφος",
    transliteration: "philosophos",
    danish: "filosof",
    explanation: "Den der elsker visdom; idealet spænder fra dialogpartner til livsvejleder.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Filosof",
      lex: "https://lex.dk/filosof",
      sep: null
    }
  },
  {
    greek: "φιλοσοφία",
    transliteration: "philosophia",
    danish: "filosofi",
    explanation: "Kritisk undersøgelse af det gode liv, viden, virkelighed og politisk orden.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Filosofi",
      lex: "https://lex.dk/filosofi",
      sep: null
    }
  },
  {
    greek: "βάρβαρος",
    transliteration: "barbaros",
    danish: "barbar / ikke-græker",
    explanation: "Kulturmarkør i antikken, ofte brugt til at definere græsk identitet gennem kontrast.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Barbar",
      lex: "https://lex.dk/barbar",
      sep: null
    }
  },
  {
    greek: "γλῶσσα",
    transliteration: "glossa",
    danish: "sprog / tunge",
    explanation: "Sprog er i klassisk tænkning både erkendelsesredskab og politisk magtmiddel.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sprog",
      lex: "https://lex.dk/sprog",
      sep: null
    }
  },
  {
    greek: "μῦθος",
    transliteration: "mythos",
    danish: "myte / fortælling",
    explanation: "Mytos bruges både som poetisk forklaring og som pædagogisk form i filosofien.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Myte",
      lex: "https://lex.dk/myte",
      sep: null
    }
  },
  {
    greek: "διάλογος",
    transliteration: "dialogos",
    danish: "dialog",
    explanation: "Dialogformen gør tænkning til fælles undersøgelse frem for monologisk dogmatik.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dialog",
      lex: "https://lex.dk/dialog",
      sep: null
    }
  },
  {
    greek: "ἡσυχία",
    transliteration: "hesychia",
    danish: "indre ro",
    explanation: "Ro forstået som disciplineret stilhed i sindet, beslægtet med senere kontemplative traditioner.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hesykasme",
      lex: null,
      sep: null
    }
  },
  {
    greek: "σπουδή",
    transliteration: "spoude",
    danish: "alvor / iver",
    explanation: "Betegner seriøs målrettethed i læring og moralsk dannelse.",
    links: {
      wiki: null,
      lex: "https://lex.dk/alvor",
      sep: null
    }
  },
  {
    greek: "σχέσις",
    transliteration: "schesis",
    danish: "relation",
    explanation: "Relationelle begreber er afgørende i analyser af etik, politik og kategorier.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Relation_(filosofi)",
      lex: "https://lex.dk/relation",
      sep: null
    }
  },
  {
    greek: "αἰδώς",
    transliteration: "aidos",
    danish: "ærbødig skamfølelse",
    explanation: "Social-moralsk følelse der regulerer adfærd gennem respekt og blufærdighed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Aidos",
      lex: null,
      sep: null
    }
  },
  {
    greek: "φρόνημα",
    transliteration: "phronema",
    danish: "sindelag",
    explanation: "Den overordnede indstilling eller holdning, som præger handling og vurdering.",
    links: {
      wiki: null,
      lex: "https://lex.dk/sindelag",
      sep: null
    }
  },
  {
    greek: "ζήτησις",
    transliteration: "zetesis",
    danish: "undersøgelse / søgen",
    explanation: "Filosofien forstås som en vedvarende undersøgelsesbevægelse snarere end slutpunkt.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "πρόνοια",
    transliteration: "pronoia",
    danish: "forsyn / fremsyn",
    explanation: "Kan betyde guddommelig forsyn eller menneskelig fremsynet planlægning.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Providens",
      lex: "https://lex.dk/forsyn",
      sep: null
    }
  },
  {
    greek: "ἁμαρτία",
    transliteration: "hamartia",
    danish: "fejlgreb",
    explanation: "I tragedieteori den fejl eller forvildelse der sætter faldet i gang.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hamartia",
      lex: null,
      sep: "https://plato.stanford.edu/entries/aristotle-aesthetics/"
    }
  },
  {
    greek: "περιπέτεια",
    transliteration: "peripeteia",
    danish: "omslag",
    explanation: "Det dramatiske vendepunkt hvor handlingens retning pludseligt ændres.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Peripeti",
      lex: "https://lex.dk/peripeti",
      sep: null
    }
  },
  {
    greek: "ἀναγνώρισις",
    transliteration: "anagnorisis",
    danish: "genkendelse / erkendelsesvending",
    explanation: "Det øjeblik hvor en afgørende sandhed erkendes i tragediens forløb.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Anagnorisis",
      lex: null,
      sep: null
    }
  },
  {
    greek: "ὁμόνοια",
    transliteration: "homonoia",
    danish: "samdrægtighed",
    explanation: "Politisk enighed om grundlæggende mål, ikke nødvendigvis enighed om alle detaljer.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Samdr%C3%A6gtighed",
      lex: "https://lex.dk/samdr%C3%A6gtighed",
      sep: null
    }
  },
  {
    greek: "εὐνομία",
    transliteration: "eunomia",
    danish: "god lovorden",
    explanation: "Ideal om velordnet samfund med ret, balance og institutionel stabilitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Eunomia",
      lex: null,
      sep: null
    }
  },
  {
    greek: "φιλοτιμία",
    transliteration: "philotimia",
    danish: "ærelyst",
    explanation: "Ambition efter anerkendelse; kan være drivkraft eller forfaldstendens afhængigt af mål.",
    links: {
      wiki: null,
      lex: "https://lex.dk/%C3%A6re",
      sep: null
    }
  },
  {
    greek: "ἀρεσκή",
    transliteration: "areske",
    danish: "at behage",
    explanation: "Begrebet bruges i etisk kritik af overfladisk tilpasning til publikums smag.",
    links: {
      wiki: null,
      lex: null,
      sep: null
    }
  },
  {
    greek: "ζῷον",
    transliteration: "zōon",
    danish: "levende væsen",
    explanation: "Aristoteles' betegnelse for 'levende væsen' eller 'dyr'. Berømt i sammensætningen ζῷον πολιτικόν (det politiske dyr): mennesket er af naturen skabt til at leve i bystaten og søge det gode liv i fællesskab med andre.",
    links: {
      wiki: null,
      lex: null,
      sep: "https://plato.stanford.edu/entries/aristotle-politics/"
    }
  }
];

const searchInput = document.getElementById("glossary-search");
const resultsCount = document.getElementById("results-count");
const glossaryBody = document.getElementById("glossary-body");
const emptyState = document.getElementById("empty-state");
const sortButtons = Array.from(document.querySelectorAll(".glossary-sort"));
const tooltip = document.getElementById("glossary-tooltip");

const state = {
  query: "",
  sortKey: "greek",
  sortDirection: "asc"
};

const baseRows = GLOSSARY_TERMS.map((item, index) => ({ ...item, index }));

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ς/g, "σ");
}

function sortRows(rows) {
  const direction = state.sortDirection === "asc" ? 1 : -1;
  // When sorting by the Greek column, use the transliteration (Latin alphabet)
  // so the sort order is predictable for readers who don't read Greek script.
  const key = state.sortKey === "greek" ? "transliteration" : state.sortKey;

  return [...rows].sort((a, b) => {
    const first = a[key];
    const second = b[key];

    const result = first.localeCompare(second, "da", {
      sensitivity: "base"
    });

    if (result !== 0) {
      return result * direction;
    }

    return a.index - b.index;
  });
}

function filterRows(rows) {
  if (!state.query) {
    return rows;
  }

  return rows.filter((row) => {
    const haystack = [
      row.greek,
      row.transliteration,
      row.danish,
      row.explanation
    ]
      .map(normalizeText)
      .join(" ");

    return haystack.includes(normalizeText(state.query));
  });
}

function buildGreekDictionaryUrl(word) {
  const baseUrl = "https://ordnet.dk/gdo/ordbog?query=";
  return baseUrl + encodeURIComponent(word);
}

function buildExtLinksHtml(links) {
  if (!links) return "";
  const items = [];
  if (links.wiki) items.push({ url: links.wiki, label: "Wikipedia" });
  if (links.lex && !links.lex.includes("s%C3%B8g")) items.push({ url: links.lex, label: "Lex.dk" });
  if (links.sep) items.push({ url: links.sep, label: "Stanford" });
  if (links.jstor) items.push({ url: links.jstor, label: "JSTOR" });
  if (!items.length) return "";
  const anchors = items
    .map(
      (item) =>
        `<a href="${item.url}" class="glossary-ext-link" target="_blank" rel="noopener noreferrer">${item.label}</a>`
    )
    .join("");
  return `<div class="glossary-ext-links">${anchors}</div>`;
}

function renderTable() {
  const filtered = filterRows(baseRows);
  const sorted = sortRows(filtered);

  const rowsHtml = sorted
    .map((row) => {
      const termLabel = `${row.greek} (${row.transliteration})`;
      const dictUrl = buildGreekDictionaryUrl(row.greek);
      return `
        <tr>
          <td class="glossary-cell">
            <a
              href="${dictUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="glossary-term"
              data-term="${termLabel.replace(/"/g, "&quot;")}"
              data-description="${row.explanation.replace(/"/g, "&quot;")}"
              aria-label="${termLabel.replace(/"/g, "&quot;")}: ${row.explanation.replace(/"/g, "&quot;")}. Åbner Græsk-Dansk Ordbog"
            >
              <span class="glossary-translit">${row.transliteration}</span>
              <span class="glossary-greek">${row.greek}</span>
            </a>
            ${buildExtLinksHtml(row.links)}
            <p class="glossary-explanation">${row.explanation}</p>
          </td>
          <td class="glossary-cell glossary-cell-danish" data-label="Dansk">${row.danish}</td>
        </tr>
      `;
    })
    .join("");

  glossaryBody.innerHTML = rowsHtml;
  resultsCount.textContent = `${sorted.length} af ${baseRows.length} ord vises`;
  emptyState.hidden = sorted.length !== 0;

  bindTooltipEvents();
}

function updateSortButtons() {
  sortButtons.forEach((button) => {
    const key = button.dataset.sortKey;
    const isActive = key === state.sortKey;
    const icon = button.querySelector(".glossary-sort-icon");

    button.setAttribute("aria-pressed", isActive ? "true" : "false");

    if (isActive) {
      icon.textContent = state.sortDirection === "asc" ? "↑" : "↓";
      icon.setAttribute("aria-label", state.sortDirection === "asc" ? "Stigende" : "Faldende");
    } else {
      icon.textContent = "↕";
      icon.setAttribute("aria-label", "Ikke aktiv");
    }
  });
}

function positionTooltip(target, event) {
  const viewportPadding = 12;
  const tooltipRect = tooltip.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const xFromMouse = event ? event.clientX + 16 : targetRect.left + targetRect.width / 2;

  const left = Math.min(
    window.innerWidth - tooltipRect.width - viewportPadding,
    Math.max(viewportPadding, xFromMouse)
  );

  const top = event
    ? Math.min(window.innerHeight - tooltipRect.height - viewportPadding, event.clientY + 18)
    : Math.max(viewportPadding, targetRect.top - tooltipRect.height - 12);

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}

function showTooltip(target, event) {
  const term = target.dataset.term;
  const description = target.dataset.description;

  tooltip.innerHTML = `
    <p class="tooltip-term">${term}</p>
    <p class="tooltip-description">${description}</p>
  `;

  tooltip.hidden = false;
  positionTooltip(target, event);
}

function hideTooltip() {
  tooltip.hidden = true;
}

function bindTooltipEvents() {
  const terms = Array.from(document.querySelectorAll(".glossary-term"));

  terms.forEach((term) => {
    term.addEventListener("mouseenter", (event) => showTooltip(term, event));
    term.addEventListener("mousemove", (event) => positionTooltip(term, event));
    term.addEventListener("mouseleave", hideTooltip);
    term.addEventListener("focus", () => showTooltip(term));
    term.addEventListener("blur", hideTooltip);
  });
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderTable();
});

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.sortKey;

    if (state.sortKey === key) {
      state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
    } else {
      state.sortKey = key;
      state.sortDirection = "asc";
    }

    updateSortButtons();
    renderTable();
  });
});

document.addEventListener("scroll", hideTooltip, { passive: true });
window.addEventListener("resize", hideTooltip);

document.addEventListener("click", (event) => {
  if (!event.target.closest(".glossary-term")) {
    hideTooltip();
    tooltip.dataset.activeTerm = "";
  }
});

updateSortButtons();
renderTable();
