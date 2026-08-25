// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQwenConferenceSgTicketPopRequest extends $dara.Model {
  ticketToken?: string;
  static names(): { [key: string]: string } {
    return {
      ticketToken: 'TicketToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticketToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

