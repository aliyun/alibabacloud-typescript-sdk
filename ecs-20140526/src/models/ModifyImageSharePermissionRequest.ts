// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageSharePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of Alibaba Cloud accounts to which you want to share the custom image. Valid values of N: 1 to 10. If you specify more than 10 Alibaba Cloud account IDs, the system processes only the first 10 account IDs. The excess account IDs are ignored.
   * 
   * @example
   * 1234567890
   */
  addAccount?: string[];
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the shared custom image.
   * 
   * >  You can share images encrypted by using CMKs but cannot share images encrypted by using service keys. When you share an image encrypted by using a service key, an error is reported.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp18ygjuqnwhechc****
   */
  imageId?: string;
  /**
   * @remarks
   * Specifies whether to publish or unpublish a community image. Valid values:
   * 
   * *   true: publishes the custom image as a community image.
   * *   false: unpublishes a community image. The unpublish operation takes effect only on community images.
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
   * The IDs of Alibaba Cloud accounts from which you want to unshare the custom image. Valid values of N: 1 to 10. If you specify more than 10 Alibaba Cloud account IDs, the system processes only the first 10 account IDs. The excess account IDs are ignored.
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

