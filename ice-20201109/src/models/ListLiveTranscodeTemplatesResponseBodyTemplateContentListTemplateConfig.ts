// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams } from "./ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams";
import { ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams } from "./ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams";


export class ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfig extends $dara.Model {
  /**
   * @remarks
   * The audio parameters.
   */
  audioParams?: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams;
  /**
   * @remarks
   * The video parameters.
   */
  videoParams?: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams;
  static names(): { [key: string]: string } {
    return {
      audioParams: 'AudioParams',
      videoParams: 'VideoParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioParams: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigAudioParams,
      videoParams: ListLiveTranscodeTemplatesResponseBodyTemplateContentListTemplateConfigVideoParams,
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

