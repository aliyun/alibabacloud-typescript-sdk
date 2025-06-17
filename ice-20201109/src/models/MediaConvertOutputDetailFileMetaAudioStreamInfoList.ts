// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MediaConvertOutputDetailFileMetaAudioStreamInfoList extends $dara.Model {
  /**
   * @example
   * 0.f
   */
  bitrate?: string;
  /**
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @example
   * 2
   */
  channels?: string;
  /**
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @example
   * 0x000f
   */
  codecTag?: string;
  /**
   * @example
   * [15][0][0][0]
   */
  codecTagString?: string;
  /**
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @example
   * 403.039989
   */
  duration?: string;
  /**
   * @example
   * 1
   */
  index?: string;
  /**
   * @example
   * cn
   */
  lang?: string;
  /**
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @example
   * 1.473556
   */
  startTime?: string;
  /**
   * @example
   * 1/90000
   */
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channelLayout: 'ChannelLayout',
      channels: 'Channels',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      index: 'Index',
      lang: 'Lang',
      sampleFmt: 'SampleFmt',
      sampleRate: 'SampleRate',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channelLayout: 'string',
      channels: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      index: 'string',
      lang: 'string',
      sampleFmt: 'string',
      sampleRate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

