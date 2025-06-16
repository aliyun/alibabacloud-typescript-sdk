// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrderDetailRequest extends $dara.Model {
  /**
   * @remarks
   * order number created by book
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  /**
   * @remarks
   * external order number(customized by buyer when book)
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      outOrderNum: 'out_order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      outOrderNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

