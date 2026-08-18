// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryObservationMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The API key ID used to filter results.
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The client ID used to filter results.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The list of department IDs, separated by commas. You can query data for multiple departments. This parameter is mutually exclusive with client_id.
   * 
   * @example
   * 1,2,3
   */
  clientIds?: string;
  /**
   * @remarks
   * The custom end time.
   * 
   * @example
   * 2024-01-02T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The field by which to group the results.
   * 
   * @example
   * resourceId
   */
  groupBy?: string;
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Optional. Filters by member IDs, separated by commas. If not specified, the department and all its members are included. If an empty value is specified, only the department is included without members.
   * 
   * @example
   * 30001,30002
   */
  memberUserIds?: string;
  /**
   * @remarks
   * The model ID used to filter results.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * Specifies whether to return the total count.
   * 
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @remarks
   * The token for the next query. An empty value indicates the last page.
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * resourceId
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort direction.
   * 
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The custom start time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time range for the query. Valid values: 1h, 6h, 24h, 7d, and 30d.
   * 
   * @example
   * 24h
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      clientId: 'clientId',
      clientIds: 'clientIds',
      endTime: 'endTime',
      groupBy: 'groupBy',
      maxResults: 'maxResults',
      memberUserIds: 'memberUserIds',
      modelId: 'modelId',
      needTotalCount: 'needTotalCount',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      startTime: 'startTime',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      clientIds: 'string',
      endTime: 'string',
      groupBy: 'string',
      maxResults: 'number',
      memberUserIds: 'string',
      modelId: 'number',
      needTotalCount: 'boolean',
      nextToken: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      startTime: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

