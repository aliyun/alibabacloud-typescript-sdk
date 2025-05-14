// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams } from "./GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams";
import { GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams } from "./GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams";


export class GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The audio parameters.
   */
  audioParams?: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams;
  /**
   * @remarks
   * The video parameters.
   */
  videoParams?: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigAudioParams,
      videoParams: GetLiveTranscodeTemplateResponseBodyTemplateContentTemplateConfigVideoParams,
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

