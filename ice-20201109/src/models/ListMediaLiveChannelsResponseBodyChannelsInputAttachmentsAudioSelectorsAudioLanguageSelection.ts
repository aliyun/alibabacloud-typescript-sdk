// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaLiveChannelsResponseBodyChannelsInputAttachmentsAudioSelectorsAudioLanguageSelection extends $dara.Model {
  /**
   * @remarks
   * A three-letter ISO 639-2 language code from within an audio source.
   * 
   * This parameter is required.
   * 
   * @example
   * eng
   */
  languageCode?: string;
  static names(): { [key: string]: string } {
    return {
      languageCode: 'LanguageCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languageCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

