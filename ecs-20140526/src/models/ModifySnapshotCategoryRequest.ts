// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySnapshotCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot type.
   * 
   * - Archive: archived snapshot
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
   * The number of days for which the snapshot is retained. The retention period starts from the snapshot creation time (CreationTime). A standard snapshot can be archived only after it has been retained for at least 14 days since its creation.
   * 
   * Archived snapshots must be retained for at least 60 days. When calculating the retention period of an archived snapshot, the time already retained as a standard snapshot is deducted. If an archived snapshot is deleted before 60 days, you are charged for 60 days of archive storage. For more information, see [Snapshot billing](https://help.aliyun.com/document_detail/56159.html).
   * 
   * Valid values: [74, 65536].
   * 
   * >If you do not specify this parameter, the snapshot is permanently retained.
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

