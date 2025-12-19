// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOAuth2CredentialProviderResponseBody extends $dara.Model {
  /**
   * @example
   * D9A9DC39-61BB-53FD-9ADC-B14884F21038
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

