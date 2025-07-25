// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceLogsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   StartTime: the start time of the log event.
   * *   EndTime: the end time of the ActionTrail event.
   * *   EventName: the name of the ActionTrail event.
   * *   ResourceName: the name of the ActionTrail resource.
   * *   ApplicationGroupName: the name of the application group.
   * 
   * @example
   * - StartTime
   * - EndTime
   * - EventName
   * - ResourceName
   * - ApplicationGroupName
   */
  name?: string;
  /**
   * @remarks
   * The parameter value N of the filter. Valid values of N: 1 to 10.
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
   * The log source. When this field is empty, query logs with the source set to computeNest and ros. Valid values:
   * 
   * computeNest : logs of the deployment and upgrade of the service instance.
   * application: logs generated by the application.
   * actionTrail: logs generated by ActionTrail.
   * compliancePack: Logs originating from the compliance package.
   * ros: Logs originating from ROS.
   * meteringData：Logs originating from the pay-as-you-go model.
   * 
   * @example
   * computeNest
   */
  logSource?: string;
  /**
   * @remarks
   * The Logstore. You must specify this parameter if you set LogSource to application.
   * 
   * @example
   * logabc
   */
  logstore?: string;
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
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. Valid values:
   * 
   * *   cn-hangzhou: China (Hangzhou).
   * *   ap-southeast-1: Singapore.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-70a3b15bb626435b****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The order in which you want to sort the results. Valid values:
   * 
   * *   Ascending
   * *   (Default) Descending
   * 
   * @example
   * Ascending: Ascending order
   * 
   * Descending (default value): Descending order
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

