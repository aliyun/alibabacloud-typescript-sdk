// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateModelItemDTO extends $dara.Model {
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * Qwen Max
   */
  description?: string;
  /**
   * @remarks
   * The extension configuration parameters in JSON string format.
   * 
   * @example
   * {}
   */
  extensions?: string;
  /**
   * @remarks
   * The supported input and output data types, separated by commas.
   * 
   * @example
   * text
   */
  inOut?: string;
  /**
   * @remarks
   * The maximum input length in tokens.
   * 
   * @example
   * 128000
   */
  maxInputLength?: string;
  /**
   * @remarks
   * The maximum output length in tokens.
   * 
   * @example
   * 8192
   */
  maxOutputLength?: string;
  /**
   * @remarks
   * The model identifier. This parameter is required and corresponds to the model ID on the vendor side. If the identifier is duplicated, the backend automatically increments the version by using v1 or v2.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @remarks
   * The model type. This parameter is required. Valid values: Chat, Embedding, Rerank, Image, Audio, and Video.
   * 
   * This parameter is required.
   * 
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @remarks
   * The model name. This parameter is required. If the identifier is duplicated, add -v1 or -v2 to distinguish the models.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen-max
   */
  name?: string;
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

