// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelDTO extends $dara.Model {
  /**
   * @remarks
   * A masked preview of the API key.
   * 
   * @example
   * sk-xxx****xxx
   */
  apiKeyPreview?: string;
  /**
   * @remarks
   * The base URL for API requests.
   * 
   * @example
   * https://dashscope.aliyuncs.com
   */
  baseUrl?: string;
  /**
   * @remarks
   * Indicates the model\\"s status. A value of 0 means enabled, and a non-zero value means disabled.
   * 
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * 通义千问大模型
   */
  description?: string;
  extensions?: string;
  /**
   * @remarks
   * The time when the model was created, in ISO 8601 format.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the model was last updated, in ISO 8601 format.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @example
   * false
   */
  hasBillingRule?: boolean;
  /**
   * @remarks
   * The unique ID of the model.
   * 
   * @example
   * 1
   */
  id?: number;
  inOut?: string;
  /**
   * @remarks
   * Indicates whether the model is custom.
   * 
   * @example
   * false
   */
  isCustom?: boolean;
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
   * The model code.
   * 
   * @example
   * qwen-turbo
   */
  modelCode?: string;
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
   * The display names for the tags, separated by commas.
   * 
   * @example
   * 对话,自然语言处理
   */
  tagNames?: string;
  /**
   * @remarks
   * A comma-separated list of model tags.
   * 
   * @example
   * chat,NLP
   */
  tags?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyPreview: 'apiKeyPreview',
      baseUrl: 'baseUrl',
      deleteTag: 'deleteTag',
      description: 'description',
      extensions: 'extensions',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hasBillingRule: 'hasBillingRule',
      id: 'id',
      inOut: 'inOut',
      isCustom: 'isCustom',
      maxInputLength: 'maxInputLength',
      maxOutputLength: 'maxOutputLength',
      modelCode: 'modelCode',
      modelType: 'modelType',
      name: 'name',
      symbol: 'symbol',
      tagNames: 'tagNames',
      tags: 'tags',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyPreview: 'string',
      baseUrl: 'string',
      deleteTag: 'number',
      description: 'string',
      extensions: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasBillingRule: 'boolean',
      id: 'number',
      inOut: 'string',
      isCustom: 'boolean',
      maxInputLength: 'string',
      maxOutputLength: 'string',
      modelCode: 'string',
      modelType: 'string',
      name: 'string',
      symbol: 'string',
      tagNames: 'string',
      tags: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

