// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AIAgentConfigAmbientSoundConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the call ambient sound. You can obtain the ID from the advanced settings of the agent configuration in the console.
   * 
   * @example
   * f67901c595834************
   */
  resourceId?: string;
  /**
   * @remarks
   * The volume of the call background sound. Valid values: 0 to 100. A value of 0 indicates that the background sound is disabled.
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
   * The ASR context enhancement.
   * 
   * @example
   * [{"role":"user","content":[{"type":"input_text","text":"Alibaba Cloud, Qwen, Qwen-Audio"}]},{"role":"assistant","content":[{"type":"text","text":"Okay, I will incorporate these terms into our conversation."}]}]
   */
  asrContext?: string;
  /**
   * @remarks
   * The ASR hotword list. The list supports a maximum of 128 hotwords.
   */
  asrHotWords?: string[];
  /**
   * @remarks
   * The ASR language ID. Valid values:
   * - zh_mandarin: Chinese.
   * - en: English.
   * - zh_en: Mixed Chinese and English.
   * - es: Spanish.
   * - jp: Japanese.
   * 
   * @example
   * zh_mandarin
   */
  asrLanguageId?: string;
  /**
   * @remarks
   * The threshold for speech segmentation detection. If the silence duration exceeds this threshold, the speech is considered segmented. Valid values: 200 to 1200. Unit: milliseconds. Default value: 400.
   * 
   * @example
   * 400
   */
  asrMaxSilence?: number;
  /**
   * @remarks
   * The instance-level real-time hotwords and their weights for ASR.
   * 
   * @example
   * {"Qwen":4,"Qwen-Audio":5,"Alibaba Cloud Speech Lab":50}
   */
  asrVocabulary?: string;
  /**
   * @remarks
   * The pass-through parameters for custom ASR integration.
   * 
   * @example
   * mode=fast&sample=16000&format=wav
   */
  customParams?: string;
  /**
   * @remarks
   * The minimum duration threshold for voice activity detection (VAD), which is used to control the sensitivity of interruptions. A value of 0 indicates that this feature is disabled. Valid values: 200 to 2000. Unit: milliseconds. Common values range from 200 to 500, which correspond to 1 to 4 words. Default value: null. If this parameter is left empty, this feature does not take effect.
   * 
   * @example
   * 300
   */
  vadDuration?: number;
  /**
   * @remarks
   * The interruption threshold parameter. Valid values: 0 to 11. Default value: 11.
   * - 0: Disables the VAD feature.
   * - 1 to 10: A larger value indicates that it is more difficult to trigger an interruption.
   * - 11: Significantly different from previous values. It causes less damage to the pre-processed conversation audio and provides stronger anti-interference capability.
   * 
   * @example
   * 11
   */
  vadLevel?: number;
  static names(): { [key: string]: string } {
    return {
      asrContext: 'AsrContext',
      asrHotWords: 'AsrHotWords',
      asrLanguageId: 'AsrLanguageId',
      asrMaxSilence: 'AsrMaxSilence',
      asrVocabulary: 'AsrVocabulary',
      customParams: 'CustomParams',
      vadDuration: 'VadDuration',
      vadLevel: 'VadLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrContext: 'string',
      asrHotWords: { 'type': 'array', 'itemType': 'string' },
      asrLanguageId: 'string',
      asrMaxSilence: 'number',
      asrVocabulary: 'string',
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
   * The selection probability of the prompt. Valid values: 0 to 1, which correspond to 0% to 100%.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The text of the inquiry prompt. Maximum length: 100 characters.
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

export class AIAgentConfigAutoSpeechConfigLlmPending extends $dara.Model {
  /**
   * @remarks
   * The collection of inquiry prompts. A maximum of 10 prompts are supported. Each prompt can be up to 100 characters in length. The sum of probabilities must be 100%.
   */
  messages?: AIAgentConfigAutoSpeechConfigLlmPendingMessages[];
  /**
   * @remarks
   * The mode for selecting the soothing prompt from LlmPending.Messages to broadcast while waiting for the agent to reply. Valid values:
   * - ai_select: The AI selects the most appropriate prompt from Messages based on the current conversation. This mode does not check whether the sum of Probability values is 1, but WaitTime cannot be less than 800 milliseconds. This is the default value.
   * - probability: A prompt is randomly selected based on the Probability weight of each prompt. The sum of all Probability values must be exactly 1.0.
   * 
   * @example
   * ai_select
   */
  mode?: string;
  /**
   * @remarks
   * The threshold for the waiting time for a response from the large language model (LLM). If the waiting time exceeds this threshold, a broadcast prompt is triggered. This parameter is required. Valid values: 500 to 10000. Unit: milliseconds. Set this parameter based on the actual usage of the LLM.
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
   * The selection probability of the prompt. Valid values: 0 to 1, which correspond to 0% to 100%.
   * 
   * @example
   * 0.5
   */
  probability?: number;
  /**
   * @remarks
   * The text of the inquiry prompt. Maximum length: 100 characters.
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

export class AIAgentConfigAutoSpeechConfigUserIdle extends $dara.Model {
  /**
   * @remarks
   * The hang-up closing remark. It is broadcast before the call is hung up after a prolonged period of user unresponsiveness. Maximum length: 200 characters.
   * 
   * @example
   * I\\"m hanging up, bye
   */
  hangupEndWord?: string;
  /**
   * @remarks
   * The maximum number of inquiries. Valid values: 0 to 10. This parameter is required. If the number of inquiries exceeds this value, no more inquiries are triggered and the call is directly closed.
   * 
   * @example
   * 5
   */
  maxRepeats?: number;
  /**
   * @remarks
   * The collection of inquiry prompts. A maximum of 10 prompts are supported. Each prompt can be up to 100 characters in length. The sum of probabilities must be 100%.
   */
  messages?: AIAgentConfigAutoSpeechConfigUserIdleMessages[];
  /**
   * @remarks
   * The silence duration threshold. This parameter is required. If the silence duration exceeds this threshold, an inquiry is triggered. Valid values: 5000 to 600000. Unit: milliseconds.
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
   * The broadcast configuration for LLM response delays.
   */
  llmPending?: AIAgentConfigAutoSpeechConfigLlmPending;
  /**
   * @remarks
   * The broadcast configuration for inquiries during prolonged user silence.
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
   * The model ID of the digital human.
   * 
   * @example
   * 5257
   */
  avatarId?: string;
  /**
   * @remarks
   * The resolution of the digital human video stream. The value must be in strictly lowercase letters and must be specified together with AvatarId. Valid values:
   * - 360p
   * - 480p
   * - 720p
   * - 1080p
   * 
   * @example
   * 1080p
   */
  resolution?: string;
  /**
   * @remarks
   * The ID of the digital human template, which specifies the template used when the digital human is started. The template is provided by the digital human service provider, and the provider also verifies whether the specified value is valid.
   * 
   * @example
   * tpl-9527
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      avatarId: 'AvatarId',
      resolution: 'Resolution',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarId: 'string',
      resolution: 'string',
      templateId: 'string',
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
   * The trigger probability of the phrase. Valid values: 0.0 to 1.0. This parameter is required.
   * 
   * @example
   * 0.3
   */
  probability?: number;
  /**
   * @remarks
   * The text of the phrase. Maximum length: 20 characters. Multiple languages are supported. This parameter is required.
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

export class AIAgentConfigBackChannelingConfig extends $dara.Model {
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
   * The trigger stage for backchanneling. Valid values:
   * - pause_detected: A short pause in speech is detected.
   * 
   * @example
   * pause_detected
   */
  triggerStage?: string;
  /**
   * @remarks
   * The collection of backchanneling phrases. A maximum of 10 phrases are supported. Each phrase can be up to 20 characters in length. The sum of probabilities must be 1.0.
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
   * The trigger probability of the phrase. Valid values: 0.0 to 1.0. This parameter is required.
   * 
   * @example
   * 0.3
   */
  probability?: number;
  /**
   * @remarks
   * The text of the phrase. Maximum length: 20 characters. Multiple languages are supported. This parameter is required.
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

export class AIAgentConfigBackChannelingConfigs extends $dara.Model {
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
   * The trigger stage for backchanneling. Valid values:
   * - pause_detected: A short pause in speech is detected.
   * 
   * @example
   * pause_detected
   */
  triggerStage?: string;
  /**
   * @remarks
   * The collection of backchanneling phrases. A maximum of 10 phrases are supported. Each phrase can be up to 20 characters in length. The sum of probabilities must be 1.0.
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
   * Specifies whether to support speech interruption. Default value: true.
   * 
   * @example
   * true
   */
  enableVoiceInterrupt?: boolean;
  /**
   * @remarks
   * The list of specific words or phrases that trigger conversation interruption.
   */
  interruptWords?: string[];
  /**
   * @remarks
   * Specifies whether to retain interrupt words when sending messages to the LLM. By default, interrupt words are discarded.
   * For example, if the interrupt word is "wait", the message "wait how is the weather today" is changed to "how is the weather today" after the interrupt word is discarded.
   * 
   * @example
   * true
   */
  keepInterruptWordsForLLM?: boolean;
  /**
   * @remarks
   * The ASR processing policy in No Interrupting mode. Valid values:
   * - cache: Caches the ASR text. After the current turn ends, the cached ASR text is processed together in the next turn.
   * - discard: Directly discards the ASR text.
   * Default value: cache.
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
   * The name of the built-in feature provided by the Alibaba Cloud agent system. Currently, only hangup is supported.
   * 
   * @example
   * hangup
   */
  function?: string;
  /**
   * @remarks
   * The name of the LLM function that corresponds to the feature. This name is customized by the user and is used to call the corresponding feature in the LLM. For more information about the user-defined LLM protocol, see [Standard LLM API](https://help.aliyun.com/document_detail/2839094.html).
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
   * The actual text of the conversation content, which records the specific expression or response of the role in the conversation.
   * 
   * @example
   * hello
   */
  content?: string;
  /**
   * @remarks
   * The role of the conversation participant. Valid values:
   * - user: User.
   * - assistant: Assistant.
   * - system: System.
   * - function: Function.
   * - plugin: Plugin.
   * - tool: Tool.
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
   * The parameters for Alibaba Cloud Model Studio. The value must be a JSON string. For more information about the parameter format, see [Alibaba Cloud Model Studio parameters](https://help.aliyun.com/document_detail/2858132.html).
   * 
   * @example
   * "{\\"biz_params\\":{\\"user_defined_params\\":{\\"your_plugin_id\\":{\\"article_index\\":2}}},\\"memory_id\\":\\"your_memory_id\\",\\"image_list\\":[\\"https://your_image_url\\"],\\"rag_options\\":{\\"pipeline_ids\\":[\\"your_id\\"],\\"file_ids\\":[\\"DocumentID1\\",\\"DocumentID2\\"],\\"metadata_filter\\":{\\"name\\":\\"ZhangSan\\"},\\"structured_filter\\":{\\"key1\\":\\"value1\\",\\"key2\\":\\"value2\\"},\\"tags\\":[\\"Tag1\\",\\"Tag2\\"]}}"
   */
  bailianAppParams?: string;
  /**
   * @remarks
   * The function mapping list, which is used to map agent capabilities to LLM functions. Currently, only function calling with user-defined LLMs that use the OpenAI protocol is supported.
   */
  functionMap?: AIAgentConfigLlmConfigFunctionMap[];
  /**
   * @remarks
   * Specifies whether to keep the LLM message history consistent with the text-to-speech (TTS) playback content. Default value: false. After this feature is enabled, the saved LLM messages are kept consistent with the TTS playback content.
   * When the user interrupts the agent in the LLM message history, the `<ims_agent_interrupted>` tag is inserted at the interruption position in the next message sent to the LLM. Example:
   * ```
   * [
   *   {"role": "user", "content": "Tell me a story."},
   *   {"role": "assistant", "content": "Okay, let me tell you a story about Romance of the Three Kingdoms. Do<ims_agent_interrupted> you want to listen?"},
   *   {"role": "user", "content": "Tell me another one."}
   * ]
   * ```
   * 
   * @example
   * false
   */
  historySyncWithTTS?: boolean;
  /**
   * @remarks
   * Specifies whether to send the complete LLM result to the client after the LLM generates the complete response. This switch does not affect the streaming generation of subtitles.
   * 
   * @example
   * true
   */
  llmCompleteReply?: boolean;
  /**
   * @remarks
   * The historical conversation context of the LLM or multimodal LLM.
   */
  llmHistory?: AIAgentConfigLlmConfigLlmHistory[];
  /**
   * @remarks
   * The maximum number of retained turns for the historical conversation context of the LLM or multimodal LLM. Default value: 10.
   * 
   * @example
   * 10
   */
  llmHistoryLimit?: number;
  /**
   * @remarks
   * The system prompt for the LLM after the call is started.
   * 
   * @example
   * You are the 1 friendly and helpful assistant, focused on providing accurate information and advice to users.
   */
  llmSystemPrompt?: string;
  /**
   * @remarks
   * The extra query parameters for the OpenAI-compatible LLM. Parameters must be in the key=value format. Multiple parameters are connected by an ampersand (&). All values must be of the string type.
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
  outputMaxDelay?: number;
  /**
   * @remarks
   * The minimum length of text output in characters. Text shorter than this length is cached and concatenated. Valid values: 0 to 100. A value of 0 or empty indicates no limit. Default value: empty.
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

export class AIAgentConfigTransferCallConfig extends $dara.Model {
  /**
   * @remarks
   * The default transfer number. This is a backup number. You must still explicitly pass the called number when you initiate a transfer call.
   * 
   * @example
   * 0571xxxxxxx
   */
  calledNumber?: string;
  /**
   * @remarks
   * The caller number used for transfer calls. Configuring this field enables the RTC transfer capability. If this field is not configured, the behavior remains unchanged.
   * 
   * @example
   * 0571xxxxxxx
   */
  callerNumber?: string;
  /**
   * @remarks
   * Specifies whether to perform real-time speech recognition for both parties (the RTC user and the transferred phone party) after the transfer is connected. When enabled, the recognition results are pushed to the client as subtitles through the RTC message channel and written to the call record. Valid values:
   * * true: Enabled. This is the default value.
   * * false: Disabled. Subtitles and call records are not generated during the transfer.
   * 
   * @example
   * false
   */
  forwardTranscriptionEnabled?: boolean;
  /**
   * @remarks
   * The custom SIP outbound gateway address. This parameter is required only when Type is set to 1.
   * 
   * @example
   * sip.example.com:5060
   */
  sipDomain?: string;
  /**
   * @remarks
   * Valid values:
   * * 0: Alibaba Cloud communication line. This is the default value.
   * * 1: Custom SIP line.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      forwardTranscriptionEnabled: 'ForwardTranscriptionEnabled',
      sipDomain: 'SipDomain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callerNumber: 'string',
      forwardTranscriptionEnabled: 'boolean',
      sipDomain: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIAgentConfigTtsConfigPronunciationRules extends $dara.Model {
  /**
   * @remarks
   * The target pronunciation. The length must be less than 10 characters. It must consist of Chinese characters and cannot contain spaces.
   * 
   * @example
   * 110
   */
  pronunciation?: string;
  /**
   * @remarks
   * The specific pronunciation rule type. Valid values:
   * - replacement: A rule that directly replaces Word with Pronunciation.
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
   * 110
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
   * The emotion of the voice. Currently, only MiniMax is supported. MiniMax supports the following seven emotions:
   * - happy: Happy
   * - sad: Sad
   * - angry: Angry
   * - fearful: Fearful
   * - disgusted: Disgusted
   * - surprised: Surprised
   * - calm: Calm
   * 
   * @example
   * happy
   */
  emotion?: string;
  /**
   * @remarks
   * The TTS pronunciation correction and text replacement configuration.
   * 
   * @example
   * {"pronunciation":[{"weather":"tian1 qi4"}],"replace":[{"today":"golden day"}]}
   */
  hotFix?: string;
  /**
   * @remarks
   * The natural language instruction control for TTS.
   * 
   * @example
   * Please use a gentle and friendly female voice, and broadcast at a slightly slower speed
   */
  instruction?: string;
  /**
   * @remarks
   * The language ID. Currently, only MiniMax is supported. Default value: empty. This parameter enhances the recognition capability for specified minority languages and dialects. Setting this parameter improves the voice performance in the specified minority language or dialect scenarios. If the minority language type is not specified, you can set this parameter to auto, and the model automatically determines the language type. Valid values:
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
   * The model ID. Currently, only MiniMax is supported. Valid values:
   * speech-01-turbo and speech-02-turbo.
   * 
   * @example
   * speech-01-turbo
   */
  modelId?: string;
  /**
   * @remarks
   * The TTS pronunciation rules. The array length cannot exceed 20. The rules are executed in sequence.
   */
  pronunciationRules?: AIAgentConfigTtsConfigPronunciationRules[];
  /**
   * @remarks
   * The speech rate. This parameter is supported on all platforms.
   * For CosyVoice, the default value is 1.0, and the valid values range from 0.5 to 2.0.
   * For MiniMax, the default value is 1.0, and the valid values range from 0.5 to 2.0.
   * 
   * @example
   * 1.0
   */
  speechRate?: number;
  /**
   * @remarks
   * The voice ID. Modifications take effect in the next sentence. If you do not specify this parameter, the voice ID configured in the agent template is used. This parameter takes effect only for preset TTS. The input length cannot exceed 64 characters. For valid values, refer to [Intelligent speech effect examples](https://help.aliyun.com/document_detail/449563.html).
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
      hotFix: 'HotFix',
      instruction: 'Instruction',
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
      hotFix: 'string',
      instruction: 'string',
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
   * The eagerness level. This parameter takes effect only in Semantic mode. It controls how quickly the AI starts to respond after detecting a pause:
   * - Low: Patient waiting. The maximum wait time is 6 seconds, which reduces the risk of being interrupted.
   * - Medium: Balanced waiting. The maximum wait time is 4 seconds, which is suitable for most scenarios.
   * - High: Fast response. The maximum wait time is 2 seconds, which improves speed but may increase the risk of false cut-offs.
   * Default value: empty.
   * 
   * @example
   * High
   */
  eagerness?: string;
  /**
   * @remarks
   * The turn detection mode. Valid values:
   * - Normal: Normal mode. AI is not used to determine semantics. This is the default value.
   * - Semantic: Semantic mode. AI is used to determine whether the user has finished speaking based on the context semantics.
   * 
   * @example
   * Semantic
   */
  mode?: string;
  /**
   * @remarks
   * The pause determination time in AI mode. Unit: milliseconds. Default value: -1. Valid values:
   * - -1: The AI automatically determines the appropriate wait time.
   * - 0 to 10000: A custom wait time. We recommend that you set this value to 0 to 1500 milliseconds.
   * > This parameter is invalid in Normal mode.
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

export class AIAgentConfigVcrConfigEquipment extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the disabled equipment check. Default value: false.
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
   * Specifies whether to enable the head motion recognition check. Default value: false.
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
   * The delay for the invalid frame check notification. After this parameter is set, the notification is triggered after a static frame lasts for a specified period of time. Unit: milliseconds. Default value: empty. If this parameter is empty, the configuration in the console is used during the call. Valid values: 200 to 5000.
   * 
   * @example
   * 3000
   */
  callbackDelay?: number;
  /**
   * @remarks
   * Specifies whether to enable the invalid frame check.
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
   * Specifies whether to enable the look-away recognition configuration. Default value: false.
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
   * The switch for the people counting feature. Default value: false.
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
   * The delay for the still frame check notification. After this parameter is set, the notification is triggered after a still frame lasts for a specified period of time. Unit: milliseconds. Default value: empty. If this parameter is empty, the configuration in the console is used during the call. Valid values: 200 to 5000.
   * 
   * @example
   * 3000
   */
  callbackDelay?: number;
  /**
   * @remarks
   * Specifies whether to enable the still frame check. Default value: false.
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
   * The equipment recognition configuration.
   */
  equipment?: AIAgentConfigVcrConfigEquipment;
  /**
   * @remarks
   * The head motion recognition configuration.
   */
  headMotion?: AIAgentConfigVcrConfigHeadMotion;
  /**
   * @remarks
   * The parameter settings for the invalid frame check.
   */
  invalidFrameMotion?: AIAgentConfigVcrConfigInvalidFrameMotion;
  /**
   * @remarks
   * The look-away recognition configuration.
   */
  lookAway?: AIAgentConfigVcrConfigLookAway;
  /**
   * @remarks
   * The configuration for the people counting feature.
   */
  peopleCount?: AIAgentConfigVcrConfigPeopleCount;
  /**
   * @remarks
   * The configuration for the still frame detection.
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
   * The voiceprint registration mode. Default value: Explicit.
   * | Value | Description |
   * |---|---|
   * | Explicit | Explicit registration mode. Users must upload audio through the voiceprint registration API operation in advance to complete the registration. |
   * | Implicit | Implicit registration mode. The system automatically collects the user\\"s voice and generates voiceprint features during the conversation. |
   * 
   * @example
   * Explicit
   */
  registrationMode?: string;
  /**
   * @remarks
   * Specifies whether to use voiceprint recognition. Default value: false. When voiceprint recognition is enabled, a valid voiceprint ID must be passed.
   * 
   * @example
   * false
   */
  useVoiceprint?: boolean;
  /**
   * @remarks
   * The unique identity ID for voiceprint recognition. Default value: empty. The passed voiceprint ID must be registered through the voiceprint registration API operation. For more information about the API operation, refer to [Register human voiceprint](https://help.aliyun.com/document_detail/2964738.html).
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
   * The call ambient sound configuration.
   */
  ambientSoundConfig?: AIAgentConfigAmbientSoundConfig;
  /**
   * @remarks
   * The speech recognition configuration.
   */
  asrConfig?: AIAgentConfigAsrConfig;
  /**
   * @remarks
   * The automatic speech configuration module for the agent, which includes prompts for LLM response delays and inquiries during prolonged user silence.
   */
  autoSpeechConfig?: AIAgentConfigAutoSpeechConfig;
  /**
   * @remarks
   * The digital human configuration. This configuration takes effect only when the workflow includes a digital human node.
   */
  avatarConfig?: AIAgentConfigAvatarConfig;
  /**
   * @remarks
   * The URL of the agent avatar for voice calls. Default value: none.
   * 
   * @example
   * http://example.com/a.jpg
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The URL type of the agent avatar. Default value: none.
   * 
   * @example
   * USER
   */
  avatarUrlType?: string;
  /**
   * @remarks
   * **[Deprecated]** Use BackChannelingConfigs instead.
   * 
   * @deprecated
   */
  backChannelingConfig?: AIAgentConfigBackChannelingConfig[];
  /**
   * @remarks
   * The backchanneling feature configuration module. After this feature is enabled, the system randomly broadcasts short backchanneling phrases at specific trigger stages.
   */
  backChannelingConfigs?: AIAgentConfigBackChannelingConfigs[];
  /**
   * @remarks
   * Specifies whether to enable intelligent segmentation. After intelligent segmentation is enabled, segmented speech from the user is intelligently merged into a single sentence. Default value: true.
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
   * The experimental feature parameters. Contact technical support if you have any requirements.
   * 
   * @example
   * ""
   */
  experimentalConfig?: string;
  /**
   * @remarks
   * Specifies whether to enable graceful shutdown. Default value: false.
   * Graceful shutdown: When the agent is stopped, it finishes broadcasting the current speech before shutting down. The maximum broadcast duration is 10 seconds.
   * 
   * @example
   * false
   */
  gracefulShutdown?: boolean;
  /**
   * @remarks
   * The greeting. Modifications take effect the next time the user joins the call. Default value: none.
   * 
   * @example
   * hello
   */
  greeting?: string;
  /**
   * @remarks
   * The speech interruption policy configuration.
   */
  interruptConfig?: AIAgentConfigInterruptConfig;
  /**
   * @remarks
   * The large language model (LLM) configuration.
   */
  llmConfig?: AIAgentConfigLlmConfig;
  /**
   * @remarks
   * The maximum wait time without interaction with the agent. If this time is exceeded, the agent goes offline. Unit: seconds. Default value: 600.
   * 
   * @example
   * 600
   */
  maxIdleTime?: number;
  /**
   * @remarks
   * The configuration for Real-Time Communication (RTC) call transfer. When you call ForwardAIAgentCall to transfer an RTC call (CallMode=0) to a regular phone, use this configuration to specify the line and the caller number.
   * Transfer is available only if CallerNumber is configured. If it is not configured, a 400 error is returned when you call the transfer API operation.
   * This configuration is read only once when the instance starts. Modifications during a call do not take effect.
   * This configuration does not apply to inbound and outbound call transfers. Use InboundCallConfig and OutboundCallConfig instead.
   */
  transferCallConfig?: AIAgentConfigTransferCallConfig;
  /**
   * @remarks
   * The speech synthesis configuration.
   */
  ttsConfig?: AIAgentConfigTtsConfig;
  /**
   * @remarks
   * The turn detection configuration.
   */
  turnDetectionConfig?: AIAgentConfigTurnDetectionConfig;
  /**
   * @remarks
   * The timeout period for the agent to close the task after the user leaves the meeting. Unit: seconds. Default value: 5.
   * 
   * @example
   * 5
   */
  userOfflineTimeout?: number;
  /**
   * @remarks
   * The timeout period for the agent to close the task if the user does not join the meeting. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  userOnlineTimeout?: number;
  /**
   * @remarks
   * The configuration for the video content recognition feature. This feature supports calling back the content recognized by the algorithm in the video to the client.
   */
  vcrConfig?: AIAgentConfigVcrConfig;
  /**
   * @remarks
   * The voiceprint configuration.
   */
  voiceprintConfig?: AIAgentConfigVoiceprintConfig;
  /**
   * @remarks
   * The volume of the agent\\"s voice.
   * - If you do not specify this parameter, the adaptive volume mode recommended by Alibaba Cloud is used by default.
   * - If you specify this parameter, the valid values range from 0 to 400. Output volume = Voice output volume in the workflow × volume / 100. Examples:
   * 1. If volume is set to 0, the output volume is 0.
   * 2. If volume is set to 100, the output volume is the original volume.
   * 3. If volume is set to 200, the output volume is twice the original volume.
   * 
   * @example
   * 100
   */
  volume?: number;
  /**
   * @remarks
   * The user\\"s instruction before the call starts. The agent responds to this sentence immediately after the call starts.
   * 
   * @example
   * How’s the weather today?
   */
  wakeUpQuery?: string;
  /**
   * @remarks
   * The workflow override parameters. Default value: none.
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
      transferCallConfig: 'TransferCallConfig',
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
      transferCallConfig: AIAgentConfigTransferCallConfig,
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
    if(this.transferCallConfig && typeof (this.transferCallConfig as any).validate === 'function') {
      (this.transferCallConfig as any).validate();
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

