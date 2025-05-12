// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputPropertiesStreamsAudioStreamListAudioStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the audio stream.
   * 
   * @example
   * 64.136
   */
  bitrate?: string;
  /**
   * @remarks
   * The output layout of the sound channels.
   * 
   * @example
   * mono
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * @example
   * 1
   */
  channels?: string;
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
   * The short name of the codec.
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
   * The tag string of the codec.
   * 
   * @example
   * mp4
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1/32000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the audio stream.
   * 
   * @example
   * 17.223562
   */
  duration?: string;
  /**
   * @remarks
   * The sequence number of the audio stream. The value indicates the position of the audio stream in all audio streams.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language of the audio stream. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata) and [ISO 639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 50
   */
  numFrames?: string;
  /**
   * @remarks
   * The sampling format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * @example
   * 32000
   */
  samplerate?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 0.064000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base of the audio stream.
   * 
   * @example
   * 1/32000
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
      numFrames: 'NumFrames',
      sampleFmt: 'SampleFmt',
      samplerate: 'Samplerate',
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
      numFrames: 'string',
      sampleFmt: 'string',
      samplerate: 'string',
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

