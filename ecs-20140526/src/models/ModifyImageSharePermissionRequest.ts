// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageSharePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID for shared image authorization. Valid values of N: 1 to 10. If you commit more than 10 Alibaba Cloud account IDs at a time, the system processes only the first 10 account IDs and ignores the rest.
   * 
   * @example
   * 1234567890
   */
  addAccount?: string[];
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - true: sends a precheck request without modifying the image sharing permissions. If the check passes, the DryRunOperation error code is returned.
   * - false: sends a regular request and modifies the image sharing permissions if the check passes.
   * 
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the custom image to be shared.
   * 
   * >Notice: Images with service key encryption can no longer be shared. Only images encrypted by using a customer master key (CMK) can be shared. An error is reported if you attempt to share an image with service key encryption.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp18ygjuqnwhechc****
   */
  imageId?: string;
  /**
   * @remarks
   * Specifies whether to publish or unpublish the community image. Valid values:
   * 
   * - true: publishes the image as a community image.
   * - false: unpublishes the image and changes it to a regular image. If the image is already a regular image, no changes are made.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isPublic?: boolean;
  /**
   * @remarks
   * >This parameter is in invitational preview and is not supported.
   * 
   * @example
   * hide
   */
  launchPermission?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the custom image. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to delete from image sharing. Valid values of N: 1 to 10. If you commit more than 10 Alibaba Cloud account IDs at a time, the system processes only the first 10 account IDs and ignores the rest.
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

