// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappOpenStatusResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  openStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      openStatus: 'OpenStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      openStatus: 'boolean',
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

