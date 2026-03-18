// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateModelRequest extends $dara.Model {
  /**
   * @remarks
   * API Key
   * 
   * @example
   * sk-xxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * Base URL
   * 
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
   * TXT_GEN,DEEP_THINK
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      baseUrl: 'baseUrl',
      description: 'description',
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

