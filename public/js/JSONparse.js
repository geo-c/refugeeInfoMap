/**let getJsonData = (dataString) => {
    let jsondata = $.getJSON("../json/data.json", function (json) {
        let textstring = jsondata.responseJSON;
        console.log(textstring);
        return json;
    });
}**/

let jsonString = [
    {
        "Name": "Jobcenter Muenster",
        "Adress": "Stadthaus 2 Ludgeripl. 4 48151 Muenster Deutschland",
        "X": "7.626.846",
        "Y": "51.955.038",
        "Kategorie": "Behoerde",
        "Thema": "Arbeit",
        "Beschreibung": "Jobcenter - Hilfe zur Arbeitssuche",
        "Website": "https://www.stadt-muenster.de/jobcenter/index.html",
        "Telefon": "02 51 / 4 92-92 92",
        "E-Mail": "jobcenter@stadt-muenster.de",
        "Schlagworte": "Arbeit finden"
    },
    {
        "Name": "Mamba",
        "Adress": "Hafenstrasse 3-5, 48153 Muenster",
        "X": "7.628.029",
        "Y": "51.955.178",
        "Kategorie": "Fluechtlingshilfe",
        "Thema": "Arbeit",
        "Beschreibung": "Mamba - Das Job-Netzwerk",
        "Website": "https://www.mamba-muenster.de/start/",
        "Telefon": "02 51 / 1 44 86-37",
        "E-Mail": "klose@ggua.de",
        "Schlagworte": "Arbeit finden, Beratung"
    },
    {
        "Name": "Kommunales Integrationszentrum",
        "Adress": "Stadthaus 1, Raum 467, Klemensstrasse 10, 48143 Muenster",
        "X": "7.629.351",
        "Y": "51.961.302",
        "Kategorie": "Behoerde",
        "Thema": "",
        "Beschreibung": "Kommunales Integrationszentrum",
        "Website": "https://www.stadt-muenster.de/zuwanderung/startseite.html",
        "Telefon": "02 51 / 4 92-70 81",
        "E-Mail": "ki-muenster@stadt-muenster.de",
        "Schlagworte": ""
    },
    {
        "Name": "Sozialamt",
        "Adress": "Hafenstrasse 8, 48153 Muenster",
        "X": "7.628.367",
        "Y": "51.954.648",
        "Kategorie": "Behoerde",
        "Thema": "Wohnen",
        "Beschreibung": "Sozialamt",
        "Website": "https://www.stadt-muenster.de/sozialamt/startseite.html",
        "Telefon": "02 51 / 4 92-50 01",
        "E-Mail": "sozialamt@stadt-muenster.de",
        "Schlagworte": "Erstaufnahme, Wohnen, finanzielle Leistungen, soziale Dienste, Ehrenamt, Vereine, Initiativen"
    },
    {
        "Name": "Afaq e.V.",
        "Adress": "Moltkestrasse 25, 48151 Muenster",
        "X": "7.622.616",
        "Y": "51.955.315",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Treffpunkt, Kultur",
        "Beschreibung": "Verein fuer kulturelle und gesellschaftliche Zusammenarbeit",
        "Website": "http://afaq-verein.de/",
        "Telefon": "02 51 / 39 47 58 27",
        "E-Mail": "info@afaq-verein.de",
        "Schlagworte": "Fluechtlingshilfe, Integration, Uebersetzung, Beratung, Wohnungssuche, Auslaenderrecht, Kultur, Migranten-Selbstorganisation"
    },
    {
        "Name": "MuM Mehrgenerationenhaus und Muetterzentrum e.V.",
        "Adress": "Gescherweg 87, 48161 Muenster",
        "X": "7.573.010",
        "Y": "51.975.900",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Treffpunkt, Kultur",
        "Beschreibung": "Treffpunkt, Angebote fuer Frauen, Freizeit- und Kulturangebote",
        "Website": "https://www.mum-muenster.de/",
        "Telefon": "02 51 / 13 34 87 99",
        "E-Mail": "info@mum-muenster.de",
        "Schlagworte": "Treffpunkt, Kaffeehaus, Angebote fuer Senioren, Fluechtlingshilfe"
    },
    {
        "Name": "Deutsches Rotes Kreuz Muenster",
        "Adress": "Hamannplatz 38, 48157 Muenster",
        "X": "7.648.760",
        "Y": "51.993.330",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Beratung",
        "Beschreibung": "Migrationsberatung fuer erwachsene Zuwanderer",
        "Website": "https://www.drk-muenster.de/angebot/migration/migrationsberatung.php",
        "Telefon": "02 51 / 1 62 00 78",
        "E-Mail": "",
        "Schlagworte": "Integrationskurs, Kinderbetreuung, Bildung, Ausbildung, Weiterbildung, Gesundheitsversorgung, Ausaenderrecht, Schule, Ausbildung, Erziehung"
    },
    {
        "Name": "Diakonie Muenster",
        "Adress": "Hoersterplatz 2b, 48147 Muenster",
        "X": "7.634.865",
        "Y": "51.966.451",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Beratung",
        "Beschreibung": "Migrationsberatung fuer Jugendliche und Erwachsene",
        "Website": "https://www.diakonie-muenster.de/web/beratungs-und-bildungscentrum/main/themenfelder/migration.html",
        "Telefon": "02 51 / 4 90 15-0",
        "E-Mail": "",
        "Schlagworte": "Wohnungssuche, Mietprobleme, Arbeit finden, Uebersetzung, Schule, Auslaenderrecht, Anerkennung von Schul- und Berufsabschluessen, Bildung"
    },
    {
        "Name": "Caritas Muenster",
        "Adress": "Josefstrasse 2, 48151 Muenster",
        "X": "7.625.118",
        "Y": "51.953.760",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Beratung",
        "Beschreibung": "Fachdienst fuer Integration und Migration",
        "Website": "https://www.caritas-ms.de/hilfe-beratung/migrationsdienst/migrationsdienst",
        "Telefon": "02 51 / 5 30 09-430",
        "E-Mail": "soziale.beratungsdienste@caritas-ms.de",
        "Schlagworte": "Asyl, Schule, Kindergarten, Deutsch lernen, Behoerdengaenge, Diskriminierung, finanzielle probleme, psychische Probleme"
    },
    {
        "Name": "Universitaetsklinikum Muenster",
        "Adress": "Schmeddingstrasse 50, 48149 Muenster",
        "X": "7.590.940",
        "Y": "51.958.190",
        "Kategorie": "Krankenhaus",
        "Thema": "Beratung",
        "Beschreibung": "Spezialsprechstunde fuer Fluechtlingskinder, ihre Familien und Bezugspersonen",
        "Website": "https://www.ukm.de/index.php?id=psych_flchtlingskinder",
        "Telefon": "02 51 / 83-56 673",
        "E-Mail": "",
        "Schlagworte": "Diagnostik, Psychotherapie, Elterngespraeche, Familiengespraeche, Gruppenangebote, Supervision, Gruppenangebote"
    },
    {
        "Name": "GGUA Fluechtlingshilfe",
        "Adress": "Hafenstrasse 3-5, 48153 Muenster",
        "X": "7.628.029",
        "Y": "51.955.178",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Beratung",
        "Beschreibung": "Fluechtlingshilfe",
        "Website": "https://www.ggua.de/",
        "Telefon": "02 51 / 1 44 86-0",
        "E-Mail": "info@ggua.de",
        "Schlagworte": ""
    },
    {
        "Name": "Afrika Kooperative e.V.",
        "Adress": "In der Au 11b, 48159 Muenster",
        "X": "7.614.706",
        "Y": "52.036.783",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Kultur",
        "Beschreibung": "Kultur, Themenabende, Konzerte, Lesungen, Diskussionen",
        "Website": "http://afrika-kooperative.blogspot.com",
        "Telefon": "01 70 / 4 76 07 09",
        "E-Mail": "info@afrika-kooperative.de",
        "Schlagworte": ""
    },
    {
        "Name": "MS Asylgruppe 1314",
        "Adress": "Achtermannstrasse 10-12, 48143 Muenster",
        "X": "7.633.107",
        "Y": "51.957.652",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Beratung",
        "Beschreibung": "Beratung zu Flucht, Asyl undAsylverfahren",
        "Website": "http://www.amnesty-muenster-osnabrueck.de/gruppen/asylgruppe-1314/",
        "Telefon": "",
        "E-Mail": "amnesty-asylgruppe@muenster.de",
        "Schlagworte": "Beratung, Flucht, Asyl,Asylverfahren"
    },
    {
        "Name": "Freiwilligenagentur Muenster",
        "Adress": "Gasselstiege 13, 48159 Muenster",
        "X": "7.610.820",
        "Y": "51.971.734",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Beratung",
        "Beschreibung": "Sprechstunde fuer Menschen aus anderen Laendern, die sich freiwillig engagieren moechten",
        "Website": "https://www.freiwilligenagentur-muenster.de/de/engagieren/fuer-gefluechtete-menschen/ehrenamt-von-gefluechteten/",
        "Telefon": "02 51 / 4 92 59 70",
        "E-Mail": "kohl@stadt-muenster.de",
        "Schlagworte": "Beratung, Ehrenamt"
    },
    {
        "Name": "WelcomeC@fe",
        "Adress": "Verspoel 7/8, 48143 Muenster",
        "X": "7.628.878",
        "Y": "51.957.807",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Treffpunkt, Kultur",
        "Beschreibung": "Regelmaessiger Treffpunkt fuer Gefluechtete und Studierende",
        "Website": "http://www.welcomemuenster.de/projekte/",
        "Telefon": "",
        "E-Mail": "info@welcomemuenster.de",
        "Schlagworte": "Beratung, Internet, Treffpunkt"
    },
    {
        "Name": "Amt fuer Schule und Weiterbildung",
        "Adress": "Friedrich-Ebert-Strasse 110, 48153 Muenster",
        "X": "7.630.523",
        "Y": "51.946.840",
        "Kategorie": "Behoerde",
        "Thema": "Beratung",
        "Beschreibung": "Ansprechpartner und Ansprechpartnerinnen zu Fragen rund um Schule und Weiterbildung",
        "Website": "https://www.stadt-muenster.de/schulamt/startseite.html",
        "Telefon": "02 51/4 92-40 01",
        "E-Mail": "bildung@stadt-muenster.de",
        "Schlagworte": "Ferienkurse, Schule, Volkshochschule, Schulpsychologische Beratungsstelle"
    },
    {
        "Name": "Kinderbuero",
        "Adress": "Junkerstrasse 1, 48153 Muenster",
        "X": "7.630.101",
        "Y": "51.954.197",
        "Kategorie": "Behoerde",
        "Thema": "Bildung",
        "Beschreibung": "Ansprechpartner fuer Kinder und Eltern, Freizeitangebote",
        "Website": "https://www.stadt-muenster.de/kinderbuero/startseite.html",
        "Telefon": "02 51/4 92-51 09",
        "E-Mail": "kinderbuero@stadt-muenster.de",
        "Schlagworte": "Ferienkurse, Freizeit, Kinder, Maxi-Turm, Kinderbetreuung"
    },
    {
        "Name": "Auslaenderamt",
        "Adress": "Stadthaus 2, Ludgeriplatz 4 (Eingang Suedstrasse), 48151 Muenster",
        "X": "7.626.630",
        "Y": "51.955.090",
        "Kategorie": "Behoerde",
        "Thema": "Beratung",
        "Beschreibung": "Regelung des Aufenthalts aller in Muenster lebender Auslaenderinnen und Auslaender.",
        "Website": "",
        "Telefon": "02 51/4 92-36 36",
        "E-Mail": "auslaenderamt@stadt-muenster.de",
        "Schlagworte": ""
    },
    {
        "Name": "Frauen-Notruf Muenster e.V.",
        "Adress": "Heisstrasse 9, 48145 Muenster",
        "X": "7.643.638",
        "Y": "51.960.725",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Beratung",
        "Beschreibung": "Beratungsstelle fuer Frauen und Maedchen ?bei sexualisierter Gewalt",
        "Website": "https://www.frauennotruf-muenster.de/",
        "Telefon": "02 51 / 3 44 43",
        "E-Mail": "info@frauennotruf-muenster.de",
        "Schlagworte": "Beratung, Frauen, sexualisierte Gewalt, gewalt, Notruf"
    },
    {
        "Name": "Integrationsforum Fluechtlinge Muenster e.V.",
        "Adress": "Kleikamp 13, 48153 Muenster",
        "X": "7.611.580",
        "Y": "51.926.740",
        "Kategorie": "Projekte, Initiativen, Vereine",
        "Thema": "Freizeit",
        "Beschreibung": "Fahrradkurse fuer gefluechtete Frauen",
        "Website": "https://radfahrenfuerfluechtlinge.wordpress.com/",
        "Telefon": "02 51 / 1 36 74 73",
        "E-Mail": "",
        "Schlagworte": "Fahrradfahren lernen"
    }
];

let getJsonData = () => {
    //$.getJSON('data.json')
    let jsonData = JSON.stringify(jsonString);
    jsonData = JSON.parse(jsonData);
    return jsonData;

}