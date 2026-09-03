// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConnectionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The minimum value of the connection duration used as a filter condition.
   * 
   * @example
   * 100
   */
  connectDurationFrom?: number;
  /**
   * @remarks
   * The maximum value of the connection duration used as a filter condition.
   * 
   * @example
   * 100
   */
  connectDurationTo?: number;
  /**
   * @remarks
   * The minimum value of the connection end time used as a filter condition. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631266200000
   */
  connectEndTimeFrom?: number;
  /**
   * @remarks
   * The maximum value of the connection end time used as a filter condition. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631268000000
   */
  connectEndTimeTo?: number;
  /**
   * @remarks
   * The minimum value of the connection start time used as a filter condition. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631239200000
   */
  connectStartTimeFrom?: number;
  /**
   * @remarks
   * The maximum value of the connection start time used as a filter condition. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631241000000
   */
  connectStartTimeTo?: number;
  /**
   * @remarks
   * The cloud computer pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-138dsptkrt00u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The authorized user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The type of user account system. Valid values:
   * 
   * - SIMPLE: convenience account
   * - AD_CONNECTOR: enterprise AD account
   * 
   * @example
   * SIMPLE
   */
  endUserType?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that there is no next page.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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

