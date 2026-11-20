// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelCreateCmd extends $dara.Model {
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
   * @remarks
   * The model description.
   * 
   * @example
   * Qwen large language model
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
   * Qwen
   */
  name?: string;
  /**
   * @remarks
   * The vendor symbol.
   * 
   * @example
   * alibaba
   */
  symbol?: string;
  /**
   * @remarks
   * The tags, separated by commas.
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

