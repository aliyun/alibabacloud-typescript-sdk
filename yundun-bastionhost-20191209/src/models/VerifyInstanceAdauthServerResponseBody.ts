// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyInstanceADAuthServerResponseBody extends $dara.Model {
  /**
   * @example
   * 8F1085E3-F048-5F34-B650-F145216E4AA5
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

