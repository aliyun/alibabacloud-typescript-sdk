// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetVideoFilterVideoDelogos extends $dara.Model {
  duration?: number;
  dx?: number;
  dy?: number;
  height?: number;
  referPos?: string;
  startTime?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      referPos: 'ReferPos',
      startTime: 'StartTime',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      dx: 'number',
      dy: 'number',
      height: 'number',
      referPos: 'string',
      startTime: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideoDesensitizationFace extends $dara.Model {
  confidence?: number;
  minSize?: number;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      minSize: 'MinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      minSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideoDesensitizationLicensePlate extends $dara.Model {
  confidence?: number;
  minSize?: number;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      minSize: 'MinSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      minSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideoDesensitization extends $dara.Model {
  face?: TargetVideoFilterVideoDesensitizationFace;
  licensePlate?: TargetVideoFilterVideoDesensitizationLicensePlate;
  static names(): { [key: string]: string } {
    return {
      face: 'Face',
      licensePlate: 'LicensePlate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      face: TargetVideoFilterVideoDesensitizationFace,
      licensePlate: TargetVideoFilterVideoDesensitizationLicensePlate,
    };
  }

  validate() {
    if(this.face && typeof (this.face as any).validate === 'function') {
      (this.face as any).validate();
    }
    if(this.licensePlate && typeof (this.licensePlate as any).validate === 'function') {
      (this.licensePlate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideoWatermarks extends $dara.Model {
  borderColor?: string;
  borderWidth?: number;
  content?: string;
  duration?: number;
  dx?: number;
  dy?: number;
  fontApha?: number;
  fontColor?: string;
  fontName?: string;
  fontSize?: number;
  height?: number;
  referPos?: string;
  startTime?: number;
  type?: string;
  URI?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      duration: 'Duration',
      dx: 'Dx',
      dy: 'Dy',
      fontApha: 'FontApha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      height: 'Height',
      referPos: 'ReferPos',
      startTime: 'StartTime',
      type: 'Type',
      URI: 'URI',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      duration: 'number',
      dx: 'number',
      dy: 'number',
      fontApha: 'number',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      height: 'number',
      referPos: 'string',
      startTime: 'number',
      type: 'string',
      URI: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideo extends $dara.Model {
  delogos?: TargetVideoFilterVideoDelogos[];
  desensitization?: TargetVideoFilterVideoDesensitization;
  speed?: number;
  watermarks?: TargetVideoFilterVideoWatermarks[];
  static names(): { [key: string]: string } {
    return {
      delogos: 'Delogos',
      desensitization: 'Desensitization',
      speed: 'Speed',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delogos: { 'type': 'array', 'itemType': TargetVideoFilterVideoDelogos },
      desensitization: TargetVideoFilterVideoDesensitization,
      speed: 'number',
      watermarks: { 'type': 'array', 'itemType': TargetVideoFilterVideoWatermarks },
    };
  }

  validate() {
    if(Array.isArray(this.delogos)) {
      $dara.Model.validateArray(this.delogos);
    }
    if(this.desensitization && typeof (this.desensitization as any).validate === 'function') {
      (this.desensitization as any).validate();
    }
    if(Array.isArray(this.watermarks)) {
      $dara.Model.validateArray(this.watermarks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  videoSlim?: number;
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
      videoSlim: 'VideoSlim',
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
      videoSlim: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideo extends $dara.Model {
  disableVideo?: boolean;
  filterVideo?: TargetVideoFilterVideo;
  stream?: number[];
  transcodeVideo?: TargetVideoTranscodeVideo;
  static names(): { [key: string]: string } {
    return {
      disableVideo: 'DisableVideo',
      filterVideo: 'FilterVideo',
      stream: 'Stream',
      transcodeVideo: 'TranscodeVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableVideo: 'boolean',
      filterVideo: TargetVideoFilterVideo,
      stream: { 'type': 'array', 'itemType': 'number' },
      transcodeVideo: TargetVideoTranscodeVideo,
    };
  }

  validate() {
    if(this.filterVideo && typeof (this.filterVideo as any).validate === 'function') {
      (this.filterVideo as any).validate();
    }
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
    }
    if(this.transcodeVideo && typeof (this.transcodeVideo as any).validate === 'function') {
      (this.transcodeVideo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

