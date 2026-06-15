// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLLMConfigsResponseBodyLLMConfigs extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * apikey-abcdxy
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
   * The embedding dimension. If this parameter is empty or set to 0, the system uses the model\\"s default dimension.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * Specifies whether to enable the Fusion feature.
   */
  enableFusion?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The LLM configuration ID.
   * 
   * @example
   * llm_config1
   */
  LLMConfigId?: string;
  /**
   * @remarks
   * The maximum number of tokens to process for a single input.
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
   * The model type.
   */
  modelType?: string;
  /**
   * @remarks
   * The name of the LLM configuration.
   * 
   * @example
   * llm_config_name1
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2vtzqjaohzqi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The maximum number of requests per second (RPS).
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
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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

export class ListLLMConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of LLM configuration objects.
   * 
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  LLMConfigs?: ListLLMConfigsResponseBodyLLMConfigs[];
  /**
   * @remarks
   * The maximum number of results returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for retrieving the next page of results. If this parameter is not returned, no more results are available. To retrieve the next page, pass this value in the `NextToken` parameter of a subsequent request.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6mbU5D/SFHCHMApYkMcWlp5
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 898DB17C-09E9-5C41-909D-269BA183EB92
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      LLMConfigs: 'LLMConfigs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      LLMConfigs: { 'type': 'array', 'itemType': ListLLMConfigsResponseBodyLLMConfigs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.LLMConfigs)) {
      $dara.Model.validateArray(this.LLMConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

