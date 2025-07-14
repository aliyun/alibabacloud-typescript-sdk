// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddClientIdToOIDCProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID that you want to add.
   * 
   * The client ID can contain letters, digits, and special characters and cannot start with the special characters. The special characters are `periods, (.), hyphens (-), underscores (_), colons (:), and forward slashes (/)`.``
   * 
   * The client ID can be up to 128 characters in length.
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

