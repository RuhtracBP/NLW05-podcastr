export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600);      //duration comes in seconds (60*60)
    const minutes = Math.floor((duration %3600) / 60);
    const seconds = duration %  60;

    const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))     //comes (allways) with at least 2 characters
    .join(':')

    return timeString;
}