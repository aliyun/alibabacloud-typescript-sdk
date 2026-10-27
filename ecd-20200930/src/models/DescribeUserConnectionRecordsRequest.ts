// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConnectionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum connection duration used as a filter condition.
   * 
   * @example
   * 100
   */
  connectDurationFrom?: number;
  /**
   * @remarks
   * The maximum connection duration used as a filter condition.
   * 
   * @example
   * 100
   */
  connectDurationTo?: number;
  /**
   * @remarks
   * The minimum end time of the connection used as a filter condition. The time is formatted as a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631266200000
   */
  connectEndTimeFrom?: number;
  /**
   * @remarks
   * The maximum end time of the connection used as a filter condition. The time is formatted as a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631268000000
   */
  connectEndTimeTo?: number;
  /**
   * @remarks
   * The minimum start time of the connection used as a filter condition. The time is formatted as a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631239200000
   */
  connectStartTimeFrom?: number;
  /**
   * @remarks
   * The maximum start time of the connection used as a filter condition. The time is formatted as a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631241000000
   */
  connectStartTimeTo?: number;
  /**
   * @remarks
   * The ID of the cloud computer pool.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-138dsptkrt00u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The ID of the authorized user.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The type of the user account system.
   * 
   * @example
   * SIMPLE
   */
  endUserType?: string;
  /**
   * @remarks
   * The number of entries to return per page in a paging query.
   * Maximum value: 100.
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query. An empty NextToken indicates that no more results are available.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the list of regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectDurationFrom: 'ConnectDurationFrom',
      connectDurationTo: 'ConnectDurationTo',
      connectEndTimeFrom: 'ConnectEndTimeFrom',
      connectEndTimeTo: 'ConnectEndTimeTo',
      connectStartTimeFrom: 'ConnectStartTimeFrom',
      connectStartTimeTo: 'ConnectStartTimeTo',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      endUserType: 'EndUserType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectDurationFrom: 'number',
      connectDurationTo: 'number',
      connectEndTimeFrom: 'number',
      connectEndTimeTo: 'number',
      connectStartTimeFrom: 'number',
      connectStartTimeTo: 'number',
      desktopGroupId: 'string',
      desktopId: 'string',
      endUserId: 'string',
      endUserType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

