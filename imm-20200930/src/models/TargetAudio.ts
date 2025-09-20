// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TargetAudioFilterAudio extends $dara.Model {
  mixing?: boolean;
  static names(): { [key: string]: string } {
    return {
      mixing: 'Mixing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixing: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class TargetAudio extends $dara.Model {
  disableAudio?: boolean;
  filterAudio?: TargetAudioFilterAudio;
  stream?: number[];
  transcodeAudio?: TargetAudioTranscodeAudio;
  static names(): { [key: string]: string } {
    return {
      disableAudio: 'DisableAudio',
      filterAudio: 'FilterAudio',
      stream: 'Stream',
      transcodeAudio: 'TranscodeAudio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableAudio: 'boolean',
      filterAudio: TargetAudioFilterAudio,
      stream: { 'type': 'array', 'itemType': 'number' },
      transcodeAudio: TargetAudioTranscodeAudio,
    };
  }

  validate() {
    if(this.filterAudio && typeof (this.filterAudio as any).validate === 'function') {
      (this.filterAudio as any).validate();
    }
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
    }
    if(this.transcodeAudio && typeof (this.transcodeAudio as any).validate === 'function') {
      (this.transcodeAudio as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

