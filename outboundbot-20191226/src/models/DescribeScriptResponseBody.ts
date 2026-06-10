// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScriptResponseBodyScriptNluProfile extends $dara.Model {
  /**
   * @remarks
   * Function service name
   * 
   * @example
   * sanfang_test
   */
  fcFunction?: string;
  /**
   * @remarks
   * Function service trigger URL
   * 
   * @example
   * http://sanfang_test-xxxxxx.cn-shanghai-vpc.fcapp.run
   */
  fcHttpTriggerUrl?: string;
  /**
   * @remarks
   * Function service region
   * 
   * @example
   * cn-shanghai
   */
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
  /**
   * @remarks
   * Robot workspace access key
   * 
   * @example
   * 1218333
   */
  agentId?: number;
  /**
   * @remarks
   * Robot workspace access key
   * 
   * @example
   * 14791f5f226b4878b3d9b676a0291234
   */
  agentKey?: string;
  /**
   * @remarks
   * Indicates whether the robot workspace uses a Large Language Model (LLM)
   * 
   * @example
   * true
   */
  agentLlm?: boolean;
  /**
   * @remarks
   * ASR configuration
   * 
   * @example
   * {
   * 	"appKey": "oQDVNlE6fZ5mg46X",
   * 	"engine": "ali",
   * 	"engineXunfei": "",
   * 	"globalMaxEndSilence": 700,
   * 	"globalMaxEndSilenceEnable": true,
   * 	"maxEndSilence": "500",
   * 	"nlsServiceType": "Managed",
   * 	"silenceTimeout": "5000",
   * 	"speechNoiseThreshold": "0"
   * }
   */
  asrConfig?: string;
  /**
   * @remarks
   * Call configuration
   * 
   * @example
   * {"silenceConfig":{"silenceReplyTimeout":499,"silenceTimeoutMaxCount":10,"silenceTimeoutMaxCountEnable":true},"hangupConfig":{"aiHangupEnable":false,"delayHangup":0,"hangupMaxRounds":20,"hangupMaxRoundsBroadcast":"感谢您的接听，祝您生活愉快，再见!","hangupMaxRoundsEnable":false},"securityInterceptConfig":{"broadcast":"您说的这个问题我不能回答您，您可以尝试询问其他问题。"},"specialInterceptConfig":{"specialInterceptEnable":false,"specialIntercepts":[{"code":"voiceAssistant"},{"code":"extensionNumberTransfer"}]},"transitionConfig":{"transitionSwitch":false}}
   */
  chatConfig?: string;
  /**
   * @remarks
   * Chatbot ID
   * 
   * @example
   * d31794e2a51f47d2901b4094d88311d7
   */
  chatbotId?: string;
  /**
   * @remarks
   * Status of the debug script
   * 
   * @example
   * DRAFTED
   */
  debugStatus?: string;
  /**
   * @remarks
   * Enables emotion detection
   * 
   * @example
   * true
   */
  emotionEnable?: boolean;
  /**
   * @remarks
   * Industry
   * 
   * @example
   * 金融
   */
  industry?: string;
  /**
   * @remarks
   * Indicates whether the debug version is in draft status
   * 
   * @example
   * true
   */
  isDebugDrafted?: boolean;
  /**
   * @remarks
   * Indicates whether the script is in draft status
   * 
   * @example
   * true
   */
  isDrafted?: boolean;
  labelConfig?: string;
  /**
   * @remarks
   * Enables intelligent sentence break
   * 
   * @example
   * true
   */
  longWaitEnable?: boolean;
  /**
   * @remarks
   * Enables tone continuity
   * 
   * @example
   * true
   */
  miniPlaybackEnable?: boolean;
  /**
   * @remarks
   * Enables graceful barge-in
   * 
   * @example
   * true
   */
  newBargeInEnable?: boolean;
  /**
   * @remarks
   * NLU engine (applies only to LLM scenarios)
   * 
   * - Prompts — Text entry mode
   * 
   * - SSE_FUNCTION — Function Compute service mode
   * 
   * @example
   * Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * Function Compute service mode configuration
   */
  nluProfile?: DescribeScriptResponseBodyScriptNluProfile;
  /**
   * @remarks
   * Scenario
   * 
   * @example
   * 催收
   */
  scene?: string;
  /**
   * @remarks
   * Script description
   * 
   * @example
   * 催收话术
   */
  scriptDescription?: string;
  /**
   * @remarks
   * Script ID
   * 
   * @example
   * 810b5872-57f0-4b27-80ab-7b3f4d8a6374
   */
  scriptId?: string;
  /**
   * @remarks
   * Script name
   * 
   * @example
   * 催收话术
   */
  scriptName?: string;
  /**
   * @remarks
   * Script status
   * 
   * @example
   * DRAFTED
   */
  status?: string;
  /**
   * @remarks
   * TTS configuration for the script
   * 
   * @example
   * {
   * 	"appKey": "oQDVNlE6fZ5mg46X",
   * 	"engine": "ali",
   * 	"engineXunfei": "",
   * 	"globalInterruptible": true,
   * 	"nlsServiceType": "Managed",
   * 	"pitchRate": "0",
   * 	"speechRate": "0",
   * 	"voice": "zhiyuan",
   * 	"volume": "50"
   * }
   */
  ttsConfig?: string;
  /**
   * @remarks
   * Time when the script was last updated
   * 
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
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * none
   */
  nlsConfig?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Script details
   * 
   * @example
   * {}
   */
  script?: DescribeScriptResponseBodyScript;
  /**
   * @remarks
   * Indicates whether the call succeeded
   * 
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

