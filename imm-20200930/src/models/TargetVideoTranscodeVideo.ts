// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetVideoTranscodeVideo extends $dara.Model {
  adaptiveResolutionDirection?: boolean;
  BFrames?: number;
  bitrate?: number;
  bitrateOption?: string;
  bufferSize?: number;
  CRF?: number;
  codec?: string;
  frameRate?: number;
  frameRateOption?: string;
  GOPSize?: number;
  maxBitrate?: number;
  pixelFormat?: string;
  refs?: number;
  resolution?: string;
  resolutionOption?: string;
  rotation?: number;
  scaleType?: string;
  static names(): { [key: string]: string } {
    return {
      adaptiveResolutionDirection: 'AdaptiveResolutionDirection',
      BFrames: 'BFrames',
      bitrate: 'Bitrate',
      bitrateOption: 'BitrateOption',
      bufferSize: 'BufferSize',
      CRF: 'CRF',
      codec: 'Codec',
      frameRate: 'FrameRate',
      frameRateOption: 'FrameRateOption',
      GOPSize: 'GOPSize',
      maxBitrate: 'MaxBitrate',
      pixelFormat: 'PixelFormat',
      refs: 'Refs',
      resolution: 'Resolution',
      resolutionOption: 'ResolutionOption',
      rotation: 'Rotation',
      scaleType: 'ScaleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveResolutionDirection: 'boolean',
      BFrames: 'number',
      bitrate: 'number',
      bitrateOption: 'string',
      bufferSize: 'number',
      CRF: 'number',
      codec: 'string',
      frameRate: 'number',
      frameRateOption: 'string',
      GOPSize: 'number',
      maxBitrate: 'number',
      pixelFormat: 'string',
      refs: 'number',
      resolution: 'string',
      resolutionOption: 'string',
      rotation: 'number',
      scaleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

