// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketNotesRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * G2BKRWG
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
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

