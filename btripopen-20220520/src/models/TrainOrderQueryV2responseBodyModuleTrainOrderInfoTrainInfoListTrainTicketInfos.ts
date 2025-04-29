// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryV2ResponseBodyModuleTrainOrderInfoTrainInfoListTrainTicketInfos extends $dara.Model {
  /**
   * @example
   * false
   */
  changed?: boolean;
  checkInTime?: string;
  checkOutTime?: string;
  /**
   * @example
   * 01
   */
  coachNo?: string;
  endTime?: string;
  gmtCreate?: string;
  gmtModify?: string;
  /**
   * @example
   * 1
   */
  outTicketStatus?: string;
  /**
   * @example
   * 2
   */
  payType?: number;
  /**
   * @example
   * 02A
   */
  seatNo?: string;
  seatTypeName?: string;
  /**
   * @example
   * 0
   */
  segmentIndex?: number;
  /**
   * @example
   * 100
   */
  serviceFee?: number;
  shortTicketNo?: string;
  startTime?: string;
  ticketEntrance?: string;
  /**
   * @example
   * ew123121
   */
  ticketNo?: string;
  /**
   * @example
   * 400
   */
  ticketPrice?: number;
  /**
   * @example
   * 1
   */
  ticketStatus?: number;
  trainTypeName?: string;
  /**
   * @example
   * 0
   */
  useTicket?: string;
  /**
   * @example
   * 231212
   */
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
      segmentIndex: 'segment_index',
      serviceFee: 'service_fee',
      shortTicketNo: 'short_ticket_no',
      startTime: 'start_time',
      ticketEntrance: 'ticket_entrance',
      ticketNo: 'ticket_no',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      trainTypeName: 'train_type_name',
      useTicket: 'use_ticket',
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
      segmentIndex: 'number',
      serviceFee: 'number',
      shortTicketNo: 'string',
      startTime: 'string',
      ticketEntrance: 'string',
      ticketNo: 'string',
      ticketPrice: 'number',
      ticketStatus: 'number',
      trainTypeName: 'string',
      useTicket: 'string',
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

