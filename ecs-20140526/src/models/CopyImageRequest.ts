// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyImageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the copied image. Valid values of N: 1 to 20. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the copied image. Valid values of N: 1 to 20. If you specify this parameter, it can be an empty string. The tag value can be up to 128 characters in length. It cannot start with acs:, and cannot contain http:// or https://.
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

export class CopyImageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken parameter can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the copied image. The description must be 2 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * This is a description example.
   */
  destinationDescription?: string;
  /**
   * @remarks
   * The name of the copied image. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character, and cannot start with aliyun or acs:. It cannot contain http:// or https://. It can contain digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * YourImageName
   */
  destinationImageName?: string;
  /**
   * @remarks
   * The ID of the destination region.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * Specifies whether to only perform a dry run for this request. Valid values:
   * 
   * - true: performs a dry run. The system checks whether your AccessKey pair is valid, whether the Resource Access Management (RAM) user has authorization, and whether the required parameters are specified. If the request fails the dry run, the corresponding error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * - false: sends a Normal request. If the request passes the dry run, a 2XX HTTP status code is returned and the operation is performed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * > This parameter is not available.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the copied image. Valid values:
   * 
   * - true: Encrypts the image.
   * - false: Does not encrypt the image.
   * - Not specified: The encryption status depends on the backend logic. For more information, see the supplementary description below.
   * 
   * Default value: none.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The ID of the source custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp1h46wfpjsjastc****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the key used to encrypt the image.
   * 
   * @example
   * e522b26d-abf6-4e0d-b5da-04b7******3c
   */
  KMSKeyId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the source custom image. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the image after replication. If you do not specify this parameter, the image after replication belongs to the default resource group.
   * 
   * > If you invoke this operation as a Resource Access Management (RAM) user and leave ResourceGroupId empty, note that if the Resource Access Management (RAM) user does not have permissions on the default resource group, the operation returns the `Forbidden: User not authorized to operate on the specified resource` error. Update the Settings of ResourceGroupId to the ID of a resource group on which the Resource Access Management (RAM) user has permissions, or use the corresponding Alibaba Cloud account to grant the Resource Access Management (RAM) user permissions on the default resource group, and then invoke this operation again.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CopyImageRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      destinationDescription: 'DestinationDescription',
      destinationImageName: 'DestinationImageName',
      destinationRegionId: 'DestinationRegionId',
      dryRun: 'DryRun',
      encryptAlgorithm: 'EncryptAlgorithm',
      encrypted: 'Encrypted',
      imageId: 'ImageId',
      KMSKeyId: 'KMSKeyId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      destinationDescription: 'string',
      destinationImageName: 'string',
      destinationRegionId: 'string',
      dryRun: 'boolean',
      encryptAlgorithm: 'string',
      encrypted: 'boolean',
      imageId: 'string',
      KMSKeyId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CopyImageRequestTag },
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

