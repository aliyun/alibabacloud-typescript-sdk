// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * The new disk type. This parameter takes effect only when you perform an Upgrade/Downgrade during migration between different dedicated block storage clusters. Currently, only cloud_essd (enterprise SSD) is supported.
   * 
   * Default value: empty, which indicates that the disk type is not changed during the Upgrade/Downgrade.
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
   * Specifies whether to perform only a dry run. Valid values:
   * - true: performs only a dry run. The system checks the required parameters, request format, business restrictions, and ECS inventory. If the check fails, the corresponding error is returned. If the check succeeds, the error code DryRunOperation is returned.
   * - false: performs a dry run and sends the request. If the check succeeds, a 2XX HTTP status code is returned and the disk is migrated.
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
   * The performance level of the enterprise SSD. This parameter takes effect only when you migrate a disk between different dedicated block storage clusters. Valid values:
   * - PL0: a maximum of 10,000 random read/write IOPS per disk.
   * - PL1: a maximum of 50,000 random read/write IOPS per disk.
   * 
   * Default value: empty, which indicates that the performance level is not changed.
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
   * - To migrate a disk to a dedicated block storage cluster, you must specify `StorageClusterId`.
   * - To migrate a disk to a public cloud block storage cluster, `StorageClusterId` must be empty.
   * 
   * Default value: empty, which indicates that the disk is migrated to a public cloud block storage cluster.
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

