// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * order number
   * 
   * @example
   * 496***2617111
   */
  orderNum?: number;
  /**
   * @remarks
   * transaction serial number
   * 
   * @example
   * hkduendkd-2023-dj0
   */
  transactionNo?: string;
  static names(): { [key: string]: string } {
    return {
      orderNum: 'order_num',
      transactionNo: 'transaction_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderNum: 'number',
      transactionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

