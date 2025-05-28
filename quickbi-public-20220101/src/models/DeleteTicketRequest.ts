// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the third-party embedded ticket, which is the `accessTicket` in the URL.
   * 
   * This parameter is required.
   * 
   * @example
   * 040e6f79d****7d283c7206c070
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

