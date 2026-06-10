// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddonNodeTemplateDataDisks extends $dara.Model {
  /**
   * @remarks
   * The disk category. Valid values:
   * 
   * *   cloud_efficiency: utra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: ESSD
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Specifies whether to release data disk N when the instance is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The performance level of the ESSD to be used as the data disk. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10000 random read/write IOPS.
   * *   PL1 (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1000000 random read/write IOPS. For more information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/zh/ecs/user-guide/essds?spm=api-workbench.API%20Document.0.0.7e5caef0GBcMYX).
   * 
   * @example
   * PL0
   */
  level?: string;
  /**
   * @remarks
   * The disk size. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * *   cloud_efficiency: 40 to 32,768
   * 
   * *   cloud_ssd: 40 to 32,768
   * 
   * *   Valid values when Category is set to cloud_essd depends on the value of the DataDisk.N.PerformanceLevel parameter. Specifically:
   * 
   *     *   PL0: 40 to 65,536
   *     *   PL1: 40 to 65,536
   *     *   PL2: 461 to 65,536
   *     *   PL3: 1,261 to 65,536
   * 
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      level: 'string',
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

export class AddonNodeTemplateSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the system disk. Valid values:
   * 
   * *   cloud_efficiency: utra disk
   * *   cloud_ssd: standard SSD
   * *   cloud_essd: enterprise SSD (ESSD)
   * *   cloud: basic disk
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the ESSD that is used as the system disk. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10000 random read/write IOPS.
   * *   PL1 (default): A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1000000 random read/write IOPS. For more information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/zh/ecs/user-guide/essds?spm=api-workbench.API%20Document.0.0.7e5caef0GBcMYX).
   * 
   * @example
   * PL0
   */
  level?: string;
  /**
   * @remarks
   * The disk size. Unit: GiB. Valid values:
   * 
   * *   cloud_efficiency: 40 to 32,768
   * 
   * *   cloud_ssd: 40 to 32,768
   * 
   * *   Valid values when Category is set to cloud_essd depends on the value of the DataDisk.N.PerformanceLevel parameter. Specifically:
   * 
   *     *   PL0: 40 to 65,536
   *     *   PL1: 40 to 65,536
   *     *   PL2: 461 to 65,536
   *     *   PL3: 1,261 to 65,536
   * 
   * *   cloud: 40 to 500
   * 
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      level: 'string',
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

export class AddonNodeTemplate extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the reserved instance. This parameter takes effect only when InstanceChargeType is set to PrePaid. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. Valid values:
   * 
   * *   Valid values when PeriodUnit is set to Week: 1, 2, and 3
   * *   Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The data disks.
   * 
   * >  You can specify up to 16 data disks.
   */
  dataDisks?: AddonNodeTemplateDataDisks[];
  /**
   * @remarks
   * The protection period for the preemptible instance. Unit: hours. Default value: 1. Valid values:
   * 
   * *   1: After a preemptible instance is created, Alibaba Cloud ensures that the instance is not automatically released within one hour. After the one-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * *   0: After a preemptible instance is created, Alibaba Cloud does not ensure that the instance runs for one hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * Alibaba Cloud sends an ECS system event to notify you five minutes before the instance is released. Preemptible instances are billed by second. We recommend that you specify an appropriate protection period based on your business requirements.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable hyper-threading for the node. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * The ID of the image to be used for instance booting. You can call the [DescribeImages](https://help.aliyun.com/zh/ecs/developer-reference/api-ecs-2014-05-26-describeimages?spm=api-workbench.API%20Document.0.0.7e5caef0GBcMYX) operation to query the available image resources.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20221102.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Prepaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * Default value: PostPaid.
   * 
   * If you set this parameter to PrePaid, you must make sure that your account supports payment by balance or credit. Otherwise, the InvalidPayMethod error message will be returned.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp1bzqq4rj1eemun****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * *   To select an appropriate instance type, you can see [Instance families](https://help.aliyun.com/zh/ecs/user-guide/overview-of-instance-families?spm=api-workbench.API%20Document.0.0.7e5caef0GBcMYX) or call the [DescribeInstanceTypes](https://help.aliyun.com/zh/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes?spm=api-workbench.API%20Document.0.0.7e5caef0GBcMYX) operation to learn the performance data about instance types.
   * *   To query the inventory of instance types in specified region or zone, you can call the [DescribeAvailableResource](https://help.aliyun.com/zh/ecs/developer-reference/api-ecs-2014-05-26-describeavailableresource?spm=api-workbench.API%20Document.0.0.7e5caef0GBcMYX) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.c7.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * OsName
   * 
   * This parameter is required.
   * 
   * @example
   * CentOS  7.6 64 位
   */
  osName?: string;
  /**
   * @remarks
   * OsNameEN
   * 
   * This parameter is required.
   * 
   * @example
   * CentOS  7.6 64 bit
   */
  osNameEN?: string;
  /**
   * @remarks
   * The subscription period of the instance. The unit is specified by the PeriodUnit parameter. This parameter takes effect and is required only when InstanceChargeType is set to PrePaid. If the DedicatedHostId parameter is specified, the subscription duration of the instance must be no longer than that of the dedicated host. Valid values:
   * 
   * *   Valid values when PeriodUnit is set to Week: 1, 2, 3, and 4
   * *   Valid values when PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * 
   * *   Week
   * *   Month (default)
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The IP address of the virtual private cloud (VPC) in which the ECS instance is deployed.
   * 
   * @example
   * ``172.16.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The maximum hourly price of the preemptible instance. This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit. A maximum of three decimal places can be specified.
   * 
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. This parameter is valid only when InstanceChargeType is set to PostPaid. Valid values:
   * 
   * *   NoSpot: The instance is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instances are created as preemptible instances for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The system disk configurations of the node.
   */
  systemDisk?: AddonNodeTemplateSystemDisk;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      dataDisks: 'DataDisks',
      duration: 'Duration',
      enableHT: 'EnableHT',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      osName: 'OsName',
      osNameEN: 'OsNameEN',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      dataDisks: { 'type': 'array', 'itemType': AddonNodeTemplateDataDisks },
      duration: 'number',
      enableHT: 'boolean',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      osName: 'string',
      osNameEN: 'string',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDisk: AddonNodeTemplateSystemDisk,
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

