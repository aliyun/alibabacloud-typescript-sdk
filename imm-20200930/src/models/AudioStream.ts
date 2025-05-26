// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AudioStream extends $dara.Model {
  bitrate?: number;
  channelLayout?: string;
  channels?: number;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  duration?: number;
  frameCount?: number;
  index?: number;
  language?: string;
  lyric?: string;
  sampleFormat?: string;
  sampleRate?: number;
  startTime?: number;
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

