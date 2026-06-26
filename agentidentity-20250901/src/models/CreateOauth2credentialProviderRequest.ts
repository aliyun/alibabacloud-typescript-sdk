// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OAuth2ProviderConfig } from "./Oauth2providerConfig";


export class CreateOAuth2CredentialProviderRequest extends $dara.Model {
  callbackURL?: string;
  credentialProviderVendor?: string;
  description?: string;
  OAuth2CredentialProviderName?: string;
  OAuth2ProviderConfig?: OAuth2ProviderConfig;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      callbackURL: 'CallbackURL',
      credentialProviderVendor: 'CredentialProviderVendor',
      description: 'Description',
      OAuth2CredentialProviderName: 'OAuth2CredentialProviderName',
      OAuth2ProviderConfig: 'OAuth2ProviderConfig',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackURL: 'string',
      credentialProviderVendor: 'string',
      description: 'string',
      OAuth2CredentialProviderName: 'string',
      OAuth2ProviderConfig: OAuth2ProviderConfig,
      tokenVaultName: 'string',
    };
  }

  validate() {
    if(this.OAuth2ProviderConfig && typeof (this.OAuth2ProviderConfig as any).validate === 'function') {
      (this.OAuth2ProviderConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

