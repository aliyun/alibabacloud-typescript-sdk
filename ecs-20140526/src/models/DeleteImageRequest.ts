// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageRequest extends $dara.Model {
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully delete the custom image. Valid values:
   * 
   * - true: Forcefully deletes the custom image, regardless of whether it is used by any instances.
   * 
   * - false: Performs a standard deletion. Before the deletion, the system checks whether the image is used by any instances.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the custom image to delete. If the image does not exist, the request is ignored.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  imageId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the custom image. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to get the latest list of regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      force: 'Force',
      imageId: 'ImageId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      force: 'boolean',
      imageId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

