const GLOSSARY_TERMS = [
  {
    greek: "σωφροσύνη",
    transliteration: "sophrosyne",
    danish: "mådehold / besindighed",
    explanation: "Kernen i klassisk selvbeherskelse: lyst, følelse og fornuft holdes i en harmonisk orden.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sofrosyne",
      lex: "https://lex.dk/s%C3%B8g?Query=sofrosyne"
    }
  },
  {
    greek: "ἀρετή",
    transliteration: "arete",
    danish: "dyd / excellence",
    explanation: "Hos Platon og Aristoteles er arete den fremragende måde at udføre en funktion på.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dyd",
      lex: "https://lex.dk/dyd"
    }
  },
  {
    greek: "φρόνησις",
    transliteration: "phronesis",
    danish: "praktisk visdom",
    explanation: "Den dømmekraft, der finder det rette i konkrete situationer frem for abstrakt teori alene.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Fronesis",
      lex: "https://lex.dk/s%C3%B8g?Query=fronesis"
    }
  },
  {
    greek: "σοφία",
    transliteration: "sophia",
    danish: "visdom",
    explanation: "Visdom som indsigt i de højeste principper; ofte skilt fra praktisk dømmekraft.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Visdom",
      lex: "https://lex.dk/visdom"
    }
  },
  {
    greek: "δικαιοσύνη",
    transliteration: "dikaiosyne",
    danish: "retfærdighed",
    explanation: "I Republikken bliver retfærdighed den orden, hvor hver del gør sit eget arbejde.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Retf%C3%A6rdighed",
      lex: "https://lex.dk/retf%C3%A6rdighed"
    }
  },
  {
    greek: "ἀνδρεία",
    transliteration: "andreia",
    danish: "mod",
    explanation: "Mod er ikke dumdristighed, men standhaftighed over for frygt i det rette mål.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Mod",
      lex: "https://lex.dk/mod"
    }
  },
  {
    greek: "εὐδαιμονία",
    transliteration: "eudaimonia",
    danish: "lykke / menneskelig blomstring",
    explanation: "Aristoteles' mål for livet: at leve vel gennem dydig aktivitet over et helt liv.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Eudaimonia",
      lex: "https://lex.dk/s%C3%B8g?Query=eudaimonia"
    }
  },
  {
    greek: "ψυχή",
    transliteration: "psyche",
    danish: "sjæl",
    explanation: "Sjælen forstås som livsprincip og som sæde for erkendelse, begær og karakter.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sj%C3%A6l",
      lex: "https://lex.dk/sj%C3%A6l"
    }
  },
  {
    greek: "λόγος",
    transliteration: "logos",
    danish: "fornuft / tale / begrundelse",
    explanation: "Et nøgleord der spænder fra argument til verdensorden, afhængigt af forfatter og skole.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Logos",
      lex: "https://lex.dk/logos"
    }
  },
  {
    greek: "νοῦς",
    transliteration: "nous",
    danish: "intellekt",
    explanation: "Intellektet som evne til at gribe de første principper og det universelle.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Nous",
      lex: "https://lex.dk/s%C3%B8g?Query=nous"
    }
  },
  {
    greek: "ἐπιστήμη",
    transliteration: "episteme",
    danish: "videnskabelig viden",
    explanation: "Sikker, begrundet viden om nødvendige sammenhænge, især i aristotelisk forstand.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Episteme",
      lex: "https://lex.dk/s%C3%B8g?Query=episteme"
    }
  },
  {
    greek: "δόξα",
    transliteration: "doxa",
    danish: "mening / formodning",
    explanation: "Mening kan være sand eller falsk, men mangler den faste begrundelse i episteme.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Doxa",
      lex: "https://lex.dk/s%C3%B8g?Query=doxa"
    }
  },
  {
    greek: "ἀλήθεια",
    transliteration: "aletheia",
    danish: "sandhed",
    explanation: "Sandhed som afdækning af det virkelige, både logisk og ontologisk forstået.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sandhed",
      lex: "https://lex.dk/sandhed"
    }
  },
  {
    greek: "πίστις",
    transliteration: "pistis",
    danish: "tro / tillid",
    explanation: "Kan betyde både tro, loyalitet og overbevisning i retoriske og filosofiske tekster.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tro",
      lex: "https://lex.dk/tro"
    }
  },
  {
    greek: "μνήμη",
    transliteration: "mneme",
    danish: "hukommelse",
    explanation: "Hos Aristoteles en særskilt psykisk funktion, vigtig for erfaring og læring.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hukommelse",
      lex: "https://lex.dk/hukommelse"
    }
  },
  {
    greek: "αἴσθησις",
    transliteration: "aisthesis",
    danish: "sansning",
    explanation: "Grundlaget for erfaring; hos Aristoteles indgangen til viden om det konkrete.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sansning",
      lex: "https://lex.dk/sansning"
    }
  },
  {
    greek: "πάθος",
    transliteration: "pathos",
    danish: "lidenskab / affekt",
    explanation: "Følelsesmæssig påvirkning, central i etik, retorik og tragedieteori.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Pathos",
      lex: "https://lex.dk/pathos"
    }
  },
  {
    greek: "ἔρως",
    transliteration: "eros",
    danish: "eros / begærende kærlighed",
    explanation: "Hos Platon en drivkraft, der kan løftes fra sanselig længsel til erkendelse af det skønne.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Eros",
      lex: "https://lex.dk/eros"
    }
  },
  {
    greek: "φιλία",
    transliteration: "philia",
    danish: "venskab",
    explanation: "Aristoteles ser venskab som en bærende social dyd og forudsætning for politisk fællesskab.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Venskab",
      lex: "https://lex.dk/venskab"
    }
  },
  {
    greek: "ἀγάπη",
    transliteration: "agape",
    danish: "næstekærlighed",
    explanation: "Begreb der især udvikles i senantikken, men bygger videre på græske kærlighedsbegreber.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Agape",
      lex: "https://lex.dk/s%C3%B8g?Query=agape"
    }
  },
  {
    greek: "ἡδονή",
    transliteration: "hedone",
    danish: "nydelse",
    explanation: "Et centralt diskussionsemne i etik: om nydelse er mål, middel eller ledsagefænomen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Nydelse",
      lex: "https://lex.dk/nydelse"
    }
  },
  {
    greek: "λύπη",
    transliteration: "lype",
    danish: "smerte / sorg",
    explanation: "Modpol til nydelse i flere etiske analyser af menneskets motivation.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sorg",
      lex: "https://lex.dk/sorg"
    }
  },
  {
    greek: "φόβος",
    transliteration: "phobos",
    danish: "frygt",
    explanation: "I retorik en påvirkelig affekt; i etik et felt hvor modet trænes.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Frygt",
      lex: "https://lex.dk/frygt"
    }
  },
  {
    greek: "ὀργή",
    transliteration: "orge",
    danish: "vrede",
    explanation: "Aristoteles analyserer vrede som en socialt struktureret affekt med bestemte udløsere.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Vrede",
      lex: "https://lex.dk/vrede"
    }
  },
  {
    greek: "ἐπιθυμία",
    transliteration: "epithymia",
    danish: "begær",
    explanation: "Begærets styring er et omdrejningspunkt for både platonsk og stoisk etik.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Beg%C3%A6r",
      lex: "https://lex.dk/beg%C3%A6r"
    }
  },
  {
    greek: "βούλησις",
    transliteration: "boulesis",
    danish: "vilje",
    explanation: "Viljen retter sig mod det, der fremtræder som godt, men kan formes af karakter.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=vilje"
    }
  },
  {
    greek: "προαίρεσις",
    transliteration: "prohairesis",
    danish: "overvejet valg",
    explanation: "Hos Aristoteles det ansvarsbærende valg efter overvejelse af midler og mål.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Prohairesis",
      lex: "https://lex.dk/s%C3%B8g?Query=prohairesis"
    }
  },
  {
    greek: "βίος",
    transliteration: "bios",
    danish: "livsform",
    explanation: "Bruges om forskellige måder at leve på, fx det kontemplative eller politiske liv.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Bios",
      lex: "https://lex.dk/s%C3%B8g?Query=bios"
    }
  },
  {
    greek: "φύσις",
    transliteration: "physis",
    danish: "natur",
    explanation: "Natur som indre princip for bevægelse og udvikling, ikke kun ydre omgivelser.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Fyse",
      lex: "https://lex.dk/fyse"
    }
  },
  {
    greek: "νόμος",
    transliteration: "nomos",
    danish: "lov / norm",
    explanation: "Spændingen mellem natur og lov er et nøglespor i sofistik, politik og tragedie.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Nomos",
      lex: "https://lex.dk/s%C3%B8g?Query=nomos"
    }
  },
  {
    greek: "πόλις",
    transliteration: "polis",
    danish: "bystat",
    explanation: "Den klassiske politiske ramme, hvor etik, uddannelse og lov tænkes sammen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Polis",
      lex: "https://lex.dk/polis"
    }
  },
  {
    greek: "πολιτεία",
    transliteration: "politeia",
    danish: "forfatning / statsorden",
    explanation: "Kan betyde både konstitution, borgerstatus og den overordnede politiske orden.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Politeia",
      lex: "https://lex.dk/s%C3%B8g?Query=politeia"
    }
  },
  {
    greek: "πολίτης",
    transliteration: "polites",
    danish: "borger",
    explanation: "Borgeren defineres i antikken gennem deltagelse i dom, råd og offentlige embeder.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Borger",
      lex: "https://lex.dk/borger"
    }
  },
  {
    greek: "δημοκρατία",
    transliteration: "demokratia",
    danish: "demokrati",
    explanation: "Folkestyre i klassisk forstand, men med andre institutioner end moderne repræsentation.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Demokrati",
      lex: "https://lex.dk/demokrati"
    }
  },
  {
    greek: "ὀλιγαρχία",
    transliteration: "oligarchia",
    danish: "oligarki",
    explanation: "Styreform hvor få besidder magten, ofte begrundet med ejendom og social rang.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Oligarki",
      lex: "https://lex.dk/oligarki"
    }
  },
  {
    greek: "τυραννίς",
    transliteration: "tyrannis",
    danish: "tyranni",
    explanation: "Enevælde uden legitim forankring; et centralt advarselsmotiv hos både historikere og filosoffer.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tyranni",
      lex: "https://lex.dk/tyranni"
    }
  },
  {
    greek: "μοναρχία",
    transliteration: "monarchia",
    danish: "monarki",
    explanation: "Énmandsstyre, i antikken diskuteret både som legitim ordning og risiko for forfald.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Monarki",
      lex: "https://lex.dk/monarki"
    }
  },
  {
    greek: "ἀριστοκρατία",
    transliteration: "aristokratia",
    danish: "aristokrati",
    explanation: "Styret af de bedste i dyd eller dannelse, i klassisk teori en idealiseret forfatningsform.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Aristokrati",
      lex: "https://lex.dk/aristokrati"
    }
  },
  {
    greek: "ἰσονομία",
    transliteration: "isonomia",
    danish: "lighed for loven",
    explanation: "Tidligt politisk ideal om at loven gælder lige for frie borgere.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Isonomi",
      lex: "https://lex.dk/s%C3%B8g?Query=isonomia"
    }
  },
  {
    greek: "παρρησία",
    transliteration: "parrhesia",
    danish: "frimodig tale",
    explanation: "Modet til at tale sandt i det offentlige rum, også når det koster socialt.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Parrhesia",
      lex: "https://lex.dk/s%C3%B8g?Query=parrhesia"
    }
  },
  {
    greek: "ἦθος",
    transliteration: "ethos",
    danish: "karakter / etos",
    explanation: "Hos Aristoteles både moralsk karakter og den troværdighed taleren udstråler.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Etos",
      lex: "https://lex.dk/etos"
    }
  },
  {
    greek: "ἔθος",
    transliteration: "ethos-habit",
    danish: "vane / skik",
    explanation: "Gentaget praksis former karakteren; derfor er etikken tæt forbundet med opdragelse.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=vane"
    }
  },
  {
    greek: "ἕξις",
    transliteration: "hexis",
    danish: "disposition / habitus",
    explanation: "En stabil tillært tilbøjelighed, der gør bestemte handlinger lettere og mere naturlige.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Heksis",
      lex: "https://lex.dk/s%C3%B8g?Query=hexis"
    }
  },
  {
    greek: "μεσότης",
    transliteration: "mesotes",
    danish: "midte-princippet",
    explanation: "Aristoteles' idé om dyd som den passende midte mellem overskud og mangel.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Den_gyldne_middelvej",
      lex: "https://lex.dk/gyldne_middelvej"
    }
  },
  {
    greek: "τέλος",
    transliteration: "telos",
    danish: "mål / formål",
    explanation: "Alt forstås gennem sit formål; teleologi er bærende i aristotelisk naturfilosofi.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Telos",
      lex: "https://lex.dk/s%C3%B8g?Query=telos"
    }
  },
  {
    greek: "αἰτία",
    transliteration: "aitia",
    danish: "årsag / forklaring",
    explanation: "Aristoteles' fire årsager er fire forklaringsmåder, ikke kun lineær fysisk kausalitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Aristoteles%27_fire_%C3%A5rsager",
      lex: "https://lex.dk/s%C3%B8g?Query=four%20causes"
    }
  },
  {
    greek: "οὐσία",
    transliteration: "ousia",
    danish: "substans / væsen",
    explanation: "Det, der eksisterer i sig selv, og som bærer egenskaber og forandringer.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ousia",
      lex: "https://lex.dk/substans"
    }
  },
  {
    greek: "συμβεβηκός",
    transliteration: "symbebekos",
    danish: "tilfældig egenskab",
    explanation: "En egenskab der kan ændres uden at tingens grundlæggende væsen ophører.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=accidens"
    }
  },
  {
    greek: "ὕλη",
    transliteration: "hyle",
    danish: "stof / materie",
    explanation: "Materie som mulighedsbærer, der får form gennem struktur og funktion.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hyle",
      lex: "https://lex.dk/materie"
    }
  },
  {
    greek: "μορφή",
    transliteration: "morphe",
    danish: "form",
    explanation: "Formen gør en ting til netop den slags ting, den er.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Form_(filosofi)",
      lex: "https://lex.dk/form"
    }
  },
  {
    greek: "ἐνέργεια",
    transliteration: "energeia",
    danish: "virkeliggørelse / aktualitet",
    explanation: "Det fuldt udfoldede virke i modsætning til blot mulighed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Energeia",
      lex: "https://lex.dk/s%C3%B8g?Query=energeia"
    }
  },
  {
    greek: "δύναμις",
    transliteration: "dynamis",
    danish: "potentiale / kraft",
    explanation: "Evnen til at kunne blive eller gøre noget, før det aktualiseres.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dynamis",
      lex: "https://lex.dk/s%C3%B8g?Query=dynamis"
    }
  },
  {
    greek: "κίνησις",
    transliteration: "kinesis",
    danish: "bevægelse / forandring",
    explanation: "Hos Aristoteles enhver overgang fra potentiale til aktualitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Kinesis",
      lex: "https://lex.dk/bev%C3%A6gelse"
    }
  },
  {
    greek: "γένεσις",
    transliteration: "genesis",
    danish: "tilblivelse",
    explanation: "Begrebet for opkomst og dannelse, ofte sat op imod det varigt værende.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Genesis",
      lex: "https://lex.dk/tilblivelse"
    }
  },
  {
    greek: "φθορά",
    transliteration: "phthora",
    danish: "forfald / undergang",
    explanation: "Modstykket til tilblivelse: den proces hvor noget ophører med at være det, det var.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=forfald"
    }
  },
  {
    greek: "χρόνος",
    transliteration: "chronos",
    danish: "tid",
    explanation: "Tid behandles både kosmologisk, fysisk og eksistentielt i antikkens traditioner.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tid",
      lex: "https://lex.dk/tid"
    }
  },
  {
    greek: "τόπος",
    transliteration: "topos",
    danish: "sted",
    explanation: "Aristoteles analyserer sted som den nærmeste omsluttende grænse for en krop.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Topos",
      lex: "https://lex.dk/s%C3%B8g?Query=topos"
    }
  },
  {
    greek: "ἄπειρον",
    transliteration: "apeiron",
    danish: "det ubegrænsede",
    explanation: "Hos de tidlige naturfilosoffer et grundprincip uden fast afgrænsning.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Apeiron",
      lex: "https://lex.dk/s%C3%B8g?Query=apeiron"
    }
  },
  {
    greek: "πέρας",
    transliteration: "peras",
    danish: "grænse / afgrænsning",
    explanation: "Det, der giver form og mål; vigtigt i pythagoræisk og platonsk tænkning.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=peras"
    }
  },
  {
    greek: "ἀρχή",
    transliteration: "arche",
    danish: "oprindelsesprincip",
    explanation: "Grundbegreb i naturfilosofien: hvad alt udspringer af eller styres af.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Arche",
      lex: "https://lex.dk/s%C3%B8g?Query=arche"
    }
  },
  {
    greek: "στοιχεῖον",
    transliteration: "stoicheion",
    danish: "element",
    explanation: "De grundbestanddele hvoraf komplekse ting menes opbygget.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Klassisk_element",
      lex: "https://lex.dk/element"
    }
  },
  {
    greek: "κόσμος",
    transliteration: "kosmos",
    danish: "ordnet verden",
    explanation: "Verden forstået som kosmos antyder orden, proportion og intelligibel struktur.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Kosmos",
      lex: "https://lex.dk/kosmos"
    }
  },
  {
    greek: "χάος",
    transliteration: "chaos",
    danish: "kaos / urtomhed",
    explanation: "I tidlig græsk tænkning ikke kun uorden, men et urtomt åbent rum.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Kaos",
      lex: "https://lex.dk/kaos"
    }
  },
  {
    greek: "ἰδέα",
    transliteration: "idea",
    danish: "idé",
    explanation: "Hos Platon de intelligible former, som sanselige ting kun deltager i.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Id%C3%A9l%C3%A6re",
      lex: "https://lex.dk/id%C3%A9"
    }
  },
  {
    greek: "εἶδος",
    transliteration: "eidos",
    danish: "form / art",
    explanation: "Kan betyde synlig skikkelse eller begrebslig form, afhængigt af konteksten.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Eidos",
      lex: "https://lex.dk/s%C3%B8g?Query=eidos"
    }
  },
  {
    greek: "ὄν",
    transliteration: "on",
    danish: "det værende",
    explanation: "Kernen i ontologi: hvad det vil sige at være, og i hvilke betydninger.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ontologi",
      lex: "https://lex.dk/ontologi"
    }
  },
  {
    greek: "μίμησις",
    transliteration: "mimesis",
    danish: "efterligning",
    explanation: "Nøglebegreb i kunstteori: hvordan digtning og drama afbilder handling og karakter.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Mimesis",
      lex: "https://lex.dk/s%C3%B8g?Query=mimesis"
    }
  },
  {
    greek: "κάθαρσις",
    transliteration: "katharsis",
    danish: "renselse",
    explanation: "Aristoteles' tragediebegreb: følelsesbearbejdning gennem frygt og medlidenhed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Katharsis",
      lex: "https://lex.dk/katharsis"
    }
  },
  {
    greek: "τραγῳδία",
    transliteration: "tragoidia",
    danish: "tragedie",
    explanation: "Dramatisk form der undersøger skyld, skæbne og handlingens uforudsigelige følger.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tragedie",
      lex: "https://lex.dk/tragedie"
    }
  },
  {
    greek: "κωμῳδία",
    transliteration: "komoidia",
    danish: "komedie",
    explanation: "Komedien tematiserer normer og magt gennem satire, inversion og social kritik.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Komedie",
      lex: "https://lex.dk/komedie"
    }
  },
  {
    greek: "ῥητορική",
    transliteration: "rhetorike",
    danish: "retorik",
    explanation: "Læren om overbevisning i tale, hvor ethos, logos og pathos kombineres.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Retorik",
      lex: "https://lex.dk/retorik"
    }
  },
  {
    greek: "διαλεκτική",
    transliteration: "dialektike",
    danish: "dialektik",
    explanation: "Samtalekunst og argumentationsmetode til at afprøve begreber og modsætninger.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dialektik",
      lex: "https://lex.dk/dialektik"
    }
  },
  {
    greek: "λογική",
    transliteration: "logike",
    danish: "logik",
    explanation: "Formallæren om gyldige slutninger, systematiseret særligt i aristotelisk tradition.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Logik",
      lex: "https://lex.dk/logik"
    }
  },
  {
    greek: "ἀπόδειξις",
    transliteration: "apodeixis",
    danish: "bevis / demonstration",
    explanation: "En streng argumentform, hvor konklusionen følger nødvendigt af første principper.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=demonstration"
    }
  },
  {
    greek: "συλλογισμός",
    transliteration: "syllogismos",
    danish: "slutning / syllogisme",
    explanation: "Aristoteles' grundstruktur for deduktiv argumentation.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Syllogisme",
      lex: "https://lex.dk/syllogisme"
    }
  },
  {
    greek: "ἐπαγωγή",
    transliteration: "epagoge",
    danish: "induktion",
    explanation: "Overgangen fra mange enkelttilfælde til en almen indsigt eller regel.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Induktion_(logik)",
      lex: "https://lex.dk/induktion"
    }
  },
  {
    greek: "ἀπορία",
    transliteration: "aporia",
    danish: "vanskelighed / rådvilde",
    explanation: "Sokratisk og aristotelisk teknik: begynd med problemet før løsningen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Apori",
      lex: "https://lex.dk/s%C3%B8g?Query=apori"
    }
  },
  {
    greek: "θαῦμα",
    transliteration: "thauma",
    danish: "forundring",
    explanation: "Forundringen udpeges som filosofiens begyndelse hos både Platon og Aristoteles.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Filosofi",
      lex: "https://lex.dk/forundring"
    }
  },
  {
    greek: "ἱστορία",
    transliteration: "historia",
    danish: "undersøgelse / historie",
    explanation: "Oprindeligt aktiv undersøgelse; hos Thukydid bliver det metodisk historieskrivning.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Historiografi",
      lex: "https://lex.dk/historiografi"
    }
  },
  {
    greek: "πόλεμος",
    transliteration: "polemos",
    danish: "krig",
    explanation: "Krig analyseres i antikken både strategisk, etisk og antropologisk.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Krig",
      lex: "https://lex.dk/krig"
    }
  },
  {
    greek: "εἰρήνη",
    transliteration: "eirene",
    danish: "fred",
    explanation: "Fred opfattes som mere end fravær af krig: en orden med ret og stabilitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Fred",
      lex: "https://lex.dk/fred"
    }
  },
  {
    greek: "στάσις",
    transliteration: "stasis",
    danish: "borgerstrid",
    explanation: "Thukydids analyser af stasis viser, hvordan sprog og normer kollapser i kriser.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Thukydid",
      lex: "https://lex.dk/s%C3%B8g?Query=stasis"
    }
  },
  {
    greek: "συμμαχία",
    transliteration: "symmachia",
    danish: "alliance",
    explanation: "I græsk politik et nøglebegreb for magtbalance mellem bystater.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Alliance",
      lex: "https://lex.dk/alliance"
    }
  },
  {
    greek: "ναυτικόν",
    transliteration: "nautikon",
    danish: "sømilitær magt",
    explanation: "Athens imperialmagt byggede i høj grad på flådekapacitet og havkontrol.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Fl%C3%A5de",
      lex: "https://lex.dk/fl%C3%A5de"
    }
  },
  {
    greek: "ἰατρική",
    transliteration: "iatrike",
    danish: "lægekunst",
    explanation: "Medicinen bruges ofte som analogi for etisk og politisk behandling af fællesskabet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/L%C3%A6gekunst",
      lex: "https://lex.dk/l%C3%A6gekunst"
    }
  },
  {
    greek: "τέχνη",
    transliteration: "techne",
    danish: "kunst / håndværkskunnen",
    explanation: "Tekhne er regelbundet kunnen med et formål, ikke blot spontan dygtighed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tekhne",
      lex: "https://lex.dk/teknik"
    }
  },
  {
    greek: "παιδεία",
    transliteration: "paideia",
    danish: "dannelse",
    explanation: "Helhedsorienteret formning af karakter, smag og dømmekraft i bystatens kultur.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Paideia",
      lex: "https://lex.dk/s%C3%B8g?Query=paideia"
    }
  },
  {
    greek: "μουσική",
    transliteration: "mousike",
    danish: "musisk opdragelse",
    explanation: "Omfatter poesi, rytme og musik som karakterdannende praksis, ikke kun lydkunst.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Musik",
      lex: "https://lex.dk/musik"
    }
  },
  {
    greek: "γυμναστική",
    transliteration: "gymnastike",
    danish: "kropslig træning",
    explanation: "Sammen med musik udgør gymnastik en klassisk dobbeltakse i opdragelsen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Gymnastik",
      lex: "https://lex.dk/gymnastik"
    }
  },
  {
    greek: "ἄσκησις",
    transliteration: "askesis",
    danish: "øvelse / disciplin",
    explanation: "Vedvarende træning af opmærksomhed og vane, især i stoisk og senere asketisk tradition.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Askese",
      lex: "https://lex.dk/askese"
    }
  },
  {
    greek: "σωτηρία",
    transliteration: "soteria",
    danish: "redning / frelse",
    explanation: "Kan betyde både konkret sikkerhed og eksistentiel frelse, alt efter sammenhæng.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Frelse",
      lex: "https://lex.dk/frelse"
    }
  },
  {
    greek: "μοῖρα",
    transliteration: "moira",
    danish: "lod / skæbneandel",
    explanation: "Skæbne forstået som den tildelte andel i en større orden, især i tragedien.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Moirer",
      lex: "https://lex.dk/s%C3%B8g?Query=moira"
    }
  },
  {
    greek: "τύχη",
    transliteration: "tyche",
    danish: "tilfældighed / lykke",
    explanation: "Fortuna-dimensionen i handling: ikke alt kan planlægges eller kontrolleres.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Tyche",
      lex: "https://lex.dk/tilf%C3%A6ldighed"
    }
  },
  {
    greek: "ἀνάγκη",
    transliteration: "ananke",
    danish: "nødvendighed",
    explanation: "Det uafvendelige i natur, logik eller skæbne; en grænse for menneskelig frihed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ananke",
      lex: "https://lex.dk/n%C3%B8dvendighed"
    }
  },
  {
    greek: "ἐλευθερία",
    transliteration: "eleutheria",
    danish: "frihed",
    explanation: "I antikken knyttet til borgerstatus, selvstyre og fravær af herredømme.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Frihed",
      lex: "https://lex.dk/frihed"
    }
  },
  {
    greek: "δουλεία",
    transliteration: "douleia",
    danish: "slaveri / ufrihed",
    explanation: "Et socialt og politisk grundvilkår i antikken, der udfordrer idealet om frihed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Slaveri",
      lex: "https://lex.dk/slaveri"
    }
  },
  {
    greek: "αὐτάρκεια",
    transliteration: "autarkeia",
    danish: "selvtilstrækkelighed",
    explanation: "Et ideal om at kunne stå i sig selv, personligt eller politisk.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Autarki",
      lex: "https://lex.dk/autarki"
    }
  },
  {
    greek: "κοινωνία",
    transliteration: "koinonia",
    danish: "fællesskab",
    explanation: "Social deltagelse og deling af livsform; centralt i antikkens politiske antropologi.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/F%C3%A6llesskab",
      lex: "https://lex.dk/f%C3%A6llesskab"
    }
  },
  {
    greek: "κρίσις",
    transliteration: "krisis",
    danish: "bedømmelse / krise",
    explanation: "At skelne og dømme; i historiske tekster også vendepunkt eller kritisk situation.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Krise",
      lex: "https://lex.dk/krise"
    }
  },
  {
    greek: "ὑπόληψις",
    transliteration: "hypolepsis",
    danish: "antagelse",
    explanation: "Foreløbig opfattelse der styrer handling, men kræver kritisk afprøvning.",
    links: {
      wiki: null,
      lex: "https://lex.dk/antagelse"
    }
  },
  {
    greek: "σχολή",
    transliteration: "schole",
    danish: "studietid / fritid",
    explanation: "Oprindeligt fri tid til fordybelse; roden bag ordet skole.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Skole",
      lex: "https://lex.dk/skole"
    }
  },
  {
    greek: "θεωρία",
    transliteration: "theoria",
    danish: "kontemplation / teori",
    explanation: "Betragtende erkendelse af det universelle, ofte sat højere end rent nyttige aktiviteter.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Teori",
      lex: "https://lex.dk/teori"
    }
  },
  {
    greek: "πρᾶξις",
    transliteration: "praxis",
    danish: "handling / praksis",
    explanation: "Menneskelig handling, hvor målet ligger i selve udførelsen og dens kvalitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Praxis",
      lex: "https://lex.dk/praksis"
    }
  },
  {
    greek: "ποίησις",
    transliteration: "poiesis",
    danish: "frembringelse",
    explanation: "Produktion hvor målet ligger i et ydre resultat, fx et værk eller redskab.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Poiesis",
      lex: "https://lex.dk/s%C3%B8g?Query=poiesis"
    }
  },
  {
    greek: "ἔργον",
    transliteration: "ergon",
    danish: "funktion / værk",
    explanation: "Aristoteles' funktion-argument spørger hvad menneskets særlige opgave er.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ergon-argument",
      lex: "https://lex.dk/s%C3%B8g?Query=ergon"
    }
  },
  {
    greek: "καλός",
    transliteration: "kalos",
    danish: "skøn / nobel",
    explanation: "Ordet dækker både æstetisk skønhed og moralsk værdighed i klassisk græsk.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sk%C3%B8nhed",
      lex: "https://lex.dk/sk%C3%B8nhed"
    }
  },
  {
    greek: "ἀγαθός",
    transliteration: "agathos",
    danish: "god",
    explanation: "Et vurderingsord der i etikken peger mod det efterstræbelsesværdige.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Det_gode",
      lex: "https://lex.dk/det_gode"
    }
  },
  {
    greek: "κακία",
    transliteration: "kakia",
    danish: "last / dårlig karakter",
    explanation: "Det modsatte af dyd: en stabil dårlig disposition i handling og dømmekraft.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Last_(etik)",
      lex: "https://lex.dk/last"
    }
  },
  {
    greek: "ἐγκράτεια",
    transliteration: "enkrateia",
    danish: "selvbeherskelse",
    explanation: "Evnen til at handle rigtigt trods modstridende begær.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Enkrateia",
      lex: "https://lex.dk/s%C3%B8g?Query=enkrateia"
    }
  },
  {
    greek: "ἀκρασία",
    transliteration: "akrasia",
    danish: "svag vilje",
    explanation: "At vide hvad der er bedst, men alligevel handle imod bedre viden.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Akrasia",
      lex: "https://lex.dk/s%C3%B8g?Query=akrasia"
    }
  },
  {
    greek: "ἡγεμονικόν",
    transliteration: "hegemonikon",
    danish: "styrende fornuftdel",
    explanation: "Stoisk term for den ledende del af sjælen, som skal holdes fri og klar.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=hegemonikon"
    }
  },
  {
    greek: "καθήκον",
    transliteration: "kathekon",
    danish: "passende handling",
    explanation: "Stoisk idé om handlinger, der passer til rolle, relation og natur.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=kathekon"
    }
  },
  {
    greek: "οἰκείωσις",
    transliteration: "oikeiosis",
    danish: "tilegnelse / naturlig orientering",
    explanation: "Stoisk teori om hvordan omsorg udvides fra selvet til familie og medborgere.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Oikeiosis",
      lex: "https://lex.dk/s%C3%B8g?Query=oikeiosis"
    }
  },
  {
    greek: "ἀταραξία",
    transliteration: "ataraxia",
    danish: "urokket ro",
    explanation: "Målet i flere hellenistiske skoler: et sind uden forstyrrende angst og tumult.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Ataraxia",
      lex: "https://lex.dk/s%C3%B8g?Query=ataraxia"
    }
  },
  {
    greek: "ἀπονία",
    transliteration: "aponia",
    danish: "fravær af smerte",
    explanation: "Epikuræisk nøglebegreb for kropslig veltilstand som del af det gode liv.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Epikur%C3%A6isme",
      lex: "https://lex.dk/s%C3%B8g?Query=aponia"
    }
  },
  {
    greek: "μακαρία",
    transliteration: "makaria",
    danish: "salighed / velsignet lykke",
    explanation: "Bruges om en højere lykketilstand, ofte med religiøse eller metafysiske overtoner.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=makaria"
    }
  },
  {
    greek: "κενός",
    transliteration: "kenos",
    danish: "tom / forgæves",
    explanation: "Epikuræisk kritik af tomme begær og meninger uden naturligt grundlag.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=kenos"
    }
  },
  {
    greek: "δόγμα",
    transliteration: "dogma",
    danish: "læresætning",
    explanation: "Fastslået tese i en skoletradition; hos stoikere ofte med praktisk konsekvens.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dogme",
      lex: "https://lex.dk/dogme"
    }
  },
  {
    greek: "σκεπτικός",
    transliteration: "skeptikos",
    danish: "skeptisk",
    explanation: "Henviser til den skeptiske tradition, hvor dom tilbageholdes for at opnå sindsro.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Skepticisme",
      lex: "https://lex.dk/skepticisme"
    }
  },
  {
    greek: "ἐποχή",
    transliteration: "epoche",
    danish: "domsophævelse",
    explanation: "Skeptisk metode: udsæt dommen når lige stærke grunde taler for og imod.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Epokhe",
      lex: "https://lex.dk/s%C3%B8g?Query=epokhe"
    }
  },
  {
    greek: "φαντασία",
    transliteration: "phantasia",
    danish: "forestilling",
    explanation: "Indtryk eller forestilling i sjælen, som kan være mere eller mindre pålidelig.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Fantasi",
      lex: "https://lex.dk/fantasi"
    }
  },
  {
    greek: "συγκατάθεσις",
    transliteration: "synkatathesis",
    danish: "tilslutning",
    explanation: "Stoisk begreb for når sindet giver samtykke til en forestilling som sand.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=synkatathesis"
    }
  },
  {
    greek: "φαντασία καταληπτική",
    transliteration: "phantasia kataleptike",
    danish: "gribende forestilling",
    explanation: "Stoisk kriterium for et særligt overbevisende og sandheds-nært indtryk.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=kataleptisk"
    }
  },
  {
    greek: "κατηγορία",
    transliteration: "kategoria",
    danish: "kategori",
    explanation: "Aristoteles' grundmåder hvorpå noget kan siges at være.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Kategori_(filosofi)",
      lex: "https://lex.dk/kategori"
    }
  },
  {
    greek: "γένος",
    transliteration: "genos",
    danish: "slægt / genus",
    explanation: "Logisk overbegreb der samler flere arter under en fælles ramme.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Genus",
      lex: "https://lex.dk/genus"
    }
  },
  {
    greek: "εἶδος (λογικόν)",
    transliteration: "eidos-logikon",
    danish: "art / species",
    explanation: "Den logiske undergruppe inden for et genus, defineret ved særlige kendetegn.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Species",
      lex: "https://lex.dk/species"
    }
  },
  {
    greek: "διαφορά",
    transliteration: "diaphora",
    danish: "artsforskel",
    explanation: "Den differentierende egenskab, der adskiller en art fra andre i samme slægt.",
    links: {
      wiki: null,
      lex: "https://lex.dk/forskel"
    }
  },
  {
    greek: "ὁρισμός",
    transliteration: "horismos",
    danish: "definition",
    explanation: "Definitionen søger at indfange et begrebs væsen og afgrænse det præcist.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Definition",
      lex: "https://lex.dk/definition"
    }
  },
  {
    greek: "τόποι",
    transliteration: "topoi",
    danish: "argumentsteder",
    explanation: "Retoriske og dialektiske mønstre, der hjælper med at finde argumenter.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Topik",
      lex: "https://lex.dk/topik"
    }
  },
  {
    greek: "ἔλεγχος",
    transliteration: "elenchos",
    danish: "modbevisning",
    explanation: "Sokratisk praksis for at afprøve påstande gennem spørgsmål og selvmodsigelser.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Elenchus",
      lex: "https://lex.dk/s%C3%B8g?Query=elenchos"
    }
  },
  {
    greek: "μαῖευσις",
    transliteration: "maieusis",
    danish: "jordemoderkunst",
    explanation: "Sokratisk metafor: læreren hjælper erkendelse frem i stedet for at levere færdige svar.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Maieutik",
      lex: "https://lex.dk/s%C3%B8g?Query=maieutik"
    }
  },
  {
    greek: "ὁμολογία",
    transliteration: "homologia",
    danish: "tilsluttet enighed",
    explanation: "I dialogen det punkt hvor samtalepartneren accepterer en præmis eller konsekvens.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=homologia"
    }
  },
  {
    greek: "νόησις",
    transliteration: "noesis",
    danish: "intellektuel indsigt",
    explanation: "Den højeste erkendelsesform i flere klassiske modeller, over sansning og mening.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Noesis",
      lex: "https://lex.dk/s%C3%B8g?Query=noesis"
    }
  },
  {
    greek: "διάνοια",
    transliteration: "dianoia",
    danish: "diskursiv tænkning",
    explanation: "Trinvis tænkning med argumenter og mellemled, i modsætning til umiddelbar indsigt.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dianoia",
      lex: "https://lex.dk/s%C3%B8g?Query=dianoia"
    }
  },
  {
    greek: "ἀνάμνησις",
    transliteration: "anamnesis",
    danish: "erindring",
    explanation: "Platons tanke om at læring kan forstås som gen-erindring af allerede kendt sandhed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Anamnese",
      lex: "https://lex.dk/anamnese"
    }
  },
  {
    greek: "σῶμα",
    transliteration: "soma",
    danish: "krop",
    explanation: "Kroppens rolle diskuteres fra dualistiske til mere integrerede sjæl-krop modeller.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Krop",
      lex: "https://lex.dk/krop"
    }
  },
  {
    greek: "πνεῦμα",
    transliteration: "pneuma",
    danish: "åndedræt / ånd",
    explanation: "I stoisk kosmologi et aktivt, gennemtrængende princip i naturen.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Pneuma",
      lex: "https://lex.dk/pneuma"
    }
  },
  {
    greek: "κόσμησις",
    transliteration: "kosmesis",
    danish: "ordning / udsmykning",
    explanation: "Peger på idéen om ordnet struktur, beslægtet med ordet kosmos.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=kosmesis"
    }
  },
  {
    greek: "ἁρμονία",
    transliteration: "harmonia",
    danish: "harmoni",
    explanation: "Forholdet mellem dele i afstemt orden, centralt i etik, musik og kosmologi.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Harmoni",
      lex: "https://lex.dk/harmoni"
    }
  },
  {
    greek: "μέτρον",
    transliteration: "metron",
    danish: "mål / målestok",
    explanation: "Mådeholdets mål-princip: det passende frem for det ekstreme.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/M%C3%A5l",
      lex: "https://lex.dk/m%C3%A5l"
    }
  },
  {
    greek: "ὕβρις",
    transliteration: "hybris",
    danish: "overmod",
    explanation: "Overskridelse af grænser, ofte efterfulgt af korrektion i tragedie og moralfortælling.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hybris",
      lex: "https://lex.dk/hybris"
    }
  },
  {
    greek: "νέμεσις",
    transliteration: "nemesis",
    danish: "gengældende retfærdighed",
    explanation: "Begreb for genoprettende modvægt når grænser og mål krænkes.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Nemesis",
      lex: "https://lex.dk/nemesis"
    }
  },
  {
    greek: "δίκη",
    transliteration: "dike",
    danish: "ret / dom",
    explanation: "Retfærdighedens konkrete udtryk i lov, dom og social orden.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dike",
      lex: "https://lex.dk/s%C3%B8g?Query=dike"
    }
  },
  {
    greek: "ἀλήθεια πρακτική",
    transliteration: "aletheia praktike",
    danish: "praktisk sandhed",
    explanation: "Sandhed i handling: at vurdering og valg svarer til den konkrete virkelighed.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8g?Query=praktisk%20sandhed"
    }
  },
  {
    greek: "συμφέρον",
    transliteration: "sympheron",
    danish: "det gavnlige",
    explanation: "Vurderingen af hvad der tjener fællesskabet eller individets egentlige bedste.",
    links: {
      wiki: null,
      lex: "https://lex.dk/gavn"
    }
  },
  {
    greek: "κοινόν",
    transliteration: "koinon",
    danish: "det fælles",
    explanation: "Nøgleord i politik: hvad borgere deler som fælles anliggende og ansvar.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/F%C3%A6llesgode",
      lex: "https://lex.dk/f%C3%A6llesgode"
    }
  },
  {
    greek: "ἴδιον",
    transliteration: "idion",
    danish: "det private / særegne",
    explanation: "Kontrast til det fælles: den private sfære eller en arts særlige egenskab.",
    links: {
      wiki: null,
      lex: "https://lex.dk/privat"
    }
  },
  {
    greek: "φιλόσοφος",
    transliteration: "philosophos",
    danish: "filosof",
    explanation: "Den der elsker visdom; idealet spænder fra dialogpartner til livsvejleder.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Filosof",
      lex: "https://lex.dk/filosof"
    }
  },
  {
    greek: "φιλοσοφία",
    transliteration: "philosophia",
    danish: "filosofi",
    explanation: "Kritisk undersøgelse af det gode liv, viden, virkelighed og politisk orden.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Filosofi",
      lex: "https://lex.dk/filosofi"
    }
  },
  {
    greek: "βάρβαρος",
    transliteration: "barbaros",
    danish: "barbar / ikke-græker",
    explanation: "Kulturmarkør i antikken, ofte brugt til at definere græsk identitet gennem kontrast.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Barbar",
      lex: "https://lex.dk/barbar"
    }
  },
  {
    greek: "γλῶσσα",
    transliteration: "glossa",
    danish: "sprog / tunge",
    explanation: "Sprog er i klassisk tænkning både erkendelsesredskab og politisk magtmiddel.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Sprog",
      lex: "https://lex.dk/sprog"
    }
  },
  {
    greek: "μῦθος",
    transliteration: "mythos",
    danish: "myte / fortælling",
    explanation: "Mytos bruges både som poetisk forklaring og som pædagogisk form i filosofien.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Myte",
      lex: "https://lex.dk/myte"
    }
  },
  {
    greek: "διάλογος",
    transliteration: "dialogos",
    danish: "dialog",
    explanation: "Dialogformen gør tænkning til fælles undersøgelse frem for monologisk dogmatik.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Dialog",
      lex: "https://lex.dk/dialog"
    }
  },
  {
    greek: "ἡσυχία",
    transliteration: "hesychia",
    danish: "indre ro",
    explanation: "Ro forstået som disciplineret stilhed i sindet, beslægtet med senere kontemplative traditioner.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hesykasme",
      lex: "https://lex.dk/s%C3%B8g?Query=hesychia"
    }
  },
  {
    greek: "σπουδή",
    transliteration: "spoude",
    danish: "alvor / iver",
    explanation: "Betegner seriøs målrettethed i læring og moralsk dannelse.",
    links: {
      wiki: null,
      lex: "https://lex.dk/alvor"
    }
  },
  {
    greek: "σχέσις",
    transliteration: "schesis",
    danish: "relation",
    explanation: "Relationelle begreber er afgørende i analyser af etik, politik og kategorier.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Relation_(filosofi)",
      lex: "https://lex.dk/relation"
    }
  },
  {
    greek: "αἰδώς",
    transliteration: "aidos",
    danish: "ærbødig skamfølelse",
    explanation: "Social-moralsk følelse der regulerer adfærd gennem respekt og blufærdighed.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Aidos",
      lex: "https://lex.dk/s%C3%B8g?Query=aidos"
    }
  },
  {
    greek: "φρόνημα",
    transliteration: "phronema",
    danish: "sindelag",
    explanation: "Den overordnede indstilling eller holdning, som præger handling og vurdering.",
    links: {
      wiki: null,
      lex: "https://lex.dk/sindelag"
    }
  },
  {
    greek: "ζήτησις",
    transliteration: "zetesis",
    danish: "undersøgelse / søgen",
    explanation: "Filosofien forstås som en vedvarende undersøgelsesbevægelse snarere end slutpunkt.",
    links: {
      wiki: null,
      lex: "https://lex.dk/s%C3%B8gen"
    }
  },
  {
    greek: "πρόνοια",
    transliteration: "pronoia",
    danish: "forsyn / fremsyn",
    explanation: "Kan betyde guddommelig forsyn eller menneskelig fremsynet planlægning.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Providens",
      lex: "https://lex.dk/forsyn"
    }
  },
  {
    greek: "ἁμαρτία",
    transliteration: "hamartia",
    danish: "fejlgreb",
    explanation: "I tragedieteori den fejl eller forvildelse der sætter faldet i gang.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Hamartia",
      lex: "https://lex.dk/s%C3%B8g?Query=hamartia"
    }
  },
  {
    greek: "περιπέτεια",
    transliteration: "peripeteia",
    danish: "omslag",
    explanation: "Det dramatiske vendepunkt hvor handlingens retning pludseligt ændres.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Peripeti",
      lex: "https://lex.dk/peripeti"
    }
  },
  {
    greek: "ἀναγνώρισις",
    transliteration: "anagnorisis",
    danish: "genkendelse / erkendelsesvending",
    explanation: "Det øjeblik hvor en afgørende sandhed erkendes i tragediens forløb.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Anagnorisis",
      lex: "https://lex.dk/s%C3%B8g?Query=anagnorisis"
    }
  },
  {
    greek: "ὁμόνοια",
    transliteration: "homonoia",
    danish: "samdrægtighed",
    explanation: "Politisk enighed om grundlæggende mål, ikke nødvendigvis enighed om alle detaljer.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Samdr%C3%A6gtighed",
      lex: "https://lex.dk/samdr%C3%A6gtighed"
    }
  },
  {
    greek: "εὐνομία",
    transliteration: "eunomia",
    danish: "god lovorden",
    explanation: "Ideal om velordnet samfund med ret, balance og institutionel stabilitet.",
    links: {
      wiki: "https://da.wikipedia.org/wiki/Eunomia",
      lex: "https://lex.dk/s%C3%B8g?Query=eunomia"
    }
  },
  {
    greek: "φιλοτιμία",
    transliteration: "philotimia",
    danish: "ærelyst",
    explanation: "Ambition efter anerkendelse; kan være drivkraft eller forfaldstendens afhængigt af mål.",
    links: {
      wiki: null,
      lex: "https://lex.dk/%C3%A6re"
    }
  },
  {
    greek: "ἀρεσκή",
    transliteration: "areske",
    danish: "at behage",
    explanation: "Begrebet bruges i etisk kritik af overfladisk tilpasning til publikums smag.",
    links: {
      wiki: null,
      lex: null
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

const baseRows = GLOSSARY_TERMS.slice(0, 100).map((item, index) => ({ ...item, index }));

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ς/g, "σ");
}

function sortRows(rows) {
  const locale = state.sortKey === "greek" ? "el" : "da";
  const direction = state.sortDirection === "asc" ? 1 : -1;

  return [...rows].sort((a, b) => {
    const first = a[state.sortKey];
    const second = b[state.sortKey];

    const result = first.localeCompare(second, locale, {
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
              <span class="glossary-greek">${row.greek}</span>
              <span class="glossary-translit">${row.transliteration}</span>
            </a>
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
