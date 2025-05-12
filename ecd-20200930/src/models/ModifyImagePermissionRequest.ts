// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImagePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of Alibaba Cloud accounts to which to share the image that will be created based on the image template. You can specify up to 20 account IDs.
   */
  addAccount?: number[];
  /**
   * @remarks
   * The IDs of the images.
   * 
   * This parameter is required.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of Alibaba Cloud account N from which you want to unshare the custom image. Valid values of N: 1 to 10. If the value of N is greater than 10, this parameter is ignored.
   */
  removeAccount?: number[];
  static names(): { [key: string]: string } {
    return {
      addAccount: 'AddAccount',
      imageId: 'ImageId',
      regionId: 'RegionId',
      removeAccount: 'RemoveAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccount: { 'type': 'array', 'itemType': 'number' },
      imageId: 'string',
      regionId: 'string',
      removeAccount: { 'type': 'array', 'itemType': 'number' },
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

