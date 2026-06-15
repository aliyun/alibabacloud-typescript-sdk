// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageSharePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts with which to share the image. You can specify up to 10 account IDs. If you specify more than 10 account IDs in a request, only the first 10 are processed.
   * 
   * @example
   * 1234567890
   */
  addAccount?: string[];
  /**
   * @remarks
   * Specifies whether to perform a dry run. A dry run checks for request parameter validity and permissions. If the request is valid, the `DryRunOperation` error code is returned. Otherwise, an error is returned. If the request is valid, no fee is incurred and no resource is created. Set the value to `true` to perform a dry run. Default value: `false`.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * >Notice: 
   * 
   * You can no longer share images that are encrypted by using a service key. You can share only images that are encrypted by using a customer managed key (CMK). If you attempt to share an image that is encrypted by using a service key, the request fails.
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
   * 
   * - false: unpublishes the community image. The image becomes a custom image. If the image is a custom image, this setting has no effect.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isPublic?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * hide
   */
  launchPermission?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the custom image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts from which to unshare the image. You can specify up to 10 account IDs. If you specify more than 10 account IDs in a request, only the first 10 are processed.
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

