// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * The new disk type. This parameter is valid only when you migrate a disk between different dedicated block storage clusters. Only cloud_essd (standard SSD) is supported.
   * 
   * Default value: empty, which indicates that the disk type is not changed (no Upgrade/Downgrade) during migration.
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The disk ID.
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
   * - true: performs a dry run. The system checks whether the required parameters are specified, the request format is valid, business limits are met, and ECS inventory is sufficient. If the check fails, the corresponding error is returned. If the check passes, the error code DryRunOperation is returned.
   * - false: performs a normal request. After the check passes, a 2XX HTTP status code is returned and the disk migration starts immediately.
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
   * The new ESSD performance level of the standard SSD. This parameter is valid only when you migrate a disk between different dedicated block storage clusters. Valid values:
   * - PL0: maximum random read/write IOPS of 10,000 for a single disk.
   * - PL1: maximum random read/write IOPS of 50,000 for a single disk.
   * 
   * Default value: empty, which indicates that the performance level is not changed during migration.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The dedicated block storage cluster ID.
   * - If you migrate the disk to a dedicated block storage cluster, you must specify `StorageClusterId`.
   * - If you migrate the disk to a public block storage cluster, `StorageClusterId` must be empty.
   * 
   * Default value: empty, which indicates that the disk is migrated to a public block storage cluster.
   * 
   * @example
   * dbsc-cn-c4d2uea****
   */
  storageClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      performanceLevel: 'PerformanceLevel',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageClusterId: 'StorageClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
      diskId: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      performanceLevel: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

