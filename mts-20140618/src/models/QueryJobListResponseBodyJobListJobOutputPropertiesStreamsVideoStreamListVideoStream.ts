// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost } from "./QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost";


export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStream extends $dara.Model {
  /**
   * @remarks
   * The average frame rate of the video stream.
   * 
   * @example
   * 30.0
   */
  avgFPS?: string;
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 421.117
   */
  bitrate?: string;
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
   * The short name of the codec.
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
   * The tag string of the codec.
   * 
   * @example
   * avc1
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1/60
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR) of the video stream.
   * 
   * @example
   * 9:16
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the video stream.
   * 
   * @example
   * 17.233333
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate of the video stream.
   * 
   * @example
   * 30.0
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains bidirectional frames (B-frames).
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the video stream in pixels.
   * 
   * @example
   * 1280
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the video stream. The value indicates the position of the video stream in all video streams.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * The language of the video stream. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata) and [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
   * 
   * @example
   * eng
   */
  lang?: string;
  /**
   * @remarks
   * The codec level.
   * 
   * @example
   * 31
   */
  level?: string;
  /**
   * @remarks
   * The network bandwidth that was consumed.
   */
  networkCost?: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 30
   */
  numFrames?: string;
  /**
   * @remarks
   * The pixel format of the video stream.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The codec profile.
   * 
   * @example
   * high
   */
  profile?: string;
  /**
   * @remarks
   * The sample aspect ratio (SAR) of the video stream.
   * 
   * @example
   * 1:1
   */
  sar?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 0.000000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base of the video stream.
   * 
   * @example
   * 1/15360
   */
  timebase?: string;
  /**
   * @remarks
   * The width of the video stream in pixels.
   * 
   * @example
   * 720
   */
  width?: string;
  /**
   * @remarks
   * The number of binary bits used by each sample or pixel.
   * 
   * @example
   * 8
   */
  bitsPerRawSample?: string;
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
   * The color transfer configuration.
   * 
   * @example
   * bt709
   */
  colorTransfer?: string;
  static names(): { [key: string]: string } {
    return {
      avgFPS: 'AvgFPS',
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      networkCost: 'NetworkCost',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      sar: 'Sar',
      startTime: 'StartTime',
      timebase: 'Timebase',
      width: 'Width',
      bitsPerRawSample: 'bitsPerRawSample',
      colorPrimaries: 'colorPrimaries',
      colorTransfer: 'colorTransfer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFPS: 'string',
      bitrate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      networkCost: QueryJobListResponseBodyJobListJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      sar: 'string',
      startTime: 'string',
      timebase: 'string',
      width: 'string',
      bitsPerRawSample: 'string',
      colorPrimaries: 'string',
      colorTransfer: 'string',
    };
  }

  validate() {
    if(this.networkCost && typeof (this.networkCost as any).validate === 'function') {
      (this.networkCost as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

