// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceModificationPriceRequestSystemDisk extends $dara.Model {
  category?: string;
  /**
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @example
   * 40
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

export class DescribeInstanceModificationPriceRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of data disk N. You can specify this parameter if you want to query the pricing information about newly attached subscription data disks. Valid values of N: 1 to 16. Valid values:
   * 
   * *   cloud_efficiency: utra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: ESSD.
   * *   cloud: basic disk.
   * 
   * This parameter is empty by default.
   * 
   * >  When you call the DescribeInstanceModificationPrice operation, you must specify at least one of the following parameters: `InstanceType` and `DataDisk.N.*`.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @example
   * d-bf4rupt9****
   */
  diskId?: string;
  /**
   * @remarks
   * The performance level of data disk N that is an enhanced SSD (ESSD). The value of N must be the same as that in `DataDisk.N.Category` when DataDisk.N.Category is set to cloud_essd. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For more information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The capacity of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_efficiency: 20 to 32768.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_ssd: 20 to 32768.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud_essd: vary based on the `DataDisk.N.PerformanceLevel` value.
   * 
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL0: 1 to 32768.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL1: 20 to 32768.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL2: 461 to 32768.
   *     *   Valid values when DataDisk.N.PerformanceLevel is set to PL3: 1261 to 32768.
   * 
   * *   Valid values when DataDisk.N.Category is set to cloud: 5 to 2000.
   * 
   * The default value is the minimum capacity allowed for the specified data disk category.
   * 
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskId: 'DiskId',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskId: 'string',
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

export class DescribeInstanceModificationPriceRequest extends $dara.Model {
  systemDisk?: DescribeInstanceModificationPriceRequestSystemDisk;
  /**
   * @remarks
   * The information about data disks.
   */
  dataDisk?: DescribeInstanceModificationPriceRequestDataDisk[];
  /**
   * @example
   * 2025-12-06T22Z
   */
  endTime?: string;
  /**
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to query pricing information for a configuration upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1f2o4ldh8l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new instance type. We recommend that you call the [DescribeResourcesModification](https://help.aliyun.com/document_detail/66187.html) operation to query the instance types available for configuration upgrades in a specified zone.
   * 
   * > When you call the DescribeInstanceModificationPrice operation, you must specify at least one of the following parameters: `InstanceType` and `DataDisk.N.*`.
   * 
   * @example
   * ecs.g6e.large
   */
  instanceType?: string;
  /**
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  ownerAccount?: string;
  ownerId?: number;
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
   * @example
   * 2025-12-05T22:40Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      dataDisk: 'DataDisk',
      endTime: 'EndTime',
      ISP: 'ISP',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: DescribeInstanceModificationPriceRequestSystemDisk,
      dataDisk: { 'type': 'array', 'itemType': DescribeInstanceModificationPriceRequestDataDisk },
      endTime: 'string',
      ISP: 'string',
      imageId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

