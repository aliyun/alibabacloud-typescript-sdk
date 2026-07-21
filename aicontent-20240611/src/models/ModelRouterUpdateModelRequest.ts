// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * sk-xxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The base URL.
   * 
   * @example
   * https://dashscope.aliyuncs.com
   */
  baseUrl?: string;
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * 通义千问大模型
   */
  description?: string;
  /**
   * @remarks
   * The maximum input length.
   * 
   * @example
   * 8192
   */
  maxInputLength?: string;
  /**
   * @remarks
   * The maximum output length.
   * 
   * @example
   * 2048
   */
  maxOutputLength?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * qwen-turbo
   */
  modelId?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * 通义千问
   */
  name?: string;
  /**
   * @remarks
   * The model status.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The provider symbol.
   * 
   * @example
   * alibaba
   */
  symbol?: string;
  /**
   * @remarks
   * Comma-separated tags.
   * 
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
      status: 'status',
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
      status: 'number',
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

