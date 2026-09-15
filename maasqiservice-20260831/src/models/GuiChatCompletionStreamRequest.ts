// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GuiChatCompletionStreamRequestChatTemplateKwargs extends $dara.Model {
  /**
   * @example
   * true
   */
  enableThinking?: boolean;
  /**
   * @example
   * true
   */
  preserveThinking?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableThinking: 'enableThinking',
      preserveThinking: 'preserveThinking',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableThinking: 'boolean',
      preserveThinking: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestMessagesContentImageUrl extends $dara.Model {
  /**
   * @example
   * https://example.com/screenshot.png
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestMessagesContent extends $dara.Model {
  /**
   * @example
   * data:image/png;base64,...
   */
  imageData?: string;
  imageUrl?: GuiChatCompletionStreamRequestMessagesContentImageUrl;
  /**
   * @example
   * 点击搜索按钮
   */
  text?: string;
  /**
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      imageData: 'imageData',
      imageUrl: 'imageUrl',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageData: 'string',
      imageUrl: GuiChatCompletionStreamRequestMessagesContentImageUrl,
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.imageUrl && typeof (this.imageUrl as any).validate === 'function') {
      (this.imageUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestMessages extends $dara.Model {
  content?: GuiChatCompletionStreamRequestMessagesContent[];
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * call_gui_1
   */
  toolCallId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCallId: 'toolCallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': GuiChatCompletionStreamRequestMessagesContent },
      role: 'string',
      toolCallId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestMetadata extends $dara.Model {
  /**
   * @example
   * ["Chrome","Settings"]
   */
  appList?: string[];
  /**
   * @example
   * ["Chrome","Settings"]
   */
  availableApps?: string[];
  /**
   * @example
   * previous action completed
   */
  harnessMessage?: string;
  /**
   * @example
   * 1080
   */
  screenHeight?: number;
  /**
   * @example
   * 1920
   */
  screenWidth?: number;
  static names(): { [key: string]: string } {
    return {
      appList: 'appList',
      availableApps: 'availableApps',
      harnessMessage: 'harnessMessage',
      screenHeight: 'screenHeight',
      screenWidth: 'screenWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: { 'type': 'array', 'itemType': 'string' },
      availableApps: { 'type': 'array', 'itemType': 'string' },
      harnessMessage: 'string',
      screenHeight: 'number',
      screenWidth: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appList)) {
      $dara.Model.validateArray(this.appList);
    }
    if(Array.isArray(this.availableApps)) {
      $dara.Model.validateArray(this.availableApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestMmProcessorKwargs extends $dara.Model {
  /**
   * @example
   * 8
   */
  maxDynamicPatch?: number;
  static names(): { [key: string]: string } {
    return {
      maxDynamicPatch: 'maxDynamicPatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDynamicPatch: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestResponseFormat extends $dara.Model {
  /**
   * @example
   * json_object
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestStreamOptions extends $dara.Model {
  /**
   * @example
   * true
   */
  includeUsage?: boolean;
  static names(): { [key: string]: string } {
    return {
      includeUsage: 'includeUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeUsage: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequestStructuredOutputs extends $dara.Model {
  /**
   * @example
   * ["tap","type"]
   */
  choice?: string[];
  static names(): { [key: string]: string } {
    return {
      choice: 'choice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choice: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.choice)) {
      $dara.Model.validateArray(this.choice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GuiChatCompletionStreamRequest extends $dara.Model {
  /**
   * @example
   * [10,11]
   */
  allowedTokenIds?: number[];
  /**
   * @example
   * ["blocked"]
   */
  badWords?: string[];
  chatTemplateKwargs?: GuiChatCompletionStreamRequestChatTemplateKwargs;
  /**
   * @example
   * 0.0
   */
  frequencyPenalty?: number;
  /**
   * @example
   * false
   */
  ignoreEos?: boolean;
  /**
   * @example
   * true
   */
  includeReasoning?: boolean;
  /**
   * @example
   * false
   */
  logprobs?: boolean;
  /**
   * @example
   * 2048
   */
  maxCompletionTokens?: number;
  /**
   * @example
   * 2048
   */
  maxTokens?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  messages?: GuiChatCompletionStreamRequestMessages[];
  metadata?: GuiChatCompletionStreamRequestMetadata;
  /**
   * @example
   * 0.05
   */
  minP?: number;
  /**
   * @example
   * 1
   */
  minTokens?: number;
  mmProcessorKwargs?: GuiChatCompletionStreamRequestMmProcessorKwargs;
  model?: string;
  /**
   * @example
   * 1
   */
  n?: number;
  /**
   * @example
   * false
   */
  parallelToolCalls?: boolean;
  /**
   * @example
   * 0.0
   */
  presencePenalty?: number;
  /**
   * @example
   * 2
   */
  promptLogprobs?: number;
  /**
   * @example
   * medium
   */
  reasoningEffort?: string;
  /**
   * @example
   * 1.1
   */
  repetitionPenalty?: number;
  responseFormat?: GuiChatCompletionStreamRequestResponseFormat;
  /**
   * @example
   * 42
   */
  seed?: number;
  /**
   * @example
   * true
   */
  skipSpecialTokens?: boolean;
  /**
   * @example
   * ["DONE"]
   */
  stop?: string[];
  /**
   * @example
   * [1,2]
   */
  stopTokenIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  stream?: boolean;
  streamOptions?: GuiChatCompletionStreamRequestStreamOptions;
  structuredOutputs?: GuiChatCompletionStreamRequestStructuredOutputs;
  /**
   * @example
   * 0.2
   */
  temperature?: number;
  /**
   * @example
   * 20
   */
  topK?: number;
  /**
   * @example
   * 3
   */
  topLogprobs?: number;
  /**
   * @example
   * 0.9
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      allowedTokenIds: 'allowedTokenIds',
      badWords: 'badWords',
      chatTemplateKwargs: 'chatTemplateKwargs',
      frequencyPenalty: 'frequencyPenalty',
      ignoreEos: 'ignoreEos',
      includeReasoning: 'includeReasoning',
      logprobs: 'logprobs',
      maxCompletionTokens: 'maxCompletionTokens',
      maxTokens: 'maxTokens',
      messages: 'messages',
      metadata: 'metadata',
      minP: 'minP',
      minTokens: 'minTokens',
      mmProcessorKwargs: 'mmProcessorKwargs',
      model: 'model',
      n: 'n',
      parallelToolCalls: 'parallelToolCalls',
      presencePenalty: 'presencePenalty',
      promptLogprobs: 'promptLogprobs',
      reasoningEffort: 'reasoningEffort',
      repetitionPenalty: 'repetitionPenalty',
      responseFormat: 'responseFormat',
      seed: 'seed',
      skipSpecialTokens: 'skipSpecialTokens',
      stop: 'stop',
      stopTokenIds: 'stopTokenIds',
      stream: 'stream',
      streamOptions: 'streamOptions',
      structuredOutputs: 'structuredOutputs',
      temperature: 'temperature',
      topK: 'topK',
      topLogprobs: 'topLogprobs',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedTokenIds: { 'type': 'array', 'itemType': 'number' },
      badWords: { 'type': 'array', 'itemType': 'string' },
      chatTemplateKwargs: GuiChatCompletionStreamRequestChatTemplateKwargs,
      frequencyPenalty: 'number',
      ignoreEos: 'boolean',
      includeReasoning: 'boolean',
      logprobs: 'boolean',
      maxCompletionTokens: 'number',
      maxTokens: 'number',
      messages: { 'type': 'array', 'itemType': GuiChatCompletionStreamRequestMessages },
      metadata: GuiChatCompletionStreamRequestMetadata,
      minP: 'number',
      minTokens: 'number',
      mmProcessorKwargs: GuiChatCompletionStreamRequestMmProcessorKwargs,
      model: 'string',
      n: 'number',
      parallelToolCalls: 'boolean',
      presencePenalty: 'number',
      promptLogprobs: 'number',
      reasoningEffort: 'string',
      repetitionPenalty: 'number',
      responseFormat: GuiChatCompletionStreamRequestResponseFormat,
      seed: 'number',
      skipSpecialTokens: 'boolean',
      stop: { 'type': 'array', 'itemType': 'string' },
      stopTokenIds: { 'type': 'array', 'itemType': 'number' },
      stream: 'boolean',
      streamOptions: GuiChatCompletionStreamRequestStreamOptions,
      structuredOutputs: GuiChatCompletionStreamRequestStructuredOutputs,
      temperature: 'number',
      topK: 'number',
      topLogprobs: 'number',
      topP: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.allowedTokenIds)) {
      $dara.Model.validateArray(this.allowedTokenIds);
    }
    if(Array.isArray(this.badWords)) {
      $dara.Model.validateArray(this.badWords);
    }
    if(this.chatTemplateKwargs && typeof (this.chatTemplateKwargs as any).validate === 'function') {
      (this.chatTemplateKwargs as any).validate();
    }
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.mmProcessorKwargs && typeof (this.mmProcessorKwargs as any).validate === 'function') {
      (this.mmProcessorKwargs as any).validate();
    }
    if(this.responseFormat && typeof (this.responseFormat as any).validate === 'function') {
      (this.responseFormat as any).validate();
    }
    if(Array.isArray(this.stop)) {
      $dara.Model.validateArray(this.stop);
    }
    if(Array.isArray(this.stopTokenIds)) {
      $dara.Model.validateArray(this.stopTokenIds);
    }
    if(this.streamOptions && typeof (this.streamOptions as any).validate === 'function') {
      (this.streamOptions as any).validate();
    }
    if(this.structuredOutputs && typeof (this.structuredOutputs as any).validate === 'function') {
      (this.structuredOutputs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

