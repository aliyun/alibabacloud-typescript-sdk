// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialProviderResponseBody extends $dara.Model {
  /**
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialProviderId: 'CredentialProviderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialProviderId: 'string',
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

