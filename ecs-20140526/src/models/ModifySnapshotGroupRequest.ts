// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySnapshotGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the snapshot-consistent group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is new description
   */
  description?: string;
  /**
   * @remarks
   * The new name of the snapshot-consistent group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with a `http://` or `https://`. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:).
   * 
   * @example
   * testName02
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the snapshot-consistent group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the snapshot-consistent group. You can call the [DescribeSnapshotGroups](https://help.aliyun.com/document_detail/210940.html) operation to query the IDs of available snapshot-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * ssg-j6ciyh3k52qp7ovm****
   */
  snapshotGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotGroupId: 'SnapshotGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

