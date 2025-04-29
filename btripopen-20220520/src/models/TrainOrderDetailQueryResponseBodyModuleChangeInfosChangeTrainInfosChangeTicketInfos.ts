// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderDetailQueryResponseBodyModuleChangeInfosChangeTrainInfosChangeTicketInfos extends $dara.Model {
  /**
   * @example
   * 0
   */
  changeCost?: number;
  /**
   * @example
   * 0
   */
  changeDiff?: number;
  /**
   * @example
   * 0
   */
  changeGapHandingFee?: number;
  /**
   * @example
   * 0
   */
  changeMinTicketAmountHandingFee?: number;
  /**
   * @example
   * 04
   */
  coachNo?: string;
  /**
   * @example
   * 4000
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
   * 1234
   */
  ticketPrice?: number;
  /**
   * @example
   * 11
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      changeCost: 'change_cost',
      changeDiff: 'change_diff',
      changeGapHandingFee: 'change_gap_handing_fee',
      changeMinTicketAmountHandingFee: 'change_min_ticket_amount_handing_fee',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeCost: 'number',
      changeDiff: 'number',
      changeGapHandingFee: 'number',
      changeMinTicketAmountHandingFee: 'number',
      coachNo: 'string',
      failCode: 'string',
      failReason: 'string',
      passengerId: 'string',
      realTicketPrice: 'number',
      seatNo: 'string',
      seatType: 'string',
      ticketEntrance: 'string',
      ticketPrice: 'number',
      ticketStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

