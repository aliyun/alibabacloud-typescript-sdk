// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySnapshotAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the snapshot. The description can be empty and can be up to 256 characters in length. It cannot start with http:// or https://.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to shutdown the instant access feature for the snapshot. Valid values:
   * - true: shutdown the instant access feature.
   * - false: do not shutdown the instant access feature.
   * Default value: false.
   * 
   * > **[Deprecated]** This parameter is deprecated. Standard snapshots of ESSD cloud disks have been upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). You do not need to perform additional configurations, and no additional fees are incurred.
   * 
   * @example
   * false
   */
  disableInstantAccess?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The retention period of the snapshot in days. When you specify this parameter, the retention period is calculated from the **creation time** of the snapshot. The creation time is represented in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format and displayed in UTC. Valid values: 1 to 65536.
   * > You can only extend the retention period of a snapshot. You cannot shorten the existing retention period.
   * 
   * @example
   * 10
   */
  retentionDays?: number;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp199lyny9bb47pa****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The display name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with http:// or https://. It can contain digits, colons (:), underscores (_), and hyphens (-). To prevent name conflicts with automatic snapshots, the name cannot start with auto.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      disableInstantAccess: 'DisableInstantAccess',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableInstantAccess: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      snapshotId: 'string',
      snapshotName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

