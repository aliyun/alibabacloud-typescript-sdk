// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs of the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * The Cores parameter takes effect only when the DestinationResource parameter is set to InstanceType.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   ephemeral_ssd: local SSD
   * *   cloud_essd: ESSD
   * *   cloud_auto: ESSD AutoPL disk
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
   * The resource type to query. Valid values:
   * 
   * *   Zone: zone.
   * *   IoOptimized: I/O optimized resource.
   * *   InstanceType: instance type.
   * *   SystemDisk: system disk.
   * *   DataDisk: data disk.
   * *   Network: network type.
   * *   ddh: dedicated host.
   * 
   * For more information about how to configure the DestinationResource parameter, see the **Description** section of this topic.
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
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance types. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the most recent instance type list.
   * 
   * For more information about how to configure the InstanceType parameter, see the **Description** section of this topic.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the instance is an I/O optimized instance. Valid values:
   * 
   * *   none: The instance is a non-I/O optimized instance.
   * *   optimized: The instance is an I/O optimized instance.
   * 
   * Default value: optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * The Memory parameter takes effect only when the DestinationResource parameter is set to InstanceType.
   * 
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   vpc
   * *   classic
   * 
   * @example
   * vpc
   */
  networkCategory?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region for which to query resources. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The type of the resource. Valid values:
   * 
   * *   instance: ECS instance.
   * *   disk: cloud disk.
   * *   reservedinstance: reserved instance.
   * *   ddh: dedicated host.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The scope of the reserved instance. Valid values:
   * 
   * *   Region: regional.
   * *   Zone: zonal.
   * 
   * @example
   * Region
   */
  scope?: string;
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Default value: 1. Valid values:
   * 
   * *   1: After a preemptible instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * *   0: After a preemptible instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Preemptible instances are billed by second. We recommend that you specify a protection period based on your business requirements.
   * 
   * >  This parameter takes effect only if SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The bidding policy for pay-as-you-go instances. Valid values:
   * 
   * *   NoSpot: The instance is a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price is automatically used as the bid price. The market price can be up to the pay-as-you-go price.
   * 
   * Default value: NoSpot.
   * 
   * The SpotStrategy parameter takes effect only when the InstanceChargeType parameter is set to PostPaid.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   ephemeral_ssd: local SSD
   * *   cloud_essd: Enterprise SSD (ESSD)
   * *   cloud_auto: ESSD AutoPL disk
   * 
   * Default value: cloud_efficiency.
   * 
   * >  This parameter must be specified when ResourceType is set to instance and DestinationResource is set to DataDisk. If you do not specify this parameter, the default value takes effect.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The ID of the zone where the instance resides.
   * 
   * This parameter is empty by default. When this parameter is empty, the system returns resources that match the other criteria in all zones within the region specified by `RegionId`.
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

