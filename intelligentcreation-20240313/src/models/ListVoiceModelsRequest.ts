// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVoiceModelsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resSpecType?: string;
  /**
   * @example
   * offlineSynthesis
   */
  useScene?: string;
  voiceLanguage?: string;
  /**
   * @example
   * PRIVATE_VOICE
   */
  voiceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resSpecType: 'resSpecType',
      useScene: 'useScene',
      voiceLanguage: 'voiceLanguage',
      voiceType: 'voiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resSpecType: 'string',
      useScene: 'string',
      voiceLanguage: 'string',
      voiceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

