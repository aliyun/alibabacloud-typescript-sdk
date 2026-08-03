// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageSharePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID for which you want to grant authorization to share the image. Valid values of N: 1 to 10. If you submit more than 10 Alibaba Cloud accounts in a single request, the system processes only the first 10 and ignores the rest.
   * 
   * @example
   * 1234567890
   */
  addAccount?: string[];
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the custom image to be shared.
   * 
   * >Notice: Images encrypted with a service key can no longer be shared. Only images encrypted with a customer master key (CMK) can be shared. An error is returned if you attempt to share an image that uses service key encryption.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp18ygjuqnwhechc****
   */
  imageId?: string;
  /**
   * @remarks
   * Specifies whether to publish or delist the community image. Valid values:
   * 
   * - true: Publishes the image as a community image.
   * - false: Delists the image to a regular image. If the image is already a regular image, no change is made.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isPublic?: boolean;
  /**
   * @remarks
   * >This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * hide
   */
  launchPermission?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the custom image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID from which you want to delete image sharing. Valid values of N: 1 to 10. If you submit more than 10 Alibaba Cloud accounts in a single request, the system processes only the first 10 and ignores the rest.
   * 
   * @example
   * 1234567890
   */
  removeAccount?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      addAccount: 'AddAccount',
      dryRun: 'DryRun',
      imageId: 'ImageId',
      isPublic: 'IsPublic',
      launchPermission: 'LaunchPermission',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removeAccount: 'RemoveAccount',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccount: { 'type': 'array', 'itemType': 'string' },
      dryRun: 'boolean',
      imageId: 'string',
      isPublic: 'boolean',
      launchPermission: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removeAccount: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addAccount)) {
      $dara.Model.validateArray(this.addAccount);
    }
    if(Array.isArray(this.removeAccount)) {
      $dara.Model.validateArray(this.removeAccount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

