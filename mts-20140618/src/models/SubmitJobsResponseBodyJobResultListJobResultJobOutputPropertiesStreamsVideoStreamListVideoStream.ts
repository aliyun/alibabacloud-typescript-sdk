// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost } from "./SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost";


export class SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStream extends $dara.Model {
  /**
   * @remarks
   * The average frame rate of the video stream.
   * 
   * @example
   * 23.976025
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate of the video stream.
   * 
   * @example
   * 1496.46
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
   * 1001/48000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR) of the video stream.
   * 
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the video stream.
   * 
   * @example
   * 17.225542
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate of the video stream.
   * 
   * @example
   * 23.976025
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains B-frames.
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
   * 720
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
   * 51
   */
  level?: string;
  /**
   * @remarks
   * The network bandwidth that was consumed.
   */
  networkCost?: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 25
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
   * The start time of the video stream.
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
   * 1/24000
   */
  timebase?: string;
  /**
   * @remarks
   * The width of the video stream in pixels.
   * 
   * @example
   * 1280
   */
  width?: string;
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
      networkCost: SubmitJobsResponseBodyJobResultListJobResultJobOutputPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      sar: 'string',
      startTime: 'string',
      timebase: 'string',
      width: 'string',
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

