// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoStream extends $dara.Model {
  averageFrameRate?: string;
  bitDepth?: number;
  bitrate?: number;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  colorPrimaries?: string;
  colorRange?: string;
  colorSpace?: string;
  colorTransfer?: string;
  displayAspectRatio?: string;
  duration?: number;
  frameCount?: number;
  frameRate?: string;
  hasBFrames?: number;
  height?: number;
  index?: number;
  language?: string;
  level?: number;
  pixelFormat?: string;
  profile?: string;
  rotate?: string;
  sampleAspectRatio?: string;
  startTime?: number;
  timeBase?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      averageFrameRate: 'AverageFrameRate',
      bitDepth: 'BitDepth',
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      colorPrimaries: 'ColorPrimaries',
      colorRange: 'ColorRange',
      colorSpace: 'ColorSpace',
      colorTransfer: 'ColorTransfer',
      displayAspectRatio: 'DisplayAspectRatio',
      duration: 'Duration',
      frameCount: 'FrameCount',
      frameRate: 'FrameRate',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      language: 'Language',
      level: 'Level',
      pixelFormat: 'PixelFormat',
      profile: 'Profile',
      rotate: 'Rotate',
      sampleAspectRatio: 'SampleAspectRatio',
      startTime: 'StartTime',
      timeBase: 'TimeBase',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageFrameRate: 'string',
      bitDepth: 'number',
      bitrate: 'number',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      colorPrimaries: 'string',
      colorRange: 'string',
      colorSpace: 'string',
      colorTransfer: 'string',
      displayAspectRatio: 'string',
      duration: 'number',
      frameCount: 'number',
      frameRate: 'string',
      hasBFrames: 'number',
      height: 'number',
      index: 'number',
      language: 'string',
      level: 'number',
      pixelFormat: 'string',
      profile: 'string',
      rotate: 'string',
      sampleAspectRatio: 'string',
      startTime: 'number',
      timeBase: 'string',
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

