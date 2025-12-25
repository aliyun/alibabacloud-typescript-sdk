// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketRequest extends $dara.Model {
  /**
   * @remarks
   * Work Order Number
   * 
   * This parameter is required.
   * 
   * @example
   * 001571BTXC
   */
  ticketId?: string;
  /**
   * @remarks
   * UID
   * 
   * @example
   * 1604499804113750
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

