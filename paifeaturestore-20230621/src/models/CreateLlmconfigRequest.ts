// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLLMConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * api-xyz
   */
  apiKey?: string;
  /**
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
   * @example
   * 8192
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
   * llm_config1
   */
  name?: string;
  /**
   * @example
   * 30
   */
  rps?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234
   */
  workspaceId?: string;
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
      workspaceId: 'WorkspaceId',
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
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

