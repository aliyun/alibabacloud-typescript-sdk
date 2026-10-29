// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyShareImageRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts to share the image with.
   */
  addAccount?: number[];
  /**
   * @remarks
   * The business line. Only the Enterprise Edition scenario is supported. Default value: 1.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The ID of the source image.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The product type, such as Cloud Desktop, cloud application, or workstation.
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts to remove from the image sharing list.
   */
  removeAccount?: number[];
  static names(): { [key: string]: string } {
    return {
      addAccount: 'AddAccount',
      bizType: 'BizType',
      imageId: 'ImageId',
      productType: 'ProductType',
      removeAccount: 'RemoveAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccount: { 'type': 'array', 'itemType': 'number' },
      bizType: 'number',
      imageId: 'string',
      productType: 'string',
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

