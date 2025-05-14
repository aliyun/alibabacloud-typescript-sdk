// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaLiveChannelRequestInputAttachmentsAudioSelectors } from "./CreateMediaLiveChannelRequestInputAttachmentsAudioSelectors";


export class CreateMediaLiveChannelRequestInputAttachments extends $dara.Model {
  /**
   * @remarks
   * The audio selectors.
   */
  audioSelectors?: CreateMediaLiveChannelRequestInputAttachmentsAudioSelectors[];
  /**
   * @remarks
   * The ID of the associated input.
   * 
   * This parameter is required.
   * 
   * @example
   * myinput
   */
  inputId?: string;
  /**
   * @remarks
   * The tag that identifies the language of the RTMP input. It can be referenced by the output. The maximum length is 32 characters. Supported characters:
   * 
   * *   Unicode letters
   * *   Digits (0-9)
   * *   Underscore (_)
   * *   Hyphen (-)
   * *   Space (a space cannot be at the beginning or end)
   * 
   * @example
   * English
   */
  languageName?: string;
  static names(): { [key: string]: string } {
    return {
      audioSelectors: 'AudioSelectors',
      inputId: 'InputId',
      languageName: 'LanguageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSelectors: { 'type': 'array', 'itemType': CreateMediaLiveChannelRequestInputAttachmentsAudioSelectors },
      inputId: 'string',
      languageName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.audioSelectors)) {
      $dara.Model.validateArray(this.audioSelectors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

