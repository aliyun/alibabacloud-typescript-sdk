// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLLMConfigsResponseBodyLLMConfigs extends $dara.Model {
  /**
   * @example
   * apikey-abcdxy
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
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * llm_config1
   */
  LLMConfigId?: string;
  /**
   * @example
   * 2048
   */
  maxTokens?: number;
  /**
   * @example
   * text-embedding-v1
   */
  model?: string;
  /**
   * @example
   * llm_config_name1
   */
  name?: string;
  /**
   * @example
   * rg-aek2vtzqjaohzqi
   */
  resourceGroupId?: string;
  /**
   * @example
   * 30
   */
  rps?: number;
  /**
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
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      LLMConfigId: 'LLMConfigId',
      maxTokens: 'MaxTokens',
      model: 'Model',
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
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      LLMConfigId: 'string',
      maxTokens: 'number',
      model: 'string',
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
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  LLMConfigs?: ListLLMConfigsResponseBodyLLMConfigs[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6mbU5D/SFHCHMApYkMcWlp5
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 898DB17C-09E9-5C41-909D-269BA183EB92
   */
  requestId?: string;
  /**
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

