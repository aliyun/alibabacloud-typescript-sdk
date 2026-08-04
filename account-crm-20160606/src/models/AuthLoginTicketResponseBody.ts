// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthLoginTicketResponseBodyLoginTicketDto extends $dara.Model {
  loginTicket?: string;
  static names(): { [key: string]: string } {
    return {
      loginTicket: 'LoginTicket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginTicket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthLoginTicketResponseBody extends $dara.Model {
  code?: string;
  loginTicketDto?: AuthLoginTicketResponseBodyLoginTicketDto;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      loginTicketDto: 'LoginTicketDto',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      loginTicketDto: AuthLoginTicketResponseBodyLoginTicketDto,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.loginTicketDto && typeof (this.loginTicketDto as any).validate === 'function') {
      (this.loginTicketDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

