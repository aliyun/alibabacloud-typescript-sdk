// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveRegistrantProfileRealNameVerificationResponseBody extends $dara.Model {
  /**
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @example
   * 4D73432C-7600-****-ACBB-C3B5CA145D32
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registrantProfileId: 'RegistrantProfileId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfileId: 'number',
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

