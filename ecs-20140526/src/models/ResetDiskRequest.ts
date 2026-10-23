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
   * - true: Performs a dry run. The system checks the required parameters, request format, and resource status. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - false: Performs a normal request. If the request passes the dry run, the cloud disk is rolled back.
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
   * The ID of the historical snapshot used to roll back the cloud disk.
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

