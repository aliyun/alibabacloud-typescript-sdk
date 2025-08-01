// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * *   cloud: basic disk.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   ephemeral_ssd: local SSD.
   * *   cloud_essd: ESSD.
   * *   cloud_auto: ESSD AutoPL disk.
   * 
   * Valid values of N: 1 to 16.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of data disk N when the disk is an ESSD. This parameter takes effect only when `DataDisk.N.Category` is set to cloud_essd. Valid values:
   * 
   * *   PL0
   * *   PL1 (default)
   * *   PL2
   * *   PL3
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
   * *   Valid values if DataDisk.N.Category is set to cloud: 5 to 2000.
   * 
   * *   Valid values if DataDisk.N.Category is set to cloud_efficiency: 20 to 32768.
   * 
   * *   Valid values if DataDisk.N.Category is set to cloud_ssd: 20 to 32768.
   * 
   * *   Valid values if DataDisk.N.Category is set to cloud_auto: 1 to 32768.
   * 
   * *   Valid values if DataDisk.N.Category is set to cloud_essd: vary based on the `DataDisk.N.PerformanceLevel` value.
   * 
   *     *   Valid values if DataDisk.N.PerformanceLevel is set to PL0: 1 to 32768.
   *     *   Valid values if DataDisk.N.PerformanceLevel is set to PL1: 20 to 32768.
   *     *   Valid values if DataDisk.N.PerformanceLevel is set to PL2: 461 to 32768.
   *     *   Valid values if DataDisk.N.PerformanceLevel is set to PL3: 1261 to 32768.
   * 
   * *   Valid values if DataDisk.N.Category is set to ephemeral_ssd: 5 to 800.
   * 
   * Valid values of N: 1 to 16.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk to use as data disk N. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}.
   * 
   * Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * >  This parameter is available only if you set `DataDisk.N.Category` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
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
   * The ID of the dedicated host. You can call the [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) operation to query the dedicated host list.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
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
   * The category of the system disk. Valid values:
   * 
   * *   cloud: basic disk
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * *   ephemeral_ssd: local SSD
   * *   cloud_essd: Enterprise SSD (ESSD)
   * *   cloud_auto: ESSD AutoPL disk
   * 
   * Default value:
   * 
   * *   When InstanceType is set to a retired instance type and `IoOptimized` is set to `none`, the default value is `cloud`.
   * *   In other cases, the default value is `cloud_efficiency`.
   * 
   * >  If you want to query the price of a system disk, you must also specify `ImageId`.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the system disk when the disk is an ESSD. This parameter is valid only when `SystemDiskCategory` is set to cloud_essd. Valid values:
   * 
   * PL0, PL1 (default), PL2, PL3.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * *   Basic disk (cloud): 20 to 500.
   * 
   * *   ESSD (cloud_essd): Valid values vary based on the SystemDisk.PerformanceLevel value.
   * 
   *     *   Valid values when SystemDisk.PerformanceLevel is set to PL0: 1 to 2048.
   *     *   Valid values when SystemDisk.PerformanceLevel is set to PL1: 20 to 2048.
   *     *   Valid values when SystemDisk.PerformanceLevel is set to PL2: 461 to 2048.
   *     *   Valid values when SystemDisk.PerformanceLevel is set to PL3: 1261 to 2048.
   * 
   * *   ESSD AutoPL disk (cloud_auto): 1 to 2048.
   * 
   * *   Other disk categories: 20 to 2048.
   * 
   * Default value: 20 or the size of the image specified by ImageId, whichever is greater.
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
   * The end time of the assurance period for the capacity reservation of the time-segmented elasticity assurance. Specify an on-the-hour point in time.
   * 
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @remarks
   * The type of the assurance schedule. Valid values:
   * 
   * *   Daily
   * *   Weekly
   * *   Monthly
   * 
   * >  If you specify this parameter, you must specify `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The days of the week or month on which the capacity reservation of the time-segmented elasticity assurance takes effect or the interval, in number of days, at which the capacity reservation takes effect.
   * 
   * *   If you set `RecurrenceType` to `Daily`, you can specify only one value. Valid values: 1 to 31. The value specifies that the capacity reservation takes effect every few days.
   * *   If you set `RecurrenceType` to `Weekly`, you can specify multiple values. Separate the values with commas (,). Valid values: 0, 1, 2, 3, 4, 5, and 6, which specify Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday, respectively. Example: `1,2`, which specifies that the capacity reservation takes effect on Monday and Tuesday.
   * *   If you set `RecurrenceType` to `Monthly`, you can specify two values in the `A-B` format. Valid values of A and B: 1 to 31. B must be greater than or equal to A. Example: `1-5`, which specifies that the capacity reservation takes effect every day from the first day up to the fifth day of each month.
   * 
   * >  If you specify this parameter, you must specify `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * 5
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The start time of the assurance period for the capacity reservation of the time-segmented elasticity assurance. Specify an on-the-hour point in time.
   * 
   * >  You must specify both StartHour and EndHour. The EndHour value must be at least 4 hours later than the StartHour value.
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
   * The number of ECS instances. You can specify this parameter when you want to query the prices of multiple instances that have specific specifications. Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The total number of times that the elasticity assurance can be applied. Set the value to Unlimited. This value indicates that the elasticity assurance can be applied an unlimited number of times within its effective period.
   * 
   * Default value: Unlimited.
   * 
   * @example
   * Unlimited
   */
  assuranceTimes?: string;
  /**
   * @remarks
   * The storage capacity. Unit: GiB.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The type of the dedicated host. You can call the [DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html) operation to query the most recent list of dedicated host types.
   * 
   * @example
   * ddh.c5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * This parameter takes effect only when ResourceType is set to instance.
   * 
   * The image ID. Images contain the runtime environments to load when instances start. You can call the [DescribeImages](https://help.aliyun.com/document_detail/25534.html) operation to query available images. If you do not specify this parameter, the system queries the prices of Linux images.
   * 
   * @example
   * centos_7_05_64_20G_alibase_20181212.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The total number of reserved instances for an instance type.
   * 
   * Valid values: 1 to 1000.
   * 
   * @example
   * 100
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The total number of vCPUs supported by the elasticity assurance. When you call this API operation, the system calculates the number of instances that an elasticity assurance must support based on the specified value of InstanceType. The calculated value is rounded up to the nearest integer.
   * 
   * > When you call this API operation to query the price of an elasticity assurance, you can only specify either InstanceCoreCpuCount or InstanceAmount.
   * 
   * @example
   * 1024
   */
  instanceCpuCoreCount?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   classic: classic network
   * *   vpc: Virtual Private Cloud (VPC)
   * 
   * Default value: vpc.
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type. When `ResourceType` is set to `instance`, you must specify this parameter. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the most recent list of instance types.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance types. You can select only a single instance type when you configure an elasticity assurance in unlimited mode.
   * 
   * @example
   * ecs.g6.xlarge
   */
  instanceTypeList?: string[];
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic: pay-by-traffic
   * 
   * Default value: PayByTraffic
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
   * Specifies whether the instance is I/O optimized. Valid values:
   * 
   * *   none: The instance is not I/O optimized.
   * *   optimized: The instance is I/O optimized.
   * 
   * When the instance type specified by the InstanceType parameter belongs to [Generation I instance families](https://help.aliyun.com/document_detail/55263.html), the default value of this parameter is none.
   * 
   * When the instance type specified by the InstanceType parameter does not belong to [Generation I instance families](https://help.aliyun.com/document_detail/55263.html), the default value of this parameter is optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The Internet service provider (ISP). Valid values:
   * 
   * *   cmcc: China Mobile
   * *   telecom: China Telecom
   * *   unicom: China Unicom
   * *   multiCarrier: multi-line ISP
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The payment option of the reserved instance. Valid values:
   * 
   * *   No Upfront
   * *   Partial Upfront
   * *   All Upfront
   * 
   * @example
   * All Upfront
   */
  offeringType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing cycle of the ECS instance. Valid values:
   * 
   * *   Valid values when PriceUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   Valid values when PriceUnit is set to Year: 1, 2, 3, 4, and 5.
   * *   Set the value to 1 when PriceUnit is set to Hour.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The operating system of the image that is used by the instance. Valid values:
   * 
   * *   Windows: Windows Server operating system
   * *   Linux: Linux and UNIX-like operating system
   * 
   * @example
   * Linux
   */
  platform?: string;
  /**
   * @remarks
   * The pricing unit of the ECS resource. Valid values:
   * 
   * *   Month
   * *   Year
   * *   Hour (default)
   * 
   * @example
   * Year
   */
  priceUnit?: string;
  /**
   * @remarks
   * The assurance schedules of the time-segmented elasticity assurance.
   * 
   * >  Time-segmented elasticity assurances are available only in specific regions and to specific users. To use time-segmented elasticity assurances, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   */
  recurrenceRules?: DescribePriceRequestRecurrenceRules[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
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
   * *   instance: queries the most recent prices of ECS instances. If you set this parameter to `instance`, specify `InstanceType`.
   * *   disk: queries the most recent prices of cloud disks. If you set this parameter to `disk`, specify `DataDisk.1.Category` and `DataDisk.1.Size`.
   * *   diskperformance: Queries the most recent prices of the provioned performance of the Enterprise SSD (ESSD) AutoPL disk. You must also specify `DataDisk.1.Category` and `DataDisk.1.ProvisionedIops`.
   * *   bandwidth: queries the most recent prices for network usage.
   * *   ddh: queries the most recent prices of dedicated hosts.
   * *   ElasticityAssurance: queries the most recent prices of elasticity assurances. If you set this parameter to `ElasticityAssurance`, specify `InstanceType`.
   * *   CapacityReservation: queries the most recent prices of capacity reservations. If you set this parameter to `CapacityReservation`, specify `InstanceType`.
   * 
   * Default value: instance.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The scope of the reserved instance. Valid values:
   * 
   * *   Region: regional
   * *   Zone: zonal
   * 
   * Default value: Region.
   * 
   * @example
   * Zone
   */
  scope?: string;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * 
   * *   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * *   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Spot instances are billed by second. We recommend that you specify a protection period based on your business requirements.
   * 
   * >  This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. Valid values:
   * 
   * *   NoSpot: The instance is a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a spot instance that has a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a spot instance whose bid price is based on the market price at the time of purchase. The market price can be up to the pay-as-you-go price.
   * 
   * Default value: NoSpot.
   * 
   * >  This parameter takes effect only when `PriceUnit` is set to Hour and `Period` is set to 1. The default value of `PriceUnit` is `Hour` and the default value of `Period` is `1`. Therefore, you do not need to set `PriceUnit` or `Period` when you set SpotStrategy.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The time when the time-segmented assurance of the elasticity assurance takes effect. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2020-10-30T06:32:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > Prices of spot instances vary based on zones. When you query the price of a spot instance, specify ZoneId.
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

