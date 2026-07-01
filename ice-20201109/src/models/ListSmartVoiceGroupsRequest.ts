// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartVoiceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The voice type. If you do not specify this parameter, the operation returns voices from the small model by default. Set this parameter to `CosyVoice` to retrieve voices from the Cosyvoice large model.
   * 
   * @example
   * CosyVoice
   */
  voiceType?: string;
  static names(): { [key: string]: string } {
    return {
      voiceType: 'VoiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

