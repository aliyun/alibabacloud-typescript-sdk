// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryCostTrendMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. Filters by API Key ID. This parameter is linked to the department and requires clientId to be specified first.
   * 
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The department ID used to filter results.
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
   * The end time, as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @remarks
   * The time granularity. Valid values:
   * 
   * - hourly
   * - daily
   * 
   * Default value: hourly.
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
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Optional. Filters by member IDs, separated by commas. If not specified, data for the department and all its members is returned. If an empty value is specified, only department data without members is returned.
   * 
   * @example
   * 30001,30002
   */
  memberUserIds?: string;
  /**
   * @remarks
   * The model types, separated by commas.
   * 
   * @example
   * LLM,VL
   */
  modelTypes?: string;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The start time, as a UNIX timestamp in seconds.
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
      modelTypes: 'modelTypes',
      nextToken: 'nextToken',
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

