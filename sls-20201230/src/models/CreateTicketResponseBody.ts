// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ticket that is used for logon-free access.
   * 
   * @example
   * eyJ***************.eyJ******************.KUT****************
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'ticket',
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

