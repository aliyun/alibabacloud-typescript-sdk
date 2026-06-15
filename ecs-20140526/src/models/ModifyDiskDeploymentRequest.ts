// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * The new category of the disk. This parameter is valid only when you migrate a disk between different dedicated block storage clusters. The only valid value is `cloud_essd` (ESSD disk).
   * 
   * Default value: An empty string. If you leave this parameter empty, the category of the disk remains unchanged.
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
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - `true`: Performs a dry run. The system checks the request for required parameters, format, service limits, and inventory. The system returns an error if the check fails, or the `DryRunOperation` error code if the check succeeds.
   * 
   * - `false`: Sends the request. If the request passes the check, the system returns a 2xx HTTP status code and migrates the disk.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new performance level of the ESSD disk. This parameter is valid only when you migrate a disk between different dedicated block storage clusters. Valid values:
   * 
   * - `PL0`: A maximum of 10,000 random read/write IOPS per disk.
   * 
   * - `PL1`: A maximum of 50,000 random read/write IOPS per disk.
   * 
   * Default value: An empty string. If you leave this parameter empty, the performance level of the disk remains unchanged.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * - To migrate the disk to a dedicated block storage cluster, specify `StorageClusterId`.
   * 
   * - To migrate the disk to a public cloud block storage cluster, leave `StorageClusterId` empty.
   * 
   * Default value: An empty string. If you leave this parameter empty, the disk is migrated to a public cloud block storage cluster.
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

