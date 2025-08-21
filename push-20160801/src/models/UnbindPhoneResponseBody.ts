// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindPhoneResponseBody extends $dara.Model {
  /**
   * @example
   * 0D1126F0-F8FF-513D-BAFA-F140447BDED4
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

