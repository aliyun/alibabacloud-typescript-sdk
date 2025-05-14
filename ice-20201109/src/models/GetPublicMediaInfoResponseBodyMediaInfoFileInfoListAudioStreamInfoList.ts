// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList extends $dara.Model {
  /**
   * @example
   * 192.0
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
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @example
   * mp4a
   */
  codecTagString?: string;
  /**
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @example
   * 16.2
   */
  duration?: string;
  /**
   * @example
   * 10
   */
  fps?: string;
  /**
   * @example
   * 1
   */
  index?: string;
  /**
   * @example
   * und
   */
  lang?: string;
  /**
   * @example
   * 162
   */
  numFrames?: string;
  /**
   * @example
   * High
   */
  profile?: string;
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
   * 0.000000
   */
  startTime?: string;
  /**
   * @example
   * 1/44100
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
      fps: 'Fps',
      index: 'Index',
      lang: 'Lang',
      numFrames: 'NumFrames',
      profile: 'Profile',
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
      fps: 'string',
      index: 'string',
      lang: 'string',
      numFrames: 'string',
      profile: 'string',
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

