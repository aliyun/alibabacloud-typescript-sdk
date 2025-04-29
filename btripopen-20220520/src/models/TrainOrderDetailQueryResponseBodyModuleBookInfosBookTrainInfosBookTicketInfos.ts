// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderDetailQueryResponseBodyModuleBookInfosBookTrainInfosBookTicketInfos extends $dara.Model {
  /**
   * @example
   * 04
   */
  coachNo?: string;
  /**
   * @example
   * 1111
   */
  failCode?: string;
  failReason?: string;
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * 10000
   */
  realTicketPrice?: number;
  /**
   * @example
   * 1A
   */
  seatNo?: string;
  /**
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @example
   * null
   */
  ticketEntrance?: string;
  /**
   * @example
   * 100
   */
  ticketPrice?: number;
  /**
   * @example
   * 11
   */
  ticketStatus?: number;
  /**
   * @example
   * 0
   */
  ticketType?: string;
  static names(): { [key: string]: string } {
    return {
      coachNo: 'coach_no',
      failCode: 'fail_code',
      failReason: 'fail_reason',
      passengerId: 'passenger_id',
      realTicketPrice: 'real_ticket_price',
      seatNo: 'seat_no',
      seatType: 'seat_type',
      ticketEntrance: 'ticket_entrance',
      ticketPrice: 'ticket_price',
      ticketStatus: 'ticket_status',
      ticketType: 'ticket_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coachNo: 'string',
      failCode: 'string',
      failReason: 'string',
      passengerId: 'string',
      realTicketPrice: 'number',
      seatNo: 'string',
      seatType: 'string',
      ticketEntrance: 'string',
      ticketPrice: 'number',
      ticketStatus: 'number',
      ticketType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

