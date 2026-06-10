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
   * Indicates whether the robot workspace is a Large Language Model (LLM) workspace.
   * 
   * @example
   * false
   */
  agentLlm?: boolean;
  /**
   * @remarks
   * The ASR configuration. Parameter definitions:
   * 
   * - **appKey**: The Alibaba Cloud account appKey.
   * 
   * - **maxEndSilence**: The duration for voice endpoint detection.
   * 
   * - **silenceTimeout**: The silence timeout. Unit: seconds. The system times out after the user is silent for N seconds.
   * 
   * - **engine**: The service to invoke. Valid values: ali, xunfei.
   * 
   * - **nlsServiceType**: The type of the invoked service.
   * 
   *   - Managed: Public cloud NLS service.
   * 
   *   - Authorized: Authorized NLS service.
   * 
   *   - Provided: NLS service provided by the customer through AS/SK.
   * 
   *   - Apes: Private cloud service.
   * 
   * - **engineXunfei**: If the caller is xunfei, fill in the corresponding configuration.
   * 
   * > If engine is set to ali and nlsServiceType is set to Authorized, a custom service is used, and the service provider is ali. If engine is set to ali and nlsServiceType is set to Managed, the default service is used. If engine is set to xunfei and nlsServiceType is set to Authorized, the service provider is xunfei. You must fill in the xunfei configuration, such as {"uuid":"ed2xxxxxxxxx","globalMaxEndSilence":700,"globalMaxEndSilenceEnable":true}.
   * 
   * - **globalMaxEndSilence**: Silence detection. Unit: milliseconds.
   * 
   * - **globalMaxEndSilenceEnable**: The switch for silence detection. Default value: enabled.
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
   * 
   * - silenceConfig: Silence configuration.
   * 
   *   - silenceReplyTimeout: The timeout period for silence replies, in milliseconds.
   * 
   *   - silenceTimeoutMaxCount: Hang up after several rounds of silence timeout.
   * 
   *   - silenceTimeoutMaxCountEnable: Indicates whether to hang up on silence.
   * 
   * - hangupConfig: Hang-up configuration.
   * 
   *   - aiHangupEnable: AI hang-up. Valid values: true, false.
   * 
   *   - delayHangup: Delayed hang-up. Maximum value: 10.
   * 
   *   - hangupMaxRounds: Interaction rounds. Maximum value: 100.
   * 
   *   - hangupMaxRoundsBroadcast: The script for hang-up broadcast.
   * 
   *   - hangupMaxRoundsEnable: Determine the maximum number of interaction rounds. Valid values: true, false.
   * 
   * - securityInterceptConfig: Security block configuration.
   * 
   *   - broadcast: The script for block broadcast.
   * 
   * - specialInterceptConfig: Special case block.
   * 
   *   - specialInterceptEnable: The switch for special case block.
   * 
   *   - specialIntercepts: Special cases.
   * 
   *     - voiceAssistant: Voice assistant.
   * 
   *     - extensionNumberTransfer: Extension number transfer.
   * 
   * - transitionConfig: Transition phrase model configuration.
   * 
   *   - transitionSwitch: The switch for the transition phrase model.
   * 
   * @example
   * {"silenceConfig":{"silenceReplyTimeout":499,"silenceTimeoutMaxCount":10,"silenceTimeoutMaxCountEnable":true},"hangupConfig":{"aiHangupEnable":false,"delayHangup":0,"hangupMaxRounds":20,"hangupMaxRoundsBroadcast":"感谢您的接听，祝您生活愉快，再见!","hangupMaxRoundsEnable":false},"securityInterceptConfig":{"broadcast":"您说的这个问题我不能回答您，您可以尝试询问其他问题。"},"specialInterceptConfig":{"specialInterceptEnable":false,"specialIntercepts":[{"code":"voiceAssistant"},{"code":"extensionNumberTransfer"}]},"transitionConfig":{"transitionSwitch":false}}
   */
  chatConfig?: string;
  /**
   * @remarks
   * The ID of the chatbot.
   * 
   * @example
   * chatbot-cn-iFZfi7eq6e
   */
  chatbotId?: string;
  /**
   * @remarks
   * The switch for emotion detection configuration.
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
   * 电商
   */
  industry?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * c6320d3c-fa45-4011-b3b1-acdfabe3a8c6
   */
  instanceId?: string;
  labelConfig?: string;
  /**
   * @remarks
   * The switch for intelligent sentence segmentation configuration (small model).
   * 
   * @example
   * true
   */
  longWaitEnable?: boolean;
  /**
   * @remarks
   * The configuration for transition phrases. Customization is not supported temporarily. Do not pass this parameter by default. This parameter is deprecated.
   * 
   * @example
   * 无
   */
  miniPlaybackConfigListJsonString?: string;
  /**
   * @remarks
   * The switch for transition phrase configuration (small model).
   * 
   * @example
   * true
   */
  miniPlaybackEnable?: boolean;
  /**
   * @remarks
   * The switch for graceful barge-in configuration (small model).
   * 
   * @example
   * true
   */
  newBargeInEnable?: boolean;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 无
   */
  nlsConfig?: string;
  /**
   * @remarks
   * The NLU access method (applicable only to Large Language Model (LLM) scenarios).
   * 
   * Enumeration:
   * 
   * - Managed: Access using an Alibaba Cloud public account.
   * 
   * - This parameter is empty for non-LLM scenarios.
   * 
   * @example
   * Managed
   */
  nluAccessType?: string;
  /**
   * @remarks
   * The NLU engine (applicable only to Large Language Model (LLM) scenarios).
   * 
   * > After a scenario is created, you cannot modify the scenario mode.
   * 
   * Enumeration:
   * 
   * - Prompts: Text filling mode.
   * 
   * - SSE_FUNCTION: Function Compute mode.
   * 
   * - This parameter is empty for non-LLM scenarios.
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
   * 回访
   */
  scene?: string;
  /**
   * @remarks
   * For notification instances, pass in the script list. This parameter is deprecated.
   */
  scriptContent?: string[];
  /**
   * @remarks
   * The description of the script.
   * 
   * @example
   * 返工回访话术
   */
  scriptDescription?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * This parameter is required.
   * 
   * @example
   * c153d0d8-ba04-41c0-8632-453944c9dd0b
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * This parameter is required.
   * 
   * @example
   * 续费提醒
   */
  scriptName?: string;
  /**
   * @remarks
   * For notification instances, pass in the script voice list. This parameter is deprecated.
   */
  scriptWaveform?: string[];
  /**
   * @remarks
   * The TTS configuration. Parameter definitions:
   * 
   * - **voice**: The voice actor.
   * 
   * - **volume**: The volume. Valid values: 0 to 100. Default value: 50.
   * 
   * - **speechRate**: The speech rate. Valid values: -500 to 500. Default value: 0.
   * 
   * - **pitchRate**: The pitch rate. Valid values: -500 to 500. Default value: 0.
   * 
   * - **globalInterruptible**: The voice interruption configuration.
   * 
   * - **engine**
   * 
   *   **nlsServiceType**: The type of the invoked service.
   * 
   *   - Managed: Public cloud NLS service.
   * 
   *   - Authorized: Authorized NLS service.
   * 
   *   - Provided: NLS service provided by the customer through AS/SK.
   * 
   *   - Apes: Private cloud service.
   * 
   * - **engineXunfei**: The configuration when the service provider is xunfei.
   * 
   * > 1\\. If engine is set to ali and nlsServiceType is set to Authorized, a custom service is used. 2. If the service provider is ali, and engine is set to ali and nlsServiceType is set to Managed, the default service is used. 3. If engine is set to xunfei (applicable to small model scenarios) and nlsServiceType is set to Authorized, the service provider is xunfei. You must fill in the engineXunfei configuration, such as {"pitchRate":50,"speechRate":50,"voice":"aisjiuxu","volume":50}. 4. If engine is set to volc and nlsServiceType is set to Authorized, it indicates that Doubao is applicable.
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

