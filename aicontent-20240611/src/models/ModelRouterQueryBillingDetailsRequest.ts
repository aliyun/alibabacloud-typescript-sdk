// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryBillingDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. Filters results by API Key ID.
   * 
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * Optional. Filters results by department ID (single value).
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The list of department IDs, separated by commas. Supports querying data for multiple departments. This parameter is mutually exclusive with clientId.
   * 
   * @example
   * 1,2,3
   */
  clientIds?: string;
  /**
   * @remarks
   * The query end time, in UNIX timestamp (seconds).
   * 
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @remarks
   * Optional. Filters results by model code. Separate multiple values with commas.
   * 
   * @example
   * qwen-plus,qwen-max
   */
  modelCodes?: string;
  /**
   * @remarks
   * Optional. Filters results by model ID.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * Optional. Filters results by model type. Separate multiple values with commas.
   * 
   * @example
   * Chat
   */
  modelTypes?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Optional. Filters results by exact match of the request ID.
   * 
   * @example
   * chatcmpl-abc123def456
   */
  requestId?: string;
  /**
   * @remarks
   * The query start time, in UNIX timestamp (seconds).
   * 
   * This parameter is required.
   * 
   * @example
   * 1700000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      clientId: 'clientId',
      clientIds: 'clientIds',
      endTime: 'endTime',
      modelCodes: 'modelCodes',
      modelId: 'modelId',
      modelTypes: 'modelTypes',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      clientIds: 'string',
      endTime: 'number',
      modelCodes: 'string',
      modelId: 'number',
      modelTypes: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

