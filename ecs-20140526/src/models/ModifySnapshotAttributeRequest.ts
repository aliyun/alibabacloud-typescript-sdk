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
   * Specifies whether to disable the snapshot instant access feature. Valid values:
   * 
   * - true: Disables the snapshot instant access feature.
   * - false: Does not disable the snapshot instant access feature.
   * 
   * Default value: false.
   * 
   * >This parameter is deprecated. Standard snapshots of enterprise SSDs have been upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). No additional configuration or fees are required.
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
   * The number of days for which the snapshot is retained. The retention period is calculated from the snapshot **creation time** (represented in the ISO 8601 standard and in UTC+0 time in the yyyy-MM-ddTHH:mm:ssZ format). Valid values: 1 to 65536.
   * 
   * >The snapshot retention period can only be extended. Shortening the existing retention period of a snapshot is not supported.
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
   * The display name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * The name cannot start with auto to avoid conflicts with automatic snapshot names.
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

