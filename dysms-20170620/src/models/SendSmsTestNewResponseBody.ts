// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSmsTestNewResponseBody extends $dara.Model {
  code?: string;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
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

