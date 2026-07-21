// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryCostModelListRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The department ID to filter the results.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The query\\"s end time, specified as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @remarks
   * The time granularity for data aggregation. Valid values: `hourly` and `daily`. Default value: `hourly`.
   * 
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The model types to query. Separate multiple types with a comma.
   * 
   * @example
   * LLM,VL
   */
  modelTypes?: string;
  /**
   * @remarks
   * A token from a previous response used to retrieve the next page of results.
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * A keyword for a fuzzy search on the model name or model code.
   * 
   * @example
   * qwen
   */
  search?: string;
  /**
   * @remarks
   * The query\\"s start time, specified as a UNIX timestamp in seconds.
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
      search: 'search',
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
      search: 'string',
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

