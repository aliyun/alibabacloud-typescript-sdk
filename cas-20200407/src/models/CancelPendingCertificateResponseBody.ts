// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPendingCertificateResponseBody extends $dara.Model {
  /**
   * @example
   * 12345678-1234-1234-1234-123456789ABC
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

