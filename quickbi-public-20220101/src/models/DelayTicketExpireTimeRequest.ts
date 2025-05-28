// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelayTicketExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The time to postpone.
   * 
   * *   Unit: minutes. Valid values: 0 to 240. Unit: minutes. Valid values: 4 hours.
   * *   Expired bills cannot be extended.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @remarks
   * The value of the third-party embedded ticket, that is, the accessTicket value in the URL.
   * 
   * This parameter is required.
   * 
   * @example
   * 040e6f79d33444838e*****c7206c070
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
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

