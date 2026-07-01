// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIAgentOutboundCallConfigAmbientSoundConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ambient sound. You can obtain the ID from the advanced configurations of the AI agent on the console.
   * 
   * @example
   * f67901c595834************
   */
  resourceId?: string;
  /**
   * @remarks
   * The volume of the ambient sound. Valid values: 0 to 100. A value of 0 disables the sound.
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
   * The list of hotwords for ASR. You can specify a maximum of 128 hotwords in the list.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language ID for ASR. Valid values:
   * 
   * - `zh_mandarin`: Chinese
   * 
   * - `en`: English
   * 
   * - `zh_en`: Chinese and English
   * 
   * - `es`: Spanish
   * 
   * - `jp`: Japanese
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The sentence segmentation threshold. If the duration of a silence exceeds this threshold, the system determines that the sentence is complete. Valid values: 200 to 1200. Unit: ms. Default value: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The passthrough parameters for proprietary ASR.
   * 
   * @example
   * mode=fast&sample=16000&format=wav
   */
  customParams?: string;
  /**
   * @remarks
   * The minimum duration threshold for VAD. This parameter controls the interruption sensitivity. A value of 0 indicates that this feature is disabled. Valid values: 200 to 2000. Unit: ms. A value from 200 to 500 corresponds to 1 to 4 words. The default value is empty, which indicates that this parameter is not in effect.
   * 
   * @example
   * 300
   */
  vadDuration?: number;
  /**
   * @remarks
   * The interruption threshold for voice activity detection (VAD). Valid values: 0 to 11. Default value: 11.
   * 
   * - A value of 0 disables the VAD feature.
   * 
   * - A value from 1 to 10 indicates that the higher the value, the less sensitive the interruption.
   * 
   * - A value of 11 provides a significantly different experience from the previous values. It lowers audio distortion during conversations and enhances resistance to interference.
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
   * The selection probability of the prompt. Valid values: 0 to 1, which corresponds to 0% to 100%.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The text of the inquiry prompt. The text can be up to 100 characters in length.
   * 
   * @example
   * 稍等一下
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
   * The collection of inquiry prompts. You can specify a maximum of 10 prompts. Each prompt can be up to 100 characters in length. The sum of the probabilities of all prompts must be 100%.
   */
  messages?: AIAgentOutboundCallConfigAutoSpeechConfigLlmPendingMessages[];
  mode?: string;
  /**
   * @remarks
   * The wait time threshold for LLM responses. This parameter is required. A broadcast prompt is triggered if this threshold is exceeded. Unit: ms. Valid values: 500 to 10000. You need to configure this parameter based on the actual usage of the LLM.
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
   * The selection probability of the prompt. Valid values: 0 to 1, which corresponds to 0% to 100%.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The text of the inquiry prompt. The text can be up to 100 characters in length.
   * 
   * @example
   * 您还在吗？
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
   * @example
   * 我挂了，再见
   */
  hangupEndWord?: string;
  /**
   * @remarks
   * The maximum number of inquiries. This parameter is required. Valid values: 0 to 10. After the maximum number of inquiries is reached, no more inquiries are triggered, and the call is disconnected.
   * 
   * @example
   * 5
   */
  maxRepeats?: number;
  /**
   * @remarks
   * The collection of inquiry prompts. You can specify a maximum of 10 prompts. Each prompt can be up to 100 characters in length. The sum of the probabilities of all prompts must be 100%.
   */
  messages?: AIAgentOutboundCallConfigAutoSpeechConfigUserIdleMessages[];
  /**
   * @remarks
   * The silence duration threshold. This parameter is required. An inquiry is triggered if this threshold is exceeded. Unit: ms. Valid values: 5000 to 600000.
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
   * The configurations for broadcasts during LLM response delays.
   */
  llmPending?: AIAgentOutboundCallConfigAutoSpeechConfigLlmPending;
  /**
   * @remarks
   * The configurations for inquiry broadcasts during prolonged user silence.
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
   * The selection probability of this phrase. This parameter is required. Valid values: 0.0 to 1.0.
   * 
   * @example
   * 0.3
   */
  probability?: number;
  /**
   * @remarks
   * The text of the phrase. This parameter is required. The text can be up to 20 characters in length and supports multiple languages.
   * 
   * @example
   * 嗯嗯
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
   * Specifies whether to enable the back-channeling feature. This parameter is required. Valid values: true and false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The trigger probability. This parameter is required. Valid values: 0.0 to 1.0.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The trigger point for back-channeling. Valid value:
   * 
   * - `pause_detected`: triggered when a short pause in speech is detected
   * 
   * @example
   * pause_detected
   */
  triggerStage?: string;
  /**
   * @remarks
   * The collection of back-channeling phrases. You can specify a maximum of 10 phrases. Each phrase can be up to 20 characters in length. The sum of the probabilities of all phrases must be 1.0.
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
   * The specific words or phrases that trigger a conversation interruption.
   */
  interruptWords?: string[];
  /**
   * @example
   * true
   */
  keepInterruptWordsForLLM?: boolean;
  /**
   * @remarks
   * The ASR processing policy in `NoInterruptMode`.
   * 
   * - `cache`: caches the ASR text. The cached ASR text is processed in the next conversational turn.
   * 
   * - `discard`: discards the ASR text.
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
   * The name of the built-in function provided by the AI agent in Alibaba Cloud. The value hangup is supported.
   * 
   * @example
   * hangup
   */
  function?: string;
  /**
   * @remarks
   * The name of the LLM function that corresponds to this function. This parameter is customized and used to call the corresponding function in the LLM. For more information about the protocol for custom LLMs, see [Standard LLM API](https://help.aliyun.com/document_detail/2839094.html).
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
   * The text of the conversation content that records the specific expressions or responses of the role in the conversation.
   * 
   * @example
   * 你好
   */
  content?: string;
  /**
   * @remarks
   * The role of the participant in the conversation. Valid values:
   * 
   * - `user`: the user
   * 
   * - `assistant`: the AI assistant
   * 
   * - `system`: the system
   * 
   * - `function`: a function
   * 
   * - `plugin`: a plug-in
   * 
   * - `tool`: a tool
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
   * The parameters for Alibaba Cloud Model Studio. For more information about the parameter format, see [Alibaba Cloud Model Studio parameters](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * "{\\"biz_params\\":{\\"user_defined_params\\":{\\"your_plugin_id\\":{\\"article_index\\":2}}},\\"memory_id\\":\\"your_memory_id\\",\\"image_list\\":[\\"https://your_image_url\\"],\\"rag_options\\":{\\"pipeline_ids\\":[\\"your_id\\"],\\"file_ids\\":[\\"文档ID1\\",\\"文档ID2\\"],\\"metadata_filter\\":{\\"name\\":\\"张三\\"},\\"structured_filter\\":{\\"key1\\":\\"value1\\",\\"key2\\":\\"value2\\"},\\"tags\\":[\\"标签1\\",\\"标签2\\"]}}"
   */
  bailianAppParams?: string;
  /**
   * @remarks
   * The list of function mappings, which is used to map AI agent capabilities to LLM functions. This feature is supported only when function calls are used in custom LLMs that are compatible with the OpenAI protocol.
   */
  functionMap?: AIAgentOutboundCallConfigLlmConfigFunctionMap[];
  /**
   * @remarks
   * Specifies whether to keep the LLM message history consistent with the TTS playback content. Default value: false. If you enable this feature, the saved LLM messages are consistent with the TTS playback content.
   * 
   * @example
   * false
   */
  historySyncWithTTS?: boolean;
  /**
   * @remarks
   * If you enable this feature, the system sends the complete LLM-generated result to the client after the generation is complete.
   * 
   * @example
   * true
   */
  llmCompleteReply?: boolean;
  /**
   * @remarks
   * The conversation history of the LLM or MLLM.
   */
  llmHistory?: AIAgentOutboundCallConfigLlmConfigLlmHistory[];
  /**
   * @remarks
   * The maximum number of conversational turns to retain in the history of the LLM or multimodal large language model (MLLM). Default value: 10.
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
   * 你是一位友好且乐于助人的助手，专注于为用户提供准确的信息和建议。
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * The additional query parameters for an LLM that is compatible with the OpenAI protocol. The parameters must be in the key=value format. If you specify multiple parameters, separate them with ampersands (`&`). All values must be of the string type.
   * 
   * @example
   * api-version=2024-02-01&api-key=sk-xxx
   */
  openAIExtraQuery?: string;
  /**
   * @remarks
   * The maximum delay for text output. If this threshold is exceeded, the cached text is forcibly output. Valid values: 1000 to 10000. Unit: ms. A value of 0 or empty indicates that this parameter is not in effect. Default value: empty.
   * 
   * @example
   * 2000
   */
  outputMaxDelay?: string;
  /**
   * @remarks
   * The minimum length of text output. The unit is characters. Text shorter than this length is cached and waits for concatenation. Valid values: 0 to 100. A value of 0 or empty indicates that this parameter is not in effect. Default value: empty.
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
   * The target pronunciation. The pronunciation must be a Chinese character string of up to 10 characters in length and cannot contain spaces.
   * 
   * @example
   * 大石烂儿
   */
  pronunciation?: string;
  /**
   * @remarks
   * The type of the pronunciation rule. Valid value:
   * 
   * - `replacement`: replaces the word with the specified pronunciation.
   * 
   * @example
   * replacement
   */
  type?: string;
  /**
   * @remarks
   * The word to be replaced. The word must be a Chinese character string of up to 10 characters in length and cannot contain spaces.
   * 
   * @example
   * 大栅栏
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
   * Only MiniMax is supported. The following seven emotions are supported:
   * 
   * - `happy`
   * 
   * - `sad`
   * 
   * - `angry`
   * 
   * - `fearful`
   * 
   * - `disgusted`
   * 
   * - `surprised`
   * 
   * - `calm`
   * 
   * @example
   * happy
   */
  emotion?: string;
  /**
   * @remarks
   * Only MiniMax is supported. The default value is empty. This parameter enhances the recognition of specific minority languages and dialects. After you set this parameter, the speech performance in the specified minority language or dialect scenarios is improved. If the minority language type is unknown, you can set this parameter to `auto` to enable the model to automatically determine the minority language type. Valid values:
   * 
   * <details>
   * 
   * <summary>
   * 
   * Supported languages
   * 
   * </summary>
   * 
   * - `Chinese`: Chinese
   * 
   * - `Chinese,Yue`: Cantonese
   * 
   * - `English`: English
   * 
   * - `Arabic`: Arabic
   * 
   * - `Russian`: Russian
   * 
   * - `Spanish`: Spanish
   * 
   * - `French`: French
   * 
   * - `Portuguese`: Portuguese
   * 
   * - `German`: German
   * 
   * - `Turkish`: Turkish
   * 
   * - `Dutch`: Dutch
   * 
   * - `Ukrainian`: Ukrainian
   * 
   * - `Vietnamese`: Vietnamese
   * 
   * - `Indonesian`: Indonesian
   * 
   * - `Japanese`: Japanese
   * 
   * - `Italian`: Italian
   * 
   * - `Korean`: Korean
   * 
   * - `Thai`: Thai
   * 
   * - `Polish`: Polish
   * 
   * - `Romanian`: Romanian
   * 
   * - `Greek`: Greek
   * 
   * - `Czech`: Czech
   * 
   * - `Finnish`: Finnish
   * 
   * - `Hindi`: Hindi
   * 
   * - `auto`: Automatic detection
   * 
   * </details>
   * 
   * @example
   * Chinese
   */
  languageId?: string;
  /**
   * @remarks
   * Only MiniMax is supported. Valid values: `speech-01-turbo` and `speech-02-turbo`.
   * 
   * @example
   * speech-01-turbo
   */
  modelId?: string;
  /**
   * @remarks
   * The TTS pronunciation rules. You can specify a maximum of 20 rules in the array. The rules are executed in sequence.
   */
  pronunciationRules?: AIAgentOutboundCallConfigTtsConfigPronunciationRules[];
  /**
   * @remarks
   * This parameter is supported on all platforms. For CosyVoice, the default value is 1.0 and the valid values are 0.5 to 2.0. For MiniMax, the default value is 1.0 and the valid values are 0.5 to 2.0.
   * 
   * @example
   * 1.0
   */
  speechRate?: number;
  /**
   * @remarks
   * The voice ID. The change takes effect on the next sentence. If you do not specify this parameter, the voice ID configured in the AI agent template is used. This parameter is valid only for preset TTS voices. The value can be up to 64 characters in length. For more information about the valid values, see [Intelligent speech effect samples](https://help.aliyun.com/document_detail/449563.html).
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
   * @example
   * Low
   */
  eagerness?: string;
  /**
   * @remarks
   * The mode for conversational turn detection. Valid values:
   * 
   * - `Normal`: a basic mode that does not use AI for semantic analysis.
   * 
   * - `Semantic`: an AI-powered mode that determines whether the user has finished speaking based on the conversational context.
   * 
   * Default value: `Normal`.
   * 
   * @example
   * Semantic
   */
  mode?: string;
  /**
   * @remarks
   * The pause duration in AI mode that is used to determine whether a conversational turn has ended. Unit: ms. Default value: -1.
   * 
   * - `-1`: The AI automatically determines an appropriate wait time.
   * 
   * - `0-10000`: A custom wait time. We recommend that you set this parameter to a value from 0 to 1500.
   * 
   * Note: This parameter is invalid in Normal mode.
   * 
   * @example
   * -1
   */
  semanticWaitDuration?: number;
  /**
   * @remarks
   * The list of keywords that are used to determine the end of a user\\"s conversational turn.
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
   * The configurations for ambient sound.
   */
  ambientSoundConfig?: AIAgentOutboundCallConfigAmbientSoundConfig;
  /**
   * @remarks
   * The automatic speech recognition (ASR) configurations.
   */
  asrConfig?: AIAgentOutboundCallConfigAsrConfig;
  /**
   * @remarks
   * The configurations for the automatic speech module of the AI agent, which includes prompts during LLM delays and inquiries during prolonged user silence.
   */
  autoSpeechConfig?: AIAgentOutboundCallConfigAutoSpeechConfig;
  /**
   * @remarks
   * >Notice: 
   * 
   * This parameter is deprecated. Use `BackChannelingConfigs` instead.
   * 
   * @deprecated
   */
  backChannelingConfig?: AIAgentOutboundCallConfigBackChannelingConfig;
  /**
   * @remarks
   * The configurations for the back-channeling feature module. If you enable this feature, the system randomly plays short and affirmative phrases at specific trigger points.
   */
  backChannelingConfigs?: AIAgentOutboundCallConfigBackChannelingConfigs[];
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. If you enable this feature, short and consecutive speech segments from the user are merged into a complete sentence. Default value: `true`.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * The parameters for experimental features. If you have any requirements, contact technical support.
   * 
   * @example
   * ""
   */
  experimentalConfig?: string;
  /**
   * @remarks
   * The welcome message. This change takes effect in the next call session. If this parameter is not set, no welcome message is played.
   * 
   * @example
   * 你好
   */
  greeting?: string;
  /**
   * @remarks
   * The delay before the welcome message is played. Unit: ms. Default value: 0. Valid values: 0 to 5000.
   * 
   * @example
   * 0
   */
  greetingDelay?: number;
  /**
   * @remarks
   * The speech interruption policy configurations.
   */
  interruptConfig?: AIAgentOutboundCallConfigInterruptConfig;
  /**
   * @remarks
   * The configurations of the large language model (LLM).
   */
  llmConfig?: AIAgentOutboundCallConfigLlmConfig;
  /**
   * @remarks
   * The maximum wait time for interaction with the AI agent. If the wait time is exceeded, the AI agent goes offline. Unit: seconds. Default value: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * The text-to-speech (TTS) configurations.
   */
  ttsConfig?: AIAgentOutboundCallConfigTtsConfig;
  /**
   * @remarks
   * The configurations for conversational turn detection.
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

