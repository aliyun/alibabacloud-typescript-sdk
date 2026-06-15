// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the destination OSS bucket. The bucket must be in the same region as the snapshot.
   * 
   * This parameter is required.
   */
  ossBucket?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the snapshot is located. You can call the `DescribeRegions` operation to query the latest region list.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the RAM role that authorizes ECS to export the snapshot. This role must grant ECS permission to write to the specified OSS bucket. If you omit this parameter, ECS uses its default service-linked role.
   */
  roleName?: string;
  /**
   * @remarks
   * The ID of the snapshot to export.
   * 
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

