// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySnapshotCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The new type of the snapshot.
   * 
   * *   Archive: archive snapshot
   * 
   * @example
   * Archive
   */
  category?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The retention period of the snapshot. Unit: days. The retention period started at the point in time when the snapshot was created. After the snapshot is archived, the minimum retention period (also called minimum archive period) is 60 days. If you delete the snapshot within 60 days after the snapshot is archived, you are charged archive tier storage fees for the snapshot for 60 days. For more information about the billing of snapshots, see [Snapshots](https://help.aliyun.com/document_detail/56159.html).
   * 
   * Valid values: 60 to 65536.
   * 
   * >  If you do not specify this parameter, the snapshot is permanently retained.
   * 
   * @example
   * 60
   */
  retentionDays?: number;
  /**
   * @remarks
   * The ID of the snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * s-123**sd
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
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

