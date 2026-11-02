// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentOutboundCallConfigAmbientSoundConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ambient sound for calls. You can obtain this ID in the advanced configurations of the agent configuration in the console.
   * 
   * @example
   * f67901c595834************
   */
  resourceId?: string;
  /**
   * @remarks
   * The volume of the background sound for calls. Valid values: 0 to 100. A value of 0 indicates that the background sound is disabled.
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
   * The list of ASR hotwords. The list supports a maximum of 128 hotwords.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language ID for automatic speech recognition (ASR). Valid values:
   * 
   * - zh_mandarin: Chinese
   * 
   * - en: English
   * 
   * - zh_en: Chinese and English mixed
   * 
   * - es: Spanish
   * 
   * - jp: Japanese
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The silence duration threshold for speech segmentation. If the silence duration exceeds this threshold, the speech is considered segmented. Valid values: 200 to 1200. Unit: milliseconds. Default value: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The pass-through parameters for the proprietary ASR integration.
   * 
   * @example
   * mode=fast&sample=16000&format=wav
   */
  customParams?: string;
  /**
   * @remarks
   * The minimum duration threshold for voice activity detection, which is used to control the sensitivity of interruptions. A value of 0 disables this feature. Valid values: 200 to 2000. Unit: milliseconds. Common values: 200 to 500, which correspond to 1 to 4 characters. Default value: empty. This parameter does not take effect when left empty.
   * 
   * @example
   * 300
   */
  vadDuration?: number;
  /**
   * @remarks
   * The interruption threshold parameter. Valid values: 0 to 11. Default value: 11.
   * 
   * - 0: Disables the voice activity detection (VAD) feature.
   * - 1 to 10: A higher value indicates that it is more difficult to interrupt the speech.
   * - 11: Significantly different from previous values. It causes less damage to the conversation voice during pre-processing and provides stronger anti-interference capability.
   * 
   * @example
   * 11
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
  /**
   * @remarks
   * The selection probability of the prompt. Valid values: 0 to 1, which correspond to 0% to 100%.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The text of the inquiry prompt. The maximum length is 100 characters.
   * 
   * @example
   * Just a moment
   */
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
  /**
   * @remarks
   * The collection of inquiry prompts. A maximum of 10 prompts are supported. The length of each prompt cannot exceed 100 characters. The sum of probabilities must be 100%.
   */
  messages?: AIAgentOutboundCallConfigAutoSpeechConfigLlmPendingMessages[];
  mode?: string;
  /**
   * @remarks
   * The waiting time threshold for the LLM response. If this time is exceeded, a broadcast prompt is triggered. This parameter is required. Unit: milliseconds. Valid values: 500 to 10000. Set this parameter based on the actual usage of the LLM.
   * 
   * @example
   * 3000
   */
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      mode: 'Mode',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': AIAgentOutboundCallConfigAutoSpeechConfigLlmPendingMessages },
      mode: 'string',
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
  /**
   * @remarks
   * The selection probability of the prompt. Valid values: 0 to 1, which correspond to 0% to 100%.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The text of the inquiry prompt. The maximum length is 100 characters.
   * 
   * @example
   * Are you still there?
   */
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
  /**
   * @remarks
   * The hang-up closing word. It is broadcast before the call is hung up after the user does not respond for a long time. The maximum length is 200 characters.
   * 
   * @example
   * I’m hanging up, goodbye.
   */
  hangupEndWord?: string;
  /**
   * @remarks
   * The maximum number of inquiries. Valid values: 0 to 10. This parameter is required. If this number is exceeded, no more inquiries are triggered, and the call is directly closed.
   * 
   * @example
   * 5
   */
  maxRepeats?: number;
  /**
   * @remarks
   * The collection of inquiry prompts. A maximum of 10 prompts are supported. The length of each prompt cannot exceed 100 characters. The sum of probabilities must be 100%.
   */
  messages?: AIAgentOutboundCallConfigAutoSpeechConfigUserIdleMessages[];
  /**
   * @remarks
   * The silence duration threshold. Unit: milliseconds. This parameter is required. An inquiry is triggered when the silence duration exceeds this threshold. Valid values: 5000 to 600000.
   * 
   * @example
   * 5000
   */
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      hangupEndWord: 'HangupEndWord',
      maxRepeats: 'MaxRepeats',
      messages: 'Messages',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hangupEndWord: 'string',
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
  /**
   * @remarks
   * The broadcast configuration when the LLM response is delayed.
   */
  llmPending?: AIAgentOutboundCallConfigAutoSpeechConfigLlmPending;
  /**
   * @remarks
   * The inquiry broadcast configuration when the user is silent for a long time.
   */
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
  /**
   * @remarks
   * The trigger probability of the phrase. Valid values: 0.0 to 1.0. Required.
   * 
   * @example
   * 0.3
   */
  probability?: number;
  /**
   * @remarks
   * The text of the phrase. The maximum length is 20 characters. Multiple languages are supported. Required.
   * 
   * @example
   * ok
   */
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
  /**
   * @remarks
   * Specifies whether to enable the backchanneling feature. This parameter is required. Valid values: true and false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The trigger probability of the feature. Valid values: 0.0 to 1.0. This parameter is required.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The trigger timing for backchanneling. Valid values:
   * 
   * - pause_detected: A short pause in speech is detected.
   * 
   * @example
   * pause_detected
   */
  triggerStage?: string;
  /**
   * @remarks
   * The collection of backchanneling phrases. A maximum of 10 phrases are supported. The length of each phrase cannot exceed 20 characters. The sum of probabilities must be 1.0.
   */
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
   * Specifies whether to support speech interruption. Default value: true.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * The specific words or phrases that trigger conversation interruption.
   */
  interruptWords?: string[];
  /**
   * @remarks
   * Specifies whether to retain the interrupt words and send them to the LLM. Default value: discard.
   * 
   * > Example: If the interrupt word is "wait", the phrase "wait how is the weather today" becomes "how is the weather today" after the interrupt word is discarded and sent to the LLM.
   * 
   * @example
   * true
   */
  keepInterruptWordsForLLM?: boolean;
  /**
   * @remarks
   * The ASR processing policy in the No Interrupting mode. Valid values:
   * 
   * - cache: Caches the ASR text. After the current turn ends, the cached ASR text is processed together in the next turn.
   * 
   * - discard: Directly discards the ASR text.
   * 
   * Default value: cache.
   * 
   * @example
   * cache
   */
  noInterruptMode?: string;
  static names(): { [key: string]: string } {
    return {
      eagerness: 'Eagerness',
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      interruptWords: 'InterruptWords',
      keepInterruptWordsForLLM: 'KeepInterruptWordsForLLM',
      noInterruptMode: 'NoInterruptMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eagerness: 'string',
      enableVoiceInterrupt: 'boolean',
      interruptWords: { 'type': 'array', 'itemType': 'string' },
      keepInterruptWordsForLLM: 'boolean',
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
   * The name of the built-in feature provided by the Alibaba Cloud agent system. Currently, only hangup is supported.
   * 
   * @example
   * hangup
   */
  function?: string;
  /**
   * @remarks
   * The name of the LLM function that corresponds to the feature. This name is customized by the user and used to call the corresponding feature in the LLM. For the user-defined LLM protocol, refer to [Standard LLM API](https://help.aliyun.com/document_detail/2839094.html).
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
   * The actual text content of the conversation, which records the specific expression or response of the role in the conversation.
   * 
   * @example
   * hello
   */
  content?: string;
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * 
   * - user: User
   * 
   * - assistant: Assistant
   * 
   * - system: System
   * 
   * - function: Function
   * 
   * - plugin: Plugin
   * 
   * - tool: Tool
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
   * The parameters for Alibaba Cloud Model Studio Application Center. For the parameter format, refer to [Alibaba Cloud Model Studio Application Center parameters](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * "{\\"biz_params\\":{\\"user_defined_params\\":{\\"your_plugin_id\\":{\\"article_index\\":2}}},\\"memory_id\\":\\"your_memory_id\\",\\"image_list\\":[\\"https://your_image_url\\"],\\"rag_options\\":{\\"pipeline_ids\\":[\\"your_id\\"],\\"file_ids\\":[\\"DocumentID1\\",\\"DocumentID2\\"],\\"metadata_filter\\":{\\"name\\":\\"ZhangSan\\"},\\"structured_filter\\":{\\"key1\\":\\"value1\\",\\"key2\\":\\"value2\\"},\\"tags\\":[\\"Tag1\\",\\"Tag2\\"]}}"
   */
  bailianAppParams?: string;
  /**
   * @remarks
   * The list of function mappings, which is used to map agent capabilities to LLM functions. Currently, only function calling with user-defined OpenAI-compatible LLMs is supported.
   */
  functionMap?: AIAgentOutboundCallConfigLlmConfigFunctionMap[];
  /**
   * @remarks
   * Specifies whether the LLM message history is consistent with the text-to-speech (TTS) playback content. Default value: false. After this feature is enabled, the saved LLM messages are consistent with the TTS playback content.
   * 
   * @example
   * false
   */
  historySyncWithTTS?: boolean;
  /**
   * @remarks
   * After this feature is enabled, the complete LLM result is sent to the client after the LLM generates the result.
   * 
   * @example
   * true
   */
  llmCompleteReply?: boolean;
  /**
   * @remarks
   * The LLM or MLLM conversation history context.
   */
  llmHistory?: AIAgentOutboundCallConfigLlmConfigLlmHistory[];
  /**
   * @remarks
   * The maximum number of retained turns for the LLM or multimodal LLM (MLLM) conversation history context. Default value: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM after the call is initiated.
   * 
   * @example
   * You are a friendly and helpful assistant, focused on providing users with accurate information and advice.
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * The additional query parameters for the OpenAI-compatible LLM. Parameters must be in the key=value format. Multiple parameters are connected by an ampersand (&). All values must be of the string type.
   * 
   * @example
   * api-version=2024-02-01&api-key=sk-xxx
   */
  openAIExtraQuery?: string;
  /**
   * @remarks
   * The maximum delay time for text output in milliseconds. If this time is exceeded, the cached text is forcibly output. Valid values: 1000 to 10000. A value of 0 or empty indicates no limit. Default value: empty.
   * 
   * @example
   * 2000
   */
  outputMaxDelay?: string;
  /**
   * @remarks
   * The minimum length of text output in characters. Text shorter than this length is cached and waiting to be concatenated. Valid values: 0 to 100. A value of 0 or empty indicates no limit. Default value: empty.
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
   * The target pronunciation. The length must be less than 10 characters. It must consist of Chinese characters and cannot contain spaces.
   * 
   * @example
   * Dashi Lane
   */
  pronunciation?: string;
  /**
   * @remarks
   * The specific pronunciation rule type. Valid values:
   * 
   * - replacement: The rule that directly replaces the word with the pronunciation.
   * 
   * @example
   * replacement
   */
  type?: string;
  /**
   * @remarks
   * The word to be replaced. The length must be less than 10 characters. It must consist of Chinese characters and cannot contain spaces.
   * 
   * @example
   * Dashi Lane
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
   * The emotion. Currently, only MiniMax is supported. MiniMax supports the following seven emotions:
   * 
   * - happy: Happy
   * - sad: Sad
   * - angry: Angry
   * - fearful: Fearful
   * - disgusted: Disgusted
   * - surprised: Surprised
   * - calm: Neutral
   * 
   * @example
   * happy
   */
  emotion?: string;
  /**
   * @remarks
   * The language ID. Currently, only MiniMax is supported. Default value: empty. This parameter enhances the recognition capability for specified minority languages and dialects. After this parameter is set, the speech performance in the specified minority language or dialect scenarios is improved. If the minority language type is not clear, you can set this parameter to auto, and the model automatically determines the minority language type. Valid values:
   * <details>
   * <summary>Supported languages</summary>
   * 
   * - Chinese: Chinese
   * - Chinese,Yue: Cantonese
   * - English: English
   * - Arabic: Arabic
   * - Russian: Russian
   * - Spanish: Spanish
   * - French: French
   * - Portuguese: Portuguese
   * - German: German
   * - Turkish: Turkish
   * - Dutch: Dutch
   * - Ukrainian: Ukrainian
   * - Vietnamese: Vietnamese
   * - Indonesian: Indonesian
   * - Japanese: Japanese
   * - Italian: Italian
   * - Korean: Korean
   * - Thai: Thai
   * - Polish: Polish
   * - Romanian: Romanian
   * - Greek: Greek
   * - Czech: Czech
   * - Finnish: Finnish
   * - Hindi: Hindi
   * - auto: Automatic detection
   * </details>
   * 
   * @example
   * Chinese
   */
  languageId?: string;
  /**
   * @remarks
   * The model ID. Currently, only MiniMax is supported. Valid values: speech-01-turbo and speech-02-turbo.
   * 
   * @example
   * speech-01-turbo
   */
  modelId?: string;
  /**
   * @remarks
   * The TTS pronunciation rules. The array length cannot exceed 20. The rules are executed in sequence.
   */
  pronunciationRules?: AIAgentOutboundCallConfigTtsConfigPronunciationRules[];
  /**
   * @remarks
   * The speech rate. This parameter is supported on all platforms. For CosyVoice, the default value is 1.0, and the valid values are 0.5 to 2.0. For MiniMax, the default value is 1.0, and the valid values are 0.5 to 2.0.
   * 
   * @example
   * 1.0
   */
  speechRate?: number;
  /**
   * @remarks
   * The voice ID. Changes take effect in the next sentence. If this parameter is not specified, the voice ID configured in the agent template is used. This parameter takes effect only for preset TTS. The input length cannot exceed 64 characters. For valid values, refer to [Intelligent speech effect examples](https://help.aliyun.com/document_detail/449563.html).
   * 
   * @example
   * longcheng_v2
   */
  voiceId?: string;
  /**
   * @remarks
   * The list of available voices.
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
  /**
   * @remarks
   * The eagerness level. This parameter takes effect only in Semantic mode. It controls the speed at which the AI initiates a response after detecting a pause. Valid values:
   * - Low: Waits patiently with a maximum waiting time of 6 seconds to reduce the risk of being interrupted.
   * - Medium: Balances waiting with a maximum waiting time of 4 seconds. This value is suitable for most scenarios.
   * - High: Responds quickly with a maximum waiting time of 2 seconds. This value improves speed but may increase the risk of false cuts.
   * 
   * Default value: empty.
   * 
   * @example
   * Low
   */
  eagerness?: string;
  /**
   * @remarks
   * The turn detection mode. Valid values:
   * 
   * - Normal: The normal mode, which does not use AI to determine semantics.
   * 
   * - Semantic: Uses AI to determine whether the user has finished speaking based on the context semantics.
   * 
   * Default value: Normal.
   * 
   * @example
   * Semantic
   */
  mode?: string;
  /**
   * @remarks
   * The pause determination time in AI mode. Unit: milliseconds. Default value: -1.
   * 
   * - -1: AI automatically determines the appropriate waiting time.
   * 
   * - 0 to 10000: Custom waiting time. We recommend that you set this value to 0 to 1500.
   * 
   * Note: This parameter is invalid in normal mode.
   * 
   * @example
   * -1
   */
  semanticWaitDuration?: number;
  /**
   * @remarks
   * The list of keywords used to determine the end of a user turn.
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
   * The ambient sound configuration for calls.
   */
  ambientSoundConfig?: AIAgentOutboundCallConfigAmbientSoundConfig;
  /**
   * @remarks
   * The speech recognition configuration.
   */
  asrConfig?: AIAgentOutboundCallConfigAsrConfig;
  /**
   * @remarks
   * The automatic speech configuration module for the agent, including LLM waiting prompts and user long-time silence inquiries.
   */
  autoSpeechConfig?: AIAgentOutboundCallConfigAutoSpeechConfig;
  /**
   * @remarks
   * **[Deprecated]** Use BackChannelingConfigs instead.
   * 
   * @deprecated
   */
  backChannelingConfig?: AIAgentOutboundCallConfigBackChannelingConfig;
  /**
   * @remarks
   * The backchanneling feature configuration module. After this feature is enabled, the system randomly broadcasts short backchanneling words at specific trigger timings.
   */
  backChannelingConfigs?: AIAgentOutboundCallConfigBackChannelingConfigs[];
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. After this feature is enabled, fragmented sentences spoken by the user are intelligently merged into a single sentence. Default value: true.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * The parameters for experimental features. Contact technical support if you have any requirements.
   * 
   * @example
   * ""
   */
  experimentalConfig?: string;
  /**
   * @remarks
   * The greeting message. Changes take effect in the next session. Default value: none.
   * 
   * @example
   * hello
   */
  greeting?: string;
  /**
   * @remarks
   * The delay time for the greeting message. Unit: milliseconds. Default value: 0. Valid values: 0 to 5000.
   * 
   * @example
   * 0
   */
  greetingDelay?: number;
  /**
   * @remarks
   * The speech interruption policy configuration.
   */
  interruptConfig?: AIAgentOutboundCallConfigInterruptConfig;
  /**
   * @remarks
   * The large language model (LLM) configuration.
   */
  llmConfig?: AIAgentOutboundCallConfigLlmConfig;
  /**
   * @remarks
   * The maximum waiting time without interaction with the agent. If this time is exceeded, the agent goes offline. Unit: seconds. Default value: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * The speech synthesis configuration.
   */
  ttsConfig?: AIAgentOutboundCallConfigTtsConfig;
  /**
   * @remarks
   * The conversation turn detection configuration.
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

