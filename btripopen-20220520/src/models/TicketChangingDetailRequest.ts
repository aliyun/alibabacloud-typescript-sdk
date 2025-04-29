// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingDetailRequest extends $dara.Model {
  /**
   * @example
   * dis123
   */
  disOrderId?: string;
  /**
   * @example
   * chang123
   */
  disSubOrderId?: string;
  static names(): { [key: string]: string } {
    return {
      disOrderId: 'dis_order_id',
      disSubOrderId: 'dis_sub_order_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disOrderId: 'string',
      disSubOrderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

