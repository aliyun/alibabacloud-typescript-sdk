// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-2zeerraiwb7uj6idcfv****
   */
  allocationId?: string;
  /**
   * @remarks
   * The end time of the data query. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC. For example, 20:00:00 on January 10, 2013 (UTC+8) is specified as `2013-01-10T12:00:00Z`. If the specified time is not an exact minute, the next minute is automatically used as the end time.
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
   * The time interval of each monitoring data point. Unit: seconds. Valid values: **60** (default), **300**, **900**, and **3600**.
   * - If the value of (**EndTime** - **StartTime**) / **Period** is less than or equal to 400, all monitoring data between the start time and the end time is returned.
   * - If the value of (**EndTime** - **StartTime**) / **Period** is greater than 400, monitoring data cannot be returned.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the EIP. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start time of the data query. Specify the time in the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time must be in UTC. For example, 20:00:00 on January 10, 2013 (UTC+8) is specified as `2013-01-10T12:00:00Z`. If the specified time is not an exact minute, the next minute is automatically used as the start time.
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

