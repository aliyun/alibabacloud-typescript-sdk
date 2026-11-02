// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartVoiceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The voice type. If this parameter is left empty, the voices of small models are returned. Valid values: Cosyvoice: returns the sample voices of the Cosyvoice large model.
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

