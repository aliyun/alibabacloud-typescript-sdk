// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLLMTokenUsageResponseBodyTokenUsages extends $dara.Model {
  /**
   * @example
   * 1024
   */
  completionReasoningTokens?: number;
  /**
   * @example
   * 10000
   */
  completionTokens?: number;
  /**
   * @example
   * 2025-12-01T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1024
   */
  explicitCachedTokens?: number;
  /**
   * @example
   * 1408
   */
  implicitCachedTokens?: number;
  /**
   * @example
   * glm-5
   */
  model?: string;
  /**
   * @example
   * 1234
   */
  promptTokens?: number;
  /**
   * @example
   * 2025-03-27
   */
  startTime?: string;
  /**
   * @example
   * 12345
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      completionReasoningTokens: 'CompletionReasoningTokens',
      completionTokens: 'CompletionTokens',
      endTime: 'EndTime',
      explicitCachedTokens: 'ExplicitCachedTokens',
      implicitCachedTokens: 'ImplicitCachedTokens',
      model: 'Model',
      promptTokens: 'PromptTokens',
      startTime: 'StartTime',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionReasoningTokens: 'number',
      completionTokens: 'number',
      endTime: 'string',
      explicitCachedTokens: 'number',
      implicitCachedTokens: 'number',
      model: 'string',
      promptTokens: 'number',
      startTime: 'string',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLLMTokenUsageResponseBody extends $dara.Model {
  /**
   * @example
   * 11345
   */
  completionTokens?: number;
  /**
   * @example
   * 1500
   */
  explicitCachedTokens?: number;
  /**
   * @example
   * 1500
   */
  implicitCachedTokens?: number;
  /**
   * @example
   * 1000
   */
  promptTokens?: number;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  tokenUsages?: ListLLMTokenUsageResponseBodyTokenUsages[];
  /**
   * @example
   * 15345
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      completionTokens: 'CompletionTokens',
      explicitCachedTokens: 'ExplicitCachedTokens',
      implicitCachedTokens: 'ImplicitCachedTokens',
      promptTokens: 'PromptTokens',
      requestId: 'RequestId',
      tokenUsages: 'TokenUsages',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completionTokens: 'number',
      explicitCachedTokens: 'number',
      implicitCachedTokens: 'number',
      promptTokens: 'number',
      requestId: 'string',
      tokenUsages: { 'type': 'array', 'itemType': ListLLMTokenUsageResponseBodyTokenUsages },
      totalTokens: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tokenUsages)) {
      $dara.Model.validateArray(this.tokenUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

