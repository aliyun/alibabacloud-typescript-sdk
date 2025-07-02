// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AIAgentConfigTtsConfigPronunciationRules } from "./AiagentConfigTtsConfigPronunciationRules";


export class AIAgentConfigTtsConfig extends $dara.Model {
  pronunciationRules?: AIAgentConfigTtsConfigPronunciationRules[];
  voiceId?: string;
  voiceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      pronunciationRules: 'PronunciationRules',
      voiceId: 'VoiceId',
      voiceIdList: 'VoiceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pronunciationRules: { 'type': 'array', 'itemType': AIAgentConfigTtsConfigPronunciationRules },
      voiceId: 'string',
      voiceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.pronunciationRules)) {
      $dara.Model.validateArray(this.pronunciationRules);
    }
    if(Array.isArray(this.voiceIdList)) {
      $dara.Model.validateArray(this.voiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

