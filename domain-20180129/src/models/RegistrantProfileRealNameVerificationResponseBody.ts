// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistrantProfileRealNameVerificationResponseBody extends $dara.Model {
  /**
   * @example
   * 51D584A2-0CCD-4336-AD7D-1AD4C67B5545
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

