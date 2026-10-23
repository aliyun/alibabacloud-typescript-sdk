// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the snapshot-consistent group. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the snapshot-consistent group. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
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

export class CreateSnapshotGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the snapshot-consistent group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the disk for which you want to create a snapshot-consistent group. You can specify multiple disk IDs across instances in the same zone. Valid values of N: 1 to 128. A single snapshot-consistent group can contain up to 128 disks with a total capacity of up to 256 TiB.
   * 
   * Take note of the following items:
   * 
   * - This parameter and `ExcludeDiskId.N` cannot be set at the same time.
   * - If you set `InstanceId`, you can set this parameter only to the IDs of disks attached to the specified instance. Setting multiple cross-instance disk IDs is no longer supported.
   */
  diskId?: string[];
  /**
   * @remarks
   * The ID of the disk for which you do not want to create a snapshot in the instance. After you specify a disk ID, the created snapshot-consistent group does not contain the snapshot of the disk. Valid values of N: 1 to 128.
   * 
   * Default value: empty, which indicates that snapshots are created for all disks in the instance.
   * 
   * > This parameter and `DiskId.N` cannot be set at the same time.
   * 
   * @example
   * d-j6cf7l0ewidb78lq****
   */
  excludeDiskId?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-j6ca469urv8ei629****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable the snapshot instant access feature. Valid values:
   * 
   * - true: enables the feature.
   * - false: disables the feature.
   * 
   * Default value: false.
   * 
   * > This parameter is deprecated. Standard snapshots of ESSDs are upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). You do not need to configure this parameter, and no additional fees are incurred.
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * Sets the retention period for the snapshot instant access feature. Unit: days. Valid values: 1 to 65535.
   * 
   * This parameter takes effect only when `InstantAccess` is set to true. The snapshot instant access feature is automatically disabled when the specified period expires.
   * 
   * Default value: empty, which indicates that the retention period is the same as the snapshot release time.
   * 
   * > This parameter is deprecated. Standard snapshots of ESSDs are upgraded to [instant access by default](https://help.aliyun.com/document_detail/193667.html). You do not need to configure this parameter, and no additional fees are incurred.
   * 
   * @example
   * 1
   */
  instantAccessRetentionDays?: number;
  /**
   * @remarks
   * The name of the snapshot-consistent group. The name must be 2 to 128 characters in length and can contain letters and Chinese characters. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, periods (.), underscores (_), hyphens (-), and colons (:).
   * 
   * @example
   * testName
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the snapshot-consistent group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * null
   */
  storageLocationArn?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateSnapshotGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      diskId: 'DiskId',
      excludeDiskId: 'ExcludeDiskId',
      instanceId: 'InstanceId',
      instantAccess: 'InstantAccess',
      instantAccessRetentionDays: 'InstantAccessRetentionDays',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageLocationArn: 'StorageLocationArn',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      diskId: { 'type': 'array', 'itemType': 'string' },
      excludeDiskId: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instantAccess: 'boolean',
      instantAccessRetentionDays: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageLocationArn: 'string',
      tag: { 'type': 'array', 'itemType': CreateSnapshotGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.diskId)) {
      $dara.Model.validateArray(this.diskId);
    }
    if(Array.isArray(this.excludeDiskId)) {
      $dara.Model.validateArray(this.excludeDiskId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

