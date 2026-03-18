// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelDTO extends $dara.Model {
  /**
   * @example
   * sk-xxx****xxx
   */
  apiKeyPreview?: string;
  /**
   * @example
   * https://dashscope.aliyuncs.com
   */
  baseUrl?: string;
  /**
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @example
   * 通义千问大模型
   */
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
   * 对话,自然语言处理
   */
  tagNames?: string;
  /**
   * @example
   * chat,NLP
   */
  tags?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

