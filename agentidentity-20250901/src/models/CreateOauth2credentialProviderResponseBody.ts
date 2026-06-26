// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OAuth2ProviderConfig } from "./Oauth2providerConfig";


export class CreateOAuth2CredentialProviderResponseBodyOAuth2CredentialProvider extends $dara.Model {
  callbackURL?: string;
  createTime?: string;
  credentialProviderArn?: string;
  credentialProviderVendor?: string;
  description?: string;
  OAuth2CredentialProviderName?: string;
  OAuth2ProviderConfig?: OAuth2ProviderConfig;
  tokenVaultName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      callbackURL: 'CallbackURL',
      createTime: 'CreateTime',
      credentialProviderArn: 'CredentialProviderArn',
      credentialProviderVendor: 'CredentialProviderVendor',
      description: 'Description',
      OAuth2CredentialProviderName: 'OAuth2CredentialProviderName',
      OAuth2ProviderConfig: 'OAuth2ProviderConfig',
      tokenVaultName: 'TokenVaultName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackURL: 'string',
      createTime: 'string',
      credentialProviderArn: 'string',
      credentialProviderVendor: 'string',
      description: 'string',
      OAuth2CredentialProviderName: 'string',
      OAuth2ProviderConfig: OAuth2ProviderConfig,
      tokenVaultName: 'string',
      updateTime: 'string',
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

export class CreateOAuth2CredentialProviderResponseBody extends $dara.Model {
  OAuth2CredentialProvider?: CreateOAuth2CredentialProviderResponseBodyOAuth2CredentialProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OAuth2CredentialProvider: 'OAuth2CredentialProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OAuth2CredentialProvider: CreateOAuth2CredentialProviderResponseBodyOAuth2CredentialProvider,
      requestId: 'string',
    };
  }

  validate() {
    if(this.OAuth2CredentialProvider && typeof (this.OAuth2CredentialProvider as any).validate === 'function') {
      (this.OAuth2CredentialProvider as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

