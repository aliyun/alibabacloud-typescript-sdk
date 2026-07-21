// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryCostTrendMetricsRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * Filters the results by department ID.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The end time of the query, specified as a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @remarks
   * The granularity of the data. Valid values: `hourly` and `daily`. Default: `hourly`.
   * 
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @remarks
   * The maximum number of results to return per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The model types to query, separated by commas.
   * 
   * @example
   * LLM,VL
   */
  modelTypes?: string;
  /**
   * @remarks
   * The pagination token from a previous response to retrieve the next page of results. If this parameter is omitted, the first page of results is returned.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The start time of the query, specified as a Unix timestamp in seconds.
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
      endTime: 'endTime',
      granularity: 'granularity',
      maxResults: 'maxResults',
      modelTypes: 'modelTypes',
      nextToken: 'nextToken',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      clientId: 'number',
      endTime: 'number',
      granularity: 'string',
      maxResults: 'number',
      modelTypes: 'string',
      nextToken: 'string',
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

