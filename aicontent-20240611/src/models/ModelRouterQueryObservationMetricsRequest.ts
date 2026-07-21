// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryObservationMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The API Key ID to use for filtering the results.
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The client ID to use for filtering the results.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The end time of a custom time range for the query.
   * 
   * @example
   * 2024-01-02T00:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The field to use for grouping the results.
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
   * The model ID to use for filtering the results.
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * Specifies whether to return the total count of results.
   * 
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @remarks
   * The token used to retrieve the next page of results, obtained from the previous response.
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The field to use for sorting the results.
   * 
   * @example
   * resourceId
   */
  orderBy?: string;
  /**
   * @remarks
   * The sort order. Valid values: `ASC` (ascending) and `DESC` (descending).
   * 
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @remarks
   * The page number to retrieve.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of results to return per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of a custom time range for the query.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time range for the query. Valid values: `1h`, `6h`, `24h`, `7d`, and `30d`.
   * 
   * @example
   * 24h
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      clientId: 'clientId',
      endTime: 'endTime',
      groupBy: 'groupBy',
      maxResults: 'maxResults',
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
      endTime: 'string',
      groupBy: 'string',
      maxResults: 'number',
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

