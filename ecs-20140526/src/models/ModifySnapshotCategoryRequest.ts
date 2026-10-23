// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySnapshotCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot type.
   * 
   * - Archive: Archive snapshot
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
   * The retention period of the snapshot in days. The retention period starts from the time when the snapshot is created, which is specified by CreationTime. A standard snapshot must be retained for at least 14 days after it is created before it can be archived.
   * 
   * Archive snapshots have a retention period limit and must be retained as archive snapshots for at least 60 days. When you calculate the retention period of an archive snapshot, the period during which the snapshot was retained as a standard snapshot is deducted. If you delete an archive snapshot before it is retained for 60 days, you are charged for 60 days of archive storage. For more information, see [Snapshot billing](https://help.aliyun.com/document_detail/56159.html).
   * 
   * Valid values: 74 to 65536.
   * 
   * > If you do not specify this parameter, the snapshot is permanently retained.
   * 
   * @example
   * 100
   */
  retentionDays?: number;
  /**
   * @remarks
   * The snapshot ID.
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

