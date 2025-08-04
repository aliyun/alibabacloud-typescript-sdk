// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAgentRequestRtcConfig extends $dara.Model {
  targetUserIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 423341
   */
  userId?: string;
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
  languageHints?: string[];
  /**
   * @example
   * 800
   */
  maxSentenceSilence?: number;
  /**
   * @example
   * false
   */
  semanticPunctuationEnabled?: boolean;
  /**
   * @example
   * zh
   */
  sourceLanguage?: string;
  vadConfig?: StartAgentRequestVoiceChatConfigASRConfigVadConfig;
  /**
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
  alertTimeout?: number;
  content?: string;
  enable?: boolean;
  strategy?: number;
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

export class StartAgentRequestVoiceChatConfigLLMConfig extends $dara.Model {
  /**
   * @example
   * xxxxxxxxxxx
   */
  apiKey?: string;
  appId?: string;
  /**
   * @example
   * 3
   */
  historyDepth?: number;
  /**
   * @example
   * 500
   */
  maxToken?: number;
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  params?: { [key: string]: any };
  /**
   * @example
   * xxxx
   */
  prompt?: string;
  /**
   * @example
   * 0.7
   */
  temperature?: number;
  /**
   * @example
   * 0.8
   */
  topP?: number;
  /**
   * @example
   * https://xxxxx
   */
  url?: string;
  /**
   * @example
   * aliyun
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      appId: 'AppId',
      historyDepth: 'HistoryDepth',
      maxToken: 'MaxToken',
      model: 'Model',
      params: 'Params',
      prompt: 'Prompt',
      temperature: 'Temperature',
      topP: 'TopP',
      url: 'Url',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      appId: 'string',
      historyDepth: 'number',
      maxToken: 'number',
      model: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      prompt: 'string',
      temperature: 'number',
      topP: 'number',
      url: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAgentRequestVoiceChatConfigTTSConfig extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  apiKey?: string;
  filterBrackets?: number[];
  /**
   * @example
   * cosyvoice-v1
   */
  model?: string;
  /**
   * @example
   * 1
   */
  pitch?: number;
  /**
   * @example
   * 1
   */
  rate?: number;
  /**
   * @example
   * aliyun
   */
  vendor?: string;
  /**
   * @example
   * longxiaoxia
   */
  voice?: string;
  /**
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
  ASRConfig?: StartAgentRequestVoiceChatConfigASRConfig;
  agentSilenceConfig?: StartAgentRequestVoiceChatConfigAgentSilenceConfig;
  /**
   * @example
   * 1
   */
  chatMode?: number;
  greeting?: string;
  /**
   * @example
   * 1
   */
  interruptMode?: number;
  LLMConfig?: StartAgentRequestVoiceChatConfigLLMConfig;
  TTSConfig?: StartAgentRequestVoiceChatConfigTTSConfig;
  static names(): { [key: string]: string } {
    return {
      ASRConfig: 'ASRConfig',
      agentSilenceConfig: 'AgentSilenceConfig',
      chatMode: 'ChatMode',
      greeting: 'Greeting',
      interruptMode: 'InterruptMode',
      LLMConfig: 'LLMConfig',
      TTSConfig: 'TTSConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASRConfig: StartAgentRequestVoiceChatConfigASRConfig,
      agentSilenceConfig: StartAgentRequestVoiceChatConfigAgentSilenceConfig,
      chatMode: 'number',
      greeting: 'string',
      interruptMode: 'number',
      LLMConfig: StartAgentRequestVoiceChatConfigLLMConfig,
      TTSConfig: StartAgentRequestVoiceChatConfigTTSConfig,
    };
  }

  validate() {
    if(this.ASRConfig && typeof (this.ASRConfig as any).validate === 'function') {
      (this.ASRConfig as any).validate();
    }
    if(this.agentSilenceConfig && typeof (this.agentSilenceConfig as any).validate === 'function') {
      (this.agentSilenceConfig as any).validate();
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
   * This parameter is required.
   * 
   * @example
   * aoe****
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourChannelId
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rtcConfig?: StartAgentRequestRtcConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 76dasgb****
   */
  templateId?: string;
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

