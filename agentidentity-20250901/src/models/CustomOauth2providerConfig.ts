// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OAuth2Discovery } from "./Oauth2discovery";


export class CustomOAuth2ProviderConfig extends $dara.Model {
  clientId?: string;
  clientSecret?: string;
  OAuth2Discovery?: OAuth2Discovery;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      OAuth2Discovery: 'OAuth2Discovery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      OAuth2Discovery: OAuth2Discovery,
    };
  }

  validate() {
    if(this.OAuth2Discovery && typeof (this.OAuth2Discovery as any).validate === 'function') {
      (this.OAuth2Discovery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

