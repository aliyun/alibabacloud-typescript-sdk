// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLLMConfigResponseBody extends $dara.Model {
  /**
   * @example
   * api-abcdxy
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
   * @remarks
   * Id of the request
   * 
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
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
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      LLMConfigId: 'LLMConfigId',
      maxTokens: 'MaxTokens',
      model: 'Model',
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
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      LLMConfigId: 'string',
      maxTokens: 'number',
      model: 'string',
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

