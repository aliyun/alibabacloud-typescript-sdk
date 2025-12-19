// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OAuth2ProviderConfig } from "./Oauth2providerConfig";


export class CreateOAuth2CredentialProviderRequest extends $dara.Model {
  /**
   * @example
   * https://agentidentitydata.cn-beijing.aliyuncs.com/oauth2/callback/d51171bc-0dae-3219-8e65-6b4cdafa3beb
   */
  callbackURL?: string;
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
  static names(): { [key: string]: string } {
    return {
      callbackURL: 'CallbackURL',
      credentialProviderVendor: 'CredentialProviderVendor',
      description: 'Description',
      OAuth2CredentialProviderName: 'OAuth2CredentialProviderName',
      OAuth2ProviderConfig: 'OAuth2ProviderConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackURL: 'string',
      credentialProviderVendor: 'string',
      description: 'string',
      OAuth2CredentialProviderName: 'string',
      OAuth2ProviderConfig: OAuth2ProviderConfig,
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

