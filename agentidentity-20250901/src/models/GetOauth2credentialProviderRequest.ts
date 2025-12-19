// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOAuth2CredentialProviderRequest extends $dara.Model {
  /**
   * @example
   * oauth2-provider-aliyun
   */
  OAuth2CredentialProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      OAuth2CredentialProviderName: 'OAuth2CredentialProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OAuth2CredentialProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

