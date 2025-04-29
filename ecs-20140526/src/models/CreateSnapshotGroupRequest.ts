// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSnapshotGroupRequestTag } from "./CreateSnapshotGroupRequestTag";


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
   * The ID of cloud disk N for which you want to create snapshots. You can specify multiple cloud disk IDs across instances within the same zone. Valid values of N: 1 to 16. A single snapshot-consistent group can contain snapshots of up to 16 cloud disks whose total disk size does not exceed 32 TiB.
   * 
   * Take note of the following items:
   * 
   * *   You cannot specify both DiskId.N and `ExcludeDiskId.N` in the same request.
   * *   If `InstanceId` is set, you can use DiskId.N to specify only cloud disks attached to the instance specified by InstanceId, and you cannot use DiskId.N to specify cloud disks attached to multiple instances.
   */
  diskId?: string[];
  /**
   * @remarks
   * The ID of cloud disk N for which you do not want to create snapshots. If this parameter is specified, the created snapshot-consistent group does not contain snapshots of the cloud disk. Valid values of N: 1 to 16.
   * 
   * This parameter is empty by default, which indicates that snapshots are created for all the disks of the instance.
   * 
   * > You cannot specify ExcludeDiskId.N and `DiskId.N` in the same request.
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
   * Specifies whether to enable the instant access feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * >  This parameter is no longer used. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](https://help.aliyun.com/document_detail/193667.html).
   * 
   * @example
   * false
   */
  instantAccess?: boolean;
  /**
   * @remarks
   * The number of days for which the instant access feature is available. Unit: days. Valid values: 1 to 65535.
   * 
   * This parameter takes effect only when `InstantAccess` is set to true. The instant access feature is automatically disabled when the specified duration ends.
   * 
   * This parameter is left empty by default, which indicates that the instant access feature is automatically disabled when the instant access snapshots are released.
   * 
   * >  This parameter is no longer used. By default, new standard snapshots of ESSDs are upgraded to instant access snapshots free of charge without the need for additional configurations. For more information, see [Use the instant access feature](https://help.aliyun.com/document_detail/193667.html).
   * 
   * @example
   * 1
   */
  instantAccessRetentionDays?: number;
  /**
   * @remarks
   * The name of the snapshot-consistent group. The name must be 2 to 128 characters in length. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * testName
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent list of regions.
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
   * > This parameter is unavailable for public use.
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

