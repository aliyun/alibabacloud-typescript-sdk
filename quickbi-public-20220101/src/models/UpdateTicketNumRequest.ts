// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTicketNumRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the third-party embedded ticket, that is, the accessTicket value in the URL.
   * 
   * This parameter is required.
   * 
   * @example
   * 040e6f79d33444838***83c7206c070
   */
  ticket?: string;
  /**
   * @remarks
   * The number of bills.
   * 
   * *   Valid values: 1 to 99998. Recommended value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ticketNum?: number;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
      ticketNum: 'TicketNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
      ticketNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

