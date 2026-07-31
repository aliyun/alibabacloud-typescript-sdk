// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageFromFamilyRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the image family.
   * 
   * Image families are supported for custom images, public images, community images, and shared images. For more information, see [Image family overview](https://help.aliyun.com/document_detail/174241.html).
   * 
   * This parameter is required.
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
      imageFamily: 'ImageFamily',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageFamily: 'string',
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

