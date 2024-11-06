export interface Measurement {
    height: number;
    chest: number;
    hip: number;
    waist: number;
    thigh: number;
    outerLeg: number;
    innerLeg: number;
    neckHipLength: number;
    shoulder: number;
}

export class MeasurementCalculator {
    static calculateFromImage(imageHeight: number, actualHeight: number, pixelMeasurements: Partial<Measurement>): Measurement {
        const ratio = actualHeight / imageHeight;
        
        return {
            height: actualHeight,
            chest: (pixelMeasurements.chest || 0) * ratio,
            hip: (pixelMeasurements.hip || 0) * ratio,
            waist: (pixelMeasurements.waist || 0) * ratio,
            thigh: (pixelMeasurements.thigh || 0) * ratio,
            outerLeg: (pixelMeasurements.outerLeg || 0) * ratio,
            innerLeg: (pixelMeasurements.innerLeg || 0) * ratio,
            neckHipLength: (pixelMeasurements.neckHipLength || 0) * ratio,
            shoulder: (pixelMeasurements.shoulder || 0) * ratio
        };
    }
}