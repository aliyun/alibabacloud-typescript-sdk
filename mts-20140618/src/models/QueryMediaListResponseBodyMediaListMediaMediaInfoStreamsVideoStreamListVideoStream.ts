// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost } from "./QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost";


export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream extends $dara.Model {
  /**
   * @remarks
   * The average frame rate.
   * 
   * @example
   * 29.97003
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 2659.326
   */
  bitrate?: string;
  /**
   * @remarks
   * The full name of the encoding format.
   * 
   * @example
   * QuickTime/MOV
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mov
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the encoding format.
   * 
   * @example
   * 0x31637661
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the encoding format.
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
   * 1001/60000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR).
   * 
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 182.683000
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 29.97003
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains bidirectional frames (B-frames). A value of **1** indicates that the video stream contains B-frames. A value of **2** indicates that the video stream does not contain B-frames.
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The latter number in the video resolution. The number indicates the video height.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the video stream. The value indicates the position of the video stream in all video streams.
   * 
   * @example
   * 5
   */
  index?: string;
  /**
   * @remarks
   * The language. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata).
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * The codec level.
   * 
   * @example
   * 40
   */
  level?: string;
  /**
   * @remarks
   * The network bandwidth consumption.
   */
  networkCost?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 12
   */
  numFrames?: string;
  /**
   * @remarks
   * The pixel format.
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
   * High
   */
  profile?: string;
  /**
   * @remarks
   * The video rotation angle.
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The sample aspect ratio (SAR).
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
   * The time base.
   * 
   * @example
   * 1/30000
   */
  timebase?: string;
  /**
   * @remarks
   * The former number in the video resolution. The number indicates the video width.
   * 
   * @example
   * 100
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
      rotate: 'Rotate',
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
      networkCost: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost,
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      rotate: 'string',
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

