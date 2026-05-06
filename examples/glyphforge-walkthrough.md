# Glyphforge Walkthrough

This note is the quickest way to read the extra review model in `glyphforge`.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | geometry span | 195 | ship |
| stress | atlas pressure | 194 | ship |
| edge | shader drift | 179 | ship |
| recovery | render budget | 178 | ship |
| stale | geometry span | 168 | ship |

Start with `baseline` and `stale`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

If `stale` becomes less cautious without a clear reason, I would inspect the drag input first.
