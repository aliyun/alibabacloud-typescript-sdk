// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ThirdAppOidcSsoConfigEndpoints extends $dara.Model {
  authorizationEndpoint?: string;
  discoveryEndpoint?: string;
  guestAuthorizationEndpoint?: string;
  issuer?: string;
  jwksEndpoint?: string;
  logoutEndpoint?: string;
  revokeEndpoint?: string;
  tokenEndpoint?: string;
  userinfoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      discoveryEndpoint: 'DiscoveryEndpoint',
      guestAuthorizationEndpoint: 'GuestAuthorizationEndpoint',
      issuer: 'Issuer',
      jwksEndpoint: 'JwksEndpoint',
      logoutEndpoint: 'LogoutEndpoint',
      revokeEndpoint: 'RevokeEndpoint',
      tokenEndpoint: 'TokenEndpoint',
      userinfoEndpoint: 'UserinfoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      discoveryEndpoint: 'string',
      guestAuthorizationEndpoint: 'string',
      issuer: 'string',
      jwksEndpoint: 'string',
      logoutEndpoint: 'string',
      revokeEndpoint: 'string',
      tokenEndpoint: 'string',
      userinfoEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

