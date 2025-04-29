// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ossBucket?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  roleName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucket: 'OssBucket',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleName: 'RoleName',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossBucket: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleName: 'string',
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

