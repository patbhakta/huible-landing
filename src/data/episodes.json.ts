export interface Template {
  name: string;
  image: string;
  episode: string;
  season: string;
  audio: string;
  description: string;
};
const one: Template = {
  name: "Facial Expression",
  image: "https://mturkrecord.s3.amazonaws.com/targexps/img1260.jpg",
  episode: "Reaction #00223",
  description: "89% AU4 Brow Lowerer + 85% AU25 Lips Part + 77% Cry + 69% Tearing up + 61% AU7 Lids Tight + 54% Eyes closed + 53% AU43 Eye Closure + 47% AU6 Cheek Raise + 45% Grimace",
  season: "Data Breakdown",
  audio: ""
};
const two: Template = {
  name: "Wordless Context",
  image: "https://images.unsplash.com/photo-1601412436967-8b2d90944ded?q=80&w=987",
  episode: "Reaction #02004",
  description: "72% Groan + 55% Argh + 55% Growl + 51% Grr + 50% Grunt + 39% Ugh + 36% Roar + 33% Ahh + 24% Moan",
  season: "Data Breakdown",
  audio: "https://mturkrecord.s3.amazonaws.com/targaudio/Leah_019.mp3"
};
const three: Template = {
  name: "Speech Prosody",
  image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
  episode: "Calmness",
  description: "28% Calmness + 15% Desire + 15% Tiredness + 11% Interest + 11% Concentration + 10% Determination + 10% Romance",
  season: "Data Breakdown",
  audio: "https://mturkrecord.s3.amazonaws.com/targpros/1909.mp3"
};
const four: Template = {
  name: "Speech Prosody",
  image: "https://images.unsplash.com/photo-1483663621908-f21eadb6a65f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
  episode: "Excitement",
  description: "30% Excitement + 24% Joy + 22% Amusement + 15% Interest + 11% Determination",
  season: "Data Breakdown",
  audio: "https://mturkrecord.s3.amazonaws.com/targpros/1910.mp3"
};
const five: Template = {
  name: "Speech Prosody",
  image: "https://images.unsplash.com/photo-1587495495304-d073c454f7b0?q=80&w=2186&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  episode: "Anger",
  description: "65% Anger + 19% Determination + 11% Contempt + 10% Disgust + 10% Distress",
  season: "Data Breakdown",
  audio: "https://mturkrecord.s3.amazonaws.com/targpros/1911.mp3"
};
const six: Template = {
  name: "Speech Prosody",
  image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80",
  episode: "Determination",
  description: "23% Determination + 15% Anger + 13% Concentration + 13% Calmness + 12% Interest + 11% Excitement",
  season: "Data Breakdown",
  audio: "https://mturkrecord.s3.amazonaws.com/targpros/1912.mp3"
};
export const byName = {
  one,
  two,
  three,
  four,
  five,
  six,
};
export const episodes = Object.values(byName);
