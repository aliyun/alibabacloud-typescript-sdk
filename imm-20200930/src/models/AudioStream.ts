// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AudioStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate. Unit: bit/s.
   * 
   * @example
   * 320087
   */
  bitrate?: number;
  /**
   * @remarks
   * The sound channel layout.
   * 
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * @example
   * 2
   */
  channels?: number;
  /**
   * @remarks
   * The full name of the codec.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The abbreviated name of the codec.
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the codec.
   * 
   * @example
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @remarks
   * The description of the codec tag.
   * 
   * @example
   * mp4a
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the codec.
   * 
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the audio stream in seconds.
   * 
   * @example
   * 3.690667
   */
  duration?: number;
  /**
   * @remarks
   * The number of frames.
   * 
   * @example
   * 173
   */
  frameCount?: number;
  /**
   * @remarks
   * The index number of the audio stream.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The audio language in the BCP 47 standard.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The lyric.
   * 
   * @example
   * test
   */
  lyric?: string;
  /**
   * @remarks
   * The sample format.
   * 
   * @example
   * fltp
   */
  sampleFormat?: string;
  /**
   * @remarks
   * The sampling rate. Unit: Hz.
   * 
   * @example
   * 48000
   */
  sampleRate?: number;
  /**
   * @remarks
   * The start time of the audio stream in seconds.
   * 
   * @example
   * 0.0235
   */
  startTime?: number;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/48000
   */
  timeBase?: string;
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
      frameCount: 'FrameCount',
      index: 'Index',
      language: 'Language',
      lyric: 'Lyric',
      sampleFormat: 'SampleFormat',
      sampleRate: 'SampleRate',
      startTime: 'StartTime',
      timeBase: 'TimeBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      channelLayout: 'string',
      channels: 'number',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'number',
      frameCount: 'number',
      index: 'number',
      language: 'string',
      lyric: 'string',
      sampleFormat: 'string',
      sampleRate: 'number',
      startTime: 'number',
      timeBase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

