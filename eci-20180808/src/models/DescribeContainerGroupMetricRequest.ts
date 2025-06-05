// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eci-bp17da5olmkuagfr****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The end of the time range to query. The default value is the current time.
   * 
   * Specify the time in RFC 3339 format.
   * 
   * @example
   * 2019-09-12T01:05:00.000Z
   */
  endTime?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The data aggregation period. Unit: seconds. Valid values: 15, 30, 60, and 600. Default value: 60.
   * 
   * >  If the StartTime and EndTime parameters are not specified, the system returns the monitoring data generated in the last 5 minutes with a data aggregation period of 15s. The Period parameter is ignored.
   * 
   * @example
   * 15
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The beginning of the time range must be a time point in the last 30 days. The default value is 5 minutes before the value of EndTime.
   * 
   * Specify the time in RFC 3339 format. For example, to query the data starting from March 12, 2019, 09:00 UTC+8, you can set the parameter to 2019-03-12T09:00:00.000+08:00 or 2019-03-12T01:00:00.000Z.
   * 
   * @example
   * 2019-03-12T01:00:00.000Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
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
      containerGroupId: 'string',
      endTime: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'string',
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

