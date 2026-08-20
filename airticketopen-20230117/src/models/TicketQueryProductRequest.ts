// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketQueryProductRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  accountNo?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'number',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

