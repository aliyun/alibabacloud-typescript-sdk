// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIdentityProviderRequest extends $dara.Model {
  /**
   * @example
   * identity-provider-okta
   */
  identityProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderName: 'IdentityProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

