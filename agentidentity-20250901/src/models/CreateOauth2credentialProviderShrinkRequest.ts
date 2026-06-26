// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOAuth2CredentialProviderShrinkRequest extends $dara.Model {
  callbackURL?: string;
  credentialProviderVendor?: string;
  description?: string;
  OAuth2CredentialProviderName?: string;
  OAuth2ProviderConfigShrink?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      callbackURL: 'CallbackURL',
      credentialProviderVendor: 'CredentialProviderVendor',
      description: 'Description',
      OAuth2CredentialProviderName: 'OAuth2CredentialProviderName',
      OAuth2ProviderConfigShrink: 'OAuth2ProviderConfig',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackURL: 'string',
      credentialProviderVendor: 'string',
      description: 'string',
      OAuth2CredentialProviderName: 'string',
      OAuth2ProviderConfigShrink: 'string',
      tokenVaultName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

