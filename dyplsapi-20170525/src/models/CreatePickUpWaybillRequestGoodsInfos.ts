// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillRequestGoodsInfos extends $dara.Model {
  /**
   * @remarks
   * The item name.
   * 
   * @example
   * zhang
   */
  name?: string;
  /**
   * @remarks
   * The item quantity.
   * 
   * @example
   * 1
   */
  quantity?: string;
  /**
   * @remarks
   * The item weight. Unit: gram.
   * 
   * @example
   * 1000
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      quantity: 'Quantity',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      quantity: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

