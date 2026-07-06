// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddClientIdToOIDCProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The specified client ID.
   * 
   * Format: letters, digits, and the special characters `.-_:/` are allowed. The value cannot start with the special characters `.-_:/`.
   * 
   * Length: up to 128 characters.
   * 
   * @example
   * 598469743454717****
   */
  clientId?: string;
  /**
   * @remarks
   * The name of the OIDC IdP.
   * 
   * @example
   * TestOIDCProvider
   */
  OIDCProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      OIDCProviderName: 'OIDCProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      OIDCProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

