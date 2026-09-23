// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveClientIdFromOIDCProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID to remove.
   * 
   * Format: letters, digits, and the special characters `.-_:/` are allowed. The value cannot start with the special characters `.-_:/`.
   * 
   * Length: up to 128 characters.
   * 
   * @example
   * 498469743454717****
   */
  clientId?: string;
  /**
   * @remarks
   * The name of an existing OIDC IdP that has the target `ClientId` attached. If you have not created or attached one, call `CreateOIDCProvider` (with `ClientIds` specified) or `AddClientIdToOIDCProvider` first.
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

