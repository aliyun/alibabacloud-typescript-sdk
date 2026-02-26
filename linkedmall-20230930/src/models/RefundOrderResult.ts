// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundOrderResult extends $dara.Model {
  /**
   * @example
   * 6693****4352
   */
  disputeId?: string;
  /**
   * @example
   * 1
   */
  disputeStatus?: number;
  /**
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      disputeId: 'disputeId',
      disputeStatus: 'disputeStatus',
      orderLineId: 'orderLineId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disputeId: 'string',
      disputeStatus: 'number',
      orderLineId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

