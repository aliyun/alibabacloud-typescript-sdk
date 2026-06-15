// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > This parameter is not recommended. For better compatibility, use the Key parameter instead.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. It can be an empty string, must be 128 characters or shorter, and cannot contain http\\:// or https\\://.
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
   * The type of the snapshot. Valid values:
   * 
   * - Standard: a standard snapshot.
   * 
   * - Flash: a Flash Snapshot.
   * 
   * > This parameter is deprecated. standard snapshots for ESSD cloud disks now include the [Instant Access](https://help.aliyun.com/document_detail/193667.html) feature by default at no additional cost.
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. The token must be unique for each request. The **ClientToken** value must be an ASCII string of up to 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The snapshot description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp1s5fnvk4gn2tws0****
   */
  diskId?: string;
  /**
   * @remarks
   * Specifies whether to enable the Instant Access feature. Valid values:
   * 
   * - true: Enables the Instant Access feature. This feature can be enabled only for snapshots of ESSD cloud disks.
   * 
   * - false: Disables the Instant Access feature. A standard snapshot is created.
   * 
   * Default value: false.
   * 
   * > This parameter is deprecated. standard snapshots for ESSD cloud disks now include the [Instant Access](https://help.aliyun.com/document_detail/193667.html) feature by default at no additional cost.
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * The retention period for the Instant Access feature, in days. The snapshot is automatically deleted when this retention period expires. This parameter takes effect only when `InstantAccess` is set to `true`. Valid values: 1 to 65,535.
   * 
   * Defaults to the value of `RetentionDays`.
   * 
   * > This parameter is deprecated. standard snapshots for ESSD cloud disks now include the [Instant Access](https://help.aliyun.com/document_detail/193667.html) feature by default at no additional cost.
   * 
   * @example
   * 1
   */
  instantAccessRetentionDays?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the Resource Group to which the snapshot belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The retention period of the snapshot, in days. Valid values: 1 to 65,536. The snapshot is automatically deleted when the retention period expires.
   * 
   * If this parameter is not specified, the snapshot is retained indefinitely.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The snapshot name must be 2 to 128 characters long. It must start with a letter or a Chinese character and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * > The name cannot start with `http://` or `https://`. To avoid conflicts with auto snapshot names, the name cannot start with `auto`.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * > This parameter is not available for public use.
   * 
   * @example
   * null
   */
  storageLocationArn?: string;
  /**
   * @remarks
   * The tags to add to the snapshot. You can add up to 20 tags.
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

