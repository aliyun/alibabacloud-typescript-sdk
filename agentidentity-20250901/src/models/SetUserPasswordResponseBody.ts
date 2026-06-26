// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetUserPasswordResponseBody extends $dara.Model {
  randomPassword?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      randomPassword: 'RandomPassword',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      randomPassword: 'string',
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

