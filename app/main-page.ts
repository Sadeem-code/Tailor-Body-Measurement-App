import { EventData, Page, Camera, ImageSource } from '@nativescript/core';
import { MeasurementViewModel } from './view-models/measurement-view-model';
import { MeasurementCalculator } from './models/measurement';

let viewModel: MeasurementViewModel;

export function navigatingTo(args: EventData) {
    const page = <Page>args.object;
    viewModel = new MeasurementViewModel();
    page.bindingContext = viewModel;
}

export function captureFrontImage() {
    Camera.requestPermissions().then(() => {
        Camera.takePicture({
            width: 640,
            height: 852,
            keepAspectRatio: true,
            saveToGallery: false
        }).then((imageAsset) => {
            ImageSource.fromAsset(imageAsset).then((imageSource) => {
                viewModel.frontImage = imageSource.toBase64String('jpg');
            });
        });
    });
}

export function captureSideImage() {
    Camera.requestPermissions().then(() => {
        Camera.takePicture({
            width: 640,
            height: 852,
            keepAspectRatio: true,
            saveToGallery: false
        }).then((imageAsset) => {
            ImageSource.fromAsset(imageAsset).then((imageSource) => {
                viewModel.sideImage = imageSource.toBase64String('jpg');
            });
        });
    });
}

export function calculateMeasurements() {
    // This is a simplified example. In a real app, you would:
    // 1. Use computer vision to detect body landmarks
    // 2. Calculate pixel distances between landmarks
    // 3. Use the height to calculate the real-world measurements
    
    const mockPixelMeasurements = {
        chest: 120,
        hip: 100,
        waist: 80,
        thigh: 50,
        outerLeg: 95,
        innerLeg: 70,
        neckHipLength: 60,
        shoulder: 40
    };

    const measurements = MeasurementCalculator.calculateFromImage(
        852, // image height in pixels
        viewModel.height,
        mockPixelMeasurements
    );

    viewModel.measurements = measurements;
}