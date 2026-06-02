// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScriptResponseBodyScriptNluProfile extends $dara.Model {
  fcFunction?: string;
  fcHttpTriggerUrl?: string;
  fcRegion?: string;
  supportBeebotPrompts?: boolean;
  static names(): { [key: string]: string } {
    return {
      fcFunction: 'FcFunction',
      fcHttpTriggerUrl: 'FcHttpTriggerUrl',
      fcRegion: 'FcRegion',
      supportBeebotPrompts: 'SupportBeebotPrompts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcFunction: 'string',
      fcHttpTriggerUrl: 'string',
      fcRegion: 'string',
      supportBeebotPrompts: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptResponseBodyScript extends $dara.Model {
  agentId?: number;
  agentKey?: string;
  agentLlm?: boolean;
  /**
   * @example
   * {\\"AppKey\\":\\"3GHttnsvir1FeWWb\\"}
   */
  asrConfig?: string;
  chatConfig?: string;
  /**
   * @example
   * chatbot-cn-EJfqqa***
   */
  chatbotId?: string;
  /**
   * @example
   * DRAFTED
   */
  debugStatus?: string;
  /**
   * @example
   * true
   */
  emotionEnable?: boolean;
  industry?: string;
  /**
   * @example
   * true
   */
  isDebugDrafted?: boolean;
  /**
   * @example
   * true
   */
  isDrafted?: boolean;
  labelConfig?: string;
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
  nluEngine?: string;
  nluProfile?: DescribeScriptResponseBodyScriptNluProfile;
  scene?: string;
  scriptDescription?: string;
  /**
   * @example
   * 810b5872-57f0-4b27-80ab-7b3f4d8a6374
   */
  scriptId?: string;
  scriptName?: string;
  /**
   * @example
   * DRAFTED
   */
  status?: string;
  /**
   * @example
   * {\\"voice\\":\\"xiaobei\\",\\"volume\\":\\"50\\",\\"speechRate\\":\\"-150\\",\\"pitchRate\\":\\"0\\"}
   */
  ttsConfig?: string;
  /**
   * @example
   * 1578881227000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentKey: 'AgentKey',
      agentLlm: 'AgentLlm',
      asrConfig: 'AsrConfig',
      chatConfig: 'ChatConfig',
      chatbotId: 'ChatbotId',
      debugStatus: 'DebugStatus',
      emotionEnable: 'EmotionEnable',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      labelConfig: 'LabelConfig',
      longWaitEnable: 'LongWaitEnable',
      miniPlaybackEnable: 'MiniPlaybackEnable',
      newBargeInEnable: 'NewBargeInEnable',
      nluEngine: 'NluEngine',
      nluProfile: 'NluProfile',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      status: 'Status',
      ttsConfig: 'TtsConfig',
      updateTime: 'UpdateTime',
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
      debugStatus: 'string',
      emotionEnable: 'boolean',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      labelConfig: 'string',
      longWaitEnable: 'boolean',
      miniPlaybackEnable: 'boolean',
      newBargeInEnable: 'boolean',
      nluEngine: 'string',
      nluProfile: DescribeScriptResponseBodyScriptNluProfile,
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      status: 'string',
      ttsConfig: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.nluProfile && typeof (this.nluProfile as any).validate === 'function') {
      (this.nluProfile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * none
   */
  nlsConfig?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * {}
   */
  script?: DescribeScriptResponseBodyScript;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nlsConfig: 'NlsConfig',
      requestId: 'RequestId',
      script: 'Script',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nlsConfig: 'string',
      requestId: 'string',
      script: DescribeScriptResponseBodyScript,
      success: 'boolean',
    };
  }

  validate() {
    if(this.script && typeof (this.script as any).validate === 'function') {
      (this.script as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

