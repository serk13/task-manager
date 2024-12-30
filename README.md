# Task Manager

Eine einfache Angular-Anwendung zur Verwaltung von Aufgaben (Tasks).

## Funktionen

- Aufgaben erstellen und zur Liste hinzufügen
- Aufgaben als erledigt markieren
- Aufgaben löschen
- Automatische Speicherung im Browser (localStorage)
- Responsive Benutzeroberfläche

## Technische Details

- Angular Version: 16+
- Verwendung von TypeScript
- Komponenten-basierte Architektur
- Two-Way-Databinding
- Lokale Datenspeicherung

## Installation

1. Repository klonen:
   ```bash
   git clone [repository-url]
   ```

2. In das Projektverzeichnis wechseln:
   ```bash
   cd task-manager
   ```

3. Abhängigkeiten installieren:
   ```bash
   npm install
   ```

4. Entwicklungsserver starten:
   ```bash
   ng serve
   ```

5. Im Browser öffnen:
   ```
   http://localhost:4200
   ```

## Projektstruktur
```
task-manager/
├── src/
│   ├── app/
│   │   ├── tasks/
│   │   │   ├── tasks.component.ts
│   │   │   ├── tasks.component.html
│   │   │   └── tasks.component.css
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.module.ts
│   └── ...
└── ...
```

## Verwendung

- Neue Aufgabe: Text in das Eingabefeld eingeben und "Hinzufügen" klicken oder Enter drücken
- Aufgabe als erledigt markieren: Checkbox neben der Aufgabe anklicken
- Aufgabe löschen: "Löschen"-Button neben der Aufgabe klicken

## Entwicklung

- Komponenten-Logik befindet sich in `tasks.component.ts`
- HTML-Template in `tasks.component.html`
- Styling in `tasks.component.css`

## Entwicklungsserver

Starten Sie einen lokalen Entwicklungsserver mit:

```bash
ng serve
```

Öffnen Sie dann Ihren Browser und navigieren Sie zu `http://localhost:4200/`. Die Anwendung wird automatisch neu geladen, wenn Sie Änderungen an den Quelldateien vornehmen.

## Code-Generierung

Die Angular CLI enthält leistungsstarke Code-Generierungstools. Um eine neue Komponente zu erstellen, führen Sie aus:

```bash
ng generate component component-name
```

Für eine vollständige Liste der verfügbaren Schematics (wie `components`, `directives` oder `pipes`), führen Sie aus:

```bash
ng generate --help
```

## Build

Um das Projekt zu erstellen, führen Sie aus:

```bash
ng build
```

Dies kompiliert Ihr Projekt und speichert die Build-Artefakte im `dist/`-Verzeichnis. Standardmäßig optimiert der Produktions-Build Ihre Anwendung für Leistung und Geschwindigkeit.

## Unit-Tests ausführen

Um Unit-Tests mit dem [Karma](https://karma-runner.github.io) Test-Runner auszuführen, verwenden Sie:

```bash
ng test
```

## End-to-End-Tests ausführen

Für End-to-End (E2E) Tests führen Sie aus:

```bash
ng e2e
```

Die Angular CLI kommt standardmäßig nicht mit einem End-to-End-Testing-Framework. Sie können eines wählen, das Ihren Anforderungen entspricht.

## Weitere Ressourcen

Weitere Informationen zur Verwendung der Angular CLI, einschließlich detaillierter Befehlsreferenzen, finden Sie auf der [Angular CLI Übersicht und Befehlsreferenz](https://angular.dev/tools/cli)-Seite.

## Autor

[Ihr Name]

## Lizenz

MIT
```

Die wichtigsten Korrekturen waren:
- Konsistente Formatierung der Markdown-Syntax
- Korrektur von "Development Server" zu "Entwicklungsserver"
- Bindestrich-Korrekturen bei zusammengesetzten Wörtern (z.B. "Unit-Tests", "End-to-End-Tests")
- Konsistente Verwendung von Anführungszeichen
- Korrektur der Grammatik und Rechtschreibung
- Verbesserung der Lesbarkeit durch einheitliche Formatierung

