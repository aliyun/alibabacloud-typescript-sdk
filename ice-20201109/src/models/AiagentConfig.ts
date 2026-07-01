// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AIAgentConfigAmbientSoundConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ambient sound resource. You can obtain this ID from the advanced settings of the agent configuration in the console.
   * 
   * @example
   * f67901c595834************
   */
  resourceId?: string;
  /**
   * @remarks
   * The volume of the ambient sound. Range: 0–100. A value of 0 disables the sound.
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
   * A list of hotwords to improve ASR accuracy. You can specify a maximum of 128 hotwords.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The language for ASR. Valid values:
   * 
   * - `zh_mandarin`: Chinese (Mandarin)
   * 
   * - `en`: English
   * 
   * - `zh_en`: Chinese-English mixed
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
   * The maximum duration of silence in milliseconds before the ASR engine finalizes an utterance. A pause longer than this value signals a sentence break. Range: 200–1200. Default: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * Passthrough parameters for proprietary ASR integrations.
   * 
   * @example
   * mode=fast&sample=16000&format=wav
   */
  customParams?: string;
  /**
   * @remarks
   * The minimum duration in milliseconds of continuous user speech required to trigger an interruption. This controls interruption sensitivity. A value of 0 disables this feature. Range: 200–2000. A common range is 200–500 ms, which typically corresponds to 1 to 4 Chinese characters. If omitted, this feature is disabled.
   * 
   * @example
   * 300
   */
  vadDuration?: number;
  /**
   * @remarks
   * The Voice Activity Detection (VAD) threshold for interruptions. Range: 0–11. Default: 11.
   * 
   * - `0`: Disables VAD.
   * 
   * - `1`–`10`: Sets the interruption sensitivity. A higher value makes the agent harder to interrupt.
   * 
   * - `11`: An enhanced mode with lower audio distortion and stronger noise resistance.
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

export class AIAgentConfigAutoSpeechConfigLlmPendingMessages extends $dara.Model {
  /**
   * @remarks
   * The probability of this message being selected. Range: 0–1, corresponding to 0%–100%.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The text of the prompt message, up to 100 characters.
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

export class AIAgentConfigAutoSpeechConfigLlmPending extends $dara.Model {
  /**
   * @remarks
   * A collection of prompt messages. A maximum of 10 messages are supported, each up to 100 characters. The sum of all probabilities must be 100%.
   */
  messages?: AIAgentConfigAutoSpeechConfigLlmPendingMessages[];
  /**
   * @remarks
   * The mode for handling LLM latency prompts. `random`: Plays a random message from the list. `sequence`: Plays messages in order. This is a required field.
   */
  mode?: string;
  /**
   * @remarks
   * The wait time threshold for LLM responses. If the threshold is exceeded, a prompt is played. This is a required field. Unit: ms. Range: 500–10000. Set this value based on the actual performance of your LLM.
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
      messages: { 'type': 'array', 'itemType': AIAgentConfigAutoSpeechConfigLlmPendingMessages },
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

export class AIAgentConfigAutoSpeechConfigUserIdleMessages extends $dara.Model {
  /**
   * @remarks
   * The probability of this message being selected. Range: 0–1, corresponding to 0%–100%.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The text of the prompt message, up to 100 characters.
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

export class AIAgentConfigAutoSpeechConfigUserIdle extends $dara.Model {
  /**
   * @remarks
   * A farewell message played before hanging up due to user inactivity.
   * 
   * @example
   * 我挂了，再见
   */
  hangupEndWord?: string;
  /**
   * @remarks
   * The maximum number of times the prompt can be repeated. Range: 0–10. This is a required field. If the limit is exceeded, the call is terminated.
   * 
   * @example
   * 5
   */
  maxRepeats?: number;
  /**
   * @remarks
   * A collection of prompt messages. A maximum of 10 messages are supported, each up to 100 characters. The sum of all probabilities must be 100%.
   */
  messages?: AIAgentConfigAutoSpeechConfigUserIdleMessages[];
  /**
   * @remarks
   * The silence duration threshold in milliseconds. If the user is silent for longer than this period, a prompt is triggered. Range: 5000–600000. This is a required field.
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
  /**
   * @remarks
   * Configuration for prompts to play during LLM response latency.
   */
  llmPending?: AIAgentConfigAutoSpeechConfigLlmPending;
  /**
   * @remarks
   * Configuration for prompts to play when the user is silent for an extended period.
   */
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
  /**
   * @remarks
   * 本短语的触发概率，范围 0.0–1.0，必填。
   * 
   * @example
   * 0.3
   */
  probability?: number;
  /**
   * @remarks
   * 短语文本，长度 ≤ 20 字符，支持多语言。必填。
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

export class AIAgentConfigBackChannelingConfig extends $dara.Model {
  /**
   * @remarks
   * 是否启用附和功能。必填，取值 true/false。
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * 功能触发概率。范围 0.0–1.0。必填。
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * 附和触发的时机。可选值：
   * 
   * - pause_detected（检测到说话短暂停顿）
   * 
   * @example
   * pause_detected
   */
  triggerStage?: string;
  /**
   * @remarks
   * 附和短语集合。最大 10 条，每条短语长度 ≤ 20 字符，概率总和为 1.0。
   */
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
  /**
   * @remarks
   * 本短语的触发概率，范围 0.0–1.0，必填。
   * 
   * @example
   * 0.3
   */
  probability?: number;
  /**
   * @remarks
   * 短语文本，长度 ≤ 20 字符，支持多语言。必填。
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

export class AIAgentConfigBackChannelingConfigs extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable this back-channeling rule. This is a required field.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The trigger probability. Range: 0.0–1.0. This is a required field.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The trigger for the back-channeling. Valid value:
   * 
   * - `pause_detected`: Triggered when a short pause in speech is detected.
   * 
   * @example
   * pause_detected
   */
  triggerStage?: string;
  /**
   * @remarks
   * A collection of acknowledgment phrases. You can specify a maximum of 10 phrases. Each phrase must be 20 characters or less, and the sum of their probabilities must be 1.0.
   */
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
   * Specifies whether to enable speech interruption. Default: `true`.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * A list of specific words or phrases that trigger an interruption.
   */
  interruptWords?: string[];
  /**
   * @remarks
   * Specifies whether to include the interrupt words in the text sent to the LLM. Default: `false` (words are discarded).
   * 
   * > For example, if "hold on" is an interrupt word and the user says "hold on, what is the weather like today?", setting this to `false` results in only "what is the weather like today?" being sent to the LLM.
   * 
   * @example
   * true
   */
  keepInterruptWordsForLLM?: boolean;
  /**
   * @remarks
   * Specifies how to handle user speech that occurs during a non-interruptible section of the agent\\"s utterance.
   * 
   * - `cache`: Caches the user\\"s speech and processes it in the next conversational turn.
   * 
   * - `discard`: Discards the user\\"s speech.
   * 
   * Default: `cache`.
   * 
   * @example
   * cache
   */
  noInterruptMode?: string;
  static names(): { [key: string]: string } {
    return {
      enableVoiceInterrupt: 'EnableVoiceInterrupt',
      interruptWords: 'InterruptWords',
      keepInterruptWordsForLLM: 'KeepInterruptWordsForLLM',
      noInterruptMode: 'NoInterruptMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class AIAgentConfigLlmConfigFunctionMap extends $dara.Model {
  /**
   * @remarks
   * The name of a built-in function provided by the AI agent system. Currently, only `hangup` is supported.
   * 
   * @example
   * hangup
   */
  function?: string;
  /**
   * @remarks
   * The name of the custom LLM function that maps to the agent\\"s built-in function. For details on the custom LLM protocol, see [LLM Standard Interface](https://help.aliyun.com/document_detail/2839094.html).
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
   * The text content of the message from this role.
   * 
   * @example
   * 你好
   */
  content?: string;
  /**
   * @remarks
   * The role of the participant in the conversation. Valid values:
   * 
   * - `user`
   * 
   * - `assistant`
   * 
   * - `system`
   * 
   * - `function`
   * 
   * - `plugin`
   * 
   * - `tool`
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
   * Parameters for Alibaba Cloud Model Studio, provided as a JSON string. For the parameter format, see
   * [Alibaba Cloud Model Studio Parameters](https://help.aliyun.com/document_detail/2858132.html)
   * 
   * @example
   * "{\\"biz_params\\":{\\"user_defined_params\\":{\\"your_plugin_id\\":{\\"article_index\\":2}}},\\"memory_id\\":\\"your_memory_id\\",\\"image_list\\":[\\"https://your_image_url\\"],\\"rag_options\\":{\\"pipeline_ids\\":[\\"your_id\\"],\\"file_ids\\":[\\"文档ID1\\",\\"文档ID2\\"],\\"metadata_filter\\":{\\"name\\":\\"张三\\"},\\"structured_filter\\":{\\"key1\\":\\"value1\\",\\"key2\\":\\"value2\\"},\\"tags\\":[\\"标签1\\",\\"标签2\\"]}}"
   */
  bailianAppParams?: string;
  /**
   * @remarks
   * Maps built-in agent functions to custom LLM functions. Currently, this only supports function calling for custom, OpenAI-compatible LLMs.
   */
  functionMap?: AIAgentConfigLlmConfigFunctionMap[];
  /**
   * @remarks
   * Specifies whether the LLM message history is synchronized with the content played by the TTS. Default: `false`. When enabled, the saved LLM messages match the content actually played by the TTS.
   * 
   * > When a user interrupts the agent, the `<ims_agent_interrupted>` tag is inserted into the message history at the point of interruption. This affects the next message sent to the LLM. For example:
   * 
   * ```
   * [
   *   {"role": "user", "content": "Tell me a story."},
   *   {"role": "assistant", "content": "Okay, I can tell you a story about the Three Kingdoms. Would you<ims_agent_interrupted> like that?"},
   *   {"role": "user", "content": "Tell me a different one."}
   * ]
   * ```
   * 
   * @example
   * false
   */
  historySyncWithTTS?: boolean;
  /**
   * @remarks
   * When set to `true`, the agent sends the entire LLM response in a single message after it is fully generated, rather than streaming it. This setting does not affect the streaming of subtitles.
   * 
   * @example
   * true
   */
  llmCompleteReply?: boolean;
  /**
   * @remarks
   * The conversation history context for the LLM/MLLM.
   */
  llmHistory?: AIAgentConfigLlmConfigLlmHistory[];
  /**
   * @remarks
   * The maximum number of recent conversational turns to include in the LLM/MLLM context. Default: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM after the call starts.
   * 
   * @example
   * 你是一位友好且乐于助人的助手，专注于为用户提供准确的信息和建议。
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * Additional query parameters for an OpenAI-compatible LLM. Parameters must be provided as a URL query string (e.g., `key1=value1&key2=value2`). All values must be strings.
   * 
   * @example
   * api-version=2024-02-01&api-key=sk-xxx
   */
  openAIExtraQuery?: string;
  /**
   * @remarks
   * The maximum delay in milliseconds before buffered text is sent to the TTS engine, even if `OutputMinLength` is not met. Range: 1000–10000. A value of `0` or omitting this parameter disables the delay limit. Default: Not set.
   * 
   * @example
   * 2000
   */
  outputMaxDelay?: number;
  /**
   * @remarks
   * The minimum number of characters in a text chunk before it is sent to the TTS engine. Shorter chunks are buffered. Range: 0–100. A value of `0` or omitting this parameter disables buffering. Default: Not set.
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
   * The replacement pronunciation. It must be 1 to 9 Chinese characters long and cannot contain spaces.
   * 
   * @example
   * 幺幺零
   */
  pronunciation?: string;
  /**
   * @remarks
   * The type of pronunciation rule.
   * Valid value:
   * 
   * - `replacement`: Replaces the specified `Word` with the `Pronunciation`.
   * 
   * @example
   * replacement
   */
  type?: string;
  /**
   * @remarks
   * The word to be replaced. It must be 1 to 9 Chinese characters long and cannot contain spaces.
   * 
   * @example
   * 一一零
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
   * This parameter applies only to the Minimax provider. Supported emotions include:
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
   * This parameter is for the minimax provider only. It enhances recognition for specific low-resource languages and dialects. If the language is unknown, set this to `auto` for automatic detection. By default, this parameter is not set. Supported values include:
   * 
   * <details>
   * 
   * <summary>
   * 
   * Supported languages
   * 
   * </summary>
   * 
   * - Chinese
   * 
   * - Chinese,Yue: Cantonese
   * 
   * - English
   * 
   * - Arabic
   * 
   * - Russian
   * 
   * - Spanish
   * 
   * - French
   * 
   * - Portuguese
   * 
   * - German
   * 
   * - Turkish
   * 
   * - Dutch
   * 
   * - Ukrainian
   * 
   * - Vietnamese
   * 
   * - Indonesian
   * 
   * - Japanese
   * 
   * - Italian
   * 
   * - Korean
   * 
   * - Thai
   * 
   * - Polish
   * 
   * - Romanian
   * 
   * - Greek
   * 
   * - Czech
   * 
   * - Finnish
   * 
   * - Hindi
   * 
   * - auto
   * 
   * </details>
   * 
   * @example
   * Chinese
   */
  languageId?: string;
  /**
   * @remarks
   * This parameter applies only to the Minimax provider. Valid values:
   * `speech-01-turbo`, `speech-02-turbo`
   * 
   * @example
   * speech-01-turbo
   */
  modelId?: string;
  /**
   * @remarks
   * A list of TTS pronunciation rules, executed in order. You can specify a maximum of 20 rules.
   */
  pronunciationRules?: AIAgentConfigTtsConfigPronunciationRules[];
  /**
   * @remarks
   * The speech rate, where a value of 1.0 is normal speed. The supported range can vary by provider. For CosyVoice, the range is 0.5 to 2.0 (default: 1.0). For Minimax, the range is 0.5 to 2.0 (default: 1.0).
   * 
   * @example
   * 1.0
   */
  speechRate?: number;
  /**
   * @remarks
   * The ID of the preset TTS voice. Changes apply to the next utterance. If omitted, the voice from the AI agent template is used. The ID can be a maximum of 64 characters. For available voices, see [Intelligent Voice Samples](https://help.aliyun.com/document_detail/449563.html).
   * 
   * @example
   * longcheng_v2
   */
  voiceId?: string;
  /**
   * @remarks
   * A list of available voices.
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
  /**
   * @remarks
   * Controls the agent\\"s response speed after detecting a user pause. This parameter applies only in `Semantic` mode. A higher setting results in a faster response but increases the risk of interrupting the user:
   * 
   * - `Low`: Waits patiently with a maximum wait time of 6 seconds, reducing the risk of interruption.
   * 
   * - `Medium`: A balanced wait time (up to 4 seconds), suitable for most scenarios.
   * 
   * - `High`: Responds quickly (up to 2 seconds), which improves speed but may increase the risk of incorrect turn-taking.
   * 
   * This field is empty by default.
   * 
   * @example
   * High
   */
  eagerness?: string;
  /**
   * @remarks
   * The conversational turn detection mode.
   * 
   * - `Normal` (Default): The agent relies on pauses to detect the end of a user\\"s turn.
   * 
   * - `Semantic`: The agent uses AI to analyze conversational context to determine if the user has finished speaking.
   * 
   * @example
   * Semantic
   */
  mode?: string;
  /**
   * @remarks
   * The pause detection time in AI mode, in milliseconds. Default: -1.
   * 
   * - -1: The AI automatically determines a suitable wait time.
   * 
   * - 0–10000: A custom wait time. A range of 0–1500 ms is recommended.
   * 
   * > This parameter has no effect in `Normal` mode.
   * 
   * @example
   * -1
   */
  semanticWaitDuration?: number;
  /**
   * @remarks
   * A list of keywords used to determine the end of a user\\"s conversational turn.
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
   * Specifies whether to enable device identification. Default: `false`.
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
   * Specifies whether to enable head motion detection. Default: `false`.
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
   * The duration in milliseconds that an invalid frame must persist before a notification is sent. If not specified, the setting from the console is used. Range: 200–5000.
   * 
   * @example
   * 3000
   */
  callbackDelay?: number;
  /**
   * @remarks
   * Specifies whether to enable invalid frame detection.
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
   * Specifies whether to enable look-away detection. Default: `false`.
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
   * Specifies whether to enable people counting. Default: `false`.
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
   * The duration in milliseconds that a frame must remain still before a notification is sent. If not specified, the setting from the console is used. Range: 200–5000.
   * 
   * @example
   * 3000
   */
  callbackDelay?: number;
  /**
   * @remarks
   * Specifies whether to enable still frame detection. Default: `false`.
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
   * Configuration for invalid frame detection.
   */
  invalidFrameMotion?: AIAgentConfigVcrConfigInvalidFrameMotion;
  /**
   * @remarks
   * Configuration for look-away detection.
   */
  lookAway?: AIAgentConfigVcrConfigLookAway;
  /**
   * @remarks
   * Configuration for the people counting feature.
   */
  peopleCount?: AIAgentConfigVcrConfigPeopleCount;
  /**
   * @remarks
   * Configuration for still frame detection.
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
  /**
   * @remarks
   * The voiceprint registration mode. Default: `Explicit`.
   * 
   * | Value      | Description                                                                                                         |
   * | ---------- | ------------------------------------------------------------------------------------------------------------------- |
   * | `Explicit` | In `Explicit` mode, the user must register their voiceprint in advance by using the voiceprint registration API.    |
   * | `Implicit` | In `Implicit` mode, the system automatically collects user speech during the conversation to register a voiceprint. |
   * 
   * @example
   * Explicit
   */
  registrationMode?: string;
  /**
   * @remarks
   * Specifies whether to enable voiceprint recognition. Default: `false`. If set to `true`, you must also provide a valid `VoiceprintId`.
   * 
   * @example
   * false
   */
  useVoiceprint?: boolean;
  /**
   * @remarks
   * The unique identifier for the voiceprint. This is not set by default. The ID must correspond to a voiceprint registered using the voiceprint registration API. For more information, see [Register a voiceprint](https://help.aliyun.com/document_detail/2964738.html).
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
   * Configuration for ambient sound during the call.
   */
  ambientSoundConfig?: AIAgentConfigAmbientSoundConfig;
  /**
   * @remarks
   * Configuration for automatic speech recognition (ASR).
   */
  asrConfig?: AIAgentConfigAsrConfig;
  /**
   * @remarks
   * Configuration for the agent\\"s automatic speech, including prompts for LLM latency and long periods of user silence.
   */
  autoSpeechConfig?: AIAgentConfigAutoSpeechConfig;
  /**
   * @remarks
   * Configuration for the avatar. This takes effect only if the workflow includes an avatar node.
   */
  avatarConfig?: AIAgentConfigAvatarConfig;
  /**
   * @remarks
   * The URL of the avatar to display during voice calls. If omitted, no avatar is displayed.
   * 
   * @example
   * http://example.com/a.jpg
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The type of the avatar URL. By default, this parameter is not set.
   * 
   * @example
   * USER
   */
  avatarUrlType?: string;
  /**
   * @remarks
   * >Notice: 
   * 
   * 已废弃，请使用 BackChannelingConfigs
   * 
   * @deprecated
   */
  backChannelingConfig?: AIAgentConfigBackChannelingConfig[];
  /**
   * @remarks
   * Configuration for back-channeling. When enabled, the system plays short, responsive phrases at specific trigger points.
   */
  backChannelingConfigs?: AIAgentConfigBackChannelingConfigs[];
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. When enabled, short user utterances are merged into a single sentence. Default: `true`.
   * 
   * @example
   * true
   */
  enableIntelligentSegment?: boolean;
  /**
   * @remarks
   * Specifies whether to enable push-to-talk mode. Default: `false`.
   * 
   * @example
   * false
   */
  enablePushToTalk?: boolean;
  /**
   * @remarks
   * Parameters for experimental features. Contact support for assistance.
   * 
   * @example
   * ""
   */
  experimentalConfig?: string;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown. Default: `false`.
   * 
   * If enabled, the AI agent completes its current utterance before disconnecting when the task is stopped. The agent will not speak for more than 10 seconds.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The welcome message the AI agent plays when joining the session. Changes apply to subsequent sessions. If omitted, no welcome message is played.
   * 
   * @example
   * 你好
   */
  greeting?: string;
  /**
   * @remarks
   * Configuration for the speech interruption policy.
   */
  interruptConfig?: AIAgentConfigInterruptConfig;
  /**
   * @remarks
   * Configuration for the large language model (LLM).
   */
  llmConfig?: AIAgentConfigLlmConfig;
  /**
   * @remarks
   * The maximum idle duration in seconds before the AI agent disconnects. If the agent receives no user interaction within this period, it ends the task. Default: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * Configuration for text-to-speech (TTS).
   */
  ttsConfig?: AIAgentConfigTtsConfig;
  /**
   * @remarks
   * Configuration for conversational turn detection.
   */
  turnDetectionConfig?: AIAgentConfigTurnDetectionConfig;
  /**
   * @remarks
   * The duration in seconds the AI agent waits before terminating the task after a user leaves the session. Default: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The duration in seconds the AI agent waits for a user to join. If the user does not join within this time, the agent terminates the task. Default: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  /**
   * @remarks
   * Configuration for video content recognition. This enables the system to send callbacks to the client about events detected in the video stream.
   */
  vcrConfig?: AIAgentConfigVcrConfig;
  /**
   * @remarks
   * Configuration for voiceprint recognition.
   */
  voiceprintConfig?: AIAgentConfigVoiceprintConfig;
  /**
   * @remarks
   * The speaking volume of the AI agent.
   * 
   * - If not set, the adaptive volume mode recommended by Alibaba Cloud is used by default.
   * 
   * - If set, the value must be in the range of 0 to 400. The final output volume is calculated as: `(Workflow volume) * (volume / 100)`. For example:
   * 
   * 1. If `volume` is 0, the output volume is 0.
   * 
   * 2. If `volume` is 100, the output volume is the same as the original volume.
   * 
   * 3. If `volume` is 200, the output volume is twice the original volume.
   * 
   * @example
   * 100
   */
  volume?: number;
  /**
   * @remarks
   * A user-provided command that the AI agent responds to immediately after the call starts.
   * 
   * @example
   * 今天天气怎么样？
   */
  wakeUpQuery?: string;
  /**
   * @remarks
   * A JSON string containing parameters to override the default workflow configuration.
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

