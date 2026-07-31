// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecRequestPerformanceControlOptions extends $dara.Model {
  /**
   * @remarks
   * The target IOPS of the disk. Only the IOPS of disks in a dedicated storage cluster can be modified.
   * 
   * Valid values: 900 to the maximum IOPS per disk, in increments of 100.
   * 
   * 
   * For more information, see [Disk performance](https://help.aliyun.com/document_detail/25382.html).
   * 
   * @example
   * 2000
   */
  IOPS?: number;
  /**
   * @remarks
   * Resets the disk performance. Only disks in a dedicated storage cluster are supported.
   * 
   * If this parameter is specified, the PerformanceControlOptions.IOPS and PerformanceControlOptions.Throughput parameters do not take effect.
   * 
   * 
   * The only valid value is All, which resets the disk IOPS and throughput to their initial values.
   * 
   * @example
   * All
   */
  recover?: string;
  /**
   * @remarks
   * The target throughput of the disk. Only the throughput of disks in a dedicated storage cluster can be modified. Unit: MB/s.
   * 
   * Valid values: 60 to the maximum throughput per disk.
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
   * > This parameter is in invitational preview and is not available for general use.
   * 
   * @example
   * cn-hangzhou-g
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The new type of the disk. Valid values:
   * 
   * - cloud_essd: enterprise SSD.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_ssd: standard SSD.
   * <props="china">
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * Default value: empty, which indicates that the disk type is not changed.
   * 
   * > - The valid values above are listed in descending order of disk performance. If the disk is a subscription disk, downgrading is not allowed.
   * 
   * <props="china">
   * - ESSD Entry disks can be changed only to enterprise SSDs or ESSD AutoPL disks. For more information, see [Change the disk type](https://help.aliyun.com/document_detail/161980.html).
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
   * Specifies whether to perform only a dry run without performing the actual request. Valid values:
   * 
   * * true: performs only a dry run. The system checks whether your AccessKey pair is valid, whether RAM users are granted permissions, and whether the required parameters are specified. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * 
   * * false: performs a dry run and performs the actual request. If the check succeeds, a 2XX HTTP status code is returned and the disk type or ESSD performance level is changed.
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
   * The disk performance control parameters.
   */
  performanceControlOptions?: ModifyDiskSpecRequestPerformanceControlOptions;
  /**
   * @remarks
   * The new performance level (PL) of the ESSD. Valid values:
   * 
   * - PL0: A single disk can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single disk can deliver up to 50,000 random read/write IOPS.
   * - PL2: A single disk can deliver up to 100,000 random read/write IOPS.
   * - PL3: A single disk can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * @example
   * PL2
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Specifies whether to modify the provisioned read/write IOPS of an ESSD AutoPL disk.
   * 
   * Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * > This parameter is supported only when DiskCategory is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the provisioned performance of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
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

