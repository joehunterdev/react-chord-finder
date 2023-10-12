import { Component } from "react";
import { notes, intervals } from "./Constants/constants";

class Harmony extends Component {
  
  constructor() {
     super();
     this.state = {};
  }

  //helper function
  notesToIntervals = (name) => {
    this.setState({ ...this.state, chordInputName: this.state.name });
  }

  getNoteNum = (note_name) => {
    //find note id using sharp or flat  
    let res = notes.find((note) => { return (note.name === note_name || note.alt === note_name) }); //indexOf ? //|| note.alt === note_name
    return res.id;
  }

  getNoteNums = (note_name) => {
     
     
    
  }

  getOcatve = (note_name) => {

  }

  //Get interval between two notes
  getInterval(input) {
    let root = this.getNoteNum(String(input[0]));
    let second = this.getNoteNum(String(input[1]));
    return Math.abs(root - second);
  }

  //Type comparison magic
  arrayEquals(a, b) {
    return (    
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }


  //Get chord name from a bunch of intervals
  getChord(input) {

    let input_intervals = [];
    let res = [];
    let chord_name = "";
  
    switch (input.length) {
      case 1:
        return input[0];
      case 2:
        chord_name = Object.keys(intervals.two).find(
          (key) => intervals.two[key] === this.getInterval([input[0], input[1]])
        );

        return chord_name;

      case 3:

        input_intervals = [
          this.getInterval([input[0], input[1]]),
          this.getInterval([input[0], input[2]]),
        ];

        res = Object.keys(intervals.three).forEach((key, val) => {
          if (
            this.arrayEquals(intervals.three[key], input_intervals) === true
          ) {
            chord_name = input[0] + " " + key;
          }
        });

        //this.setState({ ...this.state, chordNameOutput: chord_name });

        return chord_name;

      case 4:
        //Todo: this doesnt look correct but works
        // get from note 1 to note 2, note 1 to note 3
        input_intervals = [
          this.getInterval([input[0], input[1]]),
          this.getInterval([input[0], input[2]]),
          this.getInterval([input[0], input[3]]),
        ];
        res = Object.keys(intervals.four).forEach((key, val) => {
          if (
            this.arrayEquals(intervals.four[key], input_intervals) === true
          ) {
            chord_name = input[0] + " " + key;
          }
        });

        //this.setState({ ...this.state, chordNameOutput: chord_name });

        return chord_name;

      case 5:

        input_intervals = [
          this.getInterval([input[0], input[1]]),
          this.getInterval([input[0], input[2]]),
          this.getInterval([input[0], input[3]]),
          this.getInterval([input[0], input[4]])
        ];
        res = Object.keys(intervals.five).forEach((key, val) => {
          if (
            this.arrayEquals(intervals.five[key], input_intervals) === true
          ) {
            chord_name = input[0] + " " + key;
          }
        });

        //this.setState({ ...this.state, chordNameOutput: chord_name });

        return chord_name;

      case 6:

        input_intervals = [
          this.getInterval([input[0], input[1]]),
          this.getInterval([input[0], input[2]]),
          this.getInterval([input[0], input[3]]),
          this.getInterval([input[0], input[4]]),
          this.getInterval([input[0], input[5]])
        ];

        res = Object.keys(intervals.six).forEach((key, val) => {
          if (
            this.arrayEquals(intervals.six[key], input_intervals) === true
          ) {
            chord_name = input[0] + " " + key;
          }
        });

        //this.setState({ ...this.state, chordNameOutput: chord_name });

        return chord_name;

      case 7:

        input_intervals = [
          this.getInterval([input[0], input[1]]),
          this.getInterval([input[0], input[2]]),
          this.getInterval([input[0], input[3]]),
          this.getInterval([input[0], input[4]]),
          this.getInterval([input[0], input[5]]),
          this.getInterval([input[0], input[6]])
        ];
        res = Object.keys(intervals.seven).forEach((key, val) => {
          if (
            this.arrayEquals(intervals.seven[key], input_intervals) === true
          ) {
            chord_name = input[0] + " " + key;
          }
        });

        return chord_name;

      default:
        return 'no chord found'
    }

  }

  getChord2(input) {
    if (input.length === 1) {
      return input[0];
    }
  
    const intervals = input.map((note, index) => {
      if (index === 0) {
        return null;
      }
      return this.getInterval([input[0], note]);
    });
  
    const chordName = Object.keys(chords).find((key) =>
      this.arrayEquals(chords[key], intervals)
    );
  
    if (chordName) {
      return input[0] + " " + chordName;
    }
  
    return "";
  }

}
export default Harmony;
