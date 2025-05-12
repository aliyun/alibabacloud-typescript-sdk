// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost";


export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStream extends $dara.Model {
  /**
   * @remarks
   * The average frame rate.
   * 
   * @example
   * 23.976025
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate. Unit: Kbit/s.
   * 
   * @example
   * 1496.46
   */
  bitrate?: string;
  /**
   * @remarks
   * The full name of the encoding format.
   * 
   * @example
   * H.264/AVC/MPEG-4 AVC/MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Valid values:
   * 
   * *   **h264**
   * *   **h265**
   * *   **gif**
   * *   **webp**
   * 
   * @example
   * h264
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
   * 1001/48000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The level of color reconstruction.
   * 
   * @example
   * 700
   */
  colorPrimaries?: string;
  /**
   * @remarks
   * The color range.
   * 
   * @example
   * 700
   */
  colorRange?: string;
  /**
   * @remarks
   * The color channel.
   * 
   * @example
   * R255 G83 B170
   */
  colorTransfer?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR). DAR is the proportional relationship between the width and the height of a video. The value is used to determine whether the video is in portrait mode or landscape mode.
   * 
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the video stream. Unit: seconds.
   * 
   * @example
   * 17.225542
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains bidirectional frames (B-frames). A value of 1 indicates that the video stream contains B-frames. A value of 0 indicates that the video stream does not contain B-frames.
   * 
   * @example
   * 0
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the video. Unit: pixel.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the video stream. The value indicates the position of the video stream in all video streams. The sequence number of the first video stream to be played can be specified in some players. Default value: 1.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language.
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
   * 41
   */
  level?: string;
  /**
   * @remarks
   * The network bandwidth that is consumed.
   */
  networkCost?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 100
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
   * The rotation angle of the video.
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
   * The start time of the video stream.
   * 
   * @example
   * 0.042000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/24000
   */
  timebase?: string;
  /**
   * @remarks
   * The width of the video. Unit: pixel.
   * 
   * @example
   * 1920
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
      colorPrimaries: 'ColorPrimaries',
      colorRange: 'ColorRange',
      colorTransfer: 'ColorTransfer',
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
      colorPrimaries: 'string',
      colorRange: 'string',
      colorTransfer: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      networkCost: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
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

