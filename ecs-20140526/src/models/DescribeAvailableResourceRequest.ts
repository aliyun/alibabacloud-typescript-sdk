// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of vCPU cores for the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter applies only when `DestinationResource` is set to `InstanceType`.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * - cloud: basic cloud disk.
   * 
   * - cloud_efficiency: ultra cloud disk.
   * 
   * - cloud_ssd: SSD cloud disk.
   * 
   * - ephemeral_ssd: local SSD disk.
   * 
   * - cloud_essd: ESSD cloud disk.
   * 
   * - cloud_auto: ESSD AutoPL cloud disk.
   * 
   * <props="china">
   * 
   * - cloud_essd_entry: ESSD Entry cloud disk.
   * 
   * @example
   * cloud_ssd
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * @example
   * dh-bp165p6xk2tlw61e****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The type of resource to query. Valid values:
   * 
   * - Zone: availability zone.
   * 
   * - IoOptimized: I/O optimized.
   * 
   * - InstanceType: instance type.
   * 
   * - Network: network type.
   * 
   * - ddh: dedicated host.
   * 
   * - SystemDisk: system disk.
   * 
   * - DataDisk: data disk.
   * 
   * > When `DestinationResource` is set to `SystemDisk`, you must specify `InstanceType` because available system disks depend on the instance type.
   * 
   * For details on how to specify this parameter, see the **API description** section.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceType
   */
  destinationResource?: string;
  /**
   * @remarks
   * The billing method of the resource. For more information, see [Billing overview](https://help.aliyun.com/document_detail/25398.html). Valid values:
   * 
   * - PrePaid: The subscription billing method.
   * 
   * - PostPaid: The pay-as-you-go billing method.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html). You can also call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to get the latest list of instance types.
   * 
   * For details on how to specify this parameter, see the **API description** section.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * - none: The instance is not I/O optimized.
   * 
   * - optimized: The instance is I/O optimized.
   * 
   * Default value: optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The memory size for the instance type, in GiB. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter applies only when `DestinationResource` is set to `InstanceType`.
   * 
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - vpc: VPC.
   * 
   * - classic: classic network.
   * 
   * @example
   * vpc
   */
  networkCategory?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to get the latest list of Alibaba Cloud regions.
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
   * The resource type. Valid values:
   * 
   * - instance: ECS instance.
   * 
   * - disk: cloud disk.
   * 
   * - reservedinstance: reserved instance.
   * 
   * - ddh: dedicated host.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The scope of the reserved instance. Valid values:
   * 
   * - Region: The reserved instance is scoped to a region.
   * 
   * - Zone: The reserved instance is scoped to an availability zone.
   * 
   * @example
   * Region
   */
  scope?: string;
  /**
   * @remarks
   * The protection period for the spot instance. Unit: hours. Default value: 1. Valid values:
   * 
   * - 1: Alibaba Cloud guarantees that the instance will not be automatically reclaimed within 1 hour of creation. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or reclaim the instance.
   * 
   * - 0: Alibaba Cloud does not guarantee that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or reclaim the instance.
   * 
   * Alibaba Cloud sends a notification through ECS system events 5 minutes before reclaiming an instance. Spot instances are billed by the second. We recommend that you select a protection period based on the expected runtime of your tasks.
   * 
   * > This parameter applies only when `InstanceChargeType` is set to `PostPaid` and `SpotStrategy` is set to `SpotWithPriceLimit` or `SpotAsPriceGo`.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The bidding strategy for pay-as-you-go instances. Valid values:
   * 
   * - NoSpot: A standard pay-as-you-go instance.
   * 
   * - SpotWithPriceLimit: A spot instance for which you specify a maximum hourly price.
   * 
   * - SpotAsPriceGo: A spot instance for which the system automatically bids based on the current market price, up to the pay-as-you-go price.
   * 
   * Default value: NoSpot.
   * 
   * This parameter applies only when `InstanceChargeType` is set to `PostPaid`.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * - cloud: basic cloud disk.
   * 
   * - cloud_efficiency: ultra cloud disk.
   * 
   * - cloud_ssd: SSD cloud disk.
   * 
   * - ephemeral_ssd: local SSD disk.
   * 
   * - cloud_essd: ESSD cloud disk.
   * 
   * - cloud_auto: ESSD AutoPL cloud disk.
   * 
   * <props="china">
   * 
   * - cloud_essd_entry: ESSD Entry cloud disk.
   * 
   * 
   * 
   * 
   * About the default value:
   * 
   * - If `InstanceType` specifies a discontinued instance type, the default value is `cloud`.
   * 
   * - Otherwise, the default value is `cloud_efficiency`. <props="china">After January 30, 2026, for instance types that support only ESSD cloud disks, the default value changes from cloud_efficiency to cloud_essd PL0. For more information, see the [official announcement](https://www.aliyun.com/notice/117844).
   * 
   * > When `ResourceType` is set to `instance` and `DestinationResource` is set to `DataDisk`, this parameter is required.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The ID of the availability zone.
   * 
   * This parameter has no default value. If you do not specify this parameter, the operation returns resources that meet the query conditions in all availability zones within the specified region.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      dataDiskCategory: 'DataDiskCategory',
      dedicatedHostId: 'DedicatedHostId',
      destinationResource: 'DestinationResource',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      ioOptimized: 'IoOptimized',
      memory: 'Memory',
      networkCategory: 'NetworkCategory',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      spotDuration: 'SpotDuration',
      spotStrategy: 'SpotStrategy',
      systemDiskCategory: 'SystemDiskCategory',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      dataDiskCategory: 'string',
      dedicatedHostId: 'string',
      destinationResource: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      ioOptimized: 'string',
      memory: 'number',
      networkCategory: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      scope: 'string',
      spotDuration: 'number',
      spotStrategy: 'string',
      systemDiskCategory: 'string',
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

