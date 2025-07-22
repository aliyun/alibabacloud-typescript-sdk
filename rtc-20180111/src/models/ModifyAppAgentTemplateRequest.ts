// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
      vocabularyId: 'VocabularyId',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxSentenceSilence: 'number',
      name: 'string',
      vocabularyId: 'string',
      wordWeights: { 'type': 'array', 'itemType': ModifyAppAgentTemplateRequestAsrConfigWordWeights },
    };
  }

  validate() {
    if(Array.isArray(this.wordWeights)) {
      $dara.Model.validateArray(this.wordWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppAgentTemplateRequestLlmConfig extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  asrConfig?: ModifyAppAgentTemplateRequestAsrConfig;
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
      appId: 'AppId',
      asrConfig: 'AsrConfig',
      chatMode: 'ChatMode',
      greeting: 'Greeting',
      id: 'Id',
      interruptMode: 'InterruptMode',
      llmConfig: 'LlmConfig',
      name: 'Name',
      ttsConfig: 'TtsConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      asrConfig: ModifyAppAgentTemplateRequestAsrConfig,
      chatMode: 'number',
      greeting: 'string',
      id: 'string',
      interruptMode: 'number',
      llmConfig: ModifyAppAgentTemplateRequestLlmConfig,
      name: 'string',
      ttsConfig: ModifyAppAgentTemplateRequestTtsConfig,
      type: 'number',
    };
  }

  validate() {
    if(this.asrConfig && typeof (this.asrConfig as any).validate === 'function') {
      (this.asrConfig as any).validate();
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

