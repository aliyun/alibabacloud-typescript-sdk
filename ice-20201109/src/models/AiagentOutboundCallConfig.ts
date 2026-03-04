// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentOutboundCallConfigAmbientSoundConfig extends $dara.Model {
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

export class AIAgentOutboundCallConfigAsrConfig extends $dara.Model {
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
   * The VAD threshold for interruption. A higher value makes it harder to trigger interruptions. Valid values: 0 to 10. Default value: 1. The value of 0 specifies to disable the VAD feature.
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

export class AIAgentOutboundCallConfigAutoSpeechConfigLlmPendingMessages extends $dara.Model {
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

export class AIAgentOutboundCallConfigAutoSpeechConfigLlmPending extends $dara.Model {
  messages?: AIAgentOutboundCallConfigAutoSpeechConfigLlmPendingMessages[];
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigAutoSpeechConfigLlmPendingMessages },
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

export class AIAgentOutboundCallConfigAutoSpeechConfigUserIdleMessages extends $dara.Model {
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

export class AIAgentOutboundCallConfigAutoSpeechConfigUserIdle extends $dara.Model {
  maxRepeats?: number;
  messages?: AIAgentOutboundCallConfigAutoSpeechConfigUserIdleMessages[];
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
      messages: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigAutoSpeechConfigUserIdleMessages },
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

export class AIAgentOutboundCallConfigAutoSpeechConfig extends $dara.Model {
  llmPending?: AIAgentOutboundCallConfigAutoSpeechConfigLlmPending;
  userIdle?: AIAgentOutboundCallConfigAutoSpeechConfigUserIdle;
  static names(): { [key: string]: string } {
    return {
      llmPending: 'LlmPending',
      userIdle: 'UserIdle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmPending: AIAgentOutboundCallConfigAutoSpeechConfigLlmPending,
      userIdle: AIAgentOutboundCallConfigAutoSpeechConfigUserIdle,
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

export class AIAgentOutboundCallConfigBackChannelingConfigWords extends $dara.Model {
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

export class AIAgentOutboundCallConfigBackChannelingConfig extends $dara.Model {
  enabled?: boolean;
  probability?: number;
  triggerStage?: string;
  words?: AIAgentOutboundCallConfigBackChannelingConfigWords;
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
      words: AIAgentOutboundCallConfigBackChannelingConfigWords,
    };
  }

  validate() {
    if(this.words && typeof (this.words as any).validate === 'function') {
      (this.words as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentOutboundCallConfigBackChannelingConfigsWords extends $dara.Model {
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

export class AIAgentOutboundCallConfigBackChannelingConfigs extends $dara.Model {
  enabled?: boolean;
  probability?: number;
  triggerStage?: string;
  words?: AIAgentOutboundCallConfigBackChannelingConfigsWords[];
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
      words: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigBackChannelingConfigsWords },
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

export class AIAgentOutboundCallConfigInterruptConfig extends $dara.Model {
  /**
   * @deprecated
   */
  eagerness?: string;
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
      eagerness: 'Eagerness',
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      interruptWords: 'InterruptWords',
      noInterruptMode: 'NoInterruptMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eagerness: 'string',
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

export class AIAgentOutboundCallConfigLlmConfigFunctionMap extends $dara.Model {
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

export class AIAgentOutboundCallConfigLlmConfigLlmHistory extends $dara.Model {
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

export class AIAgentOutboundCallConfigLlmConfig extends $dara.Model {
  /**
   * @remarks
   * Alibaba Cloud Model Studio Application Center parameters. Reference: [Model Studio Application Center Parameter](https://help.aliyun.com/document_detail/2858132.html)
   */
  bailianAppParams?: string;
  /**
   * @remarks
   * Maps agent capabilities to LLM functions. Only supports function calling with custom LLMs that adhere to the OpenAI protocol.
   */
  functionMap?: AIAgentOutboundCallConfigLlmConfigFunctionMap[];
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
  llmHistory?: AIAgentOutboundCallConfigLlmConfigLlmHistory[];
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
  outputMaxDelay?: string;
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
      functionMap: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigLlmConfigFunctionMap },
      historySyncWithTTS: 'boolean',
      llmCompleteReply: 'boolean',
      llmHistory: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigLlmConfigLlmHistory },
      llmHistoryLimit: 'number',
      llmSystemPrompt: 'string',
      openAIExtraQuery: 'string',
      outputMaxDelay: 'string',
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

export class AIAgentOutboundCallConfigTtsConfigPronunciationRules extends $dara.Model {
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

export class AIAgentOutboundCallConfigTtsConfig extends $dara.Model {
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
   * Applies only to MiniMax models. Valid values: speech-01-turbo and speech-02-turbo.
   * 
   * @example
   * speech-01-turbo
   */
  modelId?: string;
  /**
   * @remarks
   * The pronunciation rules, executed in order. Maximum of 20 rules.
   */
  pronunciationRules?: AIAgentOutboundCallConfigTtsConfigPronunciationRules[];
  /**
   * @remarks
   * Supports all models. For CosyVoice, the default value is 1.0. Valid values: 0.5 to 2.0. For MiniMax, the default value is 1.0. Valid values: 0.5 to 2.0.
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
      pronunciationRules: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigTtsConfigPronunciationRules },
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

export class AIAgentOutboundCallConfigTurnDetectionConfig extends $dara.Model {
  eagerness?: string;
  /**
   * @remarks
   * The mode of turn detection.
   * 
   * *   Normal: uses simple pause detection.
   * *   Semantic: uses AI to analyze context.
   * 
   * Default value: Normal.
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
   * Note: In Normal mode, this field is ignored.
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

export class AIAgentOutboundCallConfig extends $dara.Model {
  /**
   * @remarks
   * Configuration for the ambient sound played during the call.
   */
  ambientSoundConfig?: AIAgentOutboundCallConfigAmbientSoundConfig;
  /**
   * @remarks
   * The configuration for Automatic Speech Recognition (ASR).
   */
  asrConfig?: AIAgentOutboundCallConfigAsrConfig;
  autoSpeechConfig?: AIAgentOutboundCallConfigAutoSpeechConfig;
  /**
   * @deprecated
   */
  backChannelingConfig?: AIAgentOutboundCallConfigBackChannelingConfig;
  backChannelingConfigs?: AIAgentOutboundCallConfigBackChannelingConfigs[];
  /**
   * @remarks
   * If enabled, the system intelligently merges short, interim segments into a single sentence. Default value: true.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  experimentalConfig?: string;
  /**
   * @remarks
   * The welcome message that the agent says upon joining. Changes take effect in the next session. Default value: None.
   */
  greeting?: string;
  /**
   * @remarks
   * The delay before playing the welcome message. Unit: milliseconds. Valid values: 0 to 5000. Default value: 0.
   * 
   * @example
   * 0
   */
  greetingDelay?: number;
  /**
   * @remarks
   * The configuration for the speech interruption strategy.
   */
  interruptConfig?: AIAgentOutboundCallConfigInterruptConfig;
  /**
   * @remarks
   * The configuration for the large language model (LLM).
   */
  llmConfig?: AIAgentOutboundCallConfigLlmConfig;
  maxIdleTime?: number;
  /**
   * @remarks
   * The configuration for Text-to-Speech (TTS).
   */
  ttsConfig?: AIAgentOutboundCallConfigTtsConfig;
  /**
   * @remarks
   * The configuration for detecting the end of a user\\"s conversational turn.
   */
  turnDetectionConfig?: AIAgentOutboundCallConfigTurnDetectionConfig;
  static names(): { [key: string]: string } {
    return {
      ambientSoundConfig: 'AmbientSoundConfig',
      asrConfig: 'AsrConfig',
      autoSpeechConfig: 'AutoSpeechConfig',
      backChannelingConfig: 'BackChannelingConfig',
      backChannelingConfigs: 'BackChannelingConfigs',
      enableIntelligentSegment: 'EnableIntelligentSegment',
      experimentalConfig: 'ExperimentalConfig',
      greeting: 'Greeting',
      greetingDelay: 'GreetingDelay',
      interruptConfig: 'InterruptConfig',
      llmConfig: 'LlmConfig',
      maxIdleTime: 'MaxIdleTime',
      ttsConfig: 'TtsConfig',
      turnDetectionConfig: 'TurnDetectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ambientSoundConfig: AIAgentOutboundCallConfigAmbientSoundConfig,
      asrConfig: AIAgentOutboundCallConfigAsrConfig,
      autoSpeechConfig: AIAgentOutboundCallConfigAutoSpeechConfig,
      backChannelingConfig: AIAgentOutboundCallConfigBackChannelingConfig,
      backChannelingConfigs: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigBackChannelingConfigs },
      enableIntelligentSegment: 'boolean',
      experimentalConfig: 'string',
      greeting: 'string',
      greetingDelay: 'number',
      interruptConfig: AIAgentOutboundCallConfigInterruptConfig,
      llmConfig: AIAgentOutboundCallConfigLlmConfig,
      maxIdleTime: 'number',
      ttsConfig: AIAgentOutboundCallConfigTtsConfig,
      turnDetectionConfig: AIAgentOutboundCallConfigTurnDetectionConfig,
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
    if(this.backChannelingConfig && typeof (this.backChannelingConfig as any).validate === 'function') {
      (this.backChannelingConfig as any).validate();
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

