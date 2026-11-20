// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryCostModelListRequest extends $dara.Model {
  /**
   * @remarks
   * The API key ID used for filtering. This parameter is optional and associated with the department. You must specify clientId first.
   * 
   * @example
   * 100
   */
  apiKeyId?: number;
  /**
   * @remarks
   * The department ID used for filtering.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The department IDs. Separate multiple IDs with commas to query data for multiple departments. This parameter is mutually exclusive with clientId.
   * 
   * @example
   * 1,2,3
   */
  clientIds?: string;
  /**
   * @remarks
   * The end time, specified as a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
  /**
   * @remarks
   * The time granularity for automatic aggregation. You do not need to pass this parameter. Valid values: hourly and daily. Default value: hourly.
   * 
   * @example
   * hourly
   */
  granularity?: string;
  /**
   * @remarks
   * The maximum number of results.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The member IDs used for filtering. Separate multiple IDs with commas. This parameter is optional. If you do not specify this parameter, the department and all its members are included. If you pass an empty value, only the department is included, excluding its members.
   * 
   * @example
   * 30001,30002
   */
  memberUserIds?: string;
  /**
   * @remarks
   * The model IDs used for filtering. Separate multiple positive integer IDs with commas.
   * 
   * @example
   * 123,456
   */
  modelIds?: string;
  /**
   * @remarks
   * The model types. Separate multiple values with commas.
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
   * The keyword for fuzzy search by model name or code.
   * 
   * @example
   * qwen
   */
  search?: string;
  /**
   * @remarks
   * The start time, specified as a UNIX timestamp in seconds.
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
      modelIds: 'modelIds',
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
      clientIds: 'string',
      endTime: 'number',
      granularity: 'string',
      maxResults: 'number',
      memberUserIds: 'string',
      modelIds: 'string',
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

