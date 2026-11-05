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
   * Specifies whether to perform a dry run on the request. Valid values:
   * 
   * - true: performs a dry run without rolling back the cloud disk. The system checks whether the required parameters are specified, the request format, and the resource status limits. If the request fails the check, the corresponding error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * - false: performs a normal request. If the request passes the check, the cloud disk rollback operation is initiated.
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
   * The ID of the snapshot to which the cloud disk is rolled back.
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

