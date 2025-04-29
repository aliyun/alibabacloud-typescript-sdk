// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingCancelResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 0000-00-00 00:00:00
   */
  cancelTime?: string;
  /**
   * @example
   * mid1243
   */
  disSubOrderId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cancelTime: 'cancel_time',
      disSubOrderId: 'dis_sub_order_id',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelTime: 'string',
      disSubOrderId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

