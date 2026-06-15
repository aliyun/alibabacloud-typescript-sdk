// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLLMConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * api-abcdxy
   */
  apiKey?: string;
  /**
   * @remarks
   * The base URL for API calls.
   * 
   * @example
   * https://dashscope.aliyuncs.com/compatible-mode/v1
   */
  baseUrl?: string;
  /**
   * @remarks
   * The batch size.
   * 
   * @example
   * 8
   */
  batchSize?: number;
  /**
   * @remarks
   * The embedding dimension. If this parameter is unspecified or set to 0, the system uses the model\\"s default dimension.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * Indicates whether fusion is enabled.
   */
  enableFusion?: boolean;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the configuration was last modified.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the LLM call configuration.
   * 
   * @example
   * llm_config1
   */
  LLMConfigId?: string;
  /**
   * @remarks
   * The maximum number of tokens in a single request.
   * 
   * @example
   * 2048
   */
  maxTokens?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * text-embedding-v1
   */
  model?: string;
  /**
   * @remarks
   * The type of the model.
   */
  modelType?: string;
  /**
   * @remarks
   * The name of the LLM call configuration.
   * 
   * @example
   * llm_config_name1
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
  /**
   * @remarks
   * The number of requests allowed per second.
   * 
   * @example
   * 30
   */
  rps?: number;
  /**
   * @remarks
   * The workspace ID.
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
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      LLMConfigId: 'LLMConfigId',
      maxTokens: 'MaxTokens',
      model: 'Model',
      modelType: 'ModelType',
      name: 'Name',
      requestId: 'RequestId',
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
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      LLMConfigId: 'string',
      maxTokens: 'number',
      model: 'string',
      modelType: 'string',
      name: 'string',
      requestId: 'string',
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

