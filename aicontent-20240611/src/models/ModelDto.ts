// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelDTO extends $dara.Model {
  /**
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
   * @example
   * 0
   */
  deleteTag?: number;
  description?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * false
   */
  isCustom?: boolean;
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
  modelCode?: string;
  /**
   * @example
   * Chat
   */
  modelType?: string;
  name?: string;
  /**
   * @example
   * alibaba
   */
  symbol?: string;
  tagNames?: string;
  /**
   * @example
   * chat,NLP
   */
  tags?: string;
  /**
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
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
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
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
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

