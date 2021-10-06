

export const outcome = ['maybe', 'no', 'ummmmm nah', 'of course', 'yes'];

export const getRandomIndx = (max)=>{
    return Math.floor(Math.random() * max);
};
export const randomIndx = getRandomIndx(outcome.length);