// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCancelOrderResponseBodyModule extends $dara.Model {
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  cancelTime?: string;
  failCode?: string;
  failReason?: string;
  /**
   * @example
   * 0
   */
  orderStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cancelTime: 'cancel_time',
      failCode: 'fail_code',
      failReason: 'fail_reason',
      orderStatus: 'order_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelTime: 'string',
      failCode: 'string',
      failReason: 'string',
      orderStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

