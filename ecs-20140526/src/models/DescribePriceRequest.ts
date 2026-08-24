// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the Nth data disk when the disk type is enterprise SSD. This parameter is valid only when `DataDisk.N.Category=cloud_essd`. Valid values:
   * 
   * - PL0
   * - PL1 (default)
   * - PL2
   * - PL3
   * 
   * Valid values of N: 1 to 16.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data disk N. Unit: GiB. Valid values:
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1000 × Capacity - Baseline Performance}.
   * 
   * @example
   * 40000
   */
  provisionedIops?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
      provisionedIops: 'ProvisionedIops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      performanceLevel: 'string',
      size: 'number',
      provisionedIops: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestSchedulerOptions extends $dara.Model {
  /**
   * @remarks
   * This parameter takes effect only when ResourceType is set to instance.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The deployment set strategy. Valid values:
   * - Availability: high availability.
   * - AvailabilityGroup: high availability for deployment set groups.
   * - LowLatency: low network latency.
   * - ProximityLooseDispersion: proximity loose dispersion.
   * 
   * >Only when the strategy is set to ProximityLooseDispersion, the API response includes the price details for "Resource": "deploymentSet". Other deployment set strategies are free of charge, so the API response does not include the price information for "Resource": "deploymentSet".
   * 
   * @example
   * ProximityLooseDispersion
   */
  deploymentSetStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      deploymentSetStrategy: 'DeploymentSetStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      deploymentSetStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the system disk. You must specify `ImageId` when you query the price of a system disk. Valid values:
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the system disk when the system disk type is enterprise SSD. This parameter is valid only when `SystemDiskCategory=cloud_essd`. Valid values:
   * 
   * PL0.
   * PL1 (default).
   * PL2.
   * PL3.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * @example
   * 80
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestRecurrenceRules extends $dara.Model {
  /**
   * @remarks
   * The end time of the time-sharing assurance. The value must be on the hour.
   * 
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @remarks
   * The type of the recurrence rule policy. Valid values:
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The value of the recurrence rule.
   * 
   * @example
   * 5
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The effective period start time of the time-sharing assurance. The value must be on the hour.
   * 
   * @example
   * 4
   */
  startHour?: number;
  static names(): { [key: string]: string } {
    return {
      endHour: 'EndHour',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      startHour: 'StartHour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endHour: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      startHour: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $dara.Model {
  dataDisk?: DescribePriceRequestDataDisk[];
  schedulerOptions?: DescribePriceRequestSchedulerOptions;
  systemDisk?: DescribePriceRequestSystemDisk;
  /**
   * @remarks
   * The number of Elastic Computing Service (ECS) servers that you want to purchase in a batch. Valid values: 1 to 1000.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The total number of times that the elasticity assurance can take effect. Set the value to Unlimited. Only the unlimited mode is supported within the effective period.
   * 
   * @example
   * Unlimited
   */
  assuranceTimes?: string;
  /**
   * @remarks
   * The capacity. Unit: GiB.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The dedicated host type. You can call [DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html) to query the most recent list of dedicated host types.
   * 
   * @example
   * ddh.c5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * This parameter takes effect only when ResourceType is set to instance.
   * 
   * @example
   * centos_7_05_64_20G_alibase_20181212.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The total number of instances that you want to reserve within an instance type.
   * 
   * @example
   * 100
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The total number of vCPUs supported by the elasticity assurance. When you call this operation, the system calculates the number of instances that the elasticity assurance needs to support based on the specified InstanceType (rounded up).
   * 
   * @example
   * 1024
   */
  instanceCpuCoreCount?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type. You must specify this parameter when ResourceType is set to `instance`. For more details, see [Instance family](https://help.aliyun.com/document_detail/25378.html). You can also invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the most recent instance type list.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance type. Only a single instance type is supported for the unlimited elasticity assurance.
   * 
   * @example
   * ecs.g6.xlarge
   */
  instanceTypeList?: string[];
  /**
   * @remarks
   * The billing method for network bandwidth. Valid values:
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the queried instance is an I/O optimized instance. Valid values:
   * 
   * - none: non-I/O optimized.
   * - optimized: I/O optimized.
   * 
   * If InstanceType is set to an instance type in [Series I](https://help.aliyun.com/document_detail/55263.html), the default value is none.
   * 
   * If InstanceType is set to an instance type not in [Series I](https://help.aliyun.com/document_detail/55263.html), the default value is optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The Internet service operation provider. Valid values:
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The payment option of the reserved instance. Valid values:
   * 
   * @example
   * All Upfront
   */
  offeringType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing duration of the ECS instance. Valid values:
   * 
   * <props="china">
   * - If PriceUnit is set to Month: 1 to 9.
   * - If PriceUnit is set to Year: 1 to 5.
   * - If PriceUnit is set to Hour: 1.
   * - If PriceUnit is set to Week: 1 to 4.
   * 
   * 
   * 
   * <props="intl">
   * - If PriceUnit is set to Month: 1 to 9.
   * - If PriceUnit is set to Year: 1 to 5.
   * - If PriceUnit is set to Hour: 1.
   * 
   * 
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The operating system of the image used by the instance. Valid values:
   * 
   * @example
   * Linux
   */
  platform?: string;
  /**
   * @remarks
   * Queries the price of an ECS instance for different billing cycles. Valid values:
   * 
   * <props="china">
   * - Month: monthly pricing unit.
   * - Year: yearly pricing unit.
   * - Hour (default): hourly pricing unit.
   * - Week: weekly pricing unit.
   * 
   * 
   * 
   * <props="intl">
   * - Month: monthly pricing unit.
   * - Year: yearly pricing unit.
   * - Hour (default): hourly pricing unit.
   * 
   * @example
   * Year
   */
  priceUnit?: string;
  /**
   * @remarks
   * The list of recurrence rules for the time-sharing elasticity assurance.
   */
  recurrenceRules?: DescribePriceRequestRecurrenceRules[];
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
   * The type of the resource. Valid values:
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The scope of the reserved instance. Valid values:
   * 
   * @example
   * Zone
   */
  scope?: string;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The bidding policy for pay-as-you-go instances. Valid values:
   * - NoSpot: a regular pay-as-you-go instance.
   * - SpotWithPriceLimit: a spot instance with a maximum hourly price.
   * - SpotAsPriceGo: a spot instance for which the system automatically bids at up to the pay-as-you-go price.
   * 
   * Default value: NoSpot.
   * 
   * > This parameter takes effect only when `PriceUnit=Hour` and `Period=1`. Because the default value of `PriceUnit` is `Hour` and the default value of `Period` is `1`, you do not need to set the `PriceUnit` and `Period` parameters when you specify this parameter.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The effective period of the time-sharing elasticity assurance. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2020-10-30T06:32:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > Spot instance prices may vary across zones. When you query spot instance prices, specify ZoneId to query the price in a specific zone.
   * 
   * @example
   * cn-hagzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
      schedulerOptions: 'SchedulerOptions',
      systemDisk: 'SystemDisk',
      amount: 'Amount',
      assuranceTimes: 'AssuranceTimes',
      capacity: 'Capacity',
      dedicatedHostType: 'DedicatedHostType',
      imageId: 'ImageId',
      instanceAmount: 'InstanceAmount',
      instanceCpuCoreCount: 'InstanceCpuCoreCount',
      instanceNetworkType: 'InstanceNetworkType',
      instanceType: 'InstanceType',
      instanceTypeList: 'InstanceTypeList',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      isp: 'Isp',
      offeringType: 'OfferingType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      platform: 'Platform',
      priceUnit: 'PriceUnit',
      recurrenceRules: 'RecurrenceRules',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      spotDuration: 'SpotDuration',
      spotStrategy: 'SpotStrategy',
      startTime: 'StartTime',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribePriceRequestDataDisk },
      schedulerOptions: DescribePriceRequestSchedulerOptions,
      systemDisk: DescribePriceRequestSystemDisk,
      amount: 'number',
      assuranceTimes: 'string',
      capacity: 'number',
      dedicatedHostType: 'string',
      imageId: 'string',
      instanceAmount: 'number',
      instanceCpuCoreCount: 'number',
      instanceNetworkType: 'string',
      instanceType: 'string',
      instanceTypeList: { 'type': 'array', 'itemType': 'string' },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      isp: 'string',
      offeringType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      platform: 'string',
      priceUnit: 'string',
      recurrenceRules: { 'type': 'array', 'itemType': DescribePriceRequestRecurrenceRules },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      scope: 'string',
      spotDuration: 'number',
      spotStrategy: 'string',
      startTime: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(this.schedulerOptions && typeof (this.schedulerOptions as any).validate === 'function') {
      (this.schedulerOptions as any).validate();
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.instanceTypeList)) {
      $dara.Model.validateArray(this.instanceTypeList);
    }
    if(Array.isArray(this.recurrenceRules)) {
      $dara.Model.validateArray(this.recurrenceRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

