// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundOrderResult extends $dara.Model {
  /**
   * @remarks
   * Dispute ID
   * 
   * @example
   * 6693****4352
   */
  disputeId?: string;
  /**
   * @remarks
   * Status of the reverse operation  
   * 1 – Return pending  
   * 2 – Awaiting buyer return  
   * 3 – Awaiting merchant receipt  
   * 4 – Refund closed  
   * 5 – Refund succeeded  
   * 6 – Refund denied  
   * 17 – Canceling refund
   * 
   * @example
   * 1
   */
  disputeStatus?: number;
  /**
   * @remarks
   * Sub-distribution order ID for which the reverse operation was initiated
   * 
   * @example
   * 6692****5458
   */
  orderLineId?: string;
  /**
   * @remarks
   * API request ID
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
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

