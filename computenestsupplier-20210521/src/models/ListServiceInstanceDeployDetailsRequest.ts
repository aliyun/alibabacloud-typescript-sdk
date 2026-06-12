// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceDeployDetailsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter. This corresponds to the WHERE clause in SQL.
   * 
   * Valid values:
   * 
   * - UserId
   * 
   * - ServiceId
   * 
   * - ServiceVersion
   * 
   * - ServiceInstanceId
   * 
   * - DeploySucceeded (The value can be True or False. The value is case-insensitive.)
   * 
   * - ErrorType
   * 
   * - ErrorCode
   * 
   * @example
   * ServiceId
   */
  name?: string;
  /**
   * @remarks
   * A list of filter values.
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
   * Example: +08:00
   * 
   * Valid values: -12:59 to +13:00
   * 
   * @example
   * +08:00
   */
  cycleTimeZone?: string;
  /**
   * @remarks
   * The aggregation period. If you do not specify this parameter, the system queries the details.
   * 
   * Valid values:
   * 
   * - Year
   * 
   * - Month
   * 
   * - Day
   * 
   * - All
   * 
   * @example
   * Month
   */
  cycleType?: string;
  /**
   * @remarks
   * The name of the dimension. This corresponds to the GROUP BY clause in SQL.
   * 
   * Valid values:
   * 
   * - UserId
   * 
   * - ServiceId
   * 
   * - ServiceVersion
   * 
   * - ServiceInstanceId
   * 
   * - DeploySucceeded
   * 
   * - ErrorType
   * 
   * - ErrorCode
   */
  dimension?: string[];
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Use UTC+0 time in the yyyy-MM-ddTHH:mmZ format.
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
   * The number of entries per page for a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query.
   * 
   * @example
   * AAAAAZbOYA+x9UgM6xrgcMqFUjk=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * Use UTC+0 time in the yyyy-MM-ddTHH:mmZ format.
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

