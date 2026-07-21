// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterCreateModelRequest extends $dara.Model {
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
   * The model\\"s extended configuration parameters, provided as a JSON string.
   * 
   * @example
   * {}
   */
  extensions?: string;
  /**
   * @remarks
   * The supported input and output data types for the model.
   * 
   * @example
   * text
   */
  inOut?: string;
  /**
   * @remarks
   * The maximum input length.
   * 
   * @example
   * 32K
   */
  maxInputLength?: string;
  /**
   * @remarks
   * The maximum output length.
   * 
   * @example
   * 8K
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
   * The vendor symbol.
   * 
   * @example
   * alibaba
   */
  symbol?: string;
  /**
   * @remarks
   * Tags for the model. Separate multiple tags with commas.
   * 
   * @example
   * TXT_GEN,DEEP_THINK
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      baseUrl: 'baseUrl',
      description: 'description',
      extensions: 'extensions',
      inOut: 'inOut',
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
      extensions: 'string',
      inOut: 'string',
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

