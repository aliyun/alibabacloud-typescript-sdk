// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UsageInfoDTO } from "./UsageInfoDto";


export class RequestLogDTO extends $dara.Model {
  /**
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * mt_xxxxxMYTX9
   */
  clientUuid?: string;
  /**
   * @example
   * 50
   */
  completionTokens?: number;
  /**
   * @example
   * 0
   */
  deleteTag?: number;
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
   * qwen3-max
   */
  modelCode?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @example
   * 通义千问
   */
  modelName?: string;
  /**
   * @example
   * Chat
   */
  modelType?: string;
  /**
   * @example
   * 100
   */
  promptTokens?: number;
  /**
   * @example
   * {}
   */
  requestBody?: string;
  /**
   * @example
   * req-xxxx
   */
  requestId?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  requestTime?: string;
  /**
   * @example
   * {}
   */
  responseBody?: string;
  /**
   * @example
   * 100
   */
  responseTimeMs?: number;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @example
   * qwen
   */
  symbol?: string;
  /**
   * @example
   * 150
   */
  totalTokens?: number;
  /**
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

