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
   * The category of the data disk. Specify this parameter when you want to query the price of new subscription data disks to be attached to the ECS instance. Valid values of N: 1 to 16. Valid values:
   * 
   * - cloud_efficiency: ultra disk.
   * - cloud_ssd: standard SSD.
   * - cloud_essd: enterprise SSD.
   * - cloud: basic disk.
   * 
   * Default value: null.
   * 
   * > The instance type parameter (`InstanceType`) and data disk parameters (`DataDisk.N.*`) cannot both be empty. You must specify at least one.
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
   * The performance level of the data disk when the data disk is an enterprise SSD. The value of N must be the same as that in `DataDisk.N.Category=cloud_essd`. Valid values:
   * 
   * - PL0: a single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: a single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: a single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: a single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For information about how to select an ESSD performance level, see [ESSD](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The capacity of the data disk. Valid values of N: 1 to 16. Unit: GiB. Valid values:
   * 
   * - cloud_efficiency: 20 to 32768.
   * - cloud_ssd: 20 to 32768.
   * - cloud_essd: The valid values depend on the value of `DataDisk.N.PerformanceLevel`.    
   *     - PL0: 1 to 32768.
   *     - PL1: 20 to 32768.
   *     - PL2: 461 to 32768.
   *     - PL3: 1261 to 32768.
   * - cloud: 5 to 2000.
   * 
   * Default value: the minimum capacity for the specified data disk category.
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
   * The information about data disk types.
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
   * The instance ID of the instance for which you want to query the upgrade price.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1f2o4ldh8l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The target instance type for the upgrade. Call [DescribeResourcesModification](https://help.aliyun.com/document_detail/66187.html) to query the instance types available for upgrade in a specified zone.
   * 
   * > The instance type parameter (`InstanceType`) and data disk parameters (`DataDisk.N.*`) cannot both be empty. You must specify at least one.
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

