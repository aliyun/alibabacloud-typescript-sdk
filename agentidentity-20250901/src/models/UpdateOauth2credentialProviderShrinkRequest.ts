// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOAuth2CredentialProviderShrinkRequest extends $dara.Model {
  /**
   * @example
   * https://agentidentitydata.cn-beijing.aliyuncs.com/oauth2/callback/d51171bc-0dae-3219-8e65-6b4cdafa3beb
   */
  callbackURL?: string;
  /**
   * @remarks
   * AliyunOAuth2
   * 
   * @example
   * AliyunOAuth2
   */
  credentialProviderVendor?: string;
  /**
   * @example
   * new example provider
   */
  description?: string;
  /**
   * @example
   * oauth2-provider-aliyun
   */
  OAuth2CredentialProviderName?: string;
  OAuth2ProviderConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      callbackURL: 'CallbackURL',
      credentialProviderVendor: 'CredentialProviderVendor',
      description: 'Description',
      OAuth2CredentialProviderName: 'OAuth2CredentialProviderName',
      OAuth2ProviderConfigShrink: 'OAuth2ProviderConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackURL: 'string',
      credentialProviderVendor: 'string',
      description: 'string',
      OAuth2CredentialProviderName: 'string',
      OAuth2ProviderConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

