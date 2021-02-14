export class Asset<T> {
    key: T;
    shortName: T | string;
    imagePath: string;
    tooltipText: string;

    enabledForSuggesting: boolean;
    selectable: boolean;

    constructor(key: T, imagePath = '', tooltipText = '', shortName = '') {
        this.key = key;
        this.imagePath = imagePath;
        this.tooltipText = tooltipText;

        this.shortName = shortName === '' ? key : shortName;

        this.enabledForSuggesting = true;
        this.selectable = true;
    }
}