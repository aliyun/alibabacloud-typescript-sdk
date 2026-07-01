// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data disk N. Valid values:
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
   * Valid values of N: 1 to 16.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of data disk N when the disk type is ESSD. This parameter is valid only when `DataDisk.N.Category=cloud_essd`. Valid values:
   * 
   * - PL0.
   * - PL1 (default).
   * - PL2.
   * - PL3.
   * 
   * Valid values of N: 1 to 16.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data disk N, in GiB. Valid values:
   * 
   * - cloud: 5 to 2000.
   * - cloud_efficiency: 20 to 32768.
   * - cloud_ssd: 20 to 32768.
   * - cloud_auto: 1 to 32768.
   * <props="china">
   * - cloud_essd_entry: 10 to 32768.
   * 
   * - cloud_essd: The valid values depend on the value of `DataDisk.N.PerformanceLevel`.	
   *     - PL0: 1 to 32768.
   *     - PL1: 20 to 32768.
   *     - PL2: 461 to 32768.
   *     - PL3: 1261 to 32768.
   * - ephemeral_ssd: 5 to 800.
   * 
   * Valid values of N: 1 to 16.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1000 × capacity - baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × capacity, 50000}.
   * 
   * > This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html).
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
   * The dedicated host ID. You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query the list of dedicated host IDs.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The deployment set strategy. Valid values:
   * - Availability: high availability.
   * - AvailabilityGroup: deployment set group high availability.
   * - LowLatency: low network latency.
   * - ProximityLooseDispersion: proximity loose dispersion.
   * 
   * > Only when the strategy is set to ProximityLooseDispersion does the API response include the price details for "Resource": "deploymentSet". Other deployment set strategies are free of charge, so the API response does not include price information for "Resource": "deploymentSet".
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
   * The category of the system disk. You must also specify `ImageId` when querying the system disk price. Valid values:
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
   * - If InstanceType is a retired instance type and `IoOptimized` is set to `none`, the default value is `cloud`.
   * - In other cases, the default value is `cloud_efficiency`.<props="china">After January 30, 2026, for instance types that support only cloud_essd, the default value is changed from cloud_efficiency to cloud_essd PL0. For more information, see [Change notice](https://www.aliyun.com/notice/117844).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the system disk when the disk type is ESSD. This parameter is valid only when `SystemDiskCategory=cloud_essd`. Valid values:
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
   * The size of the system disk, in GiB. Valid values:
   * 
   * - Basic disk: 20 to 500.
   * - ESSD:
   *   - PL0: 1 to 2048.
   *   - PL1: 20 to 2048.
   *   - PL2: 461 to 2048.
   *   - PL3: 1261 to 2048.
   * - ESSD AutoPL disk: 1 to 2048.
   * - Other disk categories: 20 to 2048.
   * 
   * Default value: max{20, image size of the specified ImageId parameter}.
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
   * The end hour of the time-sharing assurance. The value must be a whole hour.
   * 
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @remarks
   * The type of the recurrence rule. Valid values:
   * - Daily: daily recurrence.
   * - Weekly: weekly recurrence.
   * - Monthly: monthly recurrence.
   * 
   * > You must specify both `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The value of the recurrence rule.
   * 
   * - If `RecurrenceType` is set to `Daily`, you can specify only one value. Valid values: 1 to 31. This value indicates the interval in days between recurrences.
   * - If `RecurrenceType` is set to `Weekly`, you can specify multiple values separated by commas (,). The values for Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday are 0, 1, 2, 3, 4, 5, and 6. For example, `1,2` indicates Monday and Tuesday.
   * - If `RecurrenceType` is set to `Monthly`, the format is `A-B`. Valid values of A and B: 1 to 31. B must be greater than or equal to A. For example, `1-5` indicates the 1st through 5th day of each month.
   * 
   * > You must specify both `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * 5
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The effective period start hour of the time-sharing assurance. The value must be a whole hour.
   * 
   * > You must specify both StartHour and EndHour, and the difference between them must be at least 4 hours.
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
   * The number of Elastic Compute Service (ECS) instances that you want to purchase in batch. You can use this parameter to query the price of batch purchasing instances of a specific configuration. Valid values: 1 to 1000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The total number of times that the elasticity assurance can be applied. Set the value to Unlimited. Only the unlimited mode within the service effective period is supported.
   * 
   * Default value: Unlimited.
   * 
   * @example
   * Unlimited
   */
  assuranceTimes?: string;
  /**
   * @remarks
   * The capacity, in GiB.
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
   * The image ID, which specifies the runtime environment to load when the instance starts. You can call [DescribeImages](https://help.aliyun.com/document_detail/25534.html) to query available image resources. If you do not specify this parameter, the price of a Linux image is queried by default.
   * 
   * @example
   * centos_7_05_64_20G_alibase_20181212.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The total number of instances to reserve within an instance type.
   * 
   * Valid values: 1 to 1000.
   * 
   * @example
   * 100
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The total number of vCPUs supported by the elasticity assurance. When you call this operation, the system calculates the number of instances required by the elasticity assurance based on the specified InstanceType (rounded up).
   * 
   * > When you call this operation to query the price of an elasticity assurance, you can specify only one of InstanceCoreCpuCount and InstanceAmount.
   * 
   * @example
   * 1024
   */
  instanceCpuCoreCount?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - vpc: Virtual Private Cloud (VPC).
   * - classic: classic network. The classic network is no longer available. For more information, see [Retirement notice](https://help.aliyun.com/document_detail/2833134.html).
   * 
   * Default value: vpc.
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type. You must specify this parameter when `ResourceType` is set to `instance`. For more details, see [Instance family](https://help.aliyun.com/document_detail/25378.html). You can also invoke [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the most recent instance type list.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance type. Only a single instance type can be specified for the unlimited elasticity assurance service.
   * 
   * @example
   * ecs.g6.xlarge
   */
  instanceTypeList?: string[];
  /**
   * @remarks
   * The billing method for network bandwidth. Valid values:
   * 
   * - PayByBandwidth: pay-by-bandwidth.
   * - PayByTraffic: pay-by-traffic.
   * 
   * Default value: PayByTraffic.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth, in Mbit/s. Valid values: 0 to 100.
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
   * - none: non-I/O optimization.
   * - optimized: I/O optimized.
   * 
   * If InstanceType is a [Series I](https://help.aliyun.com/document_detail/55263.html) instance type, the default value is none.
   * 
   * If InstanceType is not a [Series I](https://help.aliyun.com/document_detail/55263.html) instance type, the default value is optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The Internet Service Provider (ISP). Valid values: 
   * - cmcc: China Mobile.
   * - telecom: China Telecom.
   * - unicom: China Unicom.
   * - multiCarrier: multi-ISP.
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The payment option of the reserved instance. Valid values:
   * 
   * - No Upfront: no upfront.
   * - Partial Upfront: partial upfront.
   * - All Upfront: all upfront.
   * 
   * @example
   * All Upfront
   */
  offeringType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing duration of Elastic Compute Service (ECS). Valid values:
   * 
   * <props="china">
   * - If the PriceUnit parameter is set to Month: 1 to 9.
   * - If the PriceUnit parameter is set to Year: 1 to 5.
   * - If the PriceUnit parameter is set to Hour: 1.
   * - If the PriceUnit parameter is set to Week: 1 to 4.
   * 
   * 
   * 
   * <props="intl">
   * - If the PriceUnit parameter is set to Month: 1 to 9.
   * - If the PriceUnit parameter is set to Year: 1 to 5.
   * - If the PriceUnit parameter is set to Hour: 1.
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
   * The operating system type of the image used by the instance. Valid values: 
   * - Windows: Windows Server operating system.
   * - Linux: Linux and Unix-like operating systems.
   * 
   * @example
   * Linux
   */
  platform?: string;
  /**
   * @remarks
   * The pricing unit for querying Elastic Compute Service (ECS) prices across different billing cycles. Valid values:
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
   * 
   * <props="china">
   * 
   * > The time-sharing elasticity assurance feature is available only in specific regions and for specific users. To use this feature, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex).
   * 
   * 
   * 
   * <props="intl">
   * 
   * > The time-sharing elasticity assurance feature is available only in specific regions and for specific users. To use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
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
   * - instance: queries the latest price list of ECS instances. When this parameter is set to `instance`, you must also specify `InstanceType`.
   * - disk: queries the latest price list of disks. When this parameter is set to `disk`, you must also specify `DataDisk.1.Category` and `DataDisk.1.Size`.
   * - diskperformance: queries the latest price list of provisioned performance for ESSD AutoPL disks. You must also specify `DataDisk.1.Category` and `DataDisk.1.ProvisionedIops`.
   * - bandwidth: queries the latest price list of bandwidth.
   * - ddh: queries the latest price list of dedicated hosts.
   * - ElasticityAssurance: queries the price of the elasticity assurance service. When this parameter is set to `ElasticityAssurance`, you must also specify `InstanceType`.
   * - CapacityReservation: queries the price of the capacity reservation service. When this parameter is set to `CapacityReservation`, you must also specify `InstanceType`.
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
   * - Region: regional. 
   * - Zone: zonal.
   * 
   * Default value: Region.
   * 
   * @example
   * Zone
   */
  scope?: string;
  /**
   * @remarks
   * The protection period of the spot instance, in hours. Default value: 1. Valid values:
   * - 1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released for 1 hour. After 1 hour, the system automatically compares the bid price with the market price and checks resource availability to determine whether to retain automatic release the instance.
   * - 0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system automatically compares the bid price with the market price and checks resource availability to determine whether to retain automatic release the instance.
   * 
   * Alibaba Cloud sends an ECS system event notification 5 minutes before the instance is released. Spot instances are billed by second. Select an appropriate protection period based on the expected task execution duration.
   * 
   * > This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The bidding policy for pay-as-you-go instances. Valid values:
   * - NoSpot: a regular pay-as-you-go instance.
   * - SpotWithPriceLimit: a spot instance with a maximum price limit.
   * - SpotAsPriceGo: a spot instance priced at the market price with the pay-as-you-go price as the upper limit.
   * 
   * Default value: NoSpot.
   * 
   * > This parameter takes effect only when `PriceUnit=Hour` and `Period=1`. Because the default value of `PriceUnit` is `Hour` and the default value of `Period` is `1`, you do not need to set `PriceUnit` or `Period` when you specify this parameter.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The effective period when the time-sharing elasticity assurance takes effect. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
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

