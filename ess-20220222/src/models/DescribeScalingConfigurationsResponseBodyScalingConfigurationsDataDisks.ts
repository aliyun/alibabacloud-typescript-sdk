// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingConfigurationsResponseBodyScalingConfigurationsDataDisks extends $dara.Model {
  /**
   * @remarks
   * The ID of the automatic snapshot policy that is applied to the data disk.
   * 
   * @example
   * sp-bp19nq9enxqkomib****
   */
  autoSnapshotPolicyId?: string;
  /**
   * @remarks
   * Indicates whether the Performance Burst feature is enabled for the data disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is available only when you set `DataDisk.Category` to `cloud_auto`.
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The categories of the data disks. The values are sorted based on their priorities. The first value has the highest priority. If Auto Scaling cannot create instances by using the disk category of the highest priority, Auto Scaling creates instances by using the disk category of the next highest priority. Valid values:
   * 
   * *   cloud: basic disk. DeleteWithInstance of a basic disk created along with the ECS instance is set to true.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: ESSD.
   */
  categories?: string[];
  /**
   * @remarks
   * The category of the data disk. Valid values:
   * 
   * *   cloud: basic disk. DeleteWithInstance of a basic disk created along with the ECS instance is set to true.
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   ephemeral_ssd: local SSD.
   * *   cloud_essd: ESSD.
   * *   cloud_auto: ESSD AutoPL.
   * 
   * @example
   * cloud
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether the data disk is released when the instance to which the data disk is attached is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the data disk.
   * 
   * @example
   * FinanceDept
   */
  description?: string;
  /**
   * @remarks
   * The mount target of the data disk.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The name of the data disk.
   * 
   * @example
   * cloud_ssdData
   */
  diskName?: string;
  /**
   * @remarks
   * Indicates whether the data disk is encrypted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is applied to the data disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The PL of the data disk that is an ESSD.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned IOPS of the data disk.
   * 
   * >  IOPS measures the number of read and write operations that an Elastic Block Storage (EBS) device can process per second.
   * 
   * @example
   * 100
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The size of the data disk. Unit: GB. Valid values:
   * 
   * *   5 to 2000 if you set Category to cloud.
   * *   20 to 32768 if you set Category to cloud_efficiency.
   * *   20 to 32768 if you set Category to cloud_ssd.
   * *   20 to 32768 if you set Category to cloud_essd.
   * *   5 to 800 if you set Category to ephemeral_ssd.
   * 
   * @example
   * 200
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot based on which the data disk is created.
   * 
   * @example
   * s-23f2i****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      autoSnapshotPolicyId: 'AutoSnapshotPolicyId',
      burstingEnabled: 'BurstingEnabled',
      categories: 'Categories',
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      device: 'Device',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      size: 'Size',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSnapshotPolicyId: 'string',
      burstingEnabled: 'boolean',
      categories: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      deleteWithInstance: 'boolean',
      description: 'string',
      device: 'string',
      diskName: 'string',
      encrypted: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      size: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

