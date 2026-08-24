// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatModelResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1000000
   */
  contextWindow?: number;
  /**
   * @example
   * true
   */
  default?: boolean;
  features?: string[];
  /**
   * @example
   * qwen3.7-max
   */
  modelId?: string;
  thinkingLevels?: string[];
  static names(): { [key: string]: string } {
    return {
      contextWindow: 'ContextWindow',
      default: 'Default',
      features: 'Features',
      modelId: 'ModelId',
      thinkingLevels: 'ThinkingLevels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextWindow: 'number',
      default: 'boolean',
      features: { 'type': 'array', 'itemType': 'string' },
      modelId: 'string',
      thinkingLevels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    if(Array.isArray(this.thinkingLevels)) {
      $dara.Model.validateArray(this.thinkingLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatModelResponseBody extends $dara.Model {
  data?: GetChatModelResponseBodyData[];
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetChatModelResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

