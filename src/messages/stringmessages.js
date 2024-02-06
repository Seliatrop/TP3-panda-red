//stringmessages.js
import { LoremIpsum } from "lorem-ipsum";
import { getConfigNumber } from "../config/config";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

export const getStringMessage = (customNumberWord) => {
    const configNumber = getConfigNumber();
    const numberWord = customNumberWord || configNumber.integerSize;
    return lorem.generateWords(numberWord);
};
