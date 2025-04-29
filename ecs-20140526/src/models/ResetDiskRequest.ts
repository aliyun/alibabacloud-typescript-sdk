// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk that you want to roll back.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp199lyny9b3****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to check the validity of the request without actually making the request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and resource state limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   false: performs a dry run and performs the actual request. If the request passes the dry run, the rollback operation is performed.
   * 
   * Default value: false
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
   * The ID of the snapshot that you want to use to roll back the cloud disk.
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

