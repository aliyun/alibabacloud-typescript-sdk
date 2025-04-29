// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCreateRequestBookTrainInfosBookTicketInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  passengerId?: string;
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
  ticketPrice?: number;
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
      passengerId: 'passenger_id',
      seatType: 'seat_type',
      ticketPrice: 'ticket_price',
      ticketType: 'ticket_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      seatType: 'string',
      ticketPrice: 'number',
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

