// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskSpecRequestPerformanceControlOptions extends $dara.Model {
  /**
   * @remarks
   * The target IOPS of the disk. You can only modify the IOPS of disks in a dedicated block storage cluster.
   * 
   * Valid values: 900 to the maximum IOPS of a single disk. Step size: 100.
   * 
   * For more information, see [Disk performance](https://help.aliyun.com/document_detail/25382.html).
   * 
   * @example
   * 2000
   */
  IOPS?: number;
  /**
   * @remarks
   * Resets the disk performance. This parameter is supported only for disks in a dedicated block storage cluster.
   * 
   * After this parameter is specified, the PerformanceControlOptions.IOPS and PerformanceControlOptions.Throughput parameters do not take effect.
   * 
   * Currently, you can only set this parameter to All, which resets the disk IOPS and throughput to their initial values.
   * 
   * @example
   * All
   */
  recover?: string;
  /**
   * @remarks
   * The target throughput of the disk. Unit: MB/s. You can only modify the throughput of disks in a dedicated block storage cluster.
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
   * > This parameter is in invitational preview and is not supported.
   * 
   * @example
   * cn-hangzhou-g
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * Changes the category of a disk. Valid values:
   * 
   * - cloud_essd: enterprise SSD.
   * - cloud_auto: ESSD AutoPL disk.
   * - cloud_ssd: standard SSD.
   * <props="china">
   * - cloud_essd_entry: ESSD Entry disk.
   * 
   * - cloud_efficiency: ultra disk.
   * 
   * Default value: null, which indicates that no specification change is performed on the disk.
   * 
   * > - The preceding valid values are listed in descending order of disk performance. If the specified disk is a subscription disk, you cannot downgrade the disk category.
   * 
   * <props="china">
   * - ESSD Entry disks can only be changed to enterprise SSDs or ESSD AutoPL disks. For more information, see [Change the category of a disk](https://help.aliyun.com/document_detail/161980.html).
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
   * Specifies whether to only precheck the request. Valid values:
   * 
   * * true: The request is prechecked. The system checks whether required parameters are specified, the request format is valid, the business limits are met, and the ECS inventory is sufficient. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * 
   * * false: The request is sent. If the request passes the precheck, a 2xx HTTP status code is returned and the disk category or ESSD performance level is directly changed.
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
   * Modifies the performance level (PL) of an enterprise SSD. Valid values:
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
   * The provisioned read and write IOPS of the ESSD AutoPL disk.
   * 
   * Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}.
   * 
   * Baseline performance = min{1,800 + 50 × Capacity, 50,000}.
   * 
   * > This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the provisioned information of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
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

