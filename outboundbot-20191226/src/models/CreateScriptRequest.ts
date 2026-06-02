// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptRequest extends $dara.Model {
  agentId?: number;
  agentKey?: string;
  agentLlm?: boolean;
  /**
   * @example
   * {\\"appKey\\":\\"kknxKIhTTUcpCzYX\\",\\"maxEndSilence\\":\\"400\\",\\"silenceTimeout\\":\\"5\\"}
   */
  asrConfig?: string;
  /**
   * @example
   * chatbot-cn-IfaUfqaUnb
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
   * c46001bc-3ead-4bfd-9a69-4b5b66a4a3f4
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  longWaitEnable?: boolean;
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
  nluAccessType?: string;
  nluEngine?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scene?: string;
  /**
   * @example
   * []
   */
  scriptContent?: string[];
  scriptDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  scriptName?: string;
  scriptNluProfileJsonString?: string;
  /**
   * @example
   * []
   */
  scriptWaveform?: string[];
  /**
   * @example
   * {\\"voice\\":\\"aixia\\",\\"volume\\":\\"50\\",\\"speechRate\\":\\"-150\\",\\"pitchRate\\":\\"0\\"}
   */
  ttsConfig?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentKey: 'AgentKey',
      agentLlm: 'AgentLlm',
      asrConfig: 'AsrConfig',
      chatbotId: 'ChatbotId',
      emotionEnable: 'EmotionEnable',
      industry: 'Industry',
      instanceId: 'InstanceId',
      longWaitEnable: 'LongWaitEnable',
      miniPlaybackEnable: 'MiniPlaybackEnable',
      newBargeInEnable: 'NewBargeInEnable',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
      scene: 'Scene',
      scriptContent: 'ScriptContent',
      scriptDescription: 'ScriptDescription',
      scriptName: 'ScriptName',
      scriptNluProfileJsonString: 'ScriptNluProfileJsonString',
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
      chatbotId: 'string',
      emotionEnable: 'boolean',
      industry: 'string',
      instanceId: 'string',
      longWaitEnable: 'boolean',
      miniPlaybackEnable: 'boolean',
      newBargeInEnable: 'boolean',
      nluAccessType: 'string',
      nluEngine: 'string',
      scene: 'string',
      scriptContent: { 'type': 'array', 'itemType': 'string' },
      scriptDescription: 'string',
      scriptName: 'string',
      scriptNluProfileJsonString: 'string',
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

