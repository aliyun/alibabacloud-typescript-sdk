// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetTrainTaskResponseBodyVoiceListVoiceMaterial extends $dara.Model {
  /**
   * @example
   * 1
   */
  voiceId?: number;
  /**
   * @example
   * zh
   */
  voiceLanguage?: string;
  /**
   * @example
   * http://www.voice.com
   */
  voiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      voiceId: 'voiceId',
      voiceLanguage: 'voiceLanguage',
      voiceUrl: 'voiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      voiceId: 'number',
      voiceLanguage: 'string',
      voiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

