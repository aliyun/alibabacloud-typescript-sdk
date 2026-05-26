// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOAuth2CredentialProviderRequest extends $dara.Model {
  /**
   * @example
   * oauth2-provider-aliyun
   */
  OAuth2CredentialProviderName?: string;
  tokenVaultName?: string;
  static names(): { [key: string]: string } {
    return {
      OAuth2CredentialProviderName: 'OAuth2CredentialProviderName',
      tokenVaultName: 'TokenVaultName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OAuth2CredentialProviderName: 'string',
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

