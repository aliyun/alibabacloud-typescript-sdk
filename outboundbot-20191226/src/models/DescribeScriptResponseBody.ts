// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScriptResponseBodyScriptNluProfile extends $dara.Model {
  /**
   * @remarks
   * The function service name.
   * 
   * @example
   * sanfang_test
   */
  fcFunction?: string;
  /**
   * @remarks
   * The HTTP trigger URL of the function.
   * 
   * @example
   * http://sanfang_test-xxxxxx.cn-shanghai-vpc.fcapp.run
   */
  fcHttpTriggerUrl?: string;
  /**
   * @remarks
   * The region of the function.
   * 
   * @example
   * cn-shanghai
   */
  fcRegion?: string;
  /**
   * @remarks
   * Indicates whether Chatbot prompts are supported. Valid values:
   * - true: Supported.
   * - false: Not supported.
   */
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
   * The access key of the chatbot workspace.
   * 
   * @example
   * 1218333
   */
  agentId?: number;
  /**
   * @remarks
   * The access key of the chatbot workspace.
   * 
   * @example
   * 14791f5f226b4878b3d9b676a0291234
   */
  agentKey?: string;
  /**
   * @remarks
   * Indicates whether the chatbot workspace is a large language model (LLM) workspace.
   * 
   * @example
   * true
   */
  agentLlm?: boolean;
  /**
   * @remarks
   * The automatic speech recognition (ASR) configuration.
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
   * The call configuration.
   * 
   * @example
   * {"silenceConfig":{"silenceReplyTimeout":499,"silenceTimeoutMaxCount":10,"silenceTimeoutMaxCountEnable":true},"hangupConfig":{"aiHangupEnable":false,"delayHangup":0,"hangupMaxRounds":20,"hangupMaxRoundsBroadcast":"Thank you for taking the call. Have a great day. Goodbye!","hangupMaxRoundsEnable":false},"securityInterceptConfig":{"broadcast":"I cannot answer this question. Please try asking something else."},"specialInterceptConfig":{"specialInterceptEnable":false,"specialIntercepts":[{"code":"voiceAssistant"},{"code":"extensionNumberTransfer"}]},"transitionConfig":{"transitionSwitch":false}}
   */
  chatConfig?: string;
  /**
   * @remarks
   * The chatbot ID.
   * 
   * @example
   * d31794e2a51f47d2901b4094d88311d7
   */
  chatbotId?: string;
  /**
   * @remarks
   * The debug status of the script.
   * 
   * @example
   * DRAFTED
   */
  debugStatus?: string;
  /**
   * @remarks
   * Specifies whether the emotion recognition feature is enabled.
   * 
   * @example
   * true
   */
  emotionEnable?: boolean;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * Finance
   */
  industry?: string;
  /**
   * @remarks
   * Indicates whether the debug version is in the draft state.
   * 
   * @example
   * true
   */
  isDebugDrafted?: boolean;
  /**
   * @remarks
   * Indicates whether the script is in the draft state.
   * 
   * @example
   * true
   */
  isDrafted?: boolean;
  /**
   * @remarks
   * The custom label configuration.
   * 
   * @example
   * {\\"labels\\":[{\\"description\\":\\"\\",\\"name\\":\\"Availability\\",\\"valueList\\":\\"[\\\\\\"Available\\\\\\",\\\\\\"Unavailable\\\\\\"]\\"}]}
   */
  labelConfig?: string;
  /**
   * @remarks
   * Specifies whether the intelligent sentence segmentation feature is enabled.
   * 
   * @example
   * true
   */
  longWaitEnable?: boolean;
  /**
   * @remarks
   * Specifies whether the mini playback feature is enabled.
   * 
   * @example
   * true
   */
  miniPlaybackEnable?: boolean;
  /**
   * @remarks
   * Specifies whether the graceful barge-in feature is enabled.
   * 
   * @example
   * true
   */
  newBargeInEnable?: boolean;
  /**
   * @remarks
   * The natural language understanding (NLU) engine. This parameter applies only to large language model (LLM) scenarios. Valid values:
   * 
   * - Prompts: text input mode. 
   * - SSE_FUNCTION: Function Compute service mode.
   * 
   * @example
   * Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * The configuration of the Function Compute service mode.
   */
  nluProfile?: DescribeScriptResponseBodyScriptNluProfile;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * Collection
   */
  scene?: string;
  /**
   * @remarks
   * The description of the script.
   * 
   * @example
   * Collection script
   */
  scriptDescription?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 810b5872-57f0-4b27-80ab-7b3f4d8a6374
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * Collection script
   */
  scriptName?: string;
  /**
   * @remarks
   * The status of the script.
   * 
   * @example
   * DRAFTED
   */
  status?: string;
  /**
   * @remarks
   * The text-to-speech (TTS) configuration of the script.
   * 
   * @example
   * {
   * 	"appKey": "oQDVNlE6fZ5mg46X",
   * 	"engine": "ali",
   * 	"engineXunfei": "",
   * 	"globalInterruptible": true,
   *         "closingStatementInterruptible": false, "openingPromptInterruptible": false,
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
   * The update time. The value is a UNIX timestamp in milliseconds.
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
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The API message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * none
   */
  nlsConfig?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * The script.
   * 
   * @example
   * {}
   */
  script?: DescribeScriptResponseBodyScript;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

