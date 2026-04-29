// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLLMConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * apikey-***
   */
  apiKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  baseUrl?: string;
  /**
   * @example
   * 8
   */
  batchSize?: number;
  /**
   * @example
   * 1024
   */
  embeddingDimension?: number;
  enableFusion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2048
   */
  maxTokens?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * text-embedding-v1
   */
  model?: string;
  modelType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-config1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  rps?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      baseUrl: 'BaseUrl',
      batchSize: 'BatchSize',
      embeddingDimension: 'EmbeddingDimension',
      enableFusion: 'EnableFusion',
      maxTokens: 'MaxTokens',
      model: 'Model',
      modelType: 'ModelType',
      name: 'Name',
      rps: 'Rps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      baseUrl: 'string',
      batchSize: 'number',
      embeddingDimension: 'number',
      enableFusion: 'boolean',
      maxTokens: 'number',
      model: 'string',
      modelType: 'string',
      name: 'string',
      rps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

