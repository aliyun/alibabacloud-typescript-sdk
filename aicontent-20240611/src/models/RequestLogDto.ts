// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UsageInfoDTO } from "./UsageInfoDto";


export class RequestLogDTO extends $dara.Model {
  /**
   * @remarks
   * API Key ID
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The unique identifier of the client.
   * 
   * @example
   * mt_xxxxxMYTX9
   */
  clientUuid?: string;
  /**
   * @remarks
   * The output tokens.
   * 
   * @example
   * 50
   */
  completionTokens?: number;
  /**
   * @remarks
   * The deletion tag. A value of 0 indicates enabled, and a non-zero value indicates disabled.
   * 
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
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
   * @remarks
   * The model.
   * 
   * @example
   * qwen3-max
   */
  modelCode?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @remarks
   * The input tokens.
   * 
   * @example
   * 100
   */
  promptTokens?: number;
  /**
   * @remarks
   * The request body.
   * 
   * @example
   * {}
   */
  requestBody?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The request time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  requestTime?: string;
  /**
   * @remarks
   * The response body.
   * 
   * @example
   * {}
   */
  responseBody?: string;
  /**
   * @remarks
   * The response time in milliseconds.
   * 
   * @example
   * 100
   */
  responseTimeMs?: number;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * qwen
   */
  symbol?: string;
  /**
   * @remarks
   * The total tokens.
   * 
   * @example
   * 150
   */
  totalTokens?: number;
  /**
   * @remarks
   * The usage statistics.
   * 
   * @example
   * {"prompt_tokens":100,"completion_tokens":50,"total_tokens":150}
   */
  usage?: UsageInfoDTO;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      clientId: 'clientId',
      clientUuid: 'clientUuid',
      completionTokens: 'completionTokens',
      deleteTag: 'deleteTag',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelName: 'modelName',
      modelType: 'modelType',
      promptTokens: 'promptTokens',
      requestBody: 'requestBody',
      requestId: 'requestId',
      requestTime: 'requestTime',
      responseBody: 'responseBody',
      responseTimeMs: 'responseTimeMs',
      status: 'status',
      statusCode: 'statusCode',
      symbol: 'symbol',
      totalTokens: 'totalTokens',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      clientUuid: 'string',
      completionTokens: 'number',
      deleteTag: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modelCode: 'string',
      modelId: 'number',
      modelName: 'string',
      modelType: 'string',
      promptTokens: 'number',
      requestBody: 'string',
      requestId: 'string',
      requestTime: 'string',
      responseBody: 'string',
      responseTimeMs: 'number',
      status: 'string',
      statusCode: 'number',
      symbol: 'string',
      totalTokens: 'number',
      usage: UsageInfoDTO,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

