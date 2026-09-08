// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OAuth2ProviderConfig } from "./Oauth2providerConfig";


export class GetOAuth2CredentialProviderResponseBodyOAuth2CredentialProvider extends $dara.Model {
  callbackURL?: string;
  createTime?: string;
  credentialProviderArn?: string;
  credentialProviderVendor?: string;
  description?: string;
  /**
   * @example
   * idaas_xxxx
   */
  IDaaSInstanceId?: string;
  OAuth2CredentialProviderName?: string;
  OAuth2ProviderConfig?: OAuth2ProviderConfig;
  OAuthType?: string;
  /**
   * @example
   * app_xxxxx
   */
  outboundApplicationId?: string;
  /**
   * @example
   * agent-xxxx
   */
  outboundAudience?: string;
  /**
   * @example
   * client_xxxx
   */
  outboundClientId?: string;
  sourcePlatform?: string;
  tokenVaultName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      callbackURL: 'CallbackURL',
      createTime: 'CreateTime',
      credentialProviderArn: 'CredentialProviderArn',
      credentialProviderVendor: 'CredentialProviderVendor',
      description: 'Description',
      IDaaSInstanceId: 'IDaaSInstanceId',
      OAuth2CredentialProviderName: 'OAuth2CredentialProviderName',
      OAuth2ProviderConfig: 'OAuth2ProviderConfig',
      OAuthType: 'OAuthType',
      outboundApplicationId: 'OutboundApplicationId',
      outboundAudience: 'OutboundAudience',
      outboundClientId: 'OutboundClientId',
      sourcePlatform: 'SourcePlatform',
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
      IDaaSInstanceId: 'string',
      OAuth2CredentialProviderName: 'string',
      OAuth2ProviderConfig: OAuth2ProviderConfig,
      OAuthType: 'string',
      outboundApplicationId: 'string',
      outboundAudience: 'string',
      outboundClientId: 'string',
      sourcePlatform: 'string',
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

export class GetOAuth2CredentialProviderResponseBody extends $dara.Model {
  OAuth2CredentialProvider?: GetOAuth2CredentialProviderResponseBodyOAuth2CredentialProvider;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OAuth2CredentialProvider: 'OAuth2CredentialProvider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OAuth2CredentialProvider: GetOAuth2CredentialProviderResponseBodyOAuth2CredentialProvider,
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

