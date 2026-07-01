// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotPriceHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query the historical prices of spot instances. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * Default value: null, which indicates the current time.
   * 
   * @example
   * 2017-08-22T08:45:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.t1.xsmall
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the spot instance is I/O optimized. Valid values:
   * 
   * - optimized: The spot instance is an I/O optimization instance.
   * 
   * - none: The spot instance is not an I/O optimization instance.
   * 
   * Default value for Generation I instance families: none.
   * 
   * Default value for other instance families: optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The network type of the spot instance. Valid values:
   * 
   * - vpc: virtual private cloud (VPC).
   * - classic: classic network. This feature has been retired. For more information, see [Retirement notice](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The type of the operating system platform. Valid values:
   * 
   * - linux.
   * - windows.
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The row from which the query starts.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  offset?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * - 1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After 1 hour, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain automatic release the instance.
   * - 0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain automatic release the instance.
   * 
   * Alibaba Cloud sends an ECS system event notification 5 minutes before the instance is released. Spot instances are billed by second. Specify an appropriate protection period based on the expected task execution duration.
   * 
   * > This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The beginning of the time range to query the historical prices of spot instances. The maximum time range between the start time and end time is 30 days. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * Default value: null, which indicates 3 hours before the end time.
   * 
   * @example
   * 2017-08-22T08:45:08Z
   */
  startTime?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceType: 'InstanceType',
      ioOptimized: 'IoOptimized',
      networkType: 'NetworkType',
      OSType: 'OSType',
      offset: 'Offset',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotDuration: 'SpotDuration',
      startTime: 'StartTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceType: 'string',
      ioOptimized: 'string',
      networkType: 'string',
      OSType: 'string',
      offset: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotDuration: 'number',
      startTime: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

