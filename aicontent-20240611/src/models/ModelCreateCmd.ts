// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelCreateCmd extends $dara.Model {
  /**
   * @example
   * sk-xxxx
   */
  apiKey?: string;
  /**
   * @example
   * https://dashscope.aliyuncs.com
   */
  baseUrl?: string;
  /**
   * @example
   * 通义千问大模型
   */
  description?: string;
  /**
   * @example
   * 8192
   */
  maxInputLength?: string;
  /**
   * @example
   * 2048
   */
  maxOutputLength?: string;
  /**
   * @example
   * qwen-turbo
   */
  modelId?: string;
  /**
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @example
   * 通义千问
   */
  name?: string;
  /**
   * @example
   * alibaba
   */
  symbol?: string;
  /**
   * @example
   * chat,NLP
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      baseUrl: 'baseUrl',
      description: 'description',
      maxInputLength: 'maxInputLength',
      maxOutputLength: 'maxOutputLength',
      modelId: 'modelId',
      modelType: 'modelType',
      name: 'name',
      symbol: 'symbol',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      baseUrl: 'string',
      description: 'string',
      maxInputLength: 'string',
      maxOutputLength: 'string',
      modelId: 'string',
      modelType: 'string',
      name: 'string',
      symbol: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

