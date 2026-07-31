// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk to be rolled back.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp199lyny9b3****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - true: performs a dry run without actually rolling back the cloud disk. The system checks whether required parameters are specified, whether the request format is valid, and whether resource status constraints are met. If the check fails, the corresponding error message is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - false: performs a dry run and sends the request. If the check succeeds, the cloud disk rollback operation is initiated.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the snapshot to use for rolling back the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp199lyny9b3****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

