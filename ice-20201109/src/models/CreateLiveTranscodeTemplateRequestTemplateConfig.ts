// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams } from "./CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams";
import { CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams } from "./CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams";


export class CreateLiveTranscodeTemplateRequestTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The audio parameters.
   */
  audioParams?: CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams;
  /**
   * @remarks
   * The video parameters.
   */
  videoParams?: CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: CreateLiveTranscodeTemplateRequestTemplateConfigAudioParams,
      videoParams: CreateLiveTranscodeTemplateRequestTemplateConfigVideoParams,
    };
  }

  validate() {
    if(this.audioParams && typeof (this.audioParams as any).validate === 'function') {
      (this.audioParams as any).validate();
    }
    if(this.videoParams && typeof (this.videoParams as any).validate === 'function') {
      (this.videoParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

