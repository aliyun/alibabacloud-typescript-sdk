// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptRequest extends $dara.Model {
  /**
   * @remarks
   * Robot workspace ID
   * 
   * @example
   * 1198938
   */
  agentId?: number;
  /**
   * @remarks
   * Robot workspace access Key
   * 
   * @example
   * 9137ab9c27044921860030adf8590ec4_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * Is the robot workspace a Large Language Model (LLM) workspace?
   * 
   * @example
   * false
   */
  agentLlm?: boolean;
  /**
   * @remarks
   * ASR configuration. Parameter definitions:
   * 
   * - **appKey**: Alibaba Cloud account appKey.
   * 
   * - **maxEndSilence**: Voice endpoint detection duration.
   * 
   * - **silenceTimeout**: Silence timeout. Unit: seconds. The user times out after N seconds of silence.
   * 
   * - **engine**: Invoke service; [ali, xunfei]
   * 
   * - **nlsServiceType**: Invoke service type [Managed, Authorized]
   * 
   * - **engineXunfei**: If the caller is xunfei, enter the corresponding configuration.
   * 
   * > If you select ali as the engine and Authorized as the nlsServiceType, a custom service is used, and the service provider is ali. If you select ali as the engine and Managed as the nlsServiceType, the default service is used. If you select xunfei as the engine and Authorized as the nlsServiceType, xunfei is the service provider. You must enter the xunfei configuration: {"uuid":"ed2xxxxxxxxx","globalMaxEndSilence":700,"globalMaxEndSilenceEnable":true}
   * 
   * - **globalMaxEndSilence**: Silence detection. Unit: milliseconds.
   * 
   * - **globalMaxEndSilenceEnable**: Silence detection switch. Enabled by default.
   * 
   * - **speechNoiseThreshold**: Noise filtering threshold
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
   * If the NluServiceType of the instance is Authorized or Provided, specify the ID of the chatbot instance to which the script needs to be attached using this field.
   * 
   * @example
   * chatbot-cn-IfaUfqaUnb
   */
  chatbotId?: string;
  /**
   * @remarks
   * Emotion detection configuration switch (applicable to small models)
   * 
   * @example
   * true
   */
  emotionEnable?: boolean;
  /**
   * @remarks
   * Industry
   * 
   * This parameter is required.
   * 
   * @example
   * 教育
   */
  industry?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * c46001bc-3ead-4bfd-9a69-4b5b66a4a3f4
   */
  instanceId?: string;
  /**
   * @remarks
   * Intelligent sentence segmentation configuration switch (applicable to small models)
   * 
   * @example
   * true
   */
  longWaitEnable?: boolean;
  /**
   * @remarks
   * Connective phrase configuration switch (applicable to small models)
   * 
   * @example
   * true
   */
  miniPlaybackEnable?: boolean;
  /**
   * @remarks
   * Graceful interruption configuration switch (applicable to small models)
   * 
   * @example
   * true
   */
  newBargeInEnable?: boolean;
  /**
   * @remarks
   * NLU access method (applicable only to Large Language Model (LLM) scenarios). Enumeration: Managed - Access using an Alibaba public account. This field is empty for non-LLM scenarios.
   * 
   * @example
   * Managed
   */
  nluAccessType?: string;
  /**
   * @remarks
   * NLU engine (applicable only to Large Language Model (LLM) scenarios). This field is empty for non-LLM scenarios.
   * 
   * - Prompts - Large Language Model (LLM) scenario,
   * 
   * - SSE_FUNCTION - Function Compute pattern.
   * 
   * - BeeBot - Workflow pattern.
   * 
   * @example
   * Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * Scenario
   * 
   * This parameter is required.
   * 
   * @example
   * 回访
   */
  scene?: string;
  /**
   * @remarks
   * For notification instances, pass in the script list. Deprecated.
   * 
   * @example
   * []
   */
  scriptContent?: string[];
  /**
   * @remarks
   * Script description
   * 
   * @example
   * 课程回复话术
   */
  scriptDescription?: string;
  /**
   * @remarks
   * Script name
   * 
   * This parameter is required.
   * 
   * @example
   * 课程满意度回访
   */
  scriptName?: string;
  /**
   * @remarks
   * > If nluEngine is SSE_FUNCTION, you must pass in the corresponding configuration.
   * 
   * Function Compute service pattern configuration
   * 
   * - fcRegion: Function service region
   * 
   * - fcFunction: Function service name
   * 
   * - fcHttpTriggerUrl Function service trigger
   * 
   * @example
   * {"fcRegion":"cn-shanghai","fcFunction":"waihu_test","fcHttpTriggerUrl":"https://waihu-test.xxxxxxxxxxx.cn-shanghai-vpc.fcapp.run"}
   */
  scriptNluProfileJsonString?: string;
  /**
   * @remarks
   * For notification instances, pass in the script voice list. Deprecated.
   * 
   * @example
   * []
   */
  scriptWaveform?: string[];
  /**
   * @remarks
   * TTS configuration. Parameter definitions:
   * 
   * - **voice**: Speaker.
   * 
   * - **volume**: Volume. Value range: 0 to 100. Default value: 50.
   * 
   * - **speechRate**: Speech rate. Value range: -500 to 500. Default value: 0.
   * 
   * - **pitchRate**: Pitch rate. Value range: -500 to 500. Default value: 0.
   * 
   * - **globalInterruptible**: Voice interruption configuration.
   *   -**engine**: Invoke service; [ali, volc, xunfei]. Large Language Model (LLM) scenarios do not support xunfei.
   * 
   * - **nlsServiceType**: Service type. [Managed, Authorized]
   * 
   * - **engineXunfei**: Configuration when the service provider is xunfei.
   * 
   * > 1\\. If you select ali as the engine and Authorized as the nlsServiceType, a custom service is used. 2. If the service provider is ali, and you select ali as the engine and Managed as the nlsServiceType, the default service is used. 3. If you select xunfei as the engine (applicable to small model scenarios) and Authorized as the nlsServiceType, xunfei is the service provider. You must enter the engineXunfei configuration: {"pitchRate":50,"speechRate":50,"voice":"aisjiuxu","volume":50}. 4. If you select volc as the engine and Authorized as the nlsServiceType, it applies to doubao.
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

