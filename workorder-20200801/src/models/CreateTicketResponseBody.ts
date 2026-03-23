// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicketResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  code?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

