// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthAndRefreshLoginTicketResponseBodyData extends $dara.Model {
  newLoginTicket?: string;
  static names(): { [key: string]: string } {
    return {
      newLoginTicket: 'NewLoginTicket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newLoginTicket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthAndRefreshLoginTicketResponseBody extends $dara.Model {
  code?: string;
  data?: AuthAndRefreshLoginTicketResponseBodyData;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AuthAndRefreshLoginTicketResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

