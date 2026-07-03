// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ticket for Simple Log Service.
   * 
   * @example
   * *******
   */
  logTicket?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 173326*******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logTicket: 'LogTicket',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logTicket: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

