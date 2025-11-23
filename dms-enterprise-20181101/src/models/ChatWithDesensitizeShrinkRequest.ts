// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatWithDesensitizeShrinkRequest extends $dara.Model {
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
  messagesShrink?: string;
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
  stopShrink?: string;
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
      messagesShrink: 'Messages',
      model: 'Model',
      needDesensitization: 'NeedDesensitization',
      presencePenalty: 'PresencePenalty',
      responseFormat: 'ResponseFormat',
      seed: 'Seed',
      stopShrink: 'Stop',
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
      messagesShrink: 'string',
      model: 'string',
      needDesensitization: 'boolean',
      presencePenalty: 'number',
      responseFormat: 'string',
      seed: 'number',
      stopShrink: 'string',
      temperature: 'number',
      thinkingBudget: 'number',
      topK: 'number',
      topLogprobs: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

