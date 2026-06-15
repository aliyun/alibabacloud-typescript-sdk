// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePriceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data disk N. Valid values:
   * 
   * - `cloud`: basic cloud disk
   * 
   * - `cloud_efficiency`: efficiency cloud disk
   * 
   * - `cloud_ssd`: SSD cloud disk
   * 
   * - `ephemeral_ssd`: local SSD
   * 
   * - `cloud_essd`: ESSD
   * 
   * - `cloud_auto`: ESSD AutoPL
   * 
   * <props="china">
   * 
   * - `cloud_essd_entry`: ESSD Entry
   * 
   * 
   * 
   * 
   * The value of N can be 1–16.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of data disk N when it is an ESSD. This parameter is valid only when `DataDisk.N.Category` is set to `cloud_essd`. Valid values:
   * 
   * - `PL0`
   * 
   * - `PL1` (Default)
   * 
   * - `PL2`
   * 
   * - `PL3`
   * 
   * The value of N can be 1–16.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data disk N. Unit: GiB. Valid values:
   * 
   * - `cloud`: 5–2000
   * 
   * - `cloud_efficiency`: 20–32768
   * 
   * - `cloud_ssd`: 20–32768
   * 
   * - `cloud_auto`: 1–32768
   * 
   * <props="china">
   * 
   * - `cloud_essd_entry`: 10–32768
   * 
   * 
   * 
   * 
   * - `cloud_essd`: The value range depends on the `DataDisk.N.PerformanceLevel`.
   * 
   *   - PL0: 1–32768
   * 
   *   - PL1: 20–32768
   * 
   *   - PL2: 461–32768
   * 
   *   - PL3: 1261–32768
   * 
   * - `ephemeral_ssd`: 5–800
   * 
   * The value of N can be 1–16.
   * 
   * @example
   * 2000
   */
  size?: number;
  /**
   * @remarks
   * The provisioned read/write IOPS for the ESSD AutoPL cloud disk. Valid values: 0–`min{50000, 1000 * Capacity - Baseline IOPS}`.
   * 
   * `Baseline IOPS = min{1800 + 50 * Capacity, 50000}`.
   * 
   * > This parameter is valid only when `DataDisk.N.Category` is set to `cloud_auto`. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html).
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
   * This parameter is valid only when `ResourceType` is set to `instance`.
   * 
   * The ID of the dedicated host. You can call the [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) operation to query dedicated host IDs.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The deployment set strategy. Valid values:
   * 
   * - `Availability`: high availability
   * 
   * - `AvailabilityGroup`: high availability for deployment set groups
   * 
   * - `LowLatency`: low latency
   * 
   * - `ProximityLooseDispersion`: proximity loose dispersion
   * 
   * > Only the `ProximityLooseDispersion` strategy incurs a fee. The API response includes price details for the deployment set (where `Resource` is `deploymentSet`) only when this strategy is used. Other deployment set strategies are free of charge.
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
   * - `cloud`: basic cloud disk
   * 
   * - `cloud_efficiency`: efficiency cloud disk
   * 
   * - `cloud_ssd`: SSD cloud disk
   * 
   * - `ephemeral_ssd`: local SSD
   * 
   * - `cloud_essd`: ESSD
   * 
   * - `cloud_auto`: ESSD AutoPL
   * 
   * <props="china">
   * 
   * - `cloud_essd_entry`: ESSD Entry
   * 
   * 
   * 
   * 
   * * For retired instance types where `IoOptimized` is `none`, the default value is `cloud`.
   * 
   * * In other cases, the default value is `cloud_efficiency`.<props="china">After January 30, 2026, for instance types that support only ESSDs, the default value will be changed from `cloud_efficiency` to `cloud_essd` at PL0. For more information, see the [change announcement](https://www.aliyun.com/notice/117844).
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the ESSD when used as a system disk. This parameter is valid only when `SystemDisk.Category` is set to `cloud_essd`. Valid values:
   * 
   * `PL0`<br>`PL1` (Default)<br>`PL2`<br>`PL3`<br><br><br>
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values:
   * 
   * - Basic cloud disk: 20–500.
   * 
   * - ESSD cloud disk:
   * 
   *   - PL0: 1–2048.
   * 
   *   - PL1: 20–2048.
   * 
   *   - PL2: 461–2048.
   * 
   *   - PL3: 1261–2048.
   * 
   * - ESSD AutoPL cloud disk: 1–2048.
   * 
   * - Other cloud disk categories: 20–2048.
   * 
   * Default value: `max{20, ImageSize}`, which is the greater of 20 and the size of the specified image (`ImageId`).
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
   * The end time of the time-based assurance. The value must be on the hour.
   * 
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @remarks
   * The recurrence type of the rule. Valid values:
   * 
   * - `Daily`: repeats on a daily basis.
   * 
   * - `Weekly`: repeats on a weekly basis.
   * 
   * - `Monthly`: repeats on a monthly basis.
   * 
   * > You must specify both `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The recurrence value.
   * 
   * - If `RecurrenceType` is set to `Daily`, this parameter takes a single value that specifies the recurrence interval in days. Valid values: 1–31.
   * 
   * - If `RecurrenceType` is set to `Weekly`, this parameter can have multiple values separated by commas (,). The values 0, 1, 2, 3, 4, 5, and 6 correspond to Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday. For example, `1,2` specifies Monday and Tuesday.
   * 
   * - If `RecurrenceType` is set to `Monthly`, the value must be in the `A–B` format. The values of A and B must be between 1 and 31, and B must be greater than or equal to A. For example, `1–5` specifies the first to the fifth day of each month.
   * 
   * > You must specify both `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * 5
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The start time of the time-based assurance. The value must be on the hour.
   * 
   * > Both `StartHour` and `EndHour` are required. The interval between them must be at least 4 hours.
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
   * The number of resources for which to query prices. Valid values: 1–1000.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The number of times the elasticity assurance can be used. Set this to `Unlimited`, which allows the assurance to be used any number of times during its effective period.
   * 
   * Default value: `Unlimited`.
   * 
   * @example
   * Unlimited
   */
  assuranceTimes?: string;
  /**
   * @remarks
   * The memory capacity for the elasticity assurance. Unit: GiB.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The dedicated host type. You can call the [DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html) operation to query dedicated host types.
   * 
   * @example
   * ddh.c5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * This parameter is valid only when `ResourceType` is set to `instance`.
   * 
   * The ID of the image. The image provides the runtime environment for the instance. You can call the [DescribeImages](https://help.aliyun.com/document_detail/25534.html) operation to query available images. If you do not specify this parameter, the system queries prices for Linux instances by default.
   * 
   * @example
   * centos_7_05_64_20G_alibase_20181212.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The number of instances to include in the reserved instance offering.
   * 
   * Valid values: 1–1000.
   * 
   * @example
   * 100
   */
  instanceAmount?: number;
  /**
   * @remarks
   * The total number of vCPUs for instances that are covered by the elasticity assurance. When you call this operation, the system calculates the number of supported instances based on the specified `InstanceType` and rounds the value up to the nearest integer.
   * 
   * > When you query the price of an elasticity assurance, you can specify only one of the `InstanceCpuCoreCount` and `InstanceAmount` parameters.
   * 
   * @example
   * 1024
   */
  instanceCpuCoreCount?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * - `classic`: classic network
   * 
   * - `vpc`: VPC
   * 
   * Default value: `vpc`.
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type. This parameter is required when `ResourceType` is set to `instance`. For more information, see [Instance type families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the instance types.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance type. You can specify only one instance type for an elasticity assurance of the `Unlimited` type.
   * 
   * @example
   * ecs.g6.xlarge
   */
  instanceTypeList?: string[];
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * - `PayByBandwidth`: pay-by-bandwidth
   * 
   * - `PayByTraffic`: pay-by-traffic
   * 
   * Default value: `PayByTraffic`.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0–100.
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
   * - `none`: non-I/O-optimized.
   * 
   * - `optimized`: I/O-optimized.
   * 
   * For [generation I](https://help.aliyun.com/document_detail/55263.html) instances, the default value is `none`.
   * 
   * For other instance types, the default value is `optimized`.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The Internet service provider (ISP). Valid values:
   * 
   * - `cmcc`: China Mobile
   * 
   * - `telecom`: China Telecom
   * 
   * - `unicom`: China Unicom
   * 
   * - `multiCarrier`: BGP (Multi-ISP)
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @remarks
   * The payment option for the reserved instance. Valid values:
   * 
   * - `No Upfront`
   * 
   * - `Partial Upfront`
   * 
   * - `All Upfront`
   * 
   * @example
   * All Upfront
   */
  offeringType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing duration of the resource. This parameter is used with `PriceUnit`. Valid values:
   * 
   * <props="china">
   * 
   * - If `PriceUnit` is set to `Month`: 1–9.
   * 
   * - If `PriceUnit` is set to `Year`: 1–5.
   * 
   * - If `PriceUnit` is set to `Hour`: 1.
   * 
   * - If `PriceUnit` is set to `Week`: 1–4.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - If `PriceUnit` is set to `Month`: 1–9.
   * 
   * - If `PriceUnit` is set to `Year`: 1–5.
   * 
   * - If `PriceUnit` is set to `Hour`: 1.
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
   * The operating system of the instance. Valid values:
   * 
   * - `Windows`: Windows Server
   * 
   * - `Linux`: Linux
   * 
   * @example
   * Linux
   */
  platform?: string;
  /**
   * @remarks
   * The billing cycle of the resource. Valid values:
   * 
   * <props="china">
   * 
   * - `Month`: For monthly pricing.
   * 
   * - `Year`: For yearly pricing.
   * 
   * - `Hour` (Default): For hourly pricing.
   * 
   * - `Week`: For weekly pricing.
   * 
   * 
   * 
   * <props="intl">
   * 
   * - `Month`: For monthly pricing.
   * 
   * - `Year`: For yearly pricing.
   * 
   * - `Hour` (Default): For hourly pricing.
   * 
   * @example
   * Year
   */
  priceUnit?: string;
  /**
   * @remarks
   * The list of recurrence rules for the time-based elasticity assurance.
   * 
   * <props="china">
   * 
   * > The time-based elasticity assurance feature is available only in specific regions and to specific users. To use this feature, [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex).
   * 
   * 
   * 
   * <props="intl">
   * 
   * > The time-based elasticity assurance feature is available only in specific regions and to specific users. To use this feature, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   */
  recurrenceRules?: DescribePriceRequestRecurrenceRules[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the list of Alibaba Cloud regions.
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
   * The type of the resource for which you want to query the price. Valid values:
   * 
   * - `instance`: Query the prices of ECS instances. If you set this parameter to `instance`, you must also specify the `InstanceType` parameter.
   * 
   * - `disk`: Query the prices of cloud disks. If you set this parameter to `disk`, you must also specify the `DataDisk.1.Category` and `DataDisk.1.Size` parameters.
   * 
   * - `diskperformance`: Query the prices of the provisioned performance of an ESSD AutoPL cloud disk. You must also specify the `DataDisk.1.Category` and `DataDisk.1.ProvisionedIops` parameters.
   * 
   * - `bandwidth`: Query the prices of network bandwidth.
   * 
   * - `ddh`: Query the prices of dedicated hosts.
   * 
   * - `ElasticityAssurance`: Query the prices of Elasticity Assurance. If you set this parameter to `ElasticityAssurance`, you must also specify the `InstanceType` parameter.
   * 
   * - `CapacityReservation`: Query the prices of Capacity Reservation. If you set this parameter to `CapacityReservation`, you must also specify the `InstanceType` parameter.
   * 
   * Default value: `instance`.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The scope of the reserved instance. Valid values:
   * 
   * - `Region`: region-scoped
   * 
   * - `Zone`: zone-scoped
   * 
   * Default value: `Region`.
   * 
   * @example
   * Zone
   */
  scope?: string;
  /**
   * @remarks
   * The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:
   * 
   * - `1`: Alibaba Cloud does not automatically release the instance within 1 hour. After the 1-hour protection period ends, the system checks the market price and resource inventory to determine whether to retain or release the instance.
   * 
   * - `0`: The instance has no protection period. The system checks the market price and resource inventory to determine whether to retain or release the instance.
   * 
   * Alibaba Cloud sends you an ECS system event five minutes before the instance is released. Spot instances are billed by the second. Select a protection period based on the time required to complete your task.
   * 
   * > This parameter is valid only when `SpotStrategy` is set to `SpotWithPriceLimit` or `SpotAsPriceGo`.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The preemption policy for the pay-as-you-go instance. Valid values:
   * 
   * - `NoSpot`: A regular pay-as-you-go instance.
   * 
   * - `SpotWithPriceLimit`: A spot instance for which you specify a maximum hourly price.
   * 
   * - `SpotAsPriceGo`: A spot instance where the system automatically bids up to the pay-as-you-go price.
   * 
   * Default value: `NoSpot`.
   * 
   * > This parameter applies only when you query hourly prices, where `PriceUnit` is `Hour` and `Period` is `1`. Because these are the default values, you do not need to set them when you use `SpotStrategy`.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The time when the time-based elasticity assurance takes effect. The time must be specified in UTC and formatted as `yyyy-MM-ddTHH:mm:ssZ` in accordance with the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard.
   * 
   * @example
   * 2020-10-30T06:32:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the availability zone.
   * 
   * > The prices of spot instances may vary by availability zone. When you query the price of a spot instance, specify `ZoneId` to query the price for a specific availability zone.
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

