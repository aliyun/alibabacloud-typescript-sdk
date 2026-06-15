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
   * The category of data disk N, where N is an integer from 1 to 16. Use this parameter to query the price of adding a new data disk to the instance. Valid values:\\
   * \\
   * \\- `cloud_efficiency`: Ultra Disk\\
   * \\
   * \\- `cloud_ssd`: Standard SSD\\
   * \\
   * \\- `cloud_essd`: ESSD\\
   * \\
   * \\- `cloud`: Basic Disk\\
   * \\
   * Default value: None.\\
   * \\
   * \\
   * \\
   * \\
   * \\
   * \\
   * \\
   * \\
   * \\
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
   * The performance level of the ESSD. This parameter is valid only when DataDisk.N.Category is set to cloud_essd. The value of N must match the N in DataDisk.N.Category. Valid values:
   * \\- PL0: up to 10,000 random read/write IOPS per disk.
   * \\- PL1: up to 50,000 random read/write IOPS per disk.
   * \\- PL2: up to 100,000 random read/write IOPS per disk.
   * \\- PL3: up to 1,000,000 random read/write IOPS per disk.
   * Default value: PL1.
   * For more information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of data disk N in GiB, where N is an integer from 1 to 16. The value range varies based on the disk category:
   * \\- `cloud_efficiency` (Ultra Disk): 20 to 32768.
   * \\- `cloud_ssd` (Standard SSD): 20 to 32768.
   * \\- `cloud_essd`: The value range varies based on the value of `DataDisk.N.PerformanceLevel`.
   * \\- PL0: 1 to 32768.
   * \\- PL1: 20 to 32768.
   * \\- PL2: 461 to 32768.
   * \\- PL3: 1261 to 32768.
   * \\- `cloud` (Basic Disk): 5 to 2000.
   * Default value: The minimum size supported by the specified data disk category.
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
   * The data disk configurations.
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
   * The ID of the instance for which to query the modification price.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1f2o4ldh8l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The target instance type for the instance upgrade. Call the [DescribeResourcesModification](https://help.aliyun.com/document_detail/66187.html) operation to query the instance types available for upgrade in the specified availability zone.
   * 
   * > You must specify at least one of the `InstanceType` and `DataDisk.N.*` parameters.
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to get the latest list of Alibaba Cloud regions.
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

