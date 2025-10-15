// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFederatedCredentialProviderResponseBody extends $dara.Model {
  /**
   * @example
   * fcp_sada123XXXX
   */
  federatedCredentialProviderId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      federatedCredentialProviderId: 'FederatedCredentialProviderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federatedCredentialProviderId: 'string',
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

