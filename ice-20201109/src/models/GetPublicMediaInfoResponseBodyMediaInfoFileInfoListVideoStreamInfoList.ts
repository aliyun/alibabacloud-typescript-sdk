// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $dara.Model {
  /**
   * @example
   * 24.0
   */
  avgFPS?: string;
  /**
   * @example
   * 1001.594
   */
  bitrate?: string;
  /**
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @example
   * 0x0000
   */
  codecTag?: string;
  /**
   * @example
   * [0][0][0][0]
   */
  codecTagString?: string;
  /**
   * @example
   * 1/48
   */
  codecTimeBase?: string;
  /**
   * @example
   * 0:1
   */
  dar?: string;
  /**
   * @example
   * 216.206706
   */
  duration?: string;
  /**
   * @example
   * 24.0
   */
  fps?: string;
  /**
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @example
   * 540
   */
  height?: string;
  /**
   * @example
   * 0
   */
  index?: string;
  /**
   * @example
   * und
   */
  lang?: string;
  /**
   * @example
   * 30
   */
  level?: string;
  /**
   * @example
   * 5184
   */
  nbFrames?: string;
  /**
   * @example
   * 5184
   */
  numFrames?: string;
  /**
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @example
   * High
   */
  profile?: string;
  /**
   * @example
   * 0
   */
  rotate?: string;
  /**
   * @example
   * 0:1
   */
  sar?: string;
  /**
   * @example
   * 0.081706
   */
  startTime?: string;
  /**
   * @example
   * 1/12288
   */
  timebase?: string;
  /**
   * @example
   * 960
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
      nbFrames: 'Nb_frames',
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
      nbFrames: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

