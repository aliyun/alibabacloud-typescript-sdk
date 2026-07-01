// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of vCPU cores of the instance type. For valid values, see [Instance family](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter takes effect only when DestinationResource is set to InstanceType.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The category of the data disk. Valid values: 
   *          
   * - cloud: basic disk.
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - ephemeral_ssd: local SSD.
   * - cloud_essd: enterprise SSD (ESSD).
   * - cloud_auto: ESSD AutoPL disk.
   * <props="china">
   * - cloud_essd_entry: ESSD Entry disk.
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
   * - Zone: zone.
   * - IoOptimized: I/O optimized.
   * - InstanceType: instance type.
   * - Network: network type.
   * - ddh: dedicated host.
   * - SystemDisk: system disk.
   * - DataDisk: data disk.
   * 
   * > When DestinationResource is set to `SystemDisk`, you must specify InstanceType because system disks are restricted by instance types.
   * 
   * For more information about how to set the DestinationResource parameter, see the **operation description** section of this topic.
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
   * - PrePaid: subscription.  
   * - PostPaid: pay-as-you-go.
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Instance family](https://help.aliyun.com/document_detail/25378.html). You can also invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the most recent instance type list.
   * 
   * For more information about how to set the InstanceType parameter, see the **operation description** section at the beginning of this topic.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the instance is an I/O optimized instance. Valid values:
   * 
   * - none: non-I/O optimized instance.
   * - optimized: I/O optimized instance.
   * 
   * Default value: optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB. For valid values, see [Instance family](https://help.aliyun.com/document_detail/25378.html).
   * 
   * This parameter takes effect only when DestinationResource is set to InstanceType.
   * 
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @remarks
   * The network type. Valid values: 
   *         
   * - vpc: virtual private cloud (VPC).
   * - classic: classic network. The classic network is deprecated. For more information, see [Deprecation notice](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * @example
   * vpc
   */
  networkCategory?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the destination region. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * - instance: ECS instance.
   * - disk: cloud disk.
   * - reservedinstance: reserved instance.
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
   * - Region: regional.
   * - Zone: zonal.
   * 
   * @example
   * Region
   */
  scope?: string;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * - 1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After 1 hour, the system compares the bid price with the market price and checks the inventory to determine whether to retain automatic release the instance.
   * - 0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the inventory to determine whether to retain automatic release the instance.
   * 
   * Alibaba Cloud sends an ECS system event notification 5 minutes before the instance is released. Spot instances are billed by second. Select an appropriate protection period based on the expected task execution duration.
   * 
   * > This parameter takes effect only when `InstanceChargeType` is set to `PostPaid` and `SpotStrategy` is set to `SpotWithPriceLimit` or `SpotAsPriceGo`.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The bidding policy for pay-as-you-go instances. Valid values: 
   *          
   * - NoSpot: a regular pay-as-you-go instance.
   * - SpotWithPriceLimit: a spot instance with a maximum price limit.
   * - SpotAsPriceGo: a spot instance priced at the market price with the pay-as-you-go price as the upper limit.
   * 
   * Default value: NoSpot.
   * 
   * This parameter takes effect only when InstanceChargeType is set to `PostPaid`.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The category of the system disk. Valid values: 
   *          
   * - cloud: basic disk.
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - ephemeral_ssd: local SSD.
   * - cloud_essd: enterprise SSD (ESSD).
   * - cloud_auto: ESSD AutoPL disk.
   * <props="china">
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * 
   * Default value description:
   * 
   * - If InstanceType is set to a retired instance type, the default value is `cloud`.
   * - In other cases, the default value is `cloud_efficiency`.<props="china">After January 30, 2026, for instance types that support only cloud_essd, the default value is changed from cloud_efficiency to cloud_essd PL0. For more information, see [Change notice](https://www.aliyun.com/notice/117844).
   * 
   * > When ResourceType is set to instance and DestinationResource is set to DataDisk, the SystemDiskCategory parameter is required. If you do not specify this parameter, the default value takes effect.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * Default value: null. The operation returns resources that match the query conditions across all zones in the specified region (RegionId).
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

