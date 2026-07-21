// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryCostOverviewMetricsRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The department ID used to filter the results.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The end time for the query, specified as a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @remarks
   * The granularity of the data. Valid values: `hourly` and `daily`. Default value: `hourly`.
   * 
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @remarks
   * The maximum number of results to return in a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The model types to query. Separate multiple types with commas.
   * 
   * @example
   * LLM,VL
   */
  modelTypes?: string;
  /**
   * @remarks
   * The token to retrieve the next page of results. If you do not specify this parameter, the first page of results is returned.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The start time for the query, specified as a Unix timestamp in seconds.
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

