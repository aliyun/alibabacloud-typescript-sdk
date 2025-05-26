// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetAudioTranscodeAudio extends $dara.Model {
  bitrate?: number;
  bitrateOption?: string;
  bitsPerSample?: number;
  channel?: number;
  codec?: string;
  quality?: number;
  sampleRate?: number;
  sampleRateOption?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateOption: 'BitrateOption',
      bitsPerSample: 'BitsPerSample',
      channel: 'Channel',
      codec: 'Codec',
      quality: 'Quality',
      sampleRate: 'SampleRate',
      sampleRateOption: 'SampleRateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      bitrateOption: 'string',
      bitsPerSample: 'number',
      channel: 'number',
      codec: 'string',
      quality: 'number',
      sampleRate: 'number',
      sampleRateOption: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

