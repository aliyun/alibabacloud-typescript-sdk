// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConnectionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The duration when the cloud desktop is connected, which is the minimum value for condition filtering.
   * 
   * @example
   * 100
   */
  connectDurationFrom?: number;
  /**
   * @remarks
   * The duration when the cloud desktop is connected, which is the maximum value for condition filtering.
   * 
   * @example
   * 100
   */
  connectDurationTo?: number;
  /**
   * @remarks
   * The time when the cloud desktop stops to be connected, which is the minimum value for condition filtering. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631266200000
   */
  connectEndTimeFrom?: number;
  /**
   * @remarks
   * The time when the cloud desktop stops to be connected, which is the maximum value for condition filtering. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631268000000
   */
  connectEndTimeTo?: number;
  /**
   * @remarks
   * The time when the cloud desktop starts to be connected, which is the minimum value for condition filtering. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1631239200000
   */
  connectStartTimeFrom?: number;
  /**
   * @remarks
   * The time when the cloud desktop starts to be connected, which is the maximum value for condition filtering. The value is a UNIX timestamp. Unit: milliseconds.
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
   * The type of the user account.
   * 
   * Valid values:
   * 
   * *   SIMPLE: convenience account
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   AD_CONNECTOR: enterprise AD account
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * SIMPLE
   */
  endUserType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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

