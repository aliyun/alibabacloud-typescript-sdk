// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectors } from "./ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectors";


export class ListMediaLiveChannelsResponseBodyChannelsInputAttachments extends $dara.Model {
  /**
   * @remarks
   * The audio selectors.
   */
  audioSelectors?: ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectors[];
  /**
   * @remarks
   * The ID of the input.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  inputId?: string;
  /**
   * @remarks
   * The name of the input.
   * 
   * @example
   * myinput
   */
  inputName?: string;
  /**
   * @remarks
   * The name of the language.
   * 
   * @example
   * eng
   */
  languageName?: string;
  static names(): { [key: string]: string } {
    return {
      audioSelectors: 'AudioSelectors',
      inputId: 'InputId',
      inputName: 'InputName',
      languageName: 'LanguageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioSelectors: { 'type': 'array', 'itemType': ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectors },
      inputId: 'string',
      inputName: 'string',
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

