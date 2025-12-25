// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReopenTicketRequest extends $dara.Model {
  /**
   * @remarks
   * Reply content of rework order
   * 
   * This parameter is required.
   * 
   * @example
   * ecs backup fails
   */
  content?: string;
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
   * 1013872004421947
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      ticketId: 'TicketId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

