// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceDeployDetailsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Filter Value Names (Equivalent to SQL\\"s WHERE Clause)
   * 
   * Available Options:
   * 
   * - UserId
   * - ServiceId
   * - ServiceVersion
   * - ServiceInstanceId
   * - DeploySucceeded (Accepts True or False and case-insensitive)
   * - ErrorType
   * - ErrorCode
   * 
   * @example
   * ServiceId
   */
  name?: string;
  /**
   * @remarks
   * A value of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceDeployDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The time zone.
   * 
   * Reference Format: "+08:00"
   * 
   * Valid Range: "-12:59" to "+13:00"
   * 
   * @example
   * +08:00
   */
  cycleTimeZone?: string;
  /**
   * @remarks
   * Determines the time period over which data is aggregated. If no aggregation dimension is specified, the query defaults to providing detailed, unaggregated results.
   * 
   * Optional Values:
   * 
   * - Year
   * - Month
   * - Day
   * - All
   * 
   * @example
   * Month
   */
  cycleType?: string;
  /**
   * @remarks
   * The dimension names. (Equivalent to SQL\\"s GROUP BY Clause)
   * Optional Values:
   * 
   * - UserId
   * - ServiceId
   * - ServiceVersion
   * - ServiceInstanceId
   * - DeploySucceeded
   * - ErrorType
   * - ErrorCode
   */
  dimension?: string[];
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2024-12-31T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceInstanceDeployDetailsRequestFilter[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAZbOYA+x9UgM6xrgcMqFUjk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * @example
   * 2024-08-25T02:23:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cycleTimeZone: 'CycleTimeZone',
      cycleType: 'CycleType',
      dimension: 'Dimension',
      endTime: 'EndTime',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cycleTimeZone: 'string',
      cycleType: 'string',
      dimension: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      filter: { 'type': 'array', 'itemType': ListServiceInstanceDeployDetailsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dimension)) {
      $dara.Model.validateArray(this.dimension);
    }
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

