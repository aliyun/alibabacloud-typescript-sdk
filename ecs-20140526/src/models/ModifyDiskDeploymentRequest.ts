// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDiskDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * The new disk type. This parameter is valid only during disk migration between different dedicated block storage clusters. Only cloud_essd (ESSD) is supported.
   * 
   * Default value: empty, which indicates that the disk type is not changed.
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
   * - true: performs a dry run without executing the request. The system checks whether required parameters are specified, the request format is valid, service limits are met, and ECS resources are sufficient. If the request fails the check, the corresponding error is returned. If the request passes the check, the DryRunOperation error code is returned.
   * - false: executes the request. If the request passes the check, a 2xx HTTP status code is returned and the disk is migrated.
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
   * The new ESSD performance level. This parameter is valid only during disk migration between different dedicated block storage clusters. Valid values:
   * - PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * - PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
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
   * The ID of the dedicated block storage cluster. Before you migrate a disk into a dedicated block storage cluster, you must purchase and create the cluster, and ensure that the disk and the destination cluster are in the same zone.
   * - To migrate a disk to a dedicated block storage cluster, you must specify `StorageClusterId`.
   * - To migrate a disk to a public cloud block storage cluster, you must leave `StorageClusterId` empty.
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

