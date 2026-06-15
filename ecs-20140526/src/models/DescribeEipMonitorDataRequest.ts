// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The allocation ID of the EIP.
   * 
   * This parameter is required.
   */
  allocationId?: string;
  /**
   * @remarks
   * The end of the query time range, in UTC. Specify the time in the ISO 8601 format: `YYYY-MM-DDThh:mm:ssZ`. The end time must be later than `StartTime`.
   * 
   * This parameter is required.
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The aggregation period for monitoring data, in seconds. Valid values: 60, 300, and 900.
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the Elastic IP Address (EIP). You can call the `DescribeRegions` operation to get the latest list of regions.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start of the query time range, in UTC. Specify the time in the ISO 8601 format: `YYYY-MM-DDThh:mm:ssZ`. The start time must be within the past 30 days and earlier than `EndTime`.
   * 
   * This parameter is required.
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

