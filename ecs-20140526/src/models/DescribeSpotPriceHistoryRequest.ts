// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpotPriceHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601 standard](https://help.aliyun.com/document_detail/25696.html) in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is empty by default. If this parameter is empty, the current time is used.
   * 
   * @example
   * 2017-08-22T08:45:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. The specified time can be up to 30 days earlier than the specified EndTime value.
   * 
   * This parameter is empty by default. If this parameter is empty, the time that is 3 hours earlier than the specified EndTime value is used.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.t1.xsmall
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * *   optimized: The instance is I/O optimized.
   * *   none: The instance is not I/O optimized.
   * 
   * For instances of generation I instance families, the default value is none.
   * 
   * For instances of other instance families, the default value is optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The network type of the spot instance. Valid values:
   * 
   * *   classic: classic network
   * *   vpc: Virtual Private Cloud (VPC)
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
   * - linux
   * - windows
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The line from which the query starts.
   * 
   * Default value: 0
   * 
   * @example
   * 0
   */
  offset?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The zone ID of the spot instance.
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
   * 
   * *   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * *   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Spot instances are billed by second. We recommend that you specify a protection period based on your business requirements.
   * 
   * >  This parameter takes effect only if you set SpotStrategy to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter and the value of EndTime can be up to 30 days apart. Specify the time in the [ISO 8601 standard](https://help.aliyun.com/document_detail/25696.html) in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is left empty by default. If this parameter is empty, the time that is 3 hours earlier than the value of EndTime is used.
   * 
   * @example
   * 2017-08-22T08:45:08Z
   */
  startTime?: string;
  /**
   * @remarks
   * The spot price (market price) of the spot instance.
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

