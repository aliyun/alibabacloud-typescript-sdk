// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OAuth2ProviderConfig } from "./Oauth2providerConfig";


export class CreateOAuth2CredentialProviderResponseBodyOAuth2CredentialProvider extends $dara.Model {
  /**
   * @example
   * https://agentidentitydata.cn-beijing.aliyuncs.com/oauth2/callback/d51171bc-0dae-3219-8e65-6b4cdafa3beb
   */
  callbackURL?: string;
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
  createTime?: string;
  /**
   * @example
   * acs:agentidentity:cn-beijing:123456:tokenvault/default/oauth2credentialprovider/oauth-provider-aliyun
   */
  credentialProviderArn?: string;
  /**
   * @example
   * AliyunOAuth2
   */
  credentialProviderVendor?: string;
  /**
   * @example
   * example provider
   */
  description?: string;
  /**
   * @example
   * oauth-provider-aliyun
   */
  OAuth2CredentialProviderName?: string;
  OAuth2ProviderConfig?: OAuth2ProviderConfig;
  /**
   * @example
   * 2025-12-18T06:19:17Z
   */
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
  /**
   * @example
   * 2A48EB1D-D645-5758-91AF-EDF8E36E257B
   */
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

