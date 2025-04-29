// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the snapshot. Valid values:
   * 
   * *   Standard: standard snapshot
   * *   Flash: local snapshot
   * *   Archive: archive snapshot
   * 
   * Default value: Standard.
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-10T03:00:00Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The interval at which to query the monitoring data of snapshot sizes. Unit: seconds. Valid values:
   * 
   * *   60
   * *   600
   * *   3600
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-05-10T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
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
      category: 'string',
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

