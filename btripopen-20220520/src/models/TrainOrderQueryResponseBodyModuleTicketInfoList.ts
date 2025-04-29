// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryResponseBodyModuleTicketInfoList extends $dara.Model {
  /**
   * @example
   * false
   */
  changed?: boolean;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkInTime?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  checkOutTime?: string;
  /**
   * @example
   * 01
   */
  coachNo?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  endTime?: string;
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
   * m
   */
  outTicketStatus?: string;
  /**
   * @example
   * 1
   */
  payType?: number;
  /**
   * @example
   * A001
   */
  seatNo?: string;
  seatTypeName?: string;
  /**
   * @example
   * 10
   */
  serviceFee?: number;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  startTime?: string;
  /**
   * @example
   * CS987JKDF
   */
  ticketNo?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 1
   */
  ticketStatus?: number;
  trainTypeName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      changed: 'changed',
      checkInTime: 'check_in_time',
      checkOutTime: 'check_out_time',
      coachNo: 'coach_no',
      endTime: 'end_time',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      outTicketStatus: 'out_ticket_status',
      payType: 'pay_type',
      seatNo: 'seat_no',
      seatTypeName: 'seat_type_name',
      serviceFee: 'service_fee',
      startTime: 'start_time',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      trainTypeName: 'train_type_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changed: 'boolean',
      checkInTime: 'string',
      checkOutTime: 'string',
      coachNo: 'string',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      outTicketStatus: 'string',
      payType: 'number',
      seatNo: 'string',
      seatTypeName: 'string',
      serviceFee: 'number',
      startTime: 'string',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'number',
      trainTypeName: 'string',
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

