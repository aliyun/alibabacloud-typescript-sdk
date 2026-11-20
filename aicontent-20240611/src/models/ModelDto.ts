// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelDTO extends $dara.Model {
  /**
   * @remarks
   * The API key preview.
   * 
   * @example
   * sk-xxx****xxx
   */
  apiKeyPreview?: string;
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
   * A value of 0 indicates enabled, and a non-zero value indicates disabled.
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
   * Qwen large language model
   */
  description?: string;
  extensions?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether a billing rule is configured.
   * 
   * @example
   * false
   */
  hasBillingRule?: boolean;
  /**
   * @remarks
   * ID
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
   * The model identifier.
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
   * The tag display names.
   * 
   * @example
   * Conversation, natural language processing
   */
  tagNames?: string;
  /**
   * @remarks
   * The tags, separated by commas.
   * 
   * @example
   * chat,NLP
   */
  tags?: string;
  /**
   * @remarks
   * The version.
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

