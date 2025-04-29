// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoSPassengerInfo } from "./TrainApplyChangeRequestChangeTrainInfoSchangeTicketInfoSpassengerInfo";


export class TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoS extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  passengerInfo?: TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoSPassengerInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 14
   */
  seatType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  ticketPrice?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ticketType?: string;
  static names(): { [key: string]: string } {
    return {
      passengerInfo: 'passenger_info',
      seatType: 'seat_type',
      ticketPrice: 'ticket_price',
      ticketType: 'ticket_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerInfo: TrainApplyChangeRequestChangeTrainInfoSChangeTicketInfoSPassengerInfo,
      seatType: 'string',
      ticketPrice: 'string',
      ticketType: 'string',
    };
  }

  validate() {
    if(this.passengerInfo && typeof (this.passengerInfo as any).validate === 'function') {
      (this.passengerInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

