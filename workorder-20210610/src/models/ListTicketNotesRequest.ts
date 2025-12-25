// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketNotesRequest extends $dara.Model {
  /**
   * @remarks
   * Work Order Number
   * 
   * This parameter is required.
   * 
   * @example
   * 0005PYGCW
   */
  ticketId?: string;
  /**
   * @remarks
   * UID
   * 
   * @example
   * 1936753548534516
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      ticketId: 'TicketId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketId: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

