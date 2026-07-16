// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. The tag key cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The snapshot type. Valid values:
   * 
   * - Standard: standard snapshot.
   * - Flash: local snapshot.
   * 
   * > This parameter will be deprecated. Standard snapshots of enterprise SSDs have been upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). No additional configuration or fees are required. This applies to enterprise SSDs, ESSD AutoPL disks, ESSD Entry disks, and regional enterprise SSDs. Standard snapshots of standard SSDs are also active by default.
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the snapshot. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: null.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1s5fnvk4gn2tws0****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to enable the snapshot instant access feature. Valid values:
   * - true: enables the feature. Only enterprise SSDs support this feature.
   * - false: shutdown. A standard snapshot is created.
   * 
   * Default value: false.
   * 
   * > This parameter is deprecated. Standard snapshots of enterprise SSDs have been upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). No additional configuration or fees are required. This applies to enterprise SSDs, ESSD AutoPL disks, ESSD Entry disks, and regional enterprise SSDs. Standard snapshots of standard SSDs are also active by default.
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * Settings for the retention period of the snapshot instant access feature. After the retention period expires, the snapshot is subject to automatic release. This parameter takes effect only when `InstantAccess=true`. Unit: days. Valid values: 1 to 65535.
   * 
   * Default value: the same as the value of the `RetentionDays` parameter.
   * 
   * > This parameter is deprecated. Standard snapshots of enterprise SSDs have been upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). No additional configuration or fees are required. This applies to enterprise SSDs, ESSD AutoPL disks, ESSD Entry disks, and regional enterprise SSDs. Standard snapshots of standard SSDs are also active by default.
   * 
   * @example
   * 1
   */
  instantAccessRetentionDays?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group to which the snapshot belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Settings for the retention period of the snapshot. Unit: days. Valid values: 1 to 65536. The snapshot is subject to automatic release when the retention period expires.
   * 
   * Default value: null, which indicates that the snapshot is not subject to automatic release.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The name of the snapshot. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. The name can contain Unicode characters under the letter category (including letters in English and Chinese), ASCII digits (0-9), colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * > The name cannot start with `auto` to avoid conflicts with the names of automatic snapshots.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  storageLocationArn?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateSnapshotRequestTag[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      description: 'Description',
      diskId: 'DiskId',
      instantAccess: 'InstantAccess',
      instantAccessRetentionDays: 'InstantAccessRetentionDays',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      snapshotName: 'SnapshotName',
      storageLocationArn: 'StorageLocationArn',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      description: 'string',
      diskId: 'string',
      instantAccess: 'boolean',
      instantAccessRetentionDays: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      snapshotName: 'string',
      storageLocationArn: 'string',
      tag: { 'type': 'array', 'itemType': CreateSnapshotRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

