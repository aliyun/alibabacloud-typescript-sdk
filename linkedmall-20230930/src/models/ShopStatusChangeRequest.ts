// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShopStatusChangeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  shopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WORKING
   */
  shopStatus?: string;
  static names(): { [key: string]: string } {
    return {
      shopId: 'shopId',
      shopStatus: 'shopStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shopId: 'string',
      shopStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

