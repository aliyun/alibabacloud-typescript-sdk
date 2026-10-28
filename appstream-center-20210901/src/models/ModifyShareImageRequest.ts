// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyShareImageRequest extends $dara.Model {
  addAccount?: number[];
  /**
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @example
   * CloudDesktop
   */
  productType?: string;
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

