// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithDesensitizeSSEShrinkRequest extends $dara.Model {
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
  messagesShrink?: string;
  /**
   * @example
   * ["text","audio"]
   */
  modalitiesListShrink?: string;
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
  searchOptionsShrink?: string;
  /**
   * @example
   * 1
   */
  seed?: number;
  stopShrink?: string;
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
      messagesShrink: 'Messages',
      modalitiesListShrink: 'ModalitiesList',
      model: 'Model',
      needDesensitization: 'NeedDesensitization',
      presencePenalty: 'PresencePenalty',
      responseFormat: 'ResponseFormat',
      searchOptionsShrink: 'SearchOptions',
      seed: 'Seed',
      stopShrink: 'Stop',
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
      messagesShrink: 'string',
      modalitiesListShrink: 'string',
      model: 'string',
      needDesensitization: 'boolean',
      presencePenalty: 'string',
      responseFormat: 'string',
      searchOptionsShrink: 'string',
      seed: 'number',
      stopShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

