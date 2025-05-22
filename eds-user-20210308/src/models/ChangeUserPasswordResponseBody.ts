// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeUserPasswordResponseBody extends $dara.Model {
  /**
   * @example
   * AA8D67CB-345D-5CDA-986E-FFAC7D0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

