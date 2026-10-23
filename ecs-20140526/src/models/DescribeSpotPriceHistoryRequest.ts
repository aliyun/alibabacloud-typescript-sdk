// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotPriceHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time to query the historical prices of spot instances. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * Default value: empty. An empty value indicates the current time.
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
   * Specifies whether the spot instance is an I/O optimized instance. Valid values:
   * 
   * - optimized: The spot instance is an I/O optimized instance.
   * 
   * - none: The spot instance is a non-I/O optimized instance.
   * 
   * Default value for Generation I instances: none.
   * 
   * Default value for other instance family types: optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The network type of the spot instance. Valid values:
   * 
   * - vpc: VPC.
   * - classic: classic network. This feature is retired. For more information, see [Retirement notice](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The operating system platform of the instance. Valid values:
   * 
   * - linux
   * - windows
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The starting row for the query.
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
   * - 1: Alibaba Cloud guarantees that the instance is not automatically released within 1 hour after it is created. After 1 hour, the system automatically compares your bid with the market price and checks resource inventory to determine whether to retain or revoke the instance.
   * - 0: Alibaba Cloud does not guarantee that the instance runs for 1 hour after it is created. The system automatically compares your bid with the market price and checks resource inventory to determine whether to retain or revoke the instance.
   * 
   * Alibaba Cloud sends you a notification through an ECS system event 5 minutes before the instance is revoked. Spot instances are billed by the second. Select an appropriate protection period based on the execution duration of specific tasks.
   * 
   * > This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The start time to query the historical prices of spot instances. The time span between the start time and the specified end time cannot exceed 30 days. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * Default value: empty. An empty value indicates 3 hours before the end time.
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

