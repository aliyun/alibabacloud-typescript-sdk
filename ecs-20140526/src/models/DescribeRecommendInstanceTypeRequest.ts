// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of vCPU cores of the instance type.
   * 
   * >  If you specify both `Cores` and `Memory`, the system returns all instance types that match the values of the parameters.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The billing method of ECS instances. For more information, see [Billing overview](https://help.aliyun.com/document_detail/25398.html). Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * Default value: PostPaid.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The level of the instance family. Valid values:
   * 
   * *   EntryLevel: entry level.
   * *   EnterpriseLevel: enterprise level.
   * *   CreditEntryLevel: credit-based entry level. For more information, see [Burstable instance families](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The instance type. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the most recent instance type list.
   * 
   * >  If you specify `InstanceType`, you cannot specify `Cores` or `Memory`.
   * 
   * @example
   * ecs.hfg6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance families from which the alternative instance types are selected. You can specify up to 10 instance families.
   * 
   * @example
   * ecs.hfg6
   */
  instanceTypeFamily?: string[];
  /**
   * @remarks
   * Specifies whether instances of the instance type are I/O optimized. You cannot specify IoOptimized if the instance type supports only non-I/O optimized instances. Valid values:
   * 
   * *   optimized: The instances are I/O optimized.
   * *   none: The instances are non-I/O optimized.
   * 
   * Default value: optimized.
   * 
   * If you query alternative instance types for retired instance types, this parameter is set to none by default.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The maximum hourly price for pay-as-you-go instances or spot instances.
   * 
   * >  This parameter takes effect only when `SpotStrategy` is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 10.0
   */
  maxPrice?: number;
  /**
   * @remarks
   * The memory size of the instance type. Unit: GiB.
   * 
   * >  If you specify both `Cores` and `Memory`, the system returns all instance types that match the values of the parameters.
   * 
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @remarks
   * The network type of ECS instances. Valid values:
   * 
   * *   classic
   * *   vpc
   * 
   * Default value: vpc.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The policy that is used to recommend instance types. Valid values:
   * 
   * *   InventoryFirst: recommends instance types in descending order of resource availability.
   * *   PriceFirst: recommends the most cost-effective instance types. Recommended instance types appear based on the hourly prices of vCPUs in ascending order.
   * *   NewProductFirst: recommends the latest instance types.
   * 
   * Default value: InventoryFirst.
   * 
   * @example
   * PriceFirst
   */
  priorityStrategy?: string;
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
   * The scenario in which instance types are recommended. Valid values:
   * 
   * *   UPGRADE: instance type upgrade or downgrade
   * *   CREATE: instance creation
   * 
   * Default value: CREATE.
   * 
   * @example
   * CREATE
   */
  scene?: string;
  /**
   * @remarks
   * The bidding policy of spot instances. Valid values:
   * 
   * *   NoSpot: The instances are regular pay-as-you-go instances.
   * *   SpotWithPriceLimit: The instances are created as spot instances for which you can specify the maximum hourly price.
   * *   SpotAsPriceGo: The instances are spot instances for which the market price at the time of purchase is automatically used as the bid price. The market price can be up to the pay-as-you-go price.
   * 
   * >  If you specify `SpotStrategy`, you must set `InstanceChargeType` to `PostPaid`.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: Enterprise SSD (ESSD)
   * *   cloud: basic disk
   * 
   * For non-I/O optimized instances, the default value is cloud.
   * 
   * For I/O optimized instances, the default value is cloud_efficiency.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * We recommend that you set ZoneMatchMode to Include, which is the default value. This way, the system recommends instance types that are available in the zone specified by ZoneId based on the priority policy. The system also recommends instance types that are available in other zones within the same region.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  /**
   * @remarks
   * Specifies whether to recommend only instance types in the zone specified by ZoneId. Valid values:
   * 
   * *   Strict: recommends only instance types that are available in the zone specified by ZoneId.
   * *   Include: recommends instance types that are available in the zone specified by ZoneId and instance types that are available in other zones within the same region.
   * 
   * If `ZoneId` is specified, the default value of this parameter is Strict, which indicates that only instance types in the zone specified by ZoneId are recommended.
   * 
   * @example
   * Strict
   */
  zoneMatchMode?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      instanceChargeType: 'InstanceChargeType',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      ioOptimized: 'IoOptimized',
      maxPrice: 'MaxPrice',
      memory: 'Memory',
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      priorityStrategy: 'PriorityStrategy',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scene: 'Scene',
      spotStrategy: 'SpotStrategy',
      systemDiskCategory: 'SystemDiskCategory',
      zoneId: 'ZoneId',
      zoneMatchMode: 'ZoneMatchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      instanceChargeType: 'string',
      instanceFamilyLevel: 'string',
      instanceType: 'string',
      instanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
      ioOptimized: 'string',
      maxPrice: 'number',
      memory: 'number',
      networkType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      priorityStrategy: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scene: 'string',
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      zoneId: 'string',
      zoneMatchMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypeFamily)) {
      $dara.Model.validateArray(this.instanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

