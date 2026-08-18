// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryBillingCostBreakdownRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. Filters results by API Key ID. This parameter is linked to the department and requires clientId to be specified first.
   * 
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * Optional. Filters results by department ID.
   * 
   * @example
   * 5
   */
  clientId?: number;
  /**
   * @remarks
   * The list of department IDs, separated by commas. Supports querying data for multiple departments. This parameter is mutually exclusive with client_id.
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
   * The aggregation granularity. Valid values: hourly and daily.
   * 
   * This parameter is required.
   * 
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Optional. Filters results by member IDs, separated by commas. If not specified, the query returns data for the department and all its members. If an empty value is specified, the query returns data for the department only, excluding members.
   * 
   * @example
   * 30001,30002
   */
  memberUserIds?: string;
  /**
   * @remarks
   * Optional. Filters results by model ID.
   * 
   * @example
   * 12
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
   * The pagination token.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
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
      granularity: 'granularity',
      maxResults: 'maxResults',
      memberUserIds: 'memberUserIds',
      modelId: 'modelId',
      modelTypes: 'modelTypes',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      clientIds: 'string',
      endTime: 'number',
      granularity: 'string',
      maxResults: 'number',
      memberUserIds: 'string',
      modelId: 'number',
      modelTypes: 'string',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
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

