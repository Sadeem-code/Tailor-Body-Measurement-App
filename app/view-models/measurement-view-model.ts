import { Observable } from '@nativescript/core';
import { Measurement } from '../models/measurement';

export class MeasurementViewModel extends Observable {
    private _frontImage: string;
    private _sideImage: string;
    private _height: number;
    private _measurements: Measurement;

    constructor() {
        super();
        this._measurements = {
            height: 0,
            chest: 0,
            hip: 0,
            waist: 0,
            thigh: 0,
            outerLeg: 0,
            innerLeg: 0,
            neckHipLength: 0,
            shoulder: 0
        };
    }

    get frontImage(): string {
        return this._frontImage;
    }

    set frontImage(value: string) {
        if (this._frontImage !== value) {
            this._frontImage = value;
            this.notifyPropertyChange('frontImage', value);
        }
    }

    get sideImage(): string {
        return this._sideImage;
    }

    set sideImage(value: string) {
        if (this._sideImage !== value) {
            this._sideImage = value;
            this.notifyPropertyChange('sideImage', value);
        }
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        if (this._height !== value) {
            this._height = value;
            this.notifyPropertyChange('height', value);
        }
    }

    get measurements(): Measurement {
        return this._measurements;
    }

    set measurements(value: Measurement) {
        this._measurements = value;
        this.notifyPropertyChange('measurements', value);
    }
}