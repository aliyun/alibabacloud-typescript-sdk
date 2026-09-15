// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PaChatCompletionStreamRequestChatTemplateKwargs extends $dara.Model {
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

export class PaChatCompletionStreamRequestMessagesContentImageUrl extends $dara.Model {
  /**
   * @example
   * https://example.com/image.png
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

export class PaChatCompletionStreamRequestMessagesContent extends $dara.Model {
  imageUrl?: PaChatCompletionStreamRequestMessagesContentImageUrl;
  /**
   * @example
   * 请分析这张图片
   */
  text?: string;
  /**
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'imageUrl',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: PaChatCompletionStreamRequestMessagesContentImageUrl,
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

export class PaChatCompletionStreamRequestMessagesToolCallsFunction extends $dara.Model {
  /**
   * @example
   * {"city":"杭州"}
   */
  arguments?: string;
  /**
   * @example
   * get_weather
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'arguments',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequestMessagesToolCalls extends $dara.Model {
  function?: PaChatCompletionStreamRequestMessagesToolCallsFunction;
  /**
   * @example
   * call_weather_1
   */
  id?: string;
  /**
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      id: 'id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: PaChatCompletionStreamRequestMessagesToolCallsFunction,
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequestMessages extends $dara.Model {
  /**
   * @example
   * 请分析图片内容
   */
  content?: PaChatCompletionStreamRequestMessagesContent[];
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * call_weather_1
   */
  toolCallId?: string;
  toolCalls?: PaChatCompletionStreamRequestMessagesToolCalls[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
      toolCallId: 'toolCallId',
      toolCalls: 'toolCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': PaChatCompletionStreamRequestMessagesContent },
      role: 'string',
      toolCallId: 'string',
      toolCalls: { 'type': 'array', 'itemType': PaChatCompletionStreamRequestMessagesToolCalls },
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(Array.isArray(this.toolCalls)) {
      $dara.Model.validateArray(this.toolCalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequestMmProcessorKwargs extends $dara.Model {
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

export class PaChatCompletionStreamRequestResponseFormat extends $dara.Model {
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

export class PaChatCompletionStreamRequestStreamOptions extends $dara.Model {
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

export class PaChatCompletionStreamRequestStructuredOutputs extends $dara.Model {
  /**
   * @example
   * ["yes","no"]
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

export class PaChatCompletionStreamRequestToolsFunctionParametersPropertiesCity extends $dara.Model {
  /**
   * @example
   * 要查询天气的城市名称
   */
  description?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class PaChatCompletionStreamRequestToolsFunctionParametersProperties extends $dara.Model {
  city?: PaChatCompletionStreamRequestToolsFunctionParametersPropertiesCity;
  static names(): { [key: string]: string } {
    return {
      city: 'city',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: PaChatCompletionStreamRequestToolsFunctionParametersPropertiesCity,
    };
  }

  validate() {
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequestToolsFunctionParameters extends $dara.Model {
  properties?: PaChatCompletionStreamRequestToolsFunctionParametersProperties;
  required?: string[];
  /**
   * @example
   * object
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: PaChatCompletionStreamRequestToolsFunctionParametersProperties,
      required: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(Array.isArray(this.required)) {
      $dara.Model.validateArray(this.required);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequestToolsFunction extends $dara.Model {
  /**
   * @example
   * 查询指定城市天气
   */
  description?: string;
  /**
   * @example
   * get_weather
   */
  name?: string;
  parameters?: PaChatCompletionStreamRequestToolsFunctionParameters;
  /**
   * @example
   * true
   */
  strict?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parameters: 'parameters',
      strict: 'strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: PaChatCompletionStreamRequestToolsFunctionParameters,
      strict: 'boolean',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequestTools extends $dara.Model {
  function?: PaChatCompletionStreamRequestToolsFunction;
  /**
   * @example
   * function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: PaChatCompletionStreamRequestToolsFunction,
      type: 'string',
    };
  }

  validate() {
    if(this.function && typeof (this.function as any).validate === 'function') {
      (this.function as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PaChatCompletionStreamRequest extends $dara.Model {
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
  chatTemplateKwargs?: PaChatCompletionStreamRequestChatTemplateKwargs;
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
  messages?: PaChatCompletionStreamRequestMessages[];
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
  mmProcessorKwargs?: PaChatCompletionStreamRequestMmProcessorKwargs;
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
   * high
   */
  reasoningEffort?: string;
  /**
   * @example
   * 1.1
   */
  repetitionPenalty?: number;
  responseFormat?: PaChatCompletionStreamRequestResponseFormat;
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
   * ["END"]
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
  streamOptions?: PaChatCompletionStreamRequestStreamOptions;
  structuredOutputs?: PaChatCompletionStreamRequestStructuredOutputs;
  /**
   * @example
   * 0.2
   */
  temperature?: number;
  /**
   * @example
   * auto
   */
  toolChoice?: string;
  tools?: PaChatCompletionStreamRequestTools[];
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
      toolChoice: 'toolChoice',
      tools: 'tools',
      topK: 'topK',
      topLogprobs: 'topLogprobs',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedTokenIds: { 'type': 'array', 'itemType': 'number' },
      badWords: { 'type': 'array', 'itemType': 'string' },
      chatTemplateKwargs: PaChatCompletionStreamRequestChatTemplateKwargs,
      frequencyPenalty: 'number',
      ignoreEos: 'boolean',
      includeReasoning: 'boolean',
      logprobs: 'boolean',
      maxCompletionTokens: 'number',
      maxTokens: 'number',
      messages: { 'type': 'array', 'itemType': PaChatCompletionStreamRequestMessages },
      minP: 'number',
      minTokens: 'number',
      mmProcessorKwargs: PaChatCompletionStreamRequestMmProcessorKwargs,
      model: 'string',
      n: 'number',
      parallelToolCalls: 'boolean',
      presencePenalty: 'number',
      promptLogprobs: 'number',
      reasoningEffort: 'string',
      repetitionPenalty: 'number',
      responseFormat: PaChatCompletionStreamRequestResponseFormat,
      seed: 'number',
      skipSpecialTokens: 'boolean',
      stop: { 'type': 'array', 'itemType': 'string' },
      stopTokenIds: { 'type': 'array', 'itemType': 'number' },
      stream: 'boolean',
      streamOptions: PaChatCompletionStreamRequestStreamOptions,
      structuredOutputs: PaChatCompletionStreamRequestStructuredOutputs,
      temperature: 'number',
      toolChoice: 'string',
      tools: { 'type': 'array', 'itemType': PaChatCompletionStreamRequestTools },
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
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

