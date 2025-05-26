// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TargetAudioFilterAudio } from "./TargetAudioFilterAudio";
import { TargetAudioTranscodeAudio } from "./TargetAudioTranscodeAudio";


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

