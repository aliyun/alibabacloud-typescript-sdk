// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopyImageRequestTag } from "./CopyImageRequestTag";


export class CopyImageRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * The description of the image copy. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is a description example.
   */
  destinationDescription?: string;
  /**
   * @remarks
   * The name of the new image. The name must be 2 to 128 characters in length. The name must start with a letter and cannot contain `http://` or `https://`. The name cannot start with `acs:` or `aliyun`. The name can contain letters, digits, periods (.), colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * YourImageName
   */
  destinationImageName?: string;
  /**
   * @remarks
   * The ID of the destination region to which the source custom image is copied.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  dryRun?: boolean;
  /**
   * @remarks
   * > This parameter is unavailable.
   * 
   * @example
   * hide
   */
  encryptAlgorithm?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the new image.
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
   * The ID of the key used to encrypt the image copy.
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
   * The ID of the resource group to which to assign the new image. If you do not specify this parameter, the new image is assigned to the default resource group.
   * 
   * >  If you call the CopyImage operation as a Resource Access Management (RAM) user who does not have the permissions to manage the default resource group and do not specify `ResourceGroupId`, the `Forbidden: User not authorized to operate on the specified resource` error message is returned. You must specify the ID of a resource group that the RAM user has the permissions to manage or grant the RAM user the permissions to manage the default resource group before you call the CopyImage operation again.
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

