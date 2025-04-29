// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryResponseBodyModuleRefundTicketInfoList extends $dara.Model {
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtModify?: string;
  /**
   * @example
   * 10
   */
  refundFee?: number;
  /**
   * @example
   * 10
   */
  refundServiceFee?: number;
  /**
   * @example
   * CS987JKDF
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      refundFee: 'refund_fee',
      refundServiceFee: 'refund_service_fee',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModify: 'string',
      refundFee: 'number',
      refundServiceFee: 'number',
      ticketNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

