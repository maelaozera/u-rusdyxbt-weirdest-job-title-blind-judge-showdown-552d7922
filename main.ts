// Weirdest Job Title: Blind Judge Showdown
// Entry program: writes exactly one job title to /output/entry.txt.
//
// How the candidates were weighed against the judge's criteria
// (weird first, stranger than ordinary work, funny on first read,
// sounds like a real job, reads instantly):
//
// 1. "Senior Manager of Haunted Office Morale" (41 chars)
//    Funny corporate-plus-haunted twist, easy to picture. But "haunted
//    office" is a well-worn comedy pairing, so it is less fresh than
//    the winner and the twist lands a beat later.
// 2. "Vice President of Imaginary Friends" (38 chars)
//    Short, instant, and the corporate rank clashes well with the
//    childish subject. Loses a little because the joke is one word
//    ("Imaginary") doing all the work, and it is a fairly common gag.
// 3. "Director of Unfinished Business" (32 chars)
//    Clever double meaning, reads fast. Too subtle, though: it could
//    pass as a real title, so the weirdness is easy to miss on a
//    first read, and it is not very funny out loud.
// 4. "Chief Apologizer for the Weather" (33 chars)
//    Absurd job, instantly funny. But "apologizer" is a made-up
//    word that weakens the "sounds like a real job" criterion, and
//    weather jokes are a familiar stand-up staple.
// 5. "Head of Department of Lost Causes" (36 chars)
//    Bureaucratic framing is good and the phrase is evocative, but
//    "lost causes" is a cliche idiom, so the angle feels borrowed
//    rather than new.
// 6. "Certified Professional Nap Taker" (34 chars)
//    Very readable and relatable, but napping is the laziest joke
//    in the book: every list of weird jobs already has a napper.
// 7. "Regional Manager of Accidental Fame" (37 chars)
//    Nice specificity ("accidental fame" is a vivid image), yet the
//    humour is abstract: you cannot quite picture what the person
//    does all day, so it scores lower on "specific enough to picture".
// 8. "Professional Queue Stander for Celebrities" (44 chars)
//    Specific and visual, but "professional queue stander" is a real
//    known gig, so the strangeness is smaller than it first looks.
//
// Winner: "Lead Whisperer to Abandoned Shopping Carts" (42 chars).
// Every word earns its place: a real-sounding seniority ("Lead"),
// an odd skill ("Whisperer"), and a hilariously specific, slightly
// sad subject ("Abandoned Shopping Carts") you can instantly picture
// in a supermarket car park at dusk. It is a job nobody has heard
// of, it is not a recycled cliche, and the twist lands on first read.

import { mkdirSync, writeFileSync } from "node:fs";

// The single chosen job title. Must stay within 1-60 characters,
// one line, and nothing else: the gate rejects anything longer or
// anything that is not one job title. The program is fully
// deterministic: no input, no network, no randomness, so every run
// writes the exact same bytes.
const TITLE = "Lead Whisperer to Abandoned Shopping Carts";

// Write the title byte-exact: no trailing newline, no extra text.
// The entry file must contain exactly the title and nothing else.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
