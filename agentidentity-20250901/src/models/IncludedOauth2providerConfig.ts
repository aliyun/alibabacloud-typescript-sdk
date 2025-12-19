// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncludedOAuth2ProviderConfig extends $dara.Model {
  authorizationEndpoint?: string;
  clientId?: string;
  clientSecret?: string;
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientId: 'string',
      clientSecret: 'string',
      tokenEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

