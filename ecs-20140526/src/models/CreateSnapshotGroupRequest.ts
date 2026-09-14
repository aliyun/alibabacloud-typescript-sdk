// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnapshotGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot consistency group. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot consistency group. Valid values of N: 1 to 20. The tag value can be an empty string. It can be up to 128 characters in length and cannot start with `acs:`, or contain `http://` or `https://`.
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
   * The description of the snapshot consistency group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of a disk for which you want to create a snapshot consistency group. You can specify multiple disk IDs across instances within the same zone. Valid values of N: 1 to 128. A snapshot consistency group can contain up to 128 disks with a total capacity not exceeding 256 TiB.
   * 
   * Note the following:
   * 
   * - This parameter cannot be set together with `ExcludeDiskId.N`.
   * - If `InstanceId` is set, this parameter can only specify disks that are attached to the specified instance. Specifying disk IDs across multiple instances is not supported in this case.
   */
  diskId?: string[];
  /**
   * @remarks
   * The ID of a disk in the instance for which you do not want to create a snapshot. The snapshot consistency group does not include a snapshot of the specified disk. Valid values of N: 1 to 128.
   * 
   * Default value: empty, which indicates that snapshots are created for all disks in the instance.
   * 
   * > This parameter cannot be set together with `DiskId.N`.
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
   * Specifies whether to enable snapshot instant access. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * Default value: false.
   * 
   * > **[Deprecated]** This parameter is deprecated. Standard snapshots of standard SSD disks have been upgraded to support [instant access by default](https://help.aliyun.com/document_detail/193667.html). No additional configuration or charges are required.
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * The duration of snapshot instant access. Unit: days. Valid values: 1 to 65535.
   * 
   * This parameter takes effect only when `InstantAccess` is set to `true`. After the specified period expires, the instant access feature is automatically disabled.
   * 
   * Default value: empty, which indicates that the retention period is the same as the snapshot release time.
   * 
   * > **[Deprecated]** This parameter is deprecated. Standard snapshots of standard SSD disks have been upgraded to support [instant access by default](https://help.aliyun.com/document_detail/193667.html). No additional configuration or charges are required.
   * 
   * @example
   * 1
   */
  instantAccessRetentionDays?: number;
  /**
   * @remarks
   * The name of the snapshot consistency group. The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
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
   * The ID of the resource group to which the snapshot consistency group belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * > This parameter is not yet available.
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

