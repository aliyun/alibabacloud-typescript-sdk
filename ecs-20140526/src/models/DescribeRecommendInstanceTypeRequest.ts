// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecommendInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs of the ECS instance.
   * 
   * >If you specify both the Cores and Memory parameters, the system matches all instance types that meet the specified vCPU and memory requirements.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The billing method of the ECS instance. For details, see [Billing overview](https://help.aliyun.com/document_detail/25398.html). Valid values:
   * 
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
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
   * - EntryLevel: entry level.
   * - EnterpriseLevel: enterprise level.
   * - CreditEntryLevel: credit-based entry level. For details, see [Burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The specified instance type. For details, see [Instance families](https://help.aliyun.com/document_detail/25378.html). You can also call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the most recent instance type list.
   * 
   * > If you specify InstanceType, you cannot specify Cores or Memory.
   * 
   * @example
   * ecs.hfg6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The collection of alternative instance families from which alternative instance types are selected. You can set up to 10 instance families in this parameter.
   * 
   * @example
   * ecs.hfg6
   */
  instanceTypeFamily?: string[];
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. If the instance type supports only non-I/O optimized instances, you cannot set the IoOptimized parameter. Valid values:
   * 
   * - optimized: I/O optimized.
   * - none: non-I/O optimized.
   * 
   * Default value: optimized.
   * 
   * If you specify a retired instance type, the default value is none.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The maximum acceptable hourly price for pay-as-you-go or spot instances.
   * 
   * >To set the maximum hourly price for a spot instance, set SpotStrategy to SpotWithPriceLimit.
   * 
   * @example
   * 10.0
   */
  maxPrice?: number;
  /**
   * @remarks
   * The memory size of the ECS instance. Unit: GiB.
   * 
   * >If you specify both the Cores and Memory parameters, the system matches all instance types that meet the specified vCPU and memory requirements.
   * 
   * @example
   * 8.0
   */
  memory?: number;
  /**
   * @remarks
   * The network type of the ECS instance. Valid values:
   * 
   * - vpc: virtual private cloud (VPC).
   * - classic: classic network. The classic network is no longer available. For more information, see [Retirement notice](https://help.aliyun.com/document_detail/2833134.html).
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
   * The priority recommendation strategy. Valid values:
   * 
   * - InventoryFirst: inventory first.
   * - PriceFirst: price first. Instance types are sorted by the hourly vCPU unit price in ascending order.
   * - NewProductFirst: newest product first.
   * 
   * Default value: InventoryFirst.
   * 
   * @example
   * PriceFirst
   */
  priorityStrategy?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * - UPGRADE: upgrade or downgrade an instance type.
   * - CREATE: create an instance.
   * 
   * Default value: CREATE.
   * 
   * @example
   * CREATE
   */
  scene?: string;
  /**
   * @remarks
   * The bidding policy for the spot instance. Valid values:
   * 
   * - NoSpot: a pay-as-you-go instance.
   * - SpotWithPriceLimit: a spot instance with a maximum hourly price.
   * - SpotAsPriceGo: a spot instance for which the system automatically bids at up to the pay-as-you-go price.
   * 
   * > When you use SpotStrategy, set InstanceChargeType to PostPaid.
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
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD (ESSD).
   * - cloud: basic disk.
   * 
   * Default value for non-I/O optimized instances: cloud.
   * 
   * Default value for I/O optimized instances: cloud_efficiency.
   * 
   * @example
   * cloud_ssd
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The zone ID. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the most recent zone list.
   * 
   * Set ZoneMatchMode to Include (default value) to preferentially recommend instance types in the zone specified by ZoneId and also list instance types in other zones within the same region.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  /**
   * @remarks
   * Specifies whether to recommend only instance types in the zone specified by ZoneId. Valid values:
   * 
   * - Strict: recommends only instance types in the zone specified by ZoneId.
   * 
   * - Include: recommends instance types in other zones within the same region.
   * 
   * 
   * When ZoneId is specified, the default value of this parameter is Strict, which indicates that only instance types in the zone specified by ZoneId are recommended.
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

