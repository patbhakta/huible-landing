export interface Template {
  name: string;
  description: string;
};
const one: Template = {
  name: "Texting",
  description: "No website, no chat UI, no apps, just plain SMS Text, WhatsApp, Messenger, iMessage, and others.",
};
const two: Template = {
    name: "Generative Audio",
    description: "Using sample audio, we have the technology to clone an actual voice.",
};
const three: Template = {
  name: "Generative Photos",
  description: "Using old photos, we use them to model new photos that are generated with age and scenery.",
};
const four: Template = {
  name: "Generative Video",
  description: "Using video clips, we can use them to Facetime your loved ones.",
};
export const byName = {
  one,
  two,
    three,
  four,
};
export const features = Object.values(byName);
