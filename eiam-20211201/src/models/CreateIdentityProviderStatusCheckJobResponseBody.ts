// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIdentityProviderStatusCheckJobResponseBody extends $dara.Model {
  /**
   * @example
   * async_000xxxx
   */
  identityProviderStatusCheckJobId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderStatusCheckJobId: 'IdentityProviderStatusCheckJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderStatusCheckJobId: 'string',
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

