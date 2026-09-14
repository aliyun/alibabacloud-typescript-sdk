// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:, and cannot contain http:// or https://.
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
   * - Standard: normal snapshot.
   * - Flash: local snapshot.
   * 
   * > This parameter is being deprecated. Standard snapshots for ESSD disks have been upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). No additional configuration is required and no additional fees are incurred.
   * 
   * @example
   * Standard
   */
  category?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The snapshot description. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
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
   * - true: enables the feature. Only ESSD disks support this feature.
   * - false: disables the feature. A normal snapshot is created.
   * 
   * Default value: false.
   * 
   * > This parameter is deprecated. Standard snapshots for ESSD disks have been upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). No additional configuration is required and no additional fees are incurred.
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * Settings for the retention period of the snapshot instant access feature. The snapshot undergoes automatic release when the retention period expires. This parameter takes effect only when `InstantAccess` is set to `true`. Unit: days. Valid values: 1 to 65535.
   * 
   * Default value: the same as the value of the `RetentionDays` parameter.
   * 
   * > This parameter is deprecated. Standard snapshots for ESSD disks have been upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). No additional configuration is required and no additional fees are incurred.
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
   * Settings for the retention period of the snapshot, in days. Valid values: 1 to 65536. The snapshot undergoes automatic release when the retention period expires.
   * 
   * Default value: empty, which indicates that the snapshot does not undergo automatic release.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * The snapshot name. The name must be 2 to 128 characters in length, must start with an uppercase or lowercase letter or a Chinese character, and can contain Unicode characters in the letter category (including English and Chinese characters) and ASCII digits (0–9). The name can contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * > The name cannot start with http:// or https://. To avoid conflicts with automatic snapshot names, the name cannot start with `auto`.
   * 
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * null
   */
  storageLocationArn?: string;
  /**
   * @remarks
   * The list of tags.
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

