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
   * The tag key of the new snapshot. Once specified, the tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the new snapshot. Once specified, the tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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
   * > This parameter is in invitational preview and is not publicly available.
   */
  arn?: CopySnapshotRequestArn[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the destination region to which to copy the snapshot.
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
   * Default value: null.
   * 
   * This parameter is required.
   * 
   * @example
   * CopySnapshotDemo
   */
  destinationSnapshotDescription?: string;
  /**
   * @remarks
   * The name of the new snapshot. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It cannot start with http:// or https://. The name can contain characters that are classified as letters in Unicode, including letters, Chinese characters, and digits. The name can also contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * Default value: null.
   * 
   * This parameter is required.
   * 
   * @example
   * CopySnapshotDemo
   */
  destinationSnapshotName?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  destinationStorageLocationArn?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the cloud disk. Valid values:
   * 
   * - true: encrypts the cloud disk.
   * - false: does not encrypt the cloud disk.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The customer master key (CMK) in the destination region.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the source snapshot. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The retention period of the new snapshot, in days. The snapshot undergoes automatic release when the retention period expires. Valid values: 1 to 65536.
   * 
   * Default value: null, which indicates that the snapshot does not undergo automatic release.
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
   * The tag information of the new snapshot.
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

