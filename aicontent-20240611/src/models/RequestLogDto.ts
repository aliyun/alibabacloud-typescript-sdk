// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * 200
   */
  statusCode?: number;
  /**
   * @example
   * 150
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      clientId: 'clientId',
      completionTokens: 'completionTokens',
      deleteTag: 'deleteTag',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      modelId: 'modelId',
      modelName: 'modelName',
      promptTokens: 'promptTokens',
      requestBody: 'requestBody',
      requestId: 'requestId',
      requestTime: 'requestTime',
      responseBody: 'responseBody',
      responseTimeMs: 'responseTimeMs',
      statusCode: 'statusCode',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      completionTokens: 'number',
      deleteTag: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modelId: 'number',
      modelName: 'string',
      promptTokens: 'number',
      requestBody: 'string',
      requestId: 'string',
      requestTime: 'string',
      responseBody: 'string',
      responseTimeMs: 'number',
      statusCode: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

