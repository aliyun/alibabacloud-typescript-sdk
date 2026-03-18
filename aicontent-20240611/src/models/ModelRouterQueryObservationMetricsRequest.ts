// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryObservationMetricsRequest extends $dara.Model {
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
   * 2024-01-02T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * resourceId
   */
  groupBy?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @example
   * resourceId
   */
  orderBy?: string;
  /**
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  startTime?: string;
  /**
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

