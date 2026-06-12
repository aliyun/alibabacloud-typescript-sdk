// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceLogsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter condition.
   * 
   * Valid values:
   * 
   * - StartTime
   * 
   * - EndTime
   * 
   * - ApplicationGroupName
   * 
   * - ResourceName
   * 
   * - EventName
   * 
   * @example
   * StartTime
   */
  name?: string;
  /**
   * @remarks
   * The values for the filter condition. You can specify up to 10 values.
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

export class ListServiceInstanceLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The filters.
   */
  filter?: ListServiceInstanceLogsRequestFilter[];
  /**
   * @remarks
   * The source of the logs. Valid values:
   * 
   * - application: Logs from the application.
   * 
   * - computeNest: Logs from Compute Nest.
   * 
   * - ros: Logs from Resource Orchestration Service (ROS).
   * 
   * @example
   * computeNest
   */
  logSource?: string;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * livelog
   */
  logstore?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the next page of results to return. Set this parameter to the NextToken value from a previous response to retrieve the next page of results.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
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
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-70a3b15bb626435b****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **Ascending**: Ascending order.
   * 
   * - **Descending** (default): Descending order.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      logSource: 'LogSource',
      logstore: 'Logstore',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceInstanceLogsRequestFilter },
      logSource: 'string',
      logstore: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

