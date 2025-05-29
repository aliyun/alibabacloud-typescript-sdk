// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentConfigTtsConfig extends $dara.Model {
  voiceId?: string;
  voiceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      voiceId: 'VoiceId',
      voiceIdList: 'VoiceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      voiceId: 'string',
      voiceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.voiceIdList)) {
      $dara.Model.validateArray(this.voiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

