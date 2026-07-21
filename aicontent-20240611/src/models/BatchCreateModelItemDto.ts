// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateModelItemDTO extends $dara.Model {
  /**
   * @example
   * 通义千问 Max
   */
  description?: string;
  /**
   * @example
   * {}
   */
  extensions?: string;
  /**
   * @example
   * text
   */
  inOut?: string;
  /**
   * @example
   * 128000
   */
  maxInputLength?: string;
  /**
   * @example
   * 8192
   */
  maxOutputLength?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  name?: string;
  /**
   * @example
   * chat,NLP
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      extensions: 'extensions',
      inOut: 'inOut',
      maxInputLength: 'maxInputLength',
      maxOutputLength: 'maxOutputLength',
      modelId: 'modelId',
      modelType: 'modelType',
      name: 'name',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extensions: 'string',
      inOut: 'string',
      maxInputLength: 'string',
      maxOutputLength: 'string',
      modelId: 'string',
      modelType: 'string',
      name: 'string',
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

