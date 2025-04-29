// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEniMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-05-21T12:22:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The secondary ENI ID. By default, all secondary ENIs that are bound to the specified instance are queried.
   * 
   * @example
   * eni-bp19da36d6xdwey****
   */
  eniId?: string;
  /**
   * @remarks
   * The ID of the instance to which the secondary ENI is bound.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1a5zr3u7nq9cx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The interval at which to retrieve the monitoring data. Unit: seconds. Valid values:
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
   * 2018-05-21T12:19:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eniId: 'EniId',
      instanceId: 'InstanceId',
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
      endTime: 'string',
      eniId: 'string',
      instanceId: 'string',
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

