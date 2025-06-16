// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BookResponseBodyErrorDataOrderList extends $dara.Model {
  /**
   * @remarks
   * order number
   * 
   * @example
   * 4966***617111
   */
  orderNum?: number;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

