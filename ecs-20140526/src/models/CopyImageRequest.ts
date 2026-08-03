// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyImageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the copied image. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the copied image. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the copied image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is a description example.
   */
  destinationDescription?: string;
  /**
   * @remarks
   * The name of the copied image. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `aliyun` or `acs:`. The name cannot contain `http://` or `https://`. The name can contain digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * YourImageName
   */
  destinationImageName?: string;
  /**
   * @remarks
   * The ID of the destination region to which the image is copied.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: performs only a dry run. The system checks whether your AccessKey pair is valid, whether Resource Access Management (RAM) user authorization is complete, and whether the required parameters are specified. If the request fails the dry run, an error message is returned. If the request passes the dry run, the error code `DryRunOperation` is returned.
   * - false: performs a dry run and sends the request. If the request passes the dry run, a 2XX HTTP status code is returned and the operation is Normal.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the copied image.
   * 
   * - true: encrypts the copied image.
   * - false: does not encrypt the copied image.
   * - Not specified: determined by the backend. For more information, see the supplementary description below.
   * 
   * Default value: not specified.
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
   * The region ID of the source custom image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the copied image. If you do not set this parameter, the copied image belongs to the default resource group.
   * 
   * > If you are a Resource Access Management (RAM) user and invoke this operation with the `ResourceGroupId` parameter left empty, take note of the following: if the RAM user does not have permissions on the default resource group, the error message `Forbidden: User not authorized to operate on the specified resource` is returned. Set the `ResourceGroupId` parameter to a resource group ID that the RAM user has permissions on, or grant the RAM user permissions on the default resource group by using the corresponding Alibaba Cloud account before you invoke this operation again. The `ResourceGroupId` parameter determines which resource group the replicated image belongs to.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags.
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

