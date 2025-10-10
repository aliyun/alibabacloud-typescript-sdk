// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppAgentTemplateRequestAgentSilenceConfig extends $dara.Model {
  /**
   * @example
   * 30
   */
  alertTimeout?: number;
  content?: string;
  /**
   * @example
   * 2
   */
  strategy?: number;
  /**
   * @example
   * 30
   */
  webhookTriggerTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      alertTimeout: 'AlertTimeout',
      content: 'Content',
      strategy: 'Strategy',
      webhookTriggerTimeout: 'WebhookTriggerTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTimeout: 'number',
      content: 'string',
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

export class ModifyAppAgentTemplateRequestAmbientSoundConfig extends $dara.Model {
  /**
   * @example
   * white_noise
   */
  soundId?: string;
  /**
   * @example
   * 100
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

export class ModifyAppAgentTemplateRequestAsrConfigVadConfig extends $dara.Model {
  /**
   * @example
   * 1000
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

export class ModifyAppAgentTemplateRequestAsrConfigWordWeights extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4
   */
  weight?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 苹果
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      weight: 'Weight',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      weight: 'number',
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

export class ModifyAppAgentTemplateRequestAsrConfig extends $dara.Model {
  /**
   * @example
   * 500
   */
  maxSentenceSilence?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * STT
   */
  name?: string;
  vadConfig?: ModifyAppAgentTemplateRequestAsrConfigVadConfig;
  /**
   * @example
   * 0bb1776b1745123332074d1b6b
   */
  vocabularyId?: string;
  wordWeights?: ModifyAppAgentTemplateRequestAsrConfigWordWeights[];
  static names(): { [key: string]: string } {
    return {
      maxSentenceSilence: 'MaxSentenceSilence',
      name: 'Name',
      vadConfig: 'VadConfig',
      vocabularyId: 'VocabularyId',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSentenceSilence: 'number',
      name: 'string',
      vadConfig: ModifyAppAgentTemplateRequestAsrConfigVadConfig,
      vocabularyId: 'string',
      wordWeights: { 'type': 'array', 'itemType': ModifyAppAgentTemplateRequestAsrConfigWordWeights },
    };
  }

  validate() {
    if(this.vadConfig && typeof (this.vadConfig as any).validate === 'function') {
      (this.vadConfig as any).validate();
    }
    if(Array.isArray(this.wordWeights)) {
      $dara.Model.validateArray(this.wordWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppAgentTemplateRequestBackChannelConfig extends $dara.Model {
  userTurnEnd?: boolean;
  static names(): { [key: string]: string } {
    return {
      userTurnEnd: 'UserTurnEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userTurnEnd: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppAgentTemplateRequestInterruptConfig extends $dara.Model {
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

export class ModifyAppAgentTemplateRequestLlmConfig extends $dara.Model {
  agentAppId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ak-1213123123132123131
   */
  apiKey?: string;
  /**
   * @example
   * 8
   */
  historyDepth?: number;
  /**
   * @example
   * 1024
   */
  maxToken?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm
   */
  name?: string;
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
   * https://llm.example.aliyuns.com
   */
  url?: string;
  /**
   * @example
   * thirdparty
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      agentAppId: 'AgentAppId',
      apiKey: 'ApiKey',
      historyDepth: 'HistoryDepth',
      maxToken: 'MaxToken',
      name: 'Name',
      prompt: 'Prompt',
      temperature: 'Temperature',
      topP: 'TopP',
      url: 'Url',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAppId: 'string',
      apiKey: 'string',
      historyDepth: 'number',
      maxToken: 'number',
      name: 'string',
      prompt: 'string',
      temperature: 'number',
      topP: 'number',
      url: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppAgentTemplateRequestTtsConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ak-1213123123132123131
   */
  apiKey?: string;
  filterBrackets?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Tts
   */
  name?: string;
  /**
   * @example
   * 0.8
   */
  pitch?: number;
  /**
   * @example
   * 0.8
   */
  rate?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyun
   */
  vendor?: string;
  /**
   * @example
   * longwan
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
      name: 'Name',
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
      name: 'string',
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

export class ModifyAppAgentTemplateRequest extends $dara.Model {
  agentSilenceConfig?: ModifyAppAgentTemplateRequestAgentSilenceConfig;
  ambientSoundConfig?: ModifyAppAgentTemplateRequestAmbientSoundConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  asrConfig?: ModifyAppAgentTemplateRequestAsrConfig;
  backChannelConfig?: ModifyAppAgentTemplateRequestBackChannelConfig;
  /**
   * @example
   * 2
   */
  chatMode?: number;
  greeting?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1231231312312131231
   */
  id?: string;
  interruptConfig?: ModifyAppAgentTemplateRequestInterruptConfig;
  /**
   * @example
   * 2
   */
  interruptMode?: number;
  llmConfig?: ModifyAppAgentTemplateRequestLlmConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 智能体模版
   */
  name?: string;
  ttsConfig?: ModifyAppAgentTemplateRequestTtsConfig;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      agentSilenceConfig: 'AgentSilenceConfig',
      ambientSoundConfig: 'AmbientSoundConfig',
      appId: 'AppId',
      asrConfig: 'AsrConfig',
      backChannelConfig: 'BackChannelConfig',
      chatMode: 'ChatMode',
      greeting: 'Greeting',
      id: 'Id',
      interruptConfig: 'InterruptConfig',
      interruptMode: 'InterruptMode',
      llmConfig: 'LlmConfig',
      name: 'Name',
      ttsConfig: 'TtsConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSilenceConfig: ModifyAppAgentTemplateRequestAgentSilenceConfig,
      ambientSoundConfig: ModifyAppAgentTemplateRequestAmbientSoundConfig,
      appId: 'string',
      asrConfig: ModifyAppAgentTemplateRequestAsrConfig,
      backChannelConfig: ModifyAppAgentTemplateRequestBackChannelConfig,
      chatMode: 'number',
      greeting: 'string',
      id: 'string',
      interruptConfig: ModifyAppAgentTemplateRequestInterruptConfig,
      interruptMode: 'number',
      llmConfig: ModifyAppAgentTemplateRequestLlmConfig,
      name: 'string',
      ttsConfig: ModifyAppAgentTemplateRequestTtsConfig,
      type: 'number',
    };
  }

  validate() {
    if(this.agentSilenceConfig && typeof (this.agentSilenceConfig as any).validate === 'function') {
      (this.agentSilenceConfig as any).validate();
    }
    if(this.ambientSoundConfig && typeof (this.ambientSoundConfig as any).validate === 'function') {
      (this.ambientSoundConfig as any).validate();
    }
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
    }
    if(this.backChannelConfig && typeof (this.backChannelConfig as any).validate === 'function') {
      (this.backChannelConfig as any).validate();
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

