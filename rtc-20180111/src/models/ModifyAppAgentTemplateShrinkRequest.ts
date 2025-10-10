// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppAgentTemplateShrinkRequest extends $dara.Model {
  agentSilenceConfigShrink?: string;
  ambientSoundConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  asrConfigShrink?: string;
  backChannelConfigShrink?: string;
  /**
   * @example
   * 2
   */
  chatMode?: number;
  greeting?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1231231312312131231
   */
  id?: string;
  interruptConfigShrink?: string;
  /**
   * @example
   * 2
   */
  interruptMode?: number;
  llmConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 智能体模版
   */
  name?: string;
  ttsConfigShrink?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      agentSilenceConfigShrink: 'AgentSilenceConfig',
      ambientSoundConfigShrink: 'AmbientSoundConfig',
      appId: 'AppId',
      asrConfigShrink: 'AsrConfig',
      backChannelConfigShrink: 'BackChannelConfig',
      chatMode: 'ChatMode',
      greeting: 'Greeting',
      id: 'Id',
      interruptConfigShrink: 'InterruptConfig',
      interruptMode: 'InterruptMode',
      llmConfigShrink: 'LlmConfig',
      name: 'Name',
      ttsConfigShrink: 'TtsConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSilenceConfigShrink: 'string',
      ambientSoundConfigShrink: 'string',
      appId: 'string',
      asrConfigShrink: 'string',
      backChannelConfigShrink: 'string',
      chatMode: 'number',
      greeting: 'string',
      id: 'string',
      interruptConfigShrink: 'string',
      interruptMode: 'number',
      llmConfigShrink: 'string',
      name: 'string',
      ttsConfigShrink: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

