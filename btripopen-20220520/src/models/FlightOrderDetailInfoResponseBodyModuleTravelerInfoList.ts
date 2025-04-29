// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderDetailInfoResponseBodyModuleTravelerInfoList extends $dara.Model {
  /**
   * @example
   * 2000-01-01
   */
  birthDate?: string;
  /**
   * @example
   * 1234
   */
  certNo?: string;
  /**
   * @example
   * 0
   */
  certType?: string;
  /**
   * @example
   * 0
   */
  openTicketStatus?: number;
  passengerName?: string;
  /**
   * @example
   * 0
   */
  passengerType?: string;
  /**
   * @example
   * 12345678909
   */
  phone?: string;
  /**
   * @example
   * 444-000000000
   */
  ticketNo?: string;
  /**
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      birthDate: 'birth_date',
      certNo: 'cert_no',
      certType: 'cert_type',
      openTicketStatus: 'open_ticket_status',
      passengerName: 'passenger_name',
      passengerType: 'passenger_type',
      phone: 'phone',
      ticketNo: 'ticket_no',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthDate: 'string',
      certNo: 'string',
      certType: 'string',
      openTicketStatus: 'number',
      passengerName: 'string',
      passengerType: 'string',
      phone: 'string',
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

