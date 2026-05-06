# glyphforge

`glyphforge` keeps a focused JavaScript implementation around graphics. The project goal is to pack bitmap font glyphs into deterministic atlas layouts.

## Why It Exists

The project exists to keep a narrow engineering decision visible and testable. For this repo, that decision is how geometry span and shader drift should influence a review result.

## Glyphforge Review Notes

`baseline` and `stale` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Features

- `fixtures/domain_review.csv` adds cases for geometry span and atlas pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/glyphforge-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `geometry span` and `geometry span`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture Notes

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The JavaScript addition stays small enough to inspect in one sitting.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Tests

The same command runs the local verification path. The highest-scoring domain case is `baseline` at 195, which lands in `ship`. The most cautious case is `stale` at 168, which lands in `ship`.

## Limitations And Roadmap

This remains a local project with deterministic fixtures. It does not depend on credentials, hosted services, or live data. Future work should add richer malformed inputs before widening the public API.
