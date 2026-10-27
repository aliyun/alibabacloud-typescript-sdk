// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScriptRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the robot workspace.
   * 
   * @example
   * 1198938
   */
  agentId?: number;
  /**
   * @remarks
   * The access key for the robot workspace.
   * 
   * @example
   * 9137ab9c27044921860030adf8590ec4_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * Specifies whether the robot workspace is a large model workspace.
   * 
   * @example
   * false
   */
  agentLlm?: boolean;
  /**
   * @remarks
   * The ASR configuration. Parameter definitions:
   * 
   * - **appKey**: The appKey of the Alibaba Cloud account.
   * - **maxEndSilence**: The duration of voice endpoint detection.
   * - **silenceTimeout**: The silence timeout in seconds. The timeout occurs after the user is silent for N seconds.
   * 
   * - **engine**: The service to call. Valid values: ali and xunfei.
   * - **nlsServiceType**: The type of the service to call. Valid values: 
   *    - Managed: The NLS service on the public cloud. 
   *    - Authorized: The authorized NLS service.
   *    - Provided: The NLS service provided by the customer through AccessKey ID and AccessKey secret.
   *    - Apes: The private cloud service.
   * - **engineXunfei**: The configuration required when the caller is xunfei.
   * > When engine is set to ali and nlsServiceType is set to Authorized, a custom service is used, and the service provider is ali. When engine is set to ali and nlsServiceType is set to Managed, the default service is used. When engine is set to xunfei and nlsServiceType is set to Authorized, the service provider is xunfei, and you must enter the xunfei configuration: {"uuid":"ed2xxxxxxxxx","globalMaxEndSilence":700,"globalMaxEndSilenceEnable":true}.
   * 
   * - **globalMaxEndSilence**: The silence detection duration in milliseconds.
   * 
   * - **globalMaxEndSilenceEnable**: The silence detection switch. Enabled by default.
   * 
   * - **speechNoiseThreshold**: The noise filtering threshold.
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
   * - silenceConfig: The silence configuration.
   *     - silenceReplyTimeout: The silence reply timeout in milliseconds.
   *     - silenceTimeoutMaxCount: The maximum number of silence timeout rounds before hanging up.
   *     - silenceTimeoutMaxCountEnable: Specifies whether to hang up after silence timeouts.
   * - hangupConfig: The hang-up configuration.
   *     - aiHangupEnable: Specifies whether to enable AI hang-up. Valid values: true and false.
   *     - delayHangup: The delayed hang-up time. Maximum value: 10.
   *     - hangupMaxRounds: The maximum number of interaction rounds. Maximum value: 100.
   *     - hangupMaxRoundsBroadcast: The broadcast script for hanging up.
   *     - hangupMaxRoundsEnable: Specifies whether to enable the maximum interaction rounds check. Valid values: true and false.
   * - securityInterceptConfig: The security interception configuration.
   *     - broadcast: The interception broadcast script.
   * - specialInterceptConfig: The special case interception configuration.
   *     - specialInterceptEnable: Specifies whether to enable special case interception.
   *     - specialIntercepts: The special cases.
   *         - voiceAssistant: Voice assistant.
   *         - extensionNumberTransfer: Extension number transfer.
   * - transitionConfig: The backchannel model configuration.
   *     - transitionSwitch: Specifies whether to enable the backchannel model.
   * 
   * @example
   * {"silenceConfig":{"silenceReplyTimeout":499,"silenceTimeoutMaxCount":10,"silenceTimeoutMaxCountEnable":true},"hangupConfig":{"aiHangupEnable":false,"delayHangup":0,"hangupMaxRounds":20,"hangupMaxRoundsBroadcast":"Thank you for taking my call. Have a great day. Goodbye!","hangupMaxRoundsEnable":false},"securityInterceptConfig":{"broadcast":"I cannot answer this question. You can try asking other questions."},"specialInterceptConfig":{"specialInterceptEnable":false,"specialIntercepts":[{"code":"voiceAssistant"},{"code":"extensionNumberTransfer"}]},"transitionConfig":{"transitionSwitch":false}}
   */
  chatConfig?: string;
  /**
   * @remarks
   * The robot ID.
   * 
   * @example
   * chatbot-cn-iFZfi7eq6e
   */
  chatbotId?: string;
  /**
   * @remarks
   * Specifies whether to enable the emotion recognition configuration.
   * 
   * @example
   * true
   */
  emotionEnable?: boolean;
  /**
   * @remarks
   * The industry.
   * 
   * This parameter is required.
   * 
   * @example
   * E-commerce
   */
  industry?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c6320d3c-fa45-4011-b3b1-acdfabe3a8c6
   */
  instanceId?: string;
  /**
   * @remarks
   * The label definition.
   * > Used in large model flow canvas scenarios.
   * 
   * @example
   * {
   * 	"labels": [{
   * 		"description": "The customer\\"s final repayment intention after the conversation is completed",
   * 		"name": "Whether promised to repay",
   * 		"valueList": "[\\"Yes\\",\\"No\\"]"
   * 	}]
   * }
   */
  labelConfig?: string;
  /**
   * @remarks
   * Specifies whether to enable the intelligent sentence segmentation configuration for small models.
   * 
   * @example
   * true
   */
  longWaitEnable?: boolean;
  /**
   * @remarks
   * The backchannel configuration. Customization is not supported at the moment. You do not need to pass this parameter by default. **[Deprecated]**
   * 
   * @example
   * None
   */
  miniPlaybackConfigListJsonString?: string;
  /**
   * @remarks
   * Specifies whether to enable the backchannel configuration for small models.
   * 
   * @example
   * true
   */
  miniPlaybackEnable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the graceful interruption configuration for small models.
   * 
   * @example
   * true
   */
  newBargeInEnable?: boolean;
  /**
   * @remarks
   * **[Deprecated]**
   * 
   * @example
   * None
   */
  nlsConfig?: string;
  /**
   * @remarks
   * The NLU access method. This parameter is applicable only to large model scenarios.
   * 
   * Valid values:
   * - Managed: Uses the Alibaba Cloud public account for access.
   * - Empty: For non-large model scenarios.
   * 
   * @example
   * Managed
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The NLU engine. This parameter is applicable only to large model scenarios.
   * 
   * > After a scenario is created, the scenario mode cannot be modified.
   * 
   * Valid values:
   * - Prompts: The text input mode.
   * - SSE_FUNCTION: The Function Compute mode.
   * - Empty: For non-large model scenarios.
   * 
   * @example
   * Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * The scenario information.
   * 
   * This parameter is required.
   * 
   * @example
   * Follow-up visit
   */
  scene?: string;
  /**
   * @remarks
   * The script list for notification instances. **[Deprecated]**
   */
  scriptContent?: string[];
  /**
   * @remarks
   * The script description.
   * 
   * @example
   * Rework callback script
   */
  scriptDescription?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c153d0d8-ba04-41c0-8632-453944c9dd0b
   */
  scriptId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * This parameter is required.
   * 
   * @example
   * Renewal reminder
   */
  scriptName?: string;
  /**
   * @remarks
   * The script voice list for notification instances. **[Deprecated]**
   */
  scriptWaveform?: string[];
  /**
   * @remarks
   * The TTS configuration. Parameter definitions:
   * 
   * - **voice**: The speaker.
   * - **volume**: The volume. Valid values: 0 to 100. Default value: 50.
   * - **speechRate**: The speech rate. Valid values: -500 to 500. Default value: 0.
   * - **pitchRate**: The pitch. Valid values: -500 to 500. Default value: 0.
   * - **openingPromptInterruptible**: The interruption configuration for the opening prompt.
   * - **closingStatementInterruptible**: The interruption configuration for the closing statement.
   * 
   * - **globalInterruptible**: The voice interruption configuration.
   * - **engine**: The service to call. Valid values: ali, volc, and xunfei. xunfei is not supported in large model scenarios.
   * - **nlsServiceType**: The type of the service to call. Valid values: 
   *    - Managed: The NLS service on the public cloud. 
   *    - Authorized: The authorized NLS service.
   *    - Provided: The NLS service provided by the customer through AccessKey ID and AccessKey secret.
   *    - Apes: The private cloud service.
   * - **engineXunfei**: The configuration when the service provider is xunfei.
   * 
   * > 1. When engine is set to ali and nlsServiceType is set to Authorized, a custom service is used. 2. When the service provider is ali, engine is set to ali, and nlsServiceType is set to Managed, the default service is used. 3. When engine is set to xunfei (applicable to small model scenarios) and nlsServiceType is set to Authorized, the service provider is xunfei, and you must enter the engineXunfei configuration: {"pitchRate":50,"speechRate":50,"voice":"aisjiuxu","volume":50}. 4. When engine is set to volc and nlsServiceType is set to Authorized, the applicable service is doubao.
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

