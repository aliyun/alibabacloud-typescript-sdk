// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskMonitorDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1bq5g3dxxo1x4o****
   */
  diskId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.
   * 
   * This parameter is required.
   * 
   * @example
   * 2014-07-23T12:09:00Z
   */
  endTime?: string;
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
   * >  Up to 400 monitoring data entries can be returned at a time. Make sure that the TotalCount value does not exceed 400. The value is calculated by using the following formula: TotalCount = (EndTime - StartTime)/Period.
   * 
   * @example
   * 60
   */
  period?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. If the value of seconds (ss) is not 00, the time is rounded up to the next minute.
   * 
   * >  You can query the monitoring data in the last 30 days. If the value of `StartTime` is more than 30 days earlier than the current time, an error is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 2014-07-23T12:07:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      endTime: 'EndTime',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
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

