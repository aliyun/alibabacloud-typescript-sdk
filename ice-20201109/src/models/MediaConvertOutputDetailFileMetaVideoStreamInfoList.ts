// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertOutputDetailFileMetaVideoStreamInfoList extends $dara.Model {
  /**
   * @example
   * 25.0
   */
  avgFps?: string;
  /**
   * @example
   * 888.563
   */
  bitRate?: string;
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
   * 0x001b
   */
  codecTag?: string;
  /**
   * @example
   * [27][0][0][0]
   */
  codecTagString?: string;
  codecTimeBase?: string;
  /**
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @example
   * 403.039989
   */
  duration?: string;
  /**
   * @example
   * 25.0
   */
  fps?: string;
  /**
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @example
   * 478
   */
  height?: string;
  /**
   * @example
   * 0
   */
  index?: string;
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * 31
   */
  level?: string;
  /**
   * @example
   * 10040
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
   * 478:477
   */
  sar?: string;
  /**
   * @example
   * 1.473556
   */
  startTime?: string;
  /**
   * @example
   * 1/90000
   */
  timeBase?: string;
  /**
   * @example
   * 848
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFps: 'Avg_fps',
      bitRate: 'Bit_rate',
      codecLongName: 'Codec_long_name',
      codecName: 'Codec_name',
      codecTag: 'Codec_tag',
      codecTagString: 'Codec_tag_string',
      codecTimeBase: 'Codec_time_base',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'Has_b_frames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'Start_time',
      timeBase: 'Time_base',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFps: 'string',
      bitRate: 'string',
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
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      rotate: 'string',
      sar: 'string',
      startTime: 'string',
      timeBase: 'string',
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

