// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseTicketRequest extends $dara.Model {
  /**
   * @remarks
   * Work Order Number
   * 
   * This parameter is required.
   * 
   * @example
   * G2BKRWG
   */
  ticketId?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account. You can view your UID in the profile picture in the upper-right corner of the DMS console.
   * 
   * @example
   * 1139477549527134
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

