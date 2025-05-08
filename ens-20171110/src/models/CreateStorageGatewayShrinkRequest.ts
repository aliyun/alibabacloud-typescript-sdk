// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStorageGatewayShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The array of orders.
   * 
   * This parameter is required.
   */
  orderDetailsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      orderDetailsShrink: 'OrderDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderDetailsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

