import { sharedModule } from './sharedModule';

const h1 = document.getElementById('most-important-content');

if (!h1) throw new Error("It appears the content hasn't quite finished yet");

h1.textContent =
    "If you're seeing this, that means the webpack build worked successfully! Oh and also: " + sharedModule();
