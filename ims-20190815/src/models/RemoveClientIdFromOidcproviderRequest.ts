// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveClientIdFromOIDCProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The specified client ID.
   * 
   * Format: The client ID can contain letters, digits, and the following special characters: `.-_:/`. It cannot start with a special character.
   * 
   * Length: The client ID can be up to 128 characters in length.
   * 
   * The `ClientId` must be bound to the OIDC IdP specified by `OIDCProviderName`. If it is not bound, you can first call `CreateOIDCProvider` by setting `ClientIds` or call `AddClientIdToOIDCProvider` to bind it.
   * 
   * @example
   * 498469743454717****
   */
  clientId?: string;
  /**
   * @remarks
   * The name of the OIDC IdP that exists and is bound to the target `ClientId`. If the OIDC IdP has not been created or the client ID has not been bound, you can first call `CreateOIDCProvider` by setting `ClientIds` or call `AddClientIdToOIDCProvider`.
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

