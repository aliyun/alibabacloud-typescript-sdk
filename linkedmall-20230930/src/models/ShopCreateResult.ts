// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShopCreateResult extends $dara.Model {
  /**
   * @example
   * 123
   */
  shopId?: string;
  /**
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

