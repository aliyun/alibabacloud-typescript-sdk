// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

