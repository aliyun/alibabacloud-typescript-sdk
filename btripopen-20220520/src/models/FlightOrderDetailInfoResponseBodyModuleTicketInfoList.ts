// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderDetailInfoResponseBodyModuleTicketInfoList extends $dara.Model {
  /**
   * @example
   * 0
   */
  openTicketStatus?: string;
  /**
   * @example
   * KF0528
   */
  pnrCode?: string;
  /**
   * @example
   * 444-000000000
   */
  ticketNo?: string;
  /**
   * @example
   * 1
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      openTicketStatus: 'open_ticket_status',
      pnrCode: 'pnr_code',
      ticketNo: 'ticket_no',
      ticketStatus: 'ticket_status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openTicketStatus: 'string',
      pnrCode: 'string',
      ticketNo: 'string',
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

