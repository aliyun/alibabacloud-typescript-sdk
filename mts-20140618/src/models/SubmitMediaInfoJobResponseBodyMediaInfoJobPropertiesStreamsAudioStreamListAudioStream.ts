// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate. Unit: Kbit/s.
   * 
   * @example
   * 128.806
   */
  bitrate?: string;
  /**
   * @remarks
   * The output layout of the sound channels.
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
  channels?: string;
  /**
   * @remarks
   * The full name of the encoding format.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Default value: acc. Valid values:
   * 
   * *   **acc**
   * *   **mp3**
   * *   **mp4**
   * *   **ogg**
   * *   **flac**
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the encoding format.
   * 
   * @example
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the encoding format.
   * 
   * @example
   * mp4a
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the audio stream. Unit: seconds.
   * 
   * @example
   * 17.159546
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
   * The language.
   * 
   * @example
   * eng
   */
  lang?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 123
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
   * The sampling rate. Unit: Hz.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The start time of the audio stream.
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

