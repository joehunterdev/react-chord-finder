## Chord Finder

Pure React chord name output from virtual piano keys. With a focus on ui ux display across multiple devices,Specifically mobile

---

### V2

- Features:
  - 
  - Piano GUI:
  - [x] Do active notes
  - [x] markup css
  - [x] 12 Note input
  - [ ] Remove cursor from key its annoying
  - [x] Black note
  - [x] White note
  - [x] friendly note name in class not C#

  - Piano Component Controls:

    - Note click handler
      - [x] key down long press state (useEffect ?)
      - [x] key up
      - [x] Max Keys
      - [x] Key layout x2 (octaves)
      - [x] Fix key press logic on and off
      - [ ] reset feature
      - [x] interval name

  - ChordName Components
    - [x] Jest Test and config for all chord types

  - UI
      - [ ] Create a card component

  - Context:

    - [x] Add note to noteInput
    - [x] Remove note from noteInput
    - [x] Restructure notes data to include octave
    - Could be a threat as it will require a lot of refactoring
    - [x] Sort notes by pitch
    - [x] Object mutation for notesReducer

  - Harmony HOC:

    - Harmony
      - Simple Chords
      - [x] Output root
      - Major min 7th dims etc
      - Inversions 
        - any simple chords can be inverted
        - library js theory plugin
        - Decide on whether to keep 0 - 7 Tone logic or Stacked Interval logic
        - [x] normlize naming convention 
      - Advanced chords
      - [x] Look for alts to derive note id the "flat" Eb prblem.
      - ~~ [] Change this to functional component ?? ~~
      - [x] Needs extra octave
      - [x] simplify switch getChord? make recursive 
      - [x] Do stacked intervals
      - Recheck no chordname found output
      - [ ] Add inversion logic
      - _Compromise either reducer complexity or getChord complexity_
      - [x] Test cases
        - ~~major~~
        - ~~minor~~
        - ~~augmented~~
        - ~~diminished~~
        - 8 types of 7th
          - ([x]7, ~~maj7, m7, m(maj7),~~ [x]dim7, [x] 7b5, [x]7#5, [x]m7b5)
        - ~~ninth (major/minor)~~
        - ~~eleventh (major/minor)~~
        - ~~13th (major/minor)~~
        - ~~sixth (major/minor)~~
        - ~~sus2~~
        - [x] Write Amin chord for two octave test
          - [x] Logic for counting up to notes on next octave (+12)
        - [x] sus4
        - [x] 2

  - Reproduce audio:
    - [] Play sound

 BUGFIXES:
  - [x]  8 Key press crashes
  - [x] Simplify array handling from constants
  - [x] Fix piano padding layout
  - [x] Decide on Component Structure & naming
  - [x] Install Bootstrap
  - [x] Install classnames
  - [x] UI Color (make this more highlighted on black key)
  - [x] Fix padding default issue @normalize using import and priority swith
  - [x] Chord name needs to run every time a note is added or removed
  - [x] Keyup doesnt retrigger chord name
  - [x] `ol, ul { /* padding-left: 2rem; */}` layout issue
  - [x] Migrate to React Vite
    - Investigate react-app to vite
  - [x] Setup proper Tests for chord names
  - [ ] Fix redundant code in css `.black:active {`
  - [x] Output no chord found

- Deployment
  - Build for prod
  - Github actions may be required

Component Tree:

```
    App.js
     -> Instrument
        -> Piano
            -> Keys
                onClick handlers
                state setNotes
                -> Key
```

Analysis:

- Can getChord switch statement be imporved ?
  - [x] Recursion 
  - [ ] Typescript ?

- Where to handle chord name ? In context ? or directly in component
  - Directly in component to levarage state updates
- How we can we optimize events and state updates
- State and leveraging this in Harmony component
- let res = []; ? is redundant ?
- The sort on notes could cause issues when coming to do inversions
- How to handle inversion ?
- A good  
- Classes = dna

- Treats:
  - When adding an extra octave will need to add a new note object in context
  - Smells like useEffect and useRef could be levaraged to get around this setState issue
  - `interface HarmonyProps {` ?

---

### V3

Requirements:

- Play sound
- Chord name to key output
- Scale display
- Key Select
- refactor to vite or next app
- reproduce a chord progression visualy
- Change active color
- Optimization
- [] Handle inversion
- [] Test cases
- [] Docs / Diagram

---

### General Notes

#### Music Theory

    Semitones	Interval	Abbreviation	Example

    0	Unison	PP or P1	C – C
    1	Minor 2nd	m2	C – Db
    2	Major 2nd	M2	C – D
    3	Augmented 2nd	A2	C – D#
    3	Minor 3rd	m3	C – Eb
    4	Major 3rd	M3	C – E
    4	Diminished 4th	D4	C – Fb
    5	Perfect 4th	P4	C – F
    6	Augmented 4th	A4	C – F#
    6	Diminished 5th	D5	C – Gb
    7	Perfect 5th	P5	C – G
    8	Augmented 5th	A5	C – G#
    8	Minor 6th	m6	C – Ab
    9	Major 6th	M6	C – A

    The 18 chord formulas: major, sus2, sus4, 5, maj7, maj6, minor, augmented, diminished, minor7, minor7♭5, dim7, dom7, minor7#5, maj7#5, maj7♭5, dom7#5, dom7♭5.

    Seven or eight is typcially the max number of notes in a chord.

    351 possible chord variations

the sharp (♯), the flat (♭) and the natural (♮).

Scenario: - C Eb e () app should try to find the chord name by swithing bass note

    This chord is Eb6sus2\C (Borader chord finding by switching bass note)

    sus2 and sus4 chords.

    **consonants**:
    pleasing or  sound.
    **dissonant** sound:
    jarring or

    The pitch middle C is C4, which is useful to memorize.

    The notes (C, C# or Db, D, D# or Eb, D, F, F# or Gb, G, G# or Ab, A# or Bb, B) are followed by an octave number. For example: C2, F#3, and Bb4. These may also be written in various publications as: C(2), F#(3), Bb(4), C[2], F#[3], Bb[4], or C2, F#3, and Bb4.

    Goal:
     minor, augmented, diminished, 8 types of 7th chords (7, maj7, m7, m(maj7), dim7, 7b5, 7#5, m7b5), ninth chords, eleventh chords, 13th chords, sixth chords, sus2 and sus4 chords.

    The reason the keyboard is designed around the C major scale does not come from piano - it started with the organ. Organ builders discovered long ago that a pipe of 8 feet will give a note close to the pitch called C. This was a convenient place to start

    An octave ! despite the way it looks c1 still goes to b1 (even tho these are not in order)

Inversions:
  - x3 Lets only invert the 3rd Fifth and 7th
  - Need to derive the 3rd 5th and 7th from the chord name (presumably break all tones into a major scale and count up from the root note)
  - Correct ! chords are derived from scales
  - Run Jest test cases

  - Where to handle inversion ? 
  - Potentially now we will have multiple chord names
  - up to now we dont have a way to derive a chord from a scale

Logic:
  - Have

#### Programmer Notes

- [Enums !] https://www.sohamkamani.com/javascript/enums/?utm_content=cmp-true)
- https://codepen.io/zastrow/pen/kxdYdk - Philip Zastrow @zastrow
