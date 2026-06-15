// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNewProjectEipMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * This parameter is required.
   */
  allocationId?: string;
  /**
   * @remarks
   * The end of the query time range. The time must be in UTC and formatted as `YYYY-MM-DDThh:mm:ssZ`.
   * 
   * This parameter is required.
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The aggregation period of the monitoring data. Unit: seconds. Valid values: 60, 300, and 900.
   */
  period?: number;
  /**
   * @remarks
   * The ID of the region where the Elastic IP address (EIP) is located.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start of the query time range. The time must be in UTC and formatted as `YYYY-MM-DDThh:mm:ssZ`.
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

