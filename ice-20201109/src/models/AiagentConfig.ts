// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AIAgentConfigAmbientSoundConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ambient sound. This ID can be obtained from the advanced settings section of the agent configuration in the console.
   * 
   * @example
   * f67901c595834************
   */
  resourceId?: string;
  /**
   * @remarks
   * The volume of the ambient sound. Valid values: [0, 100]. A value of 0 disables the ambient sound.
   * 
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      volume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAsrConfig extends $dara.Model {
  /**
   * @remarks
   * Hotwords for ASR to improve recognition accuracy. Maximum of 128 hotwords.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language ID for ASR. Valid values:
   * 
   * *   zh_mandarin: Chinese
   * *   en: English
   * *   zh_en: Chinese and English
   * *   es: Spanish
   * *   jp: Japanese
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The silence threshold for sentence segmentation. A pause longer than this value is considered a sentence break. Unit: milliseconds. Default value: 400. Valid values: 200 to 1200.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * Passthrough parameters for ASR.
   * 
   * @example
   * mode=fast&sample=16000&format=wav
   */
  customParams?: string;
  /**
   * @remarks
   * The minimum duration for voice activity detection, in milliseconds. This parameter controls the sensitivity of interruptions, preventing the agent from cutting off user speech too early during short pauses. 0: Disables this feature. Valid values: 200 to 2000. Recommended: 200 to 500 ms, which typically corresponds to the length of 1 to 4 words. By default, this parameter is left empty, which indicates the feature is disabled.
   * 
   * @example
   * 300
   */
  vadDuration?: number;
  /**
   * @remarks
   * The voice activity detection (VAD) threshold for interruption. A higher value makes it harder to trigger interruptions. Valid values: 0 to 10. Default value: 1. The value of 0 specifies to disable the VAD feature.
   * 
   * @example
   * 1
   */
  vadLevel?: number;
  static names(): { [key: string]: string } {
    return {
      asrHotWords: 'AsrHotWords',
      asrLanguageId: 'AsrLanguageId',
      asrMaxSilence: 'AsrMaxSilence',
      customParams: 'CustomParams',
      vadDuration: 'VadDuration',
      vadLevel: 'VadLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrHotWords: { 'type': 'array', 'itemType': 'string' },
      asrLanguageId: 'string',
      asrMaxSilence: 'number',
      customParams: 'string',
      vadDuration: 'number',
      vadLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.asrHotWords)) {
      $dara.Model.validateArray(this.asrHotWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfigLlmPendingMessages extends $dara.Model {
  probability?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      probability: 'Probability',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probability: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfigLlmPending extends $dara.Model {
  messages?: AIAgentConfigAutoSpeechConfigLlmPendingMessages[];
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': AIAgentConfigAutoSpeechConfigLlmPendingMessages },
      waitTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfigUserIdleMessages extends $dara.Model {
  probability?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      probability: 'Probability',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probability: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfigUserIdle extends $dara.Model {
  maxRepeats?: number;
  messages?: AIAgentConfigAutoSpeechConfigUserIdleMessages[];
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      maxRepeats: 'MaxRepeats',
      messages: 'Messages',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRepeats: 'number',
      messages: { 'type': 'array', 'itemType': AIAgentConfigAutoSpeechConfigUserIdleMessages },
      waitTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAutoSpeechConfig extends $dara.Model {
  llmPending?: AIAgentConfigAutoSpeechConfigLlmPending;
  userIdle?: AIAgentConfigAutoSpeechConfigUserIdle;
  static names(): { [key: string]: string } {
    return {
      llmPending: 'LlmPending',
      userIdle: 'UserIdle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmPending: AIAgentConfigAutoSpeechConfigLlmPending,
      userIdle: AIAgentConfigAutoSpeechConfigUserIdle,
    };
  }

  validate() {
    if(this.llmPending && typeof (this.llmPending as any).validate === 'function') {
      (this.llmPending as any).validate();
    }
    if(this.userIdle && typeof (this.userIdle as any).validate === 'function') {
      (this.userIdle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigAvatarConfig extends $dara.Model {
  /**
   * @remarks
   * The model ID of the avatar.
   * 
   * @example
   * 5257
   */
  avatarId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'AvatarId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigBackChannelingConfigWords extends $dara.Model {
  probability?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      probability: 'Probability',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probability: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigBackChannelingConfig extends $dara.Model {
  enabled?: boolean;
  probability?: number;
  triggerStage?: string;
  words?: AIAgentConfigBackChannelingConfigWords[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      probability: 'Probability',
      triggerStage: 'TriggerStage',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      probability: 'number',
      triggerStage: 'string',
      words: { 'type': 'array', 'itemType': AIAgentConfigBackChannelingConfigWords },
    };
  }

  validate() {
    if(Array.isArray(this.words)) {
      $dara.Model.validateArray(this.words);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigBackChannelingConfigsWords extends $dara.Model {
  probability?: number;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      probability: 'Probability',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probability: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigBackChannelingConfigs extends $dara.Model {
  enabled?: boolean;
  probability?: number;
  triggerStage?: string;
  words?: AIAgentConfigBackChannelingConfigsWords[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      probability: 'Probability',
      triggerStage: 'TriggerStage',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      probability: 'number',
      triggerStage: 'string',
      words: { 'type': 'array', 'itemType': AIAgentConfigBackChannelingConfigsWords },
    };
  }

  validate() {
    if(Array.isArray(this.words)) {
      $dara.Model.validateArray(this.words);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigInterruptConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the user to interrupt the agent by speaking. Default value: true.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * Words or phrases that will trigger an interruption.
   */
  interruptWords?: string[];
  noInterruptMode?: string;
  static names(): { [key: string]: string } {
    return {
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      interruptWords: 'InterruptWords',
      noInterruptMode: 'NoInterruptMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableVoiceInterrupt: 'boolean',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
      noInterruptMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.interruptWords)) {
      $dara.Model.validateArray(this.interruptWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigLlmConfigFunctionMap extends $dara.Model {
  /**
   * @remarks
   * The name of the built-in agent capability. Only hangup is supported.
   * 
   * @example
   * hangup
   */
  function?: string;
  /**
   * @remarks
   * The corresponding user-defined function name in your LLM. When the LLM calls this function, it will trigger the mapped agent capability.[](~~2839094~~)
   * 
   * @example
   * hangup
   */
  matchFunction?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      matchFunction: 'MatchFunction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      matchFunction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigLlmConfigLlmHistory extends $dara.Model {
  /**
   * @remarks
   * The actual text content of the message for that role.
   */
  content?: string;
  /**
   * @remarks
   * The role of the participant in the conversation. Valid values:
   * 
   * *   user
   * *   assistant
   * *   system
   * *   function
   * *   plugin
   * *   tool
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigLlmConfig extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud Model Studio Application Center parameters in a JSON format. Reference: [Model Studio Application Center Parameter](https://help.aliyun.com/document_detail/2858132.html)
   */
  bailianAppParams?: string;
  /**
   * @remarks
   * Maps agent capabilities to LLM functions. Only supports function calling with custom LLMs that adhere to the OpenAI protocol.
   */
  functionMap?: AIAgentConfigLlmConfigFunctionMap[];
  historySyncWithTTS?: boolean;
  /**
   * @remarks
   * If true, the service sends the complete result from the LLM to the client in a single response after the generation process is finished.
   * 
   * @example
   * true
   */
  llmCompleteReply?: boolean;
  /**
   * @remarks
   * The LLM/MLLM conversation history context.
   */
  llmHistory?: AIAgentConfigLlmConfigLlmHistory[];
  /**
   * @remarks
   * The maximum number of conversational turns to retain in the history. Default value: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM.
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * Additional query parameters to be sent to the OpenAI-protocol LLM, formatted as a URL query string (key=value pairs separated by &). All values must be strings.
   * 
   * @example
   * api-version=2024-02-01&api-key=sk-xxx
   */
  openAIExtraQuery?: string;
  /**
   * @remarks
   * The maximum time (in milliseconds) to buffer text before it is forcibly sent to the client. Valid values: [1000,10000]. A value of 0 or an empty string (default) disables this limit.
   * 
   * @example
   * 2000
   */
  outputMaxDelay?: number;
  /**
   * @remarks
   * The minimum number of characters that must be buffered before a text chunk is sent. Valid values: [0, 100]. A value of 0 or an empty string (default) disables this limit.
   * 
   * @example
   * 5
   */
  outputMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      bailianAppParams: 'BailianAppParams',
      functionMap: 'FunctionMap',
      historySyncWithTTS: 'HistorySyncWithTTS',
      llmCompleteReply: 'LlmCompleteReply',
      llmHistory: 'LlmHistory',
      llmHistoryLimit: 'LlmHistoryLimit',
      llmSystemPrompt: 'LlmSystemPrompt',
      openAIExtraQuery: 'OpenAIExtraQuery',
      outputMaxDelay: 'OutputMaxDelay',
      outputMinLength: 'OutputMinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bailianAppParams: 'string',
      functionMap: { 'type': 'array', 'itemType': AIAgentConfigLlmConfigFunctionMap },
      historySyncWithTTS: 'boolean',
      llmCompleteReply: 'boolean',
      llmHistory: { 'type': 'array', 'itemType': AIAgentConfigLlmConfigLlmHistory },
      llmHistoryLimit: 'number',
      llmSystemPrompt: 'string',
      openAIExtraQuery: 'string',
      outputMaxDelay: 'number',
      outputMinLength: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.functionMap)) {
      $dara.Model.validateArray(this.functionMap);
    }
    if(Array.isArray(this.llmHistory)) {
      $dara.Model.validateArray(this.llmHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigTtsConfigPronunciationRules extends $dara.Model {
  /**
   * @remarks
   * The target pronunciation. The value supports up to 10 Chinese characters. Other characters, including spaces, are not supported.
   */
  pronunciation?: string;
  /**
   * @remarks
   * The type of rule. Valid value:
   * 
   * *   replacement: replaces every occurrence of Word value with Pronunciation value.
   * 
   * @example
   * replacement
   */
  type?: string;
  /**
   * @remarks
   * The word to be replaced. The value supports up to 10 Chinese characters. Other characters, including spaces, are not supported.
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      pronunciation: 'Pronunciation',
      type: 'Type',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pronunciation: 'string',
      type: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigTtsConfig extends $dara.Model {
  /**
   * @remarks
   * Applies only to MiniMax models. Seven types of emotions are supported:
   * 
   * *   happy
   * *   sad
   * *   angry
   * *   fearful
   * *   disgusted
   * *   surprised
   * *   calm
   * 
   * @example
   * happy
   */
  emotion?: string;
  /**
   * @remarks
   * Applies only to MiniMax models. By default, this parameter is left empty. This enhances speech recognition accuracy for specific languages and dialects. If the language type is unknown, set it to auto to have the model automatically detect it. Valid values:
   * 
   * **Supported languages**
   * 
   * *   Chinese
   * *   Chinese,Yue
   * *   English
   * *   Arabic
   * *   Russian
   * *   Spanish
   * *   French
   * *   Portuguese
   * *   German
   * *   Turkish
   * *   Dutch
   * *   Ukrainian
   * *   Vietnamese
   * *   Indonesian
   * *   Japanese
   * *   Italian
   * *   Korean
   * *   Thai
   * *   Polish
   * *   Romanian
   * *   Greek
   * *   Czech
   * *   Finnish
   * *   Hindi
   * *   auto
   * 
   * @example
   * Chinese
   */
  languageId?: string;
  /**
   * @remarks
   * Applies only to MiniMax models. Valid values: speech-01-turbo and speech-02-turbo
   * 
   * @example
   * speech-01-turbo
   */
  modelId?: string;
  /**
   * @remarks
   * The pronunciation rules, executed in order. Maximum of 20 rules.
   */
  pronunciationRules?: AIAgentConfigTtsConfigPronunciationRules[];
  /**
   * @remarks
   * Supports all platforms. For CosyVoice, the default value is 1.0. Valid values: 0.5 to 2.0. For MiniMax, the default value is 1.0. Valid values: 0.5 to 2.0.
   * 
   * @example
   * 1.0
   */
  speechRate?: number;
  /**
   * @remarks
   * The voice ID. Changes take effect on the next sentence. If not set, the system uses the default voice ID specified in the agent template. This parameter takes effect only for the preset TTS model. Max length: 64 characters. Refer to [Intelligent voice samples](https://help.aliyun.com/document_detail/449563.html) for options.
   * 
   * @example
   * longcheng_v2
   */
  voiceId?: string;
  /**
   * @remarks
   * Available voices.
   */
  voiceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      emotion: 'Emotion',
      languageId: 'LanguageId',
      modelId: 'ModelId',
      pronunciationRules: 'PronunciationRules',
      speechRate: 'SpeechRate',
      voiceId: 'VoiceId',
      voiceIdList: 'VoiceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emotion: 'string',
      languageId: 'string',
      modelId: 'string',
      pronunciationRules: { 'type': 'array', 'itemType': AIAgentConfigTtsConfigPronunciationRules },
      speechRate: 'number',
      voiceId: 'string',
      voiceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.pronunciationRules)) {
      $dara.Model.validateArray(this.pronunciationRules);
    }
    if(Array.isArray(this.voiceIdList)) {
      $dara.Model.validateArray(this.voiceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigTurnDetectionConfig extends $dara.Model {
  eagerness?: string;
  /**
   * @remarks
   * The mode of turn detection.
   * 
   * *   Normal: uses simple pause detection.
   * *   Semantic: uses AI to analyze context.
   * 
   * @example
   * Semantic
   */
  mode?: string;
  /**
   * @remarks
   * Specifies how long to wait after a user stops speaking for the agent to decide if the turn is over. Unit: milliseconds. Default value: -1.
   * 
   * *   \\-1: AI decides an appropriate wait time automatically.
   * *   0 to 10000: A custom wait time. Recommended: 0 to 1500 ms.
   * 
   * >  In Normal mode, this field is ignored.
   * 
   * @example
   * -1
   */
  semanticWaitDuration?: number;
  /**
   * @remarks
   * Keywords that signify the end of the user\\"s turn.
   */
  turnEndWords?: string[];
  static names(): { [key: string]: string } {
    return {
      eagerness: 'Eagerness',
      mode: 'Mode',
      semanticWaitDuration: 'SemanticWaitDuration',
      turnEndWords: 'TurnEndWords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eagerness: 'string',
      mode: 'string',
      semanticWaitDuration: 'number',
      turnEndWords: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.turnEndWords)) {
      $dara.Model.validateArray(this.turnEndWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigEquipment extends $dara.Model {
  /**
   * @remarks
   * Enables or disables device identification. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigHeadMotion extends $dara.Model {
  /**
   * @remarks
   * Enables or disables head motion detection. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigInvalidFrameMotion extends $dara.Model {
  /**
   * @remarks
   * The delay in milliseconds before an invalid frame detection event is triggered. The callback is sent only after the frame has been considered invalid for this duration. If not set, the value from the console configuration is used. Valid values: [200, 5000].
   * 
   * @example
   * 3000
   */
  callbackDelay?: number;
  /**
   * @remarks
   * Enables or disables invalid frame detection.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      callbackDelay: 'CallbackDelay',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackDelay: 'number',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigLookAway extends $dara.Model {
  /**
   * @remarks
   * Enables or disables this feature. Default value: false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigPeopleCount extends $dara.Model {
  /**
   * @remarks
   * Enables or disables the feature. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfigStillFrameMotion extends $dara.Model {
  /**
   * @remarks
   * The delay in milliseconds before a still frame detection event is triggered. The callback is sent only after the video has been static for this duration. If not set, the value from the console configuration is used. Valid values: [200,5000].
   * 
   * @example
   * 3000
   */
  callbackDelay?: number;
  /**
   * @remarks
   * Enables or disables still frame detection. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      callbackDelay: 'CallbackDelay',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackDelay: 'number',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVcrConfig extends $dara.Model {
  /**
   * @remarks
   * Configuration for device identification.
   */
  equipment?: AIAgentConfigVcrConfigEquipment;
  /**
   * @remarks
   * Configuration for head motion detection.
   */
  headMotion?: AIAgentConfigVcrConfigHeadMotion;
  /**
   * @remarks
   * Configuration for detecting invalid frames.
   */
  invalidFrameMotion?: AIAgentConfigVcrConfigInvalidFrameMotion;
  /**
   * @remarks
   * Configuration for detecting if the user is looking away from the screen.
   */
  lookAway?: AIAgentConfigVcrConfigLookAway;
  /**
   * @remarks
   * Configuration for the people counting feature.
   */
  peopleCount?: AIAgentConfigVcrConfigPeopleCount;
  /**
   * @remarks
   * Configuration for detecting still frames.
   */
  stillFrameMotion?: AIAgentConfigVcrConfigStillFrameMotion;
  static names(): { [key: string]: string } {
    return {
      equipment: 'Equipment',
      headMotion: 'HeadMotion',
      invalidFrameMotion: 'InvalidFrameMotion',
      lookAway: 'LookAway',
      peopleCount: 'PeopleCount',
      stillFrameMotion: 'StillFrameMotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      equipment: AIAgentConfigVcrConfigEquipment,
      headMotion: AIAgentConfigVcrConfigHeadMotion,
      invalidFrameMotion: AIAgentConfigVcrConfigInvalidFrameMotion,
      lookAway: AIAgentConfigVcrConfigLookAway,
      peopleCount: AIAgentConfigVcrConfigPeopleCount,
      stillFrameMotion: AIAgentConfigVcrConfigStillFrameMotion,
    };
  }

  validate() {
    if(this.equipment && typeof (this.equipment as any).validate === 'function') {
      (this.equipment as any).validate();
    }
    if(this.headMotion && typeof (this.headMotion as any).validate === 'function') {
      (this.headMotion as any).validate();
    }
    if(this.invalidFrameMotion && typeof (this.invalidFrameMotion as any).validate === 'function') {
      (this.invalidFrameMotion as any).validate();
    }
    if(this.lookAway && typeof (this.lookAway as any).validate === 'function') {
      (this.lookAway as any).validate();
    }
    if(this.peopleCount && typeof (this.peopleCount as any).validate === 'function') {
      (this.peopleCount as any).validate();
    }
    if(this.stillFrameMotion && typeof (this.stillFrameMotion as any).validate === 'function') {
      (this.stillFrameMotion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigVoiceprintConfig extends $dara.Model {
  registrationMode?: string;
  /**
   * @remarks
   * Specifies whether to enable voiceprint recognition. Default value: false. You must specify a valid voiceprint ID when you enable voiceprint recognition.
   * 
   * @example
   * false
   */
  useVoiceprint?: boolean;
  /**
   * @remarks
   * The unique ID of the voiceprint. Default value: None.[](~~2964738~~)
   * 
   * @example
   * zhixiaoxia
   */
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      registrationMode: 'RegistrationMode',
      useVoiceprint: 'UseVoiceprint',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrationMode: 'string',
      useVoiceprint: 'boolean',
      voiceprintId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfig extends $dara.Model {
  /**
   * @remarks
   * Configuration for the ambient sound played during the call.
   */
  ambientSoundConfig?: AIAgentConfigAmbientSoundConfig;
  /**
   * @remarks
   * The configuration for Automatic Speech Recognition (ASR).
   */
  asrConfig?: AIAgentConfigAsrConfig;
  autoSpeechConfig?: AIAgentConfigAutoSpeechConfig;
  /**
   * @remarks
   * The avatar configuration. Only effective if the workflow includes an avatar node.
   */
  avatarConfig?: AIAgentConfigAvatarConfig;
  /**
   * @remarks
   * The URL for the agent\\"s profile image in audio-only calls. Default value: None.
   * 
   * @example
   * http://example.com/a.jpg
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The type of the avatar URL. Default value: None.
   * 
   * @example
   * USER
   */
  avatarUrlType?: string;
  /**
   * @deprecated
   */
  backChannelingConfig?: AIAgentConfigBackChannelingConfig[];
  backChannelingConfigs?: AIAgentConfigBackChannelingConfigs[];
  /**
   * @remarks
   * If enabled, the system intelligently merges short, interim segments into a single sentence. Default value: true.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the push-to-talk mode. Default value: false.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * The parameters for experimental features. Contact support for details.
   * 
   * @example
   * ""
   */
  experimentalConfig?: string;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown. Default value: false.
   * 
   * If enabled, when the agent is stopped, it will finish its current sentence before disconnecting (up to 10 seconds).
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The welcome message that the agent says upon joining. Changes take effect in the next session. Default value: None.
   */
  greeting?: string;
  /**
   * @remarks
   * The configuration for the speech interruption strategy.
   */
  interruptConfig?: AIAgentConfigInterruptConfig;
  /**
   * @remarks
   * The configuration for the large language model (LLM).
   */
  llmConfig?: AIAgentConfigLlmConfig;
  /**
   * @remarks
   * The maximum time the agent will wait for interaction before it hangs up. Unit: seconds. Default value: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * The configuration for Text-to-Speech (TTS).
   */
  ttsConfig?: AIAgentConfigTtsConfig;
  /**
   * @remarks
   * The configuration for detecting the end of a user\\"s conversational turn.
   */
  turnDetectionConfig?: AIAgentConfigTurnDetectionConfig;
  /**
   * @remarks
   * The timeout period for the agent to close the task after the user has left the channel. Unit: seconds. Default value: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The timeout period for the agent to close the task if no user joins the channel. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  /**
   * @remarks
   * Configuration for video content recognition. When enabled, the system sends callbacks to the client with details about content identified.
   */
  vcrConfig?: AIAgentConfigVcrConfig;
  /**
   * @remarks
   * The configuration for voiceprint recognition.
   */
  voiceprintConfig?: AIAgentConfigVoiceprintConfig;
  /**
   * @remarks
   * The agent\\"s speaking volume.
   * 
   * *   If this parameter is not specified, the adaptive volume mode is used by default.
   * *   To specify this parameter, enter a value between 0 and 400. Output volume = Workflow output volume × Volume/100. Example:
   * 
   * 1.  If Volume is set to 0, the output is muted.
   * 2.  If Volume is set to 100, the output volume is the original volume.
   * 3.  If Volume is set to 200, the output volume is 2 times the original volume.
   * 
   * @example
   * 100
   */
  volume?: number;
  /**
   * @remarks
   * A command given to the agent before the call starts. The agent will respond to this query immediately after the call begins.
   */
  wakeUpQuery?: string;
  /**
   * @remarks
   * The parameters to override the workflow configuration. Default value: None.
   * 
   * @example
   * {}
   */
  workflowOverrideParams?: string;
  static names(): { [key: string]: string } {
    return {
      ambientSoundConfig: 'AmbientSoundConfig',
      asrConfig: 'AsrConfig',
      autoSpeechConfig: 'AutoSpeechConfig',
      avatarConfig: 'AvatarConfig',
      avatarUrl: 'AvatarUrl',
      avatarUrlType: 'AvatarUrlType',
      backChannelingConfig: 'BackChannelingConfig',
      backChannelingConfigs: 'BackChannelingConfigs',
      enableIntelligentSegment: 'EnableIntelligentSegment',
      enablePushToTalk: 'EnablePushToTalk',
      experimentalConfig: 'ExperimentalConfig',
      gracefulShutdown: 'GracefulShutdown',
      greeting: 'Greeting',
      interruptConfig: 'InterruptConfig',
      llmConfig: 'LlmConfig',
      maxIdleTime: 'MaxIdleTime',
      ttsConfig: 'TtsConfig',
      turnDetectionConfig: 'TurnDetectionConfig',
      userOfflineTimeout: 'UserOfflineTimeout',
      userOnlineTimeout: 'UserOnlineTimeout',
      vcrConfig: 'VcrConfig',
      voiceprintConfig: 'VoiceprintConfig',
      volume: 'Volume',
      wakeUpQuery: 'WakeUpQuery',
      workflowOverrideParams: 'WorkflowOverrideParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ambientSoundConfig: AIAgentConfigAmbientSoundConfig,
      asrConfig: AIAgentConfigAsrConfig,
      autoSpeechConfig: AIAgentConfigAutoSpeechConfig,
      avatarConfig: AIAgentConfigAvatarConfig,
      avatarUrl: 'string',
      avatarUrlType: 'string',
      backChannelingConfig: { 'type': 'array', 'itemType': AIAgentConfigBackChannelingConfig },
      backChannelingConfigs: { 'type': 'array', 'itemType': AIAgentConfigBackChannelingConfigs },
      enableIntelligentSegment: 'boolean',
      enablePushToTalk: 'boolean',
      experimentalConfig: 'string',
      gracefulShutdown: 'boolean',
      greeting: 'string',
      interruptConfig: AIAgentConfigInterruptConfig,
      llmConfig: AIAgentConfigLlmConfig,
      maxIdleTime: 'number',
      ttsConfig: AIAgentConfigTtsConfig,
      turnDetectionConfig: AIAgentConfigTurnDetectionConfig,
      userOfflineTimeout: 'number',
      userOnlineTimeout: 'number',
      vcrConfig: AIAgentConfigVcrConfig,
      voiceprintConfig: AIAgentConfigVoiceprintConfig,
      volume: 'number',
      wakeUpQuery: 'string',
      workflowOverrideParams: 'string',
    };
  }

  validate() {
    if(this.ambientSoundConfig && typeof (this.ambientSoundConfig as any).validate === 'function') {
      (this.ambientSoundConfig as any).validate();
    }
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
    }
    if(this.autoSpeechConfig && typeof (this.autoSpeechConfig as any).validate === 'function') {
      (this.autoSpeechConfig as any).validate();
    }
    if(this.avatarConfig && typeof (this.avatarConfig as any).validate === 'function') {
      (this.avatarConfig as any).validate();
    }
    if(Array.isArray(this.backChannelingConfig)) {
      $dara.Model.validateArray(this.backChannelingConfig);
    }
    if(Array.isArray(this.backChannelingConfigs)) {
      $dara.Model.validateArray(this.backChannelingConfigs);
    }
    if(this.interruptConfig && typeof (this.interruptConfig as any).validate === 'function') {
      (this.interruptConfig as any).validate();
    }
    if(this.llmConfig && typeof (this.llmConfig as any).validate === 'function') {
      (this.llmConfig as any).validate();
    }
    if(this.ttsConfig && typeof (this.ttsConfig as any).validate === 'function') {
      (this.ttsConfig as any).validate();
    }
    if(this.turnDetectionConfig && typeof (this.turnDetectionConfig as any).validate === 'function') {
      (this.turnDetectionConfig as any).validate();
    }
    if(this.vcrConfig && typeof (this.vcrConfig as any).validate === 'function') {
      (this.vcrConfig as any).validate();
    }
    if(this.voiceprintConfig && typeof (this.voiceprintConfig as any).validate === 'function') {
      (this.voiceprintConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

