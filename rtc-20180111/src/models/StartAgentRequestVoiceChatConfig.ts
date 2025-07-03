// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartAgentRequestVoiceChatConfigASRConfig } from "./StartAgentRequestVoiceChatConfigAsrconfig";
import { StartAgentRequestVoiceChatConfigLLMConfig } from "./StartAgentRequestVoiceChatConfigLlmconfig";
import { StartAgentRequestVoiceChatConfigTTSConfig } from "./StartAgentRequestVoiceChatConfigTtsconfig";


export class StartAgentRequestVoiceChatConfig extends $dara.Model {
  ASRConfig?: StartAgentRequestVoiceChatConfigASRConfig;
  /**
   * @example
   * 1
   */
  chatMode?: number;
  greeting?: string;
  /**
   * @example
   * 1
   */
  interruptMode?: number;
  LLMConfig?: StartAgentRequestVoiceChatConfigLLMConfig;
  TTSConfig?: StartAgentRequestVoiceChatConfigTTSConfig;
  static names(): { [key: string]: string } {
    return {
      ASRConfig: 'ASRConfig',
      chatMode: 'ChatMode',
      greeting: 'Greeting',
      interruptMode: 'InterruptMode',
      LLMConfig: 'LLMConfig',
      TTSConfig: 'TTSConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRConfig: StartAgentRequestVoiceChatConfigASRConfig,
      chatMode: 'number',
      greeting: 'string',
      interruptMode: 'number',
      LLMConfig: StartAgentRequestVoiceChatConfigLLMConfig,
      TTSConfig: StartAgentRequestVoiceChatConfigTTSConfig,
    };
  }

  validate() {
    if(this.ASRConfig && typeof (this.ASRConfig as any).validate === 'function') {
      (this.ASRConfig as any).validate();
    }
    if(this.LLMConfig && typeof (this.LLMConfig as any).validate === 'function') {
      (this.LLMConfig as any).validate();
    }
    if(this.TTSConfig && typeof (this.TTSConfig as any).validate === 'function') {
      (this.TTSConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

