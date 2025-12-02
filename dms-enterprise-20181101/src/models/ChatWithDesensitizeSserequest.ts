// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithDesensitizeSSERequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  audioJson?: string;
  /**
   * @example
   * UserInfo
   */
  desensitizationRule?: string;
  /**
   * @example
   * 256
   */
  dimensions?: number;
  /**
   * @example
   * false
   */
  enableCodeInterpreter?: boolean;
  /**
   * @example
   * false
   */
  enableSearch?: boolean;
  /**
   * @example
   * true
   */
  enableThinking?: boolean;
  /**
   * @example
   * true
   */
  includeUsage?: boolean;
  /**
   * @example
   * test
   */
  input?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  instanceId?: number;
  /**
   * @example
   * false
   */
  logprobs?: boolean;
  /**
   * @example
   * 256
   */
  maxTokens?: number;
  /**
   * @example
   * [
   *     {
   *         "content": "你好",
   *         "role": "user"
   *     }
   * ]
   */
  messages?: any[];
  /**
   * @example
   * ["text","audio"]
   */
  modalitiesList?: string[];
  /**
   * @example
   * qwen-plus
   */
  model?: string;
  /**
   * @example
   * false
   */
  needDesensitization?: boolean;
  /**
   * @example
   * 0.0
   */
  presencePenalty?: string;
  /**
   * @example
   * text
   */
  responseFormat?: string;
  /**
   * @example
   * {}
   */
  searchOptions?: { [key: string]: string };
  /**
   * @example
   * 1
   */
  seed?: number;
  stop?: string[];
  /**
   * @example
   * 1-68f11da7e2b826dcc63c5877-hd
   */
  stream?: boolean;
  /**
   * @example
   * 1
   */
  temperature?: string;
  /**
   * @example
   * 256
   */
  thinkingBudget?: number;
  /**
   * @example
   * 10
   */
  topK?: number;
  /**
   * @example
   * 1
   */
  topLogprobs?: number;
  /**
   * @example
   * 0.5
   */
  topP?: string;
  /**
   * @example
   * false
   */
  vlHighResolutionImages?: boolean;
  /**
   * @example
   * {}
   */
  XDashScopeDataInspection?: string;
  static names(): { [key: string]: string } {
    return {
      audioJson: 'AudioJson',
      desensitizationRule: 'DesensitizationRule',
      dimensions: 'Dimensions',
      enableCodeInterpreter: 'EnableCodeInterpreter',
      enableSearch: 'EnableSearch',
      enableThinking: 'EnableThinking',
      includeUsage: 'IncludeUsage',
      input: 'Input',
      instanceId: 'InstanceId',
      logprobs: 'Logprobs',
      maxTokens: 'MaxTokens',
      messages: 'Messages',
      modalitiesList: 'ModalitiesList',
      model: 'Model',
      needDesensitization: 'NeedDesensitization',
      presencePenalty: 'PresencePenalty',
      responseFormat: 'ResponseFormat',
      searchOptions: 'SearchOptions',
      seed: 'Seed',
      stop: 'Stop',
      stream: 'Stream',
      temperature: 'Temperature',
      thinkingBudget: 'ThinkingBudget',
      topK: 'TopK',
      topLogprobs: 'TopLogprobs',
      topP: 'TopP',
      vlHighResolutionImages: 'VlHighResolutionImages',
      XDashScopeDataInspection: 'XDashScopeDataInspection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioJson: 'string',
      desensitizationRule: 'string',
      dimensions: 'number',
      enableCodeInterpreter: 'boolean',
      enableSearch: 'boolean',
      enableThinking: 'boolean',
      includeUsage: 'boolean',
      input: 'string',
      instanceId: 'number',
      logprobs: 'boolean',
      maxTokens: 'number',
      messages: { 'type': 'array', 'itemType': 'any' },
      modalitiesList: { 'type': 'array', 'itemType': 'string' },
      model: 'string',
      needDesensitization: 'boolean',
      presencePenalty: 'string',
      responseFormat: 'string',
      searchOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      seed: 'number',
      stop: { 'type': 'array', 'itemType': 'string' },
      stream: 'boolean',
      temperature: 'string',
      thinkingBudget: 'number',
      topK: 'number',
      topLogprobs: 'number',
      topP: 'string',
      vlHighResolutionImages: 'boolean',
      XDashScopeDataInspection: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(Array.isArray(this.modalitiesList)) {
      $dara.Model.validateArray(this.modalitiesList);
    }
    if(this.searchOptions) {
      $dara.Model.validateMap(this.searchOptions);
    }
    if(Array.isArray(this.stop)) {
      $dara.Model.validateArray(this.stop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

