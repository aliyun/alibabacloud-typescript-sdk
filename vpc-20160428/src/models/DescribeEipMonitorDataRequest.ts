// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-2zeerraiwb7uj6idcfv****
   */
  allocationId?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. For example, `2013-01-10T12:00:00Z` specifies 20:00:00 (UTC+8) on January 10, 2013.
   * 
   * If the value of seconds (ss) is not 00, the end time is automatically rounded up to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-01-05T03:05:10Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The duration of each monitoring data entry. Unit: seconds. Valid values: **60** (default), **300**, **900**, and **3600**.
   * 
   * *   If the value of **(EndTime** - **StartTime**)/**Period** is greater than 200, a maximum of 200 monitoring data entries are returned at a time.
   * *   If the value of (**EndTime** - **StartTime**)/**Period** is less than or equal to 200, only the monitoring data collected between the start time and end time is returned.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The ID of the region to which the EIP belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in UTC. Specify the time in the ISO 8601 standard in `YYYY-MM-DDThh:mm:ssZ` format. For example, `2013-01-10T12:00:00Z` specifies 20:00:00 (UTC+8) on January 10, 2013.
   * 
   * If the value of seconds (ss) is not 00, the start time is automatically rounded up to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-01-05T01:05:05Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

