// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecRequestPerformanceControlOptions extends $dara.Model {
  /**
   * @remarks
   * The target IOPS of the disk. Only the IOPS of dedicated block storage cluster disks can be modified.
   * 
   * Valid values: 900 to the maximum IOPS of a single disk, in increments of 100.
   * 
   * For more information, see [Disk performance](https://help.aliyun.com/document_detail/25382.html).
   * 
   * @example
   * 2000
   */
  IOPS?: number;
  /**
   * @remarks
   * Resets the disk performance. This parameter is supported only for dedicated block storage cluster disks.
   * 
   * If this parameter is specified, the PerformanceControlOptions.IOPS and PerformanceControlOptions.Throughput parameters do not take effect.
   * 
   * Currently, only All is supported, which resets the disk IOPS and throughput to their initial values.
   * 
   * @example
   * All
   */
  recover?: string;
  /**
   * @remarks
   * The target throughput of the disk, in MB/s. Only the throughput of dedicated block storage cluster disks can be modified.
   * 
   * Valid values: 60 to the maximum throughput of a single disk.
   * 
   * For more information, see [Disk performance](https://help.aliyun.com/document_detail/25382.html).
   * 
   * @example
   * 200
   */
  throughput?: number;
  static names(): { [key: string]: string } {
    return {
      IOPS: 'IOPS',
      recover: 'Recover',
      throughput: 'Throughput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IOPS: 'number',
      recover: 'string',
      throughput: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is currently in invitational preview and is not available for use.
   * 
   * @example
   * cn-hangzhou-g
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The new disk type. Valid values:
   * 
   * - cloud_essd: enterprise SSD (ESSD).
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_ssd: standard SSD.
   * <props="china">
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * Default value: empty, which means no specification change is performed.
   * 
   * > - The valid values above are listed in descending order of disk performance. If the specified disk is a subscription disk, you cannot decrease the quota of the disk type.
   * 
   * <props="china">
   * - ESSD Entry disks can only be changed to enterprise SSDs (ESSDs) or ESSD AutoPL disks. For more information, see [Change the disk type](https://help.aliyun.com/document_detail/161980.html).
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp131n0q38u3a4zi****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request. Valid values:
   * 
   * * true: performs a dry run. The system checks whether the required parameters are specified, the request format is valid, business limits are met, and ECS resources are sufficient. If the check fails, the corresponding error is returned. If the check passes, the error code `DryRunOperation` is returned.
   * 
   * * false: performs the actual request. After the check passes, a 2XX HTTP status code is returned and the disk type or ESSD performance level is changed immediately.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The collection of disk performance control parameters.
   */
  performanceControlOptions?: ModifyDiskSpecRequestPerformanceControlOptions;
  /**
   * @remarks
   * The new performance level (PL) of the enterprise SSD (ESSD). Valid values:
   * 
   * - PL0: maximum random read/write IOPS of 10,000 per standard SSD.
   * - PL1: maximum random read/write IOPS of 50,000 per standard SSD.
   * - PL2: maximum random read/write IOPS of 100,000 per standard SSD.
   * - PL3: maximum random read/write IOPS of 1,000,000 per standard SSD.
   * 
   * Default value: PL1.
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Specifies whether to modify the provisioned read/write IOPS of the ESSD AutoPL disk.
   * 
   * Valid values: 0 to min{50,000, 1,000 × capacity − baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × capacity, 50,000}.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disk](https://help.aliyun.com/document_detail/368372.html) and [Modify the provisioned performance of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 50000
   */
  provisionedIops?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      destinationZoneId: 'DestinationZoneId',
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      performanceControlOptions: 'PerformanceControlOptions',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationZoneId: 'string',
      diskCategory: 'string',
      diskId: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      performanceControlOptions: ModifyDiskSpecRequestPerformanceControlOptions,
      performanceLevel: 'string',
      provisionedIops: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.performanceControlOptions && typeof (this.performanceControlOptions as any).validate === 'function') {
      (this.performanceControlOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

