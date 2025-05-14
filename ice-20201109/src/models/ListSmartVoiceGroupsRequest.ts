// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartVoiceGroupsRequest extends $dara.Model {
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

