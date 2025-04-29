// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryV2ResponseBodyModuleRefundTicketInfoList extends $dara.Model {
  gmtCreate?: string;
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
  /**
   * @example
   * 1231231
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      refundFee: 'refund_fee',
      refundServiceFee: 'refund_service_fee',
      ticketNo: 'ticket_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModify: 'string',
      refundFee: 'number',
      refundServiceFee: 'number',
      ticketNo: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

