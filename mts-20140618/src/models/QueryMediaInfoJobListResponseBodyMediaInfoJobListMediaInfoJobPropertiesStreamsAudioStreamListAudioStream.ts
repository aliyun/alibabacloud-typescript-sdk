// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobPropertiesStreamsAudioStreamListAudioStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the media file.
   * 
   * @example
   * 1536000
   */
  bitrate?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * @example
   * 5.1(side)
   */
  channelLayout?: string;
  /**
   * @remarks
   * The output layout of the sound channels.
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
   * DCA (DTS Coherent Acoustics)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Valid values:
   * 
   * *   **acc**
   * *   **mp3**
   * *   **mp4**
   * *   **ogg**
   * *   **flac**
   * 
   * @example
   * acc
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the encoding format.
   * 
   * @example
   * 0x0000
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the encoding format.
   * 
   * @example
   * [0][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1/48000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the media file.
   * 
   * @example
   * 123
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
   * The language. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html?spm=a2c4g.11186623.2.66.243851cd2SntfN#Metadata).
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
   * The sampling rate.
   * 
   * @example
   * 48000
   */
  samplerate?: string;
  /**
   * @remarks
   * The start time.
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
   * 1/1000
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

