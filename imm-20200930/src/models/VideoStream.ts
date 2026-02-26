// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoStream extends $dara.Model {
  /**
   * @remarks
   * The average frame rate of the video stream.
   * 
   * @example
   * 25/1
   */
  averageFrameRate?: string;
  /**
   * @remarks
   * The bit depth.
   * 
   * @example
   * 8
   */
  bitDepth?: number;
  /**
   * @remarks
   * The bitrate. Unit: bit/s.
   * 
   * @example
   * 5407765
   */
  bitrate?: number;
  /**
   * @remarks
   * The full name of the codec.
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * The abbreviated name of the codec.
   * 
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the codec.
   * 
   * @example
   * 0x31637661
   */
  codecTag?: string;
  /**
   * @remarks
   * The description of the codec tag.
   * 
   * @example
   * avc1
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the codec.
   * 
   * @example
   * 1373627/83160000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The primary colors.
   * 
   * @example
   * bt709
   */
  colorPrimaries?: string;
  /**
   * @remarks
   * The color range.
   * 
   * @example
   * tv
   */
  colorRange?: string;
  /**
   * @remarks
   * The color space.
   * 
   * @example
   * bt709
   */
  colorSpace?: string;
  /**
   * @remarks
   * The color transfer function.
   * 
   * @example
   * bt709
   */
  colorTransfer?: string;
  /**
   * @remarks
   * The display aspect ratio of the video stream.
   * 
   * @example
   * 16:9
   */
  displayAspectRatio?: string;
  /**
   * @remarks
   * The duration of the video stream. Unit: seconds.
   * 
   * @example
   * 22.88
   */
  duration?: number;
  /**
   * @remarks
   * The number of frames.
   * 
   * @example
   * 572
   */
  frameCount?: number;
  /**
   * @remarks
   * The frame rate of the video stream.
   * 
   * @example
   * 25/1
   */
  frameRate?: string;
  /**
   * @remarks
   * Specifies whether the video stream contains B frames.
   * 
   * @example
   * 2
   */
  hasBFrames?: number;
  /**
   * @remarks
   * The image height of the video stream. Unit: pixels.
   * 
   * @example
   * 720
   */
  height?: number;
  /**
   * @remarks
   * The index number of the video stream.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * The language used in the video stream. The language is indicated by using a BCP 47 language tag.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The level.
   * 
   * @example
   * 40
   */
  level?: number;
  /**
   * @remarks
   * The pixel format of the video stream.
   * 
   * @example
   * yuv420p
   */
  pixelFormat?: string;
  /**
   * @remarks
   * The profile.
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * The image rotation angle of the video stream.
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The sampling aspect ratio of the video stream.
   * 
   * @example
   * 1:1
   */
  sampleAspectRatio?: string;
  /**
   * @remarks
   * The start time of the video stream. Unit: seconds.
   * 
   * @example
   * 0.000000
   */
  startTime?: number;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/12800
   */
  timeBase?: string;
  /**
   * @remarks
   * The image width of the video stream. Unit: pixels.
   * 
   * @example
   * 1280
   */
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

