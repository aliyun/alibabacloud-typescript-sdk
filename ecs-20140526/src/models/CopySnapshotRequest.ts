// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopySnapshotRequestArn extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  roleType?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  rolearn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleType: 'RoleType',
      rolearn: 'Rolearn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'number',
      roleType: 'string',
      rolearn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopySnapshotRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the new snapshot. The tag key cannot be an empty string. It can be up to 128 characters in length and cannot start with acs: or aliyun. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the new snapshot. The tag value can be an empty string. It can be up to 128 characters in length and cannot start with acs: or aliyun. It cannot contain http:// or https://.
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

export class CopySnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * >This parameter is currently in invitational preview and unavailable for public use.
   */
  arn?: CopySnapshotRequestArn[];
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
   * The ID of the destination region to which to copy the source snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * us-east-1
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The description of the new snapshot. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * This parameter is empty by default.
   * 
   * This parameter is required.
   * 
   * @example
   * CopySnapshotDemo
   */
  destinationSnapshotDescription?: string;
  /**
   * @remarks
   * The name of the new snapshot. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is left empty by default.
   * 
   * This parameter is required.
   * 
   * @example
   * CopySnapshotDemo
   */
  destinationSnapshotName?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  destinationStorageLocationArn?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the new snapshot. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the customer master key (CMK) in Key Management Service (KMS) in the destination region.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the source snapshot. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-chengdu
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The retention period of the new snapshot. Unit: days. The new snapshot is automatically released when its retention period ends. Valid values: 1 to 65536.
   * 
   * This parameter is empty by default, which indicates that the snapshot is not automatically released.
   * 
   * @example
   * 60
   */
  retentionDays?: number;
  /**
   * @remarks
   * The ID of the source snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The tag key and value of the new snapshot.
   */
  tag?: CopySnapshotRequestTag[];
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      clientToken: 'ClientToken',
      destinationRegionId: 'DestinationRegionId',
      destinationSnapshotDescription: 'DestinationSnapshotDescription',
      destinationSnapshotName: 'DestinationSnapshotName',
      destinationStorageLocationArn: 'DestinationStorageLocationArn',
      encrypted: 'Encrypted',
      KMSKeyId: 'KMSKeyId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retentionDays: 'RetentionDays',
      snapshotId: 'SnapshotId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: { 'type': 'array', 'itemType': CopySnapshotRequestArn },
      clientToken: 'string',
      destinationRegionId: 'string',
      destinationSnapshotDescription: 'string',
      destinationSnapshotName: 'string',
      destinationStorageLocationArn: 'string',
      encrypted: 'boolean',
      KMSKeyId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retentionDays: 'number',
      snapshotId: 'string',
      tag: { 'type': 'array', 'itemType': CopySnapshotRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
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

