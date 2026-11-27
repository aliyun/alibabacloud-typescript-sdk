// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAgentRequestRtcConfig extends $dara.Model {
  /**
   * @remarks
   * The list of user IDs subscribed by the agent. Currently, only one user ID is supported.
   */
  targetUserIds?: string[];
  /**
   * @remarks
   * The user ID of the agent in the RTC channel.
   * 
   * This parameter is required.
   * 
   * @example
   * 423341
   */
  userId?: string;
  /**
   * @remarks
   * The maximum duration threshold for user inactivity, in seconds.
   * When the duration of any of the following states reaches this threshold, the agent automatically stops and exits the channel:
   * 1. All users in the targetUserIds list have left the channel.
   * 2. The users in the targetUserIds list have not joined the channel.
   * 
   * Default value: 30.
   * Valid values: 5 to 180.
   * 
   * @example
   * 30
   */
  userInactivityTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      targetUserIds: 'TargetUserIds',
      userId: 'UserId',
      userInactivityTimeout: 'UserInactivityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUserIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userInactivityTimeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetUserIds)) {
      $dara.Model.validateArray(this.targetUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequestVoiceChatConfigASRConfigVadConfig extends $dara.Model {
  /**
   * @remarks
   * The minimum duration of continuous human voice signals required to avoid false interruptions, in milliseconds.
   * Valid values: 0 to 3000.
   * Default value: 300.
   * 
   * @example
   * 300
   */
  interruptSpeechDuration?: number;
  static names(): { [key: string]: string } {
    return {
      interruptSpeechDuration: 'InterruptSpeechDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interruptSpeechDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequestVoiceChatConfigASRConfig extends $dara.Model {
  /**
   * @remarks
   * If this parameter is not specified, the model automatically identifies the language.
   * Currently supported language codes:
   * - zh: Chinese, including Mandarin and dialects such as Shanghainese, Wu, Minnan, Northeastern, Gansu, Guizhou, Henan, Hubei, Hunan, Jiangxi, Ningxia, Shanxi, Shaanxi, Shandong, Sichuan, Tianjin, Yunnan, and Cantonese.
   * - en: English.
   * - ja: Japanese.
   * - yue: Cantonese.
   * - ko: Korean.
   */
  languageHints?: string[];
  /**
   * @remarks
   * The voice segmentation detection threshold. Default value: 800. Unit: milliseconds. Recommended range: 200 to 6000.
   * 
   * @example
   * 800
   */
  maxSentenceSilence?: number;
  /**
   * @remarks
   * Specifies whether semantic or voice segmentation is enabled.
   * 
   * @example
   * false
   */
  semanticPunctuationEnabled?: boolean;
  /**
   * @remarks
   * No configuration is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The Voice Activity Detection (VAD) configuration.
   */
  vadConfig?: StartAgentRequestVoiceChatConfigASRConfigVadConfig;
  /**
   * @remarks
   * The ID of the supported hot word.
   * 
   * @example
   * vocab-xxx-24ee19fa8cfb4d52902170a0xxxxxxxx
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      languageHints: 'LanguageHints',
      maxSentenceSilence: 'MaxSentenceSilence',
      semanticPunctuationEnabled: 'SemanticPunctuationEnabled',
      sourceLanguage: 'SourceLanguage',
      vadConfig: 'VadConfig',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      languageHints: { 'type': 'array', 'itemType': 'string' },
      maxSentenceSilence: 'number',
      semanticPunctuationEnabled: 'boolean',
      sourceLanguage: 'string',
      vadConfig: StartAgentRequestVoiceChatConfigASRConfigVadConfig,
      vocabularyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.languageHints)) {
      $dara.Model.validateArray(this.languageHints);
    }
    if(this.vadConfig && typeof (this.vadConfig as any).validate === 'function') {
      (this.vadConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequestVoiceChatConfigAgentSilenceConfig extends $dara.Model {
  /**
   * @remarks
   * The timeout period for silence reminders, in seconds.
   * This reminder can be triggered multiple times. If the agent remains silent after a silence reminder timeout, the reminder is triggered again upon the next timeout.
   * Valid values: 5 to 600.
   * Default value: 0. A value of 0 indicates that no reminder is sent.
   * 
   * @example
   * 0
   */
  alertTimeout?: number;
  /**
   * @remarks
   * The content of the silence prompt message.
   * 
   * @example
   * **
   */
  content?: string;
  /**
   * @remarks
   * The switch.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The script strategy for silence reminders. Valid values:
   * - 1: Broadcast the prompt message specified by Content to the user by voice.
   * - 2: Send the prompt message specified by Content and the conversation history to the LLM, and broadcast the generated reply by voice.
   * Default value: 1.
   * 
   * @example
   * 1
   */
  strategy?: number;
  /**
   * @remarks
   * The silence timeout period for triggering the agent silence timeout webhook, in seconds.
   * This webhook can be triggered multiple times. If the agent remains silent after a webhook silence timeout, the webhook is triggered again upon the next timeout.
   * Valid values: 10 to 600.
   * Default value: 0. A value of 0 indicates that the webhook is not triggered.
   * 
   * @example
   * 0
   */
  webhookTriggerTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertTimeout: 'AlertTimeout',
      content: 'Content',
      enable: 'Enable',
      strategy: 'Strategy',
      webhookTriggerTimeout: 'WebhookTriggerTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTimeout: 'number',
      content: 'string',
      enable: 'boolean',
      strategy: 'number',
      webhookTriggerTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequestVoiceChatConfigAmbientSoundConfig extends $dara.Model {
  /**
   * @remarks
   * The ambient sound ID. Built-in and download modes are planned. Currently, only the built-in mode is supported.
   * - If this parameter is not specified or is left empty, ambient sound is disabled.
   * - Built-in mode: The agent provides the following default ambient sounds: white_noise (white noise) and office (office environment).
   * - Download mode: You can specify a custom soundId in the console (which must be different from built-in IDs) and provide a URL. The agent will download and bind the sound internally.
   * 
   * @example
   * white_noise
   */
  soundId?: string;
  /**
   * @remarks
   * The volume of the ambient sound.
   * Default value: 50 (original volume).
   * Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      soundId: 'SoundId',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      soundId: 'string',
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

export class StartAgentRequestVoiceChatConfigBackChannelConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable backchannel responses after the user finishes speaking. Default value: false.
   * 
   * @example
   * false
   */
  userTurnEnd?: boolean;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      userTurnEnd: 'UserTurnEnd',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userTurnEnd: 'boolean',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequestVoiceChatConfigInterruptConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable semantic interruption. Default value: true.
   * 
   * @example
   * true
   */
  semanticsInterrupt?: boolean;
  static names(): { [key: string]: string } {
    return {
      semanticsInterrupt: 'SemanticsInterrupt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      semanticsInterrupt: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequestVoiceChatConfigLLMConfig extends $dara.Model {
  /**
   * @remarks
   * The API key of the service provider.
   * 
   * @example
   * xxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The agent application ID. You must specify either Model or AppId. If both are specified, AppId takes precedence.
   * 
   * @example
   * e****
   */
  appId?: string;
  /**
   * @remarks
   * The custom parameters.
   */
  bizParams?: any;
  /**
   * @remarks
   * The number of historical conversation turns provided to the LLM.
   * Default value: 3.
   * 
   * @example
   * 3
   */
  historyDepth?: number;
  /**
   * @remarks
   * The maximum number of tokens for the output text.
   * Default value: 8192.
   * The maximum value for DeepSeek and Qwen models is 8192.
   * 
   * @example
   * 500
   */
  maxToken?: number;
  /**
   * @remarks
   * The model name.
   * Supported models under the aliyun provider:
   * ["qwen-plus", "deepseek-r1", "qwen-omni-turbo"]
   * 
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @remarks
   * The custom user parameters in key-value pairs. This parameter is deprecated. Use the BizParams parameter instead.
   * 
   * @example
   * {\"verification_code\": \"xxx\"}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The prompt used to instruct the model on the role or behavior to adopt.
   * 
   * @example
   * xxxx
   */
  prompt?: string;
  /**
   * @remarks
   * The sampling temperature used to control the randomness and creativity of the generated text. A higher value indicates higher randomness.
   * Default value: 0.7.
   * Valid values: 0 to 2, excluding 2.
   * Note: This parameter does not take effect for deepseek-r1.
   * 
   * @example
   * 0.7
   */
  temperature?: number;
  toolExecutionConfig?: any;
  tools?: any[];
  /**
   * @remarks
   * The sampling range used to control the diversity of output tokens. The model samples from tokens whose cumulative probability exceeds this value to ensure the sampling range is not too broad. A higher value indicates a richer variety of output tokens.
   * Valid values: 0 to 1, excluding 0.
   * Default value: 0.8.
   * 
   * @example
   * 0.8
   */
  topP?: number;
  /**
   * @remarks
   * The endpoint URL for integrating a third-party LLM.
   * 
   * @example
   * https://xxxxx
   */
  url?: string;
  /**
   * @remarks
   * The name of the service provider when a cloud service provider is integrated. Examples: aliyun for Model Studio, thirdparty.
   * 
   * @example
   * aliyun
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      appId: 'AppId',
      bizParams: 'BizParams',
      historyDepth: 'HistoryDepth',
      maxToken: 'MaxToken',
      model: 'Model',
      params: 'Params',
      prompt: 'Prompt',
      temperature: 'Temperature',
      toolExecutionConfig: 'ToolExecutionConfig',
      tools: 'Tools',
      topP: 'TopP',
      url: 'Url',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      appId: 'string',
      bizParams: 'any',
      historyDepth: 'number',
      maxToken: 'number',
      model: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      prompt: 'string',
      temperature: 'number',
      toolExecutionConfig: 'any',
      tools: { 'type': 'array', 'itemType': 'any' },
      topP: 'number',
      url: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequestVoiceChatConfigTTSConfig extends $dara.Model {
  /**
   * @remarks
   * The API key of the service provider.
   * 
   * @example
   * xxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The configuration to filter out characters within specified brackets from text-to-speech conversion.
   * 
   * @example
   * [1,2]
   */
  filterBrackets?: number[];
  /**
   * @remarks
   * The model name. Example: cosyvoice-v1.
   * 
   * @example
   * cosyvoice-v1
   */
  model?: string;
  /**
   * @remarks
   * The pitch.
   * Valid values: 0.5 to 2.0.
   * Default value: 1.0.
   * 
   * @example
   * 1
   */
  pitch?: number;
  /**
   * @remarks
   * The speech rate.
   * Valid values: 0.5 to 2.0.
   * Default value: 1.0.
   * 
   * @example
   * 1
   */
  rate?: number;
  /**
   * @remarks
   * The service provider. Example: aliyun for Model Studio.
   * 
   * @example
   * aliyun
   */
  vendor?: string;
  /**
   * @remarks
   * The voice. If you select the Alibaba Cloud cosyvoice-v1 model, the default voice is longxiaoxia.
   * Available voices:
   * longwan, longcheng, longhua, longxiaochun, longxiaoxia, longxiaocheng, longxiaobai, longlaotie, longshu, longshuo, longjing, longmiao, longyue, longyuan, longfei, longjielidou, longtong, longxiang, loongstella, and loongbella.
   * 
   * @example
   * longxiaoxia
   */
  voice?: string;
  /**
   * @remarks
   * The volume.
   * Valid values: 0 to 100.
   * Default value: 50.
   * 
   * @example
   * 50
   */
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      filterBrackets: 'FilterBrackets',
      model: 'Model',
      pitch: 'Pitch',
      rate: 'Rate',
      vendor: 'Vendor',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      filterBrackets: { 'type': 'array', 'itemType': 'number' },
      model: 'string',
      pitch: 'number',
      rate: 'number',
      vendor: 'string',
      voice: 'string',
      volume: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filterBrackets)) {
      $dara.Model.validateArray(this.filterBrackets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequestVoiceChatConfig extends $dara.Model {
  /**
   * @remarks
   * The Automatic Speech Recognition (ASR) configuration.
   */
  ASRConfig?: StartAgentRequestVoiceChatConfigASRConfig;
  /**
   * @remarks
   * The configuration for agent behavior during silence timeout. When a user joins the channel but does not interact effectively with the agent (the user does not speak), the agent is in a silent state. You can configure the agent to broadcast a voice messaging reminder or send a webhook notification during this silent state.
   */
  agentSilenceConfig?: StartAgentRequestVoiceChatConfigAgentSilenceConfig;
  /**
   * @remarks
   * The ambient sound settings.
   */
  ambientSoundConfig?: StartAgentRequestVoiceChatConfigAmbientSoundConfig;
  /**
   * @remarks
   * The backchannel settings.
   */
  backChannelConfig?: StartAgentRequestVoiceChatConfigBackChannelConfig;
  /**
   * @remarks
   * The chat mode. Valid values:
   * - 1: natural conversation mode. This is the default value.
   * - 2: walkie-talkie mode.
   * 
   * @example
   * 1
   */
  chatMode?: number;
  /**
   * @remarks
   * Specifies whether to enable visual understanding. If enabled, the large language model (LLM) must support multimodal data.
   */
  enableVideoUnderstanding?: boolean;
  /**
   * @remarks
   * The greeting message.
   * 
   * @example
   * Good morning, my friend
   */
  greeting?: string;
  /**
   * @remarks
   * The interrupt settings.
   */
  interruptConfig?: StartAgentRequestVoiceChatConfigInterruptConfig;
  /**
   * @remarks
   * The interrupt mode. Valid values:
   * - 1: voice interruption supported. This is the default value.
   * - 2: voice interruption disabled.
   * 
   * @example
   * 1
   */
  interruptMode?: number;
  /**
   * @remarks
   * The large language model (LLM) configuration.
   */
  LLMConfig?: StartAgentRequestVoiceChatConfigLLMConfig;
  /**
   * @remarks
   * The text-to-speech (TTS) configuration.
   */
  TTSConfig?: StartAgentRequestVoiceChatConfigTTSConfig;
  /**
   * @remarks
   * After visual understanding is enabled, you can specify the video stream that the agent prioritizes for understanding. The agent can understand only one video stream when both the camera stream and the screen sharing stream are pushed simultaneously.
   * 
   * 1. The agent prioritizes the camera stream.
   * 2. The agent prioritizes the screen sharing stream.
   * 
   * By default, the camera stream is prioritized.
   * 
   * @example
   * 1
   */
  preferVideo?: number;
  static names(): { [key: string]: string } {
    return {
      ASRConfig: 'ASRConfig',
      agentSilenceConfig: 'AgentSilenceConfig',
      ambientSoundConfig: 'AmbientSoundConfig',
      backChannelConfig: 'BackChannelConfig',
      chatMode: 'ChatMode',
      enableVideoUnderstanding: 'EnableVideoUnderstanding',
      greeting: 'Greeting',
      interruptConfig: 'InterruptConfig',
      interruptMode: 'InterruptMode',
      LLMConfig: 'LLMConfig',
      TTSConfig: 'TTSConfig',
      preferVideo: 'preferVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRConfig: StartAgentRequestVoiceChatConfigASRConfig,
      agentSilenceConfig: StartAgentRequestVoiceChatConfigAgentSilenceConfig,
      ambientSoundConfig: StartAgentRequestVoiceChatConfigAmbientSoundConfig,
      backChannelConfig: StartAgentRequestVoiceChatConfigBackChannelConfig,
      chatMode: 'number',
      enableVideoUnderstanding: 'boolean',
      greeting: 'string',
      interruptConfig: StartAgentRequestVoiceChatConfigInterruptConfig,
      interruptMode: 'number',
      LLMConfig: StartAgentRequestVoiceChatConfigLLMConfig,
      TTSConfig: StartAgentRequestVoiceChatConfigTTSConfig,
      preferVideo: 'number',
    };
  }

  validate() {
    if(this.ASRConfig && typeof (this.ASRConfig as any).validate === 'function') {
      (this.ASRConfig as any).validate();
    }
    if(this.agentSilenceConfig && typeof (this.agentSilenceConfig as any).validate === 'function') {
      (this.agentSilenceConfig as any).validate();
    }
    if(this.ambientSoundConfig && typeof (this.ambientSoundConfig as any).validate === 'function') {
      (this.ambientSoundConfig as any).validate();
    }
    if(this.backChannelConfig && typeof (this.backChannelConfig as any).validate === 'function') {
      (this.backChannelConfig as any).validate();
    }
    if(this.interruptConfig && typeof (this.interruptConfig as any).validate === 'function') {
      (this.interruptConfig as any).validate();
    }
    if(this.LLMConfig && typeof (this.LLMConfig as any).validate === 'function') {
      (this.LLMConfig as any).validate();
    }
    if(this.TTSConfig && typeof (this.TTSConfig as any).validate === 'function') {
      (this.TTSConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query the ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * aoe****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel to join. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * The configuration for the agent to join a Real-Time Communication (RTC) channel.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  rtcConfig?: StartAgentRequestRtcConfig;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
  /**
   * @remarks
   * The configuration for AI voice chat.
   */
  voiceChatConfig?: StartAgentRequestVoiceChatConfig;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      rtcConfig: 'RtcConfig',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      voiceChatConfig: 'VoiceChatConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      rtcConfig: StartAgentRequestRtcConfig,
      taskId: 'string',
      templateId: 'string',
      voiceChatConfig: StartAgentRequestVoiceChatConfig,
    };
  }

  validate() {
    if(this.rtcConfig && typeof (this.rtcConfig as any).validate === 'function') {
      (this.rtcConfig as any).validate();
    }
    if(this.voiceChatConfig && typeof (this.voiceChatConfig as any).validate === 'function') {
      (this.voiceChatConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

