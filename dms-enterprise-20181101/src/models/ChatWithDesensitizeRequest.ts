// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithDesensitizeRequest extends $dara.Model {
  /**
   * @example
   * UserInfo
   */
  desensitizationRule?: string;
  /**
   * @example
   * true
   */
  enableThinking?: boolean;
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
   * 256
   */
  maxTokens?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [
   *     {
   *         "content": "你好",
   *         "role": "user"
   *     }
   * ]
   */
  messages?: { [key: string]: any }[];
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
  presencePenalty?: number;
  /**
   * @example
   * text
   */
  responseFormat?: string;
  /**
   * @example
   * 1
   */
  seed?: number;
  stop?: string[];
  /**
   * @example
   * 1
   */
  temperature?: number;
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
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      desensitizationRule: 'DesensitizationRule',
      enableThinking: 'EnableThinking',
      instanceId: 'InstanceId',
      maxTokens: 'MaxTokens',
      messages: 'Messages',
      model: 'Model',
      needDesensitization: 'NeedDesensitization',
      presencePenalty: 'PresencePenalty',
      responseFormat: 'ResponseFormat',
      seed: 'Seed',
      stop: 'Stop',
      temperature: 'Temperature',
      thinkingBudget: 'ThinkingBudget',
      topK: 'TopK',
      topLogprobs: 'TopLogprobs',
      topP: 'TopP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensitizationRule: 'string',
      enableThinking: 'boolean',
      instanceId: 'number',
      maxTokens: 'number',
      messages: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      model: 'string',
      needDesensitization: 'boolean',
      presencePenalty: 'number',
      responseFormat: 'string',
      seed: 'number',
      stop: { 'type': 'array', 'itemType': 'string' },
      temperature: 'number',
      thinkingBudget: 'number',
      topK: 'number',
      topLogprobs: 'number',
      topP: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
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

