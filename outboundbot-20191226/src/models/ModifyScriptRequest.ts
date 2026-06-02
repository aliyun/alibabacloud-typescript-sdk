// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScriptRequest extends $dara.Model {
  agentId?: number;
  agentKey?: string;
  agentLlm?: boolean;
  /**
   * @example
   * {\\"AppKey\\":\\"kknxKIhTTUcpCzYX\\"}
   */
  asrConfig?: string;
  chatConfig?: string;
  /**
   * @example
   * chatbot-cn-iFZfi7eq6e
   */
  chatbotId?: string;
  /**
   * @example
   * true
   */
  emotionEnable?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  industry?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c6320d3c-fa45-4011-b3b1-acdfabe3a8c6
   */
  instanceId?: string;
  labelConfig?: string;
  /**
   * @example
   * true
   */
  longWaitEnable?: boolean;
  miniPlaybackConfigListJsonString?: string;
  /**
   * @example
   * true
   */
  miniPlaybackEnable?: boolean;
  /**
   * @example
   * true
   */
  newBargeInEnable?: boolean;
  nlsConfig?: string;
  nluAccessType?: string;
  nluEngine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scene?: string;
  scriptContent?: string[];
  scriptDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c153d0d8-ba04-41c0-8632-453944c9dd0b
   */
  scriptId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scriptName?: string;
  scriptWaveform?: string[];
  /**
   * @example
   * {\\"voice\\":\\"siyue\\",\\"volume\\":\\"50\\",\\"speechRate\\":\\"-150\\",\\"pitchRate\\":\\"0\\"}
   */
  ttsConfig?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentKey: 'AgentKey',
      agentLlm: 'AgentLlm',
      asrConfig: 'AsrConfig',
      chatConfig: 'ChatConfig',
      chatbotId: 'ChatbotId',
      emotionEnable: 'EmotionEnable',
      industry: 'Industry',
      instanceId: 'InstanceId',
      labelConfig: 'LabelConfig',
      longWaitEnable: 'LongWaitEnable',
      miniPlaybackConfigListJsonString: 'MiniPlaybackConfigListJsonString',
      miniPlaybackEnable: 'MiniPlaybackEnable',
      newBargeInEnable: 'NewBargeInEnable',
      nlsConfig: 'NlsConfig',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
      scene: 'Scene',
      scriptContent: 'ScriptContent',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptWaveform: 'ScriptWaveform',
      ttsConfig: 'TtsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentKey: 'string',
      agentLlm: 'boolean',
      asrConfig: 'string',
      chatConfig: 'string',
      chatbotId: 'string',
      emotionEnable: 'boolean',
      industry: 'string',
      instanceId: 'string',
      labelConfig: 'string',
      longWaitEnable: 'boolean',
      miniPlaybackConfigListJsonString: 'string',
      miniPlaybackEnable: 'boolean',
      newBargeInEnable: 'boolean',
      nlsConfig: 'string',
      nluAccessType: 'string',
      nluEngine: 'string',
      scene: 'string',
      scriptContent: { 'type': 'array', 'itemType': 'string' },
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      scriptWaveform: { 'type': 'array', 'itemType': 'string' },
      ttsConfig: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scriptContent)) {
      $dara.Model.validateArray(this.scriptContent);
    }
    if(Array.isArray(this.scriptWaveform)) {
      $dara.Model.validateArray(this.scriptWaveform);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

