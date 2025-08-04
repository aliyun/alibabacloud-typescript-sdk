// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppAgentTemplatesResponseBodyTemplatesAgentSilenceConfig extends $dara.Model {
  alertTimeout?: number;
  content?: string;
  strategy?: number;
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

export class DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigVadConfig extends $dara.Model {
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

export class DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigWordWeights extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  weight?: number;
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

export class DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfig extends $dara.Model {
  /**
   * @example
   * 300
   */
  maxSentenceSilence?: number;
  name?: string;
  vadConfig?: DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigVadConfig;
  /**
   * @example
   * ecfadace11114cf08a7f07aceee798ad
   */
  vocabularyId?: string;
  wordWeights?: DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigWordWeights[];
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
      vadConfig: DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigVadConfig,
      vocabularyId: 'string',
      wordWeights: { 'type': 'array', 'itemType': DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfigWordWeights },
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

export class DescribeAppAgentTemplatesResponseBodyTemplatesLlmConfig extends $dara.Model {
  agentAppId?: string;
  /**
   * @example
   * qW8GpBOdHK/pv9gdUSVLvQ==
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
   * @example
   * deepseek-r1
   */
  model?: string;
  /**
   * @example
   * llm
   */
  name?: string;
  prompt?: string;
  /**
   * @example
   * 0.8
   */
  temperature?: number;
  /**
   * @example
   * 0.8
   */
  topP?: number;
  /**
   * @example
   * https://test.com
   */
  url?: string;
  /**
   * @example
   * aliyun
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      agentAppId: 'AgentAppId',
      apiKey: 'ApiKey',
      historyDepth: 'HistoryDepth',
      maxToken: 'MaxToken',
      model: 'Model',
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
      model: 'string',
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

export class DescribeAppAgentTemplatesResponseBodyTemplatesTtsConfig extends $dara.Model {
  /**
   * @example
   * N5448VFGI2mXJU8a/A03VQ==
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
   * 50
   */
  rate?: number;
  /**
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
      model: 'Model',
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
      model: 'string',
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

export class DescribeAppAgentTemplatesResponseBodyTemplates extends $dara.Model {
  agentSilenceConfig?: DescribeAppAgentTemplatesResponseBodyTemplatesAgentSilenceConfig;
  asrConfig?: DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfig;
  /**
   * @example
   * 1
   */
  chatMode?: number;
  /**
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  /**
   * @example
   * 你好，机器人。
   */
  greeting?: string;
  /**
   * @example
   * wv7N****
   */
  id?: string;
  /**
   * @example
   * 1
   */
  interruptMode?: number;
  llmConfig?: DescribeAppAgentTemplatesResponseBodyTemplatesLlmConfig;
  /**
   * @example
   * 测试
   */
  name?: string;
  ttsConfig?: DescribeAppAgentTemplatesResponseBodyTemplatesTtsConfig;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      agentSilenceConfig: 'AgentSilenceConfig',
      asrConfig: 'AsrConfig',
      chatMode: 'ChatMode',
      createTime: 'CreateTime',
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
      agentSilenceConfig: DescribeAppAgentTemplatesResponseBodyTemplatesAgentSilenceConfig,
      asrConfig: DescribeAppAgentTemplatesResponseBodyTemplatesAsrConfig,
      chatMode: 'number',
      createTime: 'string',
      greeting: 'string',
      id: 'string',
      interruptMode: 'number',
      llmConfig: DescribeAppAgentTemplatesResponseBodyTemplatesLlmConfig,
      name: 'string',
      ttsConfig: DescribeAppAgentTemplatesResponseBodyTemplatesTtsConfig,
      type: 'number',
    };
  }

  validate() {
    if(this.agentSilenceConfig && typeof (this.agentSilenceConfig as any).validate === 'function') {
      (this.agentSilenceConfig as any).validate();
    }
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

export class DescribeAppAgentTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 30D41049-D02D-1C21-86AE-B3E5FD805C27
   */
  requestId?: string;
  templates?: DescribeAppAgentTemplatesResponseBodyTemplates[];
  /**
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeAppAgentTemplatesResponseBodyTemplates },
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

