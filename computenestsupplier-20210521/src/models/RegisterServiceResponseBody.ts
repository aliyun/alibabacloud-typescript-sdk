// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The registration ID.
   * 
   * @example
   * sr-72dd5071e90c40xxxxxx
   */
  registrationId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A361BA9E-2713-52C8-AFFC-C26E5180456E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrationId: 'string',
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

